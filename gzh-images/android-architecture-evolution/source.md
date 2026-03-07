# Android 架构 15 年：7 个阶段的完整演进之路

从 2010 年至今，Android 架构的迭代始终围绕"解耦、可维护、可测试"的核心目标，一步步从"代码堆砌"走向"规范化设计"。本文将通过 7 个阶段梳理这段进化史。

## TLDR 概览

| 时间范围 | 核心技术/架构 | 核心特点 | 适用场景 |
|---------|-------------|---------|---------|
| 2010-2013 | 无架构，裸写 Activity/Fragment | 开发快、新手易上手；代码臃肿耦合、不可测试、维护难 | 超小型 Demo、一次性功能验证 |
| 2013-2016 | MVP + 手动依赖管理 | 关注点分离、Activity 瘦身、Presenter 可测；易内存泄漏、回调嵌套 | 中小型 App、基础分层需求 |
| 2014-2017 | Clean Architecture + Dagger | 业务与框架解耦、复用性强；分层复杂、开发成本高 | 中大型 App、长期可维护性项目 |
| 2016-2019 | MVVM + AAC + Repository | 生命周期感知、响应式绑定、数据统一；DataBinding 可读性争议 | 绝大多数中小型 App |
| 2017-2020 | MVVM + RxJava + 单向数据流萌芽 | 异步逻辑简洁、数据流可控；学习成本高、代码易晦涩 | 中大型 App、复杂异步场景 |
| 2019-2022 | MVVM + Coroutines + Flow | 异步代码简洁、背压友好、状态可控；需掌握 Kotlin 协程 | 主流中小到中大型 App |
| 2020-2025 | MVI + Jetpack Compose + 状态机 | 状态可预测、声明式 UI 高效、测试友好；学习门槛高 | 大型复杂 App、极致可维护性需求 |

## Phase 1：前架构时代（2010-2013）

这是 Android 开发的"蛮荒期"——没有任何架构概念，所有逻辑都塞进 Activity/Fragment：网络请求用 AsyncTask 写在页面里，数据解析和 UI 更新混在一起，甚至业务判断也直接嵌套在点击事件中。

当时设备性能有限，"能跑起来"就是唯一标准，没人在意代码结构。结果是 Activity 动辄上千行，成了"万能类"：生命周期 Bug 频发，改一行代码要翻半小时，团队协作时合并冲突比"拼拼图"还乱，而且几乎无法做单元测试，只能靠手动点击验证功能。

这段经历让开发者明白：不做关注点分离，早晚会被复杂度淹没。

## Phase 2：MVP 时代（2013-2016）

为了拯救臃肿的 Activity，MVP（Model-View-Presenter）成了首个普及的架构模式：

- **View 层**：由 Activity/Fragment 承担，只负责 UI 渲染和转发用户事件
- **Presenter**：作为中间层，接收 View 的请求，调用 Model 处理业务逻辑，再通知 View 更新
- **Model**：封装数据操作（网络、数据库）

这种分层让 Activity 终于"瘦身"，Presenter 也能独立写单元测试，但缺点也很明显：页面复杂时 Presenter 会变得臃肿，回调嵌套成"金字塔"，而且 Presenter 持有 View 引用，生命周期管理不当就会内存泄漏。

不过，这是 Android 圈第一次大规模实践"关注点分离"，为后续架构打下了基础。

```kotlin
interface LoginView {
    fun showLoading()
    fun showError(msg: String)
    fun showSuccess(user: User)
}

class LoginPresenter(
    private val authRepo: AuthRepository,
    private val view: LoginView
) {
    fun onLoginClick(email: String, pass: String) {
        view.showLoading()
        authRepo.login(email, pass,
            onSuccess = { view.showSuccess(it) },
            onError = { view.showError(it.message ?: "Unknown error") }
        )
    }
}
```

## Phase 3：Clean Architecture 与依赖注入（2014-2017）

MVP 解决了"页面臃肿"，但业务逻辑的耦合依然严重，于是 Clean Architecture（分层架构）和依赖注入（Dagger）来了。

Clean Architecture 把代码分成多层：外层是 UI 和框架相关的代码，内层是独立于框架的核心业务逻辑（用例、实体），依赖只能从外层指向内层，确保核心逻辑不被框架绑定。

同时，Dagger 开始普及，替代了手动创建对象的繁琐，让 Presenter、Model 的依赖关系更清晰。

这一阶段，开发者终于能做到"业务逻辑独立于 Android 框架"，代码的可复用性和可测试性大幅提升，但也带来了新的复杂度：分层太多导致开发成本变高，小型项目用起来反而"小题大做"。

Clean Architecture 首次引入 Domain 层，并通过用例（UseCase）实现相关逻辑。

```kotlin
// Domain layer (pure Kotlin)
data class User(val id: String, val email: String)

interface AuthRepository {
    fun login(email: String, password: String): Single<User>
}

class LoginUseCase(private val repo: AuthRepository) {
    fun execute(email: String, pass: String) = repo.login(email, pass)
}
```

同时，"仓库模式（Repository）"开始普及，统一封装网络和本地数据的访问逻辑，让 Domain 层不用关心数据来源。

```kotlin
// Data Layer — Implementation Details Live Here
class AuthRepositoryImpl(private val api: AuthApi) : AuthRepository {
    override fun login(email: String, pass: String) =
        api.login(LoginRequest(email, pass)).map { dto -> dto.toDomain() }
}

interface AuthApi {
    @POST("auth/login")
    fun login(@Body body: LoginRequest): Single<UserDto>
}
```

DI 用来为各 Layer 快速注入必要组件，建立通信

## Phase 4：MVVM + AAC 时代（2016-2019）

Google 推出 Architecture Components（后称 Jetpack），正式给 Android 开发"定规矩"。

核心组件：
- **ViewModel**：生命周期感知，屏幕旋转等配置变更后依然存活，彻底告别"数据丢失"
- **LiveData**：响应式数据流，自动处理生命周期，避免内存泄漏
- **Repository 模式**：统一封装网络和本地数据源，配合 Room 实现离线优先

MVVM（Model-View-ViewModel）成为官方推荐模式：
- View 层更薄，只负责绑定数据
- ViewModel 通过 LiveData 向 View 发送状态更新
- 数据流向清晰，测试也更方便

这一时期，DataBinding 也开始流行，但可读性争议一直存在。

```kotlin
class LoginViewModel(private val repo: AuthRepository) : ViewModel() {
    private val _state = MutableLiveData<LoginState>()
    val state: LiveData<LoginState> = _state

    fun login(email: String, pass: String) {
        _state.value = LoginState.Loading
        repo.login(email, pass)
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { _state.value = LoginState.Success(it) },
                { _state.value = LoginState.Error(it.message) }
            )
    }
}
```

## Phase 5：MVVM + RxJava + 单向数据流萌芽（2017-2020）

随着业务复杂度上升，LiveData 的简单事件处理能力开始捉襟见肘，RxJava 成为主流选择。

RxJava 带来了：
- **强大的异步组合能力**：map、flatMap、zip 等操作符让复杂异步逻辑变得清晰
- **线程切换便捷**：subscribeOn/observeOn 轻松控制执行线程
- **生命周期管理**：配合 RxLifecycle 或 AutoDispose 避免内存泄漏

这一时期，"单向数据流"思想开始萌芽：
- 用户事件 → ViewModel 处理 → 状态更新 → View 渲染
- 数据只朝一个方向流动，状态变化可预测

但 RxJava 的学习曲线陡峭，过度使用会导致代码晦涩难懂，"rx 地狱"成为开发者吐槽的焦点。

```kotlin
class UserViewModel(private val repo: UserRepository) : ViewModel() {
    private val _uiState = MutableLiveData<UserUiState>()
    val uiState: LiveData<UserUiState> = _uiState

    fun loadUserData(userId: String) {
        repo.getUser(userId)
            .flatMap { user ->
                repo.getUserOrders(user.id).map { orders ->
                    UserUiState.Success(user, orders)
                }
            }
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { _uiState.value = it },
                { _uiState.value = UserUiState.Error(it.message) }
            )
    }
}
```

## Phase 6：MVVM + Coroutines + Flow（2019-2022）

Kotlin Coroutines 和 Flow 的出现，让异步代码写起来像同步代码一样自然。

优势：
- **代码简洁**：用 suspend 函数替代回调，逻辑线性表达
- **结构化并发**：协程作用域自动管理生命周期，减少泄漏风险
- **Flow 背压友好**：冷流特性，按需生产数据，内存更高效
- **与 Jetpack 深度整合**：viewModelScope、lifecycleScope 开箱即用

这一时期，StateFlow 和 SharedFlow 逐渐取代 LiveData，成为状态管理新选择。

```kotlin
class UserViewModel(private val repo: UserRepository) : ViewModel() {
    private val _uiState = MutableStateFlow<UserUiState>(UserUiState.Loading)
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()

    fun loadUserData(userId: String) {
        viewModelScope.launch {
            try {
                val user = repo.getUser(userId)
                val orders = repo.getUserOrders(user.id)
                _uiState.value = UserUiState.Success(user, orders)
            } catch (e: Exception) {
                _uiState.value = UserUiState.Error(e.message)
            }
        }
    }
}
```

## Phase 7：MVI + Jetpack Compose + 状态机（2020-2025）

Jetpack Compose 的发布标志着 Android UI 开发进入"声明式时代"。

配合 MVI（Model-View-Intent）模式，架构迎来新一轮升级：

**核心特点**：
- **单一可信数据源（SSOT）**：整个 UI 状态集中管理，避免状态分散
- **状态机驱动**：UI 是状态的可视化表达，状态变化可预测、可追溯
- **不可变状态**：每次状态更新都创建新对象，配合 Compose 的智能重组实现高效刷新
- **副作用隔离**：SideEffect、LaunchedEffect 等机制让副作用可控

```kotlin
// 定义状态
data class LoginState(
    val email: String = "",
    val password: String = "",
    val isLoading: Boolean = false,
    val error: String? = null,
    val isSuccess: Boolean = false
)

// 定义事件
sealed class LoginEvent {
    data class EmailChanged(val email: String) : LoginEvent()
    data class PasswordChanged(val password: String) : LoginEvent()
    object LoginClicked : LoginEvent()
}

// ViewModel 处理
class LoginViewModel : ViewModel() {
    private val _state = MutableStateFlow(LoginState())
    val state: StateFlow<LoginState> = _state.asStateFlow()

    fun onEvent(event: LoginEvent) {
        when (event) {
            is LoginEvent.EmailChanged -> {
                _state.update { it.copy(email = event.email) }
            }
            is LoginEvent.PasswordChanged -> {
                _state.update { it.copy(password = event.password) }
            }
            is LoginEvent.LoginClicked -> {
                performLogin()
            }
        }
    }
}

// Compose UI
@Composable
fun LoginScreen(viewModel: LoginViewModel = viewModel()) {
    val state by viewModel.state.collectAsState()

    Column {
        TextField(
            value = state.email,
            onValueChange = { viewModel.onEvent(LoginEvent.EmailChanged(it)) }
        )
        TextField(
            value = state.password,
            onValueChange = { viewModel.onEvent(LoginEvent.PasswordChanged(it)) }
        )
        Button(
            onClick = { viewModel.onEvent(LoginEvent.LoginClicked) },
            enabled = !state.isLoading
        ) {
            Text(if (state.isLoading) "Loading..." else "Login")
        }
        state.error?.let { Text(it, color = Color.Red) }
    }
}
```

## 总结

Android 架构 15 年的演进，本质上是开发者对"复杂度管理"的持续探索：

1. **从混乱到有序**：前架构时代 → MVP 分层 → Clean Architecture 分层
2. **从手动到自动**：手动依赖管理 → Dagger 依赖注入 → Hilt 编译时生成
3. **从回调到响应式**：Callback 地狱 → RxJava 链式调用 → Coroutines 线性代码
4. **从命令式到声明式**：Imperative UI（XML）→ Declarative UI（Compose）
5. **从分散到集中**：多数据源 → Repository 统一 → MVI 单一状态源

每个阶段的架构都不是"银弹"，而是特定历史背景下的最优解。理解演进脉络，才能在面对新项目时做出正确选择。

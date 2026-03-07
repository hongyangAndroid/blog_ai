---
variant: a
name: Tech Theme
theme: tech
recommended_layouts: [cover-only, timeline, title-content, comparison]
slide_count: 10
theme_reason: "深色科技主题配合霓虹强调色，完美契合Android开发技术内容，营造专业开发者氛围"
---

## Slide 1: 封面
**Type**: cover
**Title**: Android 架构 15 年
**Subtitle**: 7 个阶段的完整演进之路
**Visual**: Android Logo + 代码元素 + 时间线视觉
**Layout**: cover-only

## Slide 2: 演进概览
**Type**: timeline
**Title**: 15 年演进时间线
**Content**: 
- 2010-2013: 前架构时代
- 2013-2016: MVP 时代
- 2014-2017: Clean Architecture
- 2016-2019: MVVM + AAC
- 2017-2020: MVVM + RxJava
- 2019-2022: Coroutines + Flow
- 2020-2025: MVI + Compose
**Visual**: 水平时间线 + 阶段节点
**Layout**: timeline

## Slide 3: Phase 1 - 前架构时代
**Type**: content
**Title**: Phase 1: 前架构时代 (2010-2013)
**Key Points**:
- ❌ 所有逻辑塞进 Activity/Fragment
- ❌ Activity 动辄上千行，成"万能类"
- ❌ 生命周期 Bug 频发，无法单元测试
**Visual**: 混乱的代码堆叠示意图
**Layout**: title-content

## Slide 4: Phase 2-3 - 分层架构启蒙
**Type**: comparison
**Title**: MVP → Clean Architecture
**Left Side**:
- MVP (2013-2016)
- Activity 瘦身成功
- Presenter 可测试
- ⚠️ 内存泄漏、回调嵌套
**Right Side**:
- Clean + Dagger (2014-2017)
- 业务独立于框架
- Repository 模式
- ⚠️ 分层复杂，成本高
**Layout**: comparison

## Slide 5: Phase 4-5 - 响应式时代
**Type**: content
**Title**: MVVM + 响应式编程 (2016-2020)
**Key Points**:
- ✅ ViewModel 生命周期感知
- ✅ LiveData / RxJava 响应式数据流
- ✅ 单向数据流思想萌芽
- ⚠️ RxJava 学习曲线陡峭
**Visual**: 数据流向图
**Layout**: title-content

## Slide 6: Phase 6 - 协程时代
**Type**: content
**Title**: Coroutines + Flow (2019-2022)
**Key Points**:
- ✅ 异步代码像同步一样简洁
- ✅ 结构化并发，自动生命周期管理
- ✅ Flow 背压友好
- ✅ StateFlow 取代 LiveData
**Visual**: Kotlin Logo + 协程示意图
**Layout**: title-content

## Slide 7: Phase 7 - 现代架构
**Type**: content
**Title**: MVI + Jetpack Compose (2020-2025)
**Key Points**:
- ✅ 声明式 UI 开发
- ✅ 单一可信数据源 (SSOT)
- ✅ 状态机驱动，可预测可追溯
- ✅ 副作用隔离机制
**Visual**: Compose Logo + 状态机图
**Layout**: title-content

## Slide 8: 演进主线
**Type**: grid
**Title**: 5 条演进主线
**Content**:
1. 混乱 → 有序 (分层架构)
2. 手动 → 自动 (依赖注入)
3. 回调 → 响应式 (RxJava/Coroutines)
4. 命令式 → 声明式 (XML → Compose)
5. 分散 → 集中 (多数据源 → SSOT)
**Visual**: 5个图标/卡片
**Layout**: grid

## Slide 9: 核心启示
**Type**: content
**Title**: 架构演进的核心启示
**Key Points**:
- 🎯 始终围绕"解耦、可维护、可测试"
- 📈 每个阶段都是特定背景下的最优解
- 💡 没有银弹，理解脉络才能正确选择
- 🚀 复杂度管理是永恒主题
**Layout**: title-content

## Slide 10: 结束页
**Type**: ending
**Title**: Android 架构 15 年
**Subtitle**: 从代码堆砌到规范化设计
**Call to Action**: 理解演进，选择适合的架构
**Layout**: cover-only

---
variant: b
name: Business Theme
theme: business
recommended_layouts: [cover-only, title-content, two-column, timeline]
slide_count: 10
theme_reason: "专业蓝白商务风格，适合企业内部分享和技术会议演讲，传递专业可信的形象"
---

## Slide 1: 封面
**Type**: cover
**Title**: Android 架构演进史
**Subtitle**: 15年发展历程与最佳实践
**Visual**: 简洁商务风格封面，Android元素
**Layout**: cover-only

## Slide 2: 议程概览
**Type**: content
**Title**: 今日议程
**Content**:
- 7个发展阶段回顾
- 各阶段架构特点分析
- 演进趋势总结
- 架构选型建议
**Visual**: 议程列表 + 时间线预览
**Layout**: title-content

## Slide 3: 演进总览
**Type**: timeline
**Title**: Android架构演进历程
**Content**:
- 2010-2013: 无架构 → MVP
- 2013-2017: MVP → Clean Architecture
- 2016-2019: MVVM + Jetpack
- 2017-2020: RxJava响应式
- 2019-2022: Kotlin协程
- 2020-2025: MVI + Compose
**Visual**: 专业时间线图表
**Layout**: timeline

## Slide 4: 早期阶段挑战
**Type**: two-column
**Title**: 前架构时代的痛点
**Left Column**:
- 代码耦合严重
- Activity臃肿
- 无法单元测试
**Right Column**:
- MVP解决方案
- 关注点分离
- 可测试性提升
**Layout**: two-column

## Slide 5: 分层架构发展
**Type**: content
**Title**: 分层架构的演进
**Key Points**:
- Clean Architecture引入Domain层
- 业务逻辑独立于Android框架
- Repository模式统一数据源
- 依赖注入(Dagger/Hilt)自动化
**Visual**: 分层架构示意图
**Layout**: title-content

## Slide 6: 响应式编程
**Type**: content
**Title**: 响应式编程的兴起
**Key Points**:
- LiveData生命周期感知
- RxJava强大的异步组合能力
- Coroutines简洁的异步代码
- Flow背压友好的数据流
**Visual**: 响应式数据流对比图
**Layout**: title-content

## Slide 7: 现代UI开发
**Type**: content
**Title**: 声明式UI与状态管理
**Key Points**:
- Jetpack Compose声明式UI
- MVI单向数据流
- 单一可信数据源(SSOT)
- 状态可预测、可追溯
**Visual**: Compose UI示例
**Layout**: title-content

## Slide 8: 关键收益
**Type**: grid
**Title**: 架构演进的关键收益
**Content**:
1. 解耦 - 模块独立，降低依赖
2. 可维护 - 代码清晰，易于修改
3. 可测试 - 单元测试覆盖
4. 可扩展 - 支持业务增长
5. 团队协作 - 规范开发流程
**Layout**: grid

## Slide 9: 选型建议
**Type**: content
**Title**: 架构选型建议
**Key Points**:
- 小型项目: MVVM + AAC
- 中大型项目: MVVM + Coroutines + Flow
- 复杂交互: MVI + Compose
- 遗留项目: 渐进式重构
**Visual**: 决策树/流程图
**Layout**: title-content

## Slide 10: 结束页
**Type**: ending
**Title**: 感谢聆听
**Subtitle**: Android架构演进 - 持续学习，选择适合的方案
**Contact**: 欢迎交流讨论
**Layout**: cover-only

---
strategy: b
name: 信息密集型
style: notion
style_reason: "notion极简手绘风格最适合知识分享，信息密度高且易读"
elements:
  background: grid
  decorations: [minimal-icons]
  emphasis: underline
  typography: clean
layout: dense
image_count: 4
---

## P1 封面
**Type**: cover
**Hook**: "Android架构15年演进🔥一张图看懂7个阶段"
**Visual**: 时间轴总览图，7个阶段一目了然
**Layout**: sparse

## P2 完整时间线
**Type**: timeline
**Message**: "7个阶段完整对比：时间、技术、特点、适用场景"
**Visual**: 
- 2010-2013: 无架构 → 代码堆砌
- 2013-2016: MVP → 关注点分离
- 2014-2017: Clean+Dagger → 业务解耦
- 2016-2019: MVVM+AAC → 生命周期感知
- 2017-2020: RxJava → 异步简洁
- 2019-2022: Coroutines+Flow → 背压友好
- 2020-2025: MVI+Compose → 声明式UI
**Layout**: flow

## P3 技术选型指南
**Type**: comparison
**Message**: "不同场景该选什么架构？"
**Visual**: 
- 小型Demo → 无架构/MVP
- 中小型App → MVVM+AAC
- 中大型App → Clean+Coroutines
- 大型复杂App → MVI+Compose
**Layout**: quadrant

## P4 学习路线推荐
**Type**: guide
**Message**: "给初级开发者的学习建议📚"
**Visual**: 
1. 先学MVP理解分层思想
2. 掌握MVVM+Lifecycle
3. 深入Clean Architecture
4. 进阶Coroutines+Flow
5. 探索MVI+Compose
**Layout**: list

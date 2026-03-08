---
name: fogsight-skill
description: Use when user wants to generate educational animation for a concept or topic, create visual explanation with HTML/CSS/JS animation, or transform abstract ideas into animated visual content
---

# Fogsight Skill

## Overview

Generate beautiful, animated educational content from abstract concepts using the Fogsight methodology. This skill transforms topics like algorithms, physics principles, or mathematical concepts into self-contained HTML files with stunning visual animations.

**Core Principle**: Use the Fogsight Prompt Template to generate animations - every animation is created fresh based on the topic, not pre-written templates.

## When to Use

- User asks to "generate animation for [topic]"
- User wants to "create visual explanation" of a concept
- User mentions "animated tutorial" or "educational animation"
- User references Fogsight or similar animation generation tools
- Converting abstract concepts (algorithms, physics, math) into visual form

## Core Workflow

### Step 1: Receive Topic

User provides a topic (e.g., "冒泡排序", "TCP三次握手", "相对论")

### Step 2: Apply Fogsight Prompt Template

**MANDATORY**: Use the following prompt template to generate the animation:

```
请你生成一个非常精美的动态动画,讲讲 {topic}
要动态的,要像一个完整的,正在播放的视频。包含一个完整的过程，能把知识点讲清楚。
页面极为精美，好看，有设计感，同时能够很好的传达知识。知识和图像要准确
附带一些旁白式的文字解说,从头到尾讲清楚一个小的知识点
不需要任何互动按钮,直接开始播放
使用和谐好看，广泛采用的浅色配色方案，使用很多的，丰富的视觉元素。双语字幕
**请保证任何一个元素都在一个2k分辨率的容器中被摆在了正确的位置，避免穿模，字幕遮挡，图形位置错误等等问题影响正确的视觉传达**
html+css+js+svg，放进一个html里
```

Replace `{topic}` with the user's input.

### Step 3: Generate Animation According to Prompt Requirements

Based on the prompt template, generate HTML that includes:

**Required Structure:**
- Single HTML file with inline CSS and JavaScript
- GSAP library from CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- Light color scheme (参考: #fafbfc, #f0f2f5 backgrounds)
- Bilingual subtitles (Chinese + English) at bottom
- Auto-play on load (no interaction buttons)

**Required Scenes:**
1. **Introduction Scene** - What is this concept?
2. **Concept Scene** - Core idea explanation
3. **Main Visualization Scene** - Step-by-step demonstration
4. **Completion Scene** - Summary and statistics

**Required Features:**
- Scene transitions with GSAP animations
- Synchronized subtitles that explain each step
- Visual elements that demonstrate the concept clearly
- Proper spacing and positioning (2K resolution compatible)
- Total duration: 40-80 seconds

### Step 4: Save and Deliver

1. Save the HTML file with descriptive name: `{topic}-animation.html`
2. Provide file path to user
3. Briefly explain what the animation covers

## Example Generation

**User Input**: "冒泡排序"

**Prompt Used**:
```
请你生成一个非常精美的动态动画,讲讲 冒泡排序
要动态的,要像一个完整的,正在播放的视频...
[rest of template]
```

**Generated Output**: Complete HTML file with:
- Scene 1: Title "冒泡排序 Bubble Sort" with description
- Scene 2: Core concept explanation (bubbling up like bubbles in water)
- Scene 3: Live visualization of sorting process with animated bars
- Scene 4: Completion with statistics (rounds, comparisons, swaps)

## Output Format

Always respond with:
1. Confirmation of the topic
2. Brief description of what the animation shows
3. File path where HTML is saved
4. Instructions to open in browser

Example response:
```
已为您生成"快速排序算法"的动画演示。

动画内容：
- 开场介绍快速排序的基本概念
- 核心思想：分治法与基准元素
- 可视化展示分区过程和递归调用
- 完成统计：遍历轮次、比较次数、交换次数
- 全程双语字幕解释每一步

文件已保存至：/path/to/quicksort-animation.html

直接在浏览器中打开即可观看动画。
```

## Technical Requirements Checklist

When generating, ensure:
- [ ] Single HTML file only
- [ ] GSAP 3.12.2 loaded from CDN
- [ ] Light color scheme (#fafbfc, #ffffff backgrounds)
- [ ] Bilingual subtitles (CN/EN)
- [ ] Auto-play (no buttons)
- [ ] 4 scenes minimum (Intro → Concept → Demo → Complete)
- [ ] Scene transitions with GSAP
- [ ] 2K resolution compatible (use relative units)
- [ ] No external images (CSS/SVG only)
- [ ] Subtitles at bottom, not overlapping content

## Common Topics

**Algorithms:**
- 冒泡排序 Bubble Sort
- 快速排序 Quick Sort
- 归并排序 Merge Sort
- 二分查找 Binary Search
- 深度优先搜索 DFS
- 动态规划 Dynamic Programming

**Physics:**
- 波的干涉 Wave Interference
- 抛体运动 Projectile Motion
- 电磁感应 Electromagnetic Induction

**Mathematics:**
- 勾股定理 Pythagorean Theorem
- 欧拉公式 Euler's Formula
- 导数与积分 Derivatives and Integrals

**Computer Science:**
- DNS解析原理 How DNS Works
- TCP三次握手 TCP Handshake
- 区块链共识 Blockchain Consensus

## Important Notes

- **ALWAYS** use the Fogsight Prompt Template - never pre-write animations
- **ALWAYS** generate fresh for each topic - don't reuse code
- **ALWAYS** include all 4 scenes for complete narrative
- **ALWAYS** use bilingual subtitles
- **NEVER** use external images or assets
- **NEVER** require user interaction (auto-play only)

# AI入门Skill学习 - 小红书信息图生成指南

## 项目概述
根据鸿洋的文章《我愿称它为AI时代最该学的！》生成的5张小红书信息图。

## 生成提示词

### 图片1: 封面
```
A warm and cozy Xiaohongshu-style infographic cover, 3:4 vertical ratio. 
Main title in large cute rounded Chinese font: "AI入门别急着装OpenClaw！"
Subtitle: "我踩过的坑你别踩"
Center: A simple cartoon character transitioning from confused expression to enlightened "aha!" moment
Background: Soft pastel gradient from cream white to light peach orange
Decorations: Fluffy clouds, sparkling stars, warm glow effects
Style: Warm, friendly, healing atmosphere, cute illustration style
Colors: Warm palette - cream, peach, light orange, soft yellow
--ar 3:4
```

### 图片2: 痛点页
```
Xiaohongshu infographic about AI learning pain points, 3:4 vertical ratio.
Title: "安装OpenClaw后的迷茫循环"
Center: Circular arrow loop diagram showing endless cycle
Three pain points arranged around the circle with icons:
1. "安装很简单，但不知道怎么用" with question mark icon
2. "盲目装Skill，好像能干活又好像不能" with confused face icon  
3. "陷入无尽循环，学了很多又好像没学" with spiral icon
Character: Slightly anxious/confused cartoon person
Background: Soft warm pastel with slightly muted clouds
Style: Warm but showing confusion, dotted arrows connecting points
Colors: Warm gray-orange tones, soft pastels
--ar 3:4
```

### 图片3: 转折页
```
Xiaohongshu infographic about discovering Skill concept, 3:4 vertical ratio.
Title: "发现Skill才是正确打开方式！" with exclamation
Center: Glowing lightbulb icon (inspiration/discovery symbol)
Three concept cards with rounded corners:
1. "什么是Skill?" with book/manual icon - "AI的技能说明书"
2. "Skill规定了" with flow arrow icon - "AI按固定流程做事"
3. "不断优化" with rising chart icon - "提升做事稳定性"
Character: Enlightened expression, bright eyes
Background: Bright warm pastel gradient yellow to peach with star sparkles
Decorations: Small stars, sparkle effects, warm glow
Style: Warm, hopeful, "aha moment" atmosphere
Colors: Bright warm yellow, peach, light orange
--ar 3:4
```

### 图片4: 体验页
```
Xiaohongshu infographic showing Skill experience, 3:4 vertical ratio.
Title: "亲测Skill的神奇效果"
Left side - 3-step process with numbers:
1. "安装TraeCN" with computer icon
2. "安装baoyu-xhs-images Skill" with download icon
3. "发送文章，AI自动干活" with magic wand icon
Right side - Before/After comparison:
Top: Document icon labeled "输入：微信文章链接"
Arrow pointing down
Bottom: Stack of beautiful infographic images labeled "输出：精美小红书信息图"
Bottom text: "吃饭回来就完成 🍽️"
Character: Happy satisfied expression
Background: Warm orange-yellow pastel with cloud decorations
Decorations: Check marks, stars, sparkles
Style: Warm, successful, showing results
Colors: Warm orange, yellow, cream
--ar 3:4
```

### 图片5: 结论页
```
Xiaohongshu infographic conclusion with call to action, 3:4 vertical ratio.
Main title with quotes: "学会'拿来吧你'，复制别人的技能！"
Center: Hand gesture icon showing "taking/grabbing" action
Three key point cards:
1. "Skill就是md文件" with document icon - "纯文本但能力无限"
2. "收藏别人的Skill" with star/bookmark icon - "改造为己所用"
3. "开启AI自媒体之路" with rocket icon - "让AI 24小时待命"
GitHub link at bottom: "github.com/hongyangAndroid/blog_ai"
Call to action: "现在就试试！"
Character: Confident, ready-to-act posture
Background: Bright warm pink-orange gradient with clouds and stars
Decorations: Sparkles, arrows, check marks, glow effects
Style: Warm, motivational, action-oriented
Colors: Warm pink, orange, peach, bright yellow accents
--ar 3:4
```

## 文件结构
```
xhs-images/ai-skill-learning/
├── source-article.md       # 原始文章内容
├── analysis.md             # 内容分析
├── outline-strategy-a.md   # 故事驱动型大纲
├── outline-strategy-b.md   # 信息密集型大纲
├── outline-strategy-c.md   # 视觉优先型大纲
├── outline.md              # 最终选择的大纲
├── prompts/                # 图片生成提示词
│   ├── 01-cover-ai-skill-learning.md
│   ├── 02-painpoint-ai-skill-learning.md
│   ├── 03-discovery-ai-skill-learning.md
│   ├── 04-experience-ai-skill-learning.md
│   └── 05-conclusion-ai-skill-learning.md
└── README.md               # 本文件
```

## 使用说明
1. 复制上述英文提示词到AI绘图工具（Midjourney、DALL-E 3、Stable Diffusion等）
2. 根据需要调整细节
3. 生成后可用于小红书发布

## 发布建议
- 按顺序发布5张图
- 第1张作为封面图
- 配文可以结合文章核心观点
- 添加相关话题标签：#AI入门 #Skill学习 #OpenClaw #AI工具 #效率提升

---
name: gzh_images
description: Converts WeChat article links into professional PPT-style visual pages. Supports extracting content from WeChat URLs and transforming them into presentation-ready infographic slides with multiple PPT themes. Invoke when user mentions "微信文章转PPT", "公众号图片", "gzh to ppt", "微信转幻灯片", or wants to convert WeChat articles into presentation slides.
---

# WeChat Article to PPT Style Images

Transform WeChat (微信公众号) articles into professional, presentation-ready visual slides with multiple PPT-style themes.

## Usage

```bash
# Convert WeChat article to PPT slides with auto-selected theme
/gzh_images https://mp.weixin.qq.com/s/xxxxx

# Specify PPT theme
/gzh_images https://mp.weixin.qq.com/s/xxxxx --theme business

# Specify slide layout
/gzh_images https://mp.weixin.qq.com/s/xxxxx --layout title-content

# Combine theme and layout
/gzh_images https://mp.weixin.qq.com/s/xxxxx --theme minimal --layout two-column

# Direct content input (paste article text)
/gzh_images
[paste WeChat article content]
```

## Options

| Option | Description |
|--------|-------------|
| `--theme <name>` | PPT visual theme (see Theme Gallery) |
| `--layout <name>` | Slide layout structure (see Layout Gallery) |

## Two Dimensions

| Dimension | Controls | Options |
|-----------|----------|---------|
| **Theme** | Visual aesthetics: colors, typography, professional feel | business, minimal, tech, creative, elegant, dark, gradient, corporate, academic, modern |
| **Layout** | Information structure: how content is arranged on slides | title-content, two-column, three-column, image-left, image-right, timeline, comparison, grid, cover-only, section-divider |

Theme × Layout can be freely combined. Example: `--theme business --layout two-column` creates professional business slides with side-by-side content arrangement.

## Theme Gallery

| Theme | Description |
|-------|-------------|
| `business` (Default) | Professional blue/white corporate style, clean and trustworthy |
| `minimal` | Ultra-clean, lots of whitespace, sophisticated simplicity |
| `tech` | Dark mode with neon accents, perfect for tech/AI content |
| `creative` | Vibrant colors, bold typography, attention-grabbing |
| `elegant` | Soft gradients, refined typography, premium feel |
| `dark` | Dark background with light text, modern and sleek |
| `gradient` | Beautiful gradient backgrounds, contemporary look |
| `corporate` | Traditional corporate style, conservative and formal |
| `academic` | Research paper inspired, citation-friendly layout |
| `modern` | Current design trends, rounded corners, soft shadows |

## Layout Gallery

| Layout | Description |
|--------|-------------|
| `title-content` (Default) | Classic title on top, content below |
| `two-column` | Side-by-side content blocks |
| `three-column` | Three equal content sections |
| `image-left` | Image on left, text on right |
| `image-right` | Text on left, image on right |
| `timeline` | Chronological or step-by-step flow |
| `comparison` | Before/after or pros/cons side-by-side |
| `grid` | Multiple items in grid formation |
| `cover-only` | Full-slide cover with minimal text |
| `section-divider` | Transition slide between sections |

## Auto Selection

| Content Signals | Theme | Layout |
|-----------------|-------|--------|
| Business, finance, corporate | `business` | title-content, two-column |
| Tech, AI, programming, startup | `tech` | image-left, timeline |
| Design, art, creative work | `creative` | image-right, grid |
| Research, education, analysis | `academic` | title-content, comparison |
| Luxury, premium products | `elegant` | cover-only, minimal text |
| Modern, trendy content | `modern` | gradient backgrounds, rounded |
| Conservative, formal reports | `corporate` | title-content, section-divider |

## Workflow

### Progress Checklist

```
GZH to PPT Progress:
- [ ] Step 1: Extract content from WeChat URL or process pasted content
- [ ] Step 2: Analyze article structure and key points
- [ ] Step 3: Confirmation 1 - Content understanding ⚠️ REQUIRED
- [ ] Step 4: Generate slide outline with theme recommendations
- [ ] Step 5: Confirmation 2 - Theme & layout selection ⚠️ REQUIRED
- [ ] Step 6: Generate PPT-style slides (sequential)
- [ ] Step 7: Completion report
```

### Step 1: Content Extraction

**If URL provided**:
1. Extract article content from WeChat URL
2. Parse title, author, main content, images
3. Save to `source.md` in target directory

**If content pasted**:
1. Save directly to `source.md`

**Slug Generation**:
- Extract main topic from article title (2-4 words, kebab-case)
- Example: "2024年AI发展趋势报告" → `ai-trends-2024`

### Step 2: Content Analysis → `analysis.md`

Analyze the WeChat article:

1. **Article Structure**:
   - Title and subtitle
   - Section breakdown
   - Key arguments/points
   - Supporting data/examples
   - Conclusion/CTA

2. **Content Type**:
   - News/Report
   - Tutorial/Guide
   - Analysis/Opinion
   - Product/Service intro
   - Case study

3. **Visual Assets**:
   - Existing images in article
   - Charts/data visualization needs
   - Icon/illustration opportunities

4. **Slide Count Recommendation**:
   - Short article (3-5 min read): 5-8 slides
   - Medium article (5-10 min read): 8-12 slides
   - Long article (10+ min read): 12-15 slides

### Step 3: Confirmation 1 - Content Understanding ⚠️

**Display summary**:
- Article title and author
- Content type identified
- Key sections extracted
- Recommended slide count

**Use AskUserQuestion** for:
1. Core message/focus (multiSelect: true)
2. Target audience
3. Preferred approach: Summary highlights / Detailed breakdown / Visual storytelling / Auto
4. Additional context (optional)

### Step 4: Generate Slide Outline

Create outline with 3 theme variants:

| Variant | Filename | Style | Best For |
|---------|----------|-------|----------|
| A | `outline-business.md` | Professional, corporate | Business reports, formal content |
| B | `outline-modern.md` | Trendy, contemporary | Tech, startups, modern topics |
| C | `outline-creative.md` | Bold, visual | Design, marketing, creative fields |

**Outline format**:
```yaml
---
variant: a  # a, b, or c
theme: business
recommended_layouts: [title-content, two-column, timeline]
slide_count: 8
---

## Slide 1: Cover
**Type**: cover
**Title**: [Article title]
**Subtitle**: [Key hook]
**Layout**: cover-only

## Slide 2: Introduction
**Type**: content
**Key Points**: [Main arguments]
**Layout**: title-content

## Slide 3: Key Point 1
**Type**: content
**Content**: [Section summary]
**Visual**: [Suggested image/chart]
**Layout**: image-left
...
```

### Step 5: Confirmation 2 - Theme & Layout Selection ⚠️

**Display each variant**:
- Theme name + slide count
- Slide-by-slide breakdown
- Recommended layouts

**Use AskUserQuestion**:

1. **Theme Selection**:
   - Variant A - Business (Recommended for formal content)
   - Variant B - Modern (Recommended for tech/modern topics)
   - Variant C - Creative (Recommended for design/marketing)
   - Custom: specify preferences

2. **Layout Preference**:
   - Follow recommended layouts
   - Prefer image-heavy layouts
   - Prefer text-heavy layouts
   - Mixed variety

3. **Color Scheme** (if applicable):
   - Use theme default
   - Company brand colors
   - Specific color preference

### Step 6: Generate Slides

**For each slide**:
1. Save prompt to `prompts/slide-NN.md`
2. Generate image with consistent theme
3. Report progress

**Visual Consistency**:
- Generate cover slide first (establishes theme anchor)
- Use cover as reference for subsequent slides
- Maintain consistent typography, colors, spacing

### Step 7: Completion Report

```
WeChat Article to PPT Complete!

Article: [title]
Theme: [theme name]
Slides: N total
Location: [directory path]

Files:
- slide-01-cover.png ✓
- slide-02-intro.png ✓
- slide-03-content.png ✓
...
- slide-NN-ending.png ✓
```

## File Structure

```
gzh-images/{article-slug}/
├── source.md                    # Extracted/pasted article content
├── analysis.md                  # Content analysis
├── outline-business.md          # Variant A: Business theme
├── outline-modern.md            # Variant B: Modern theme
├── outline-creative.md          # Variant C: Creative theme
├── outline.md                   # Final selected outline
├── prompts/
│   ├── slide-01.md
│   ├── slide-02.md
│   └── ...
├── slide-01-cover.png
├── slide-02-intro.png
└── ...
```

## Slide Types

| Type | Purpose | Typical Layout |
|------|---------|----------------|
| `cover` | Title slide, first impression | cover-only |
| `intro` | Problem statement, context | title-content |
| `content` | Main information delivery | varies |
| `data` | Charts, statistics, numbers | image-left/right |
| `quote` | Key quote or testimonial | cover-only |
| `comparison` | Pros/cons, before/after | comparison |
| `timeline` | Process, history, steps | timeline |
| `divider` | Section transition | section-divider |
| `ending` | CTA, summary, contact | title-content |

## Design Principles

1. **One Idea Per Slide**: Each slide focuses on a single concept
2. **Visual Hierarchy**: Clear title → subtitle → body → footer
3. **Consistent Spacing**: Uniform margins and gaps
4. **Readable Typography**: Large enough for mobile viewing
5. **Brand Consistency**: Unified color scheme throughout

## Notes

- Supports both WeChat article URLs and direct content paste
- Automatically extracts key points from long articles
- Maintains visual consistency across all slides
- Optimized for both mobile and desktop viewing
- Can incorporate original article images when available

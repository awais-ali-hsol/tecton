# Website Design System / Style Guide
## Dark Creative Digital Agency — based on the supplied screenshot

> **Precision note:** The screenshot is a raster image, so dimensions, radii, spacing, and typography are close visual estimates. The principal lime accent, near-black backgrounds, and major layout proportions were measured from the reference. The exact typeface and interaction states cannot be confirmed from a static capture.

### 1. Overall Design Direction

#### Design character
This is a premium dark creative-agency design with a bold digital/editorial personality.

**Core characteristics:**
- Near-black, image-heavy atmosphere
- Oversized geometric typography
- High-contrast acid-lime accent
- Sparse white and gray supporting text
- Asymmetric editorial layouts
- Large quantities of negative space
- Mixed solid and outlined display typography
- Full-bleed photography with dark overlays
- Thin borders instead of heavy shadows
- Occasional angular or diagonal lime graphic interruptions

#### Mood and personality
The design should feel:
- Confident
- Contemporary
- Creative but disciplined
- Technical and professional
- Premium rather than playful
- Energetic without becoming cluttered

#### Visual principles to preserve
- **Dark-first interface:** Do not introduce a conventional light-theme section.
- **Typography as decoration:** Large words often function as visual architecture, not merely headings.
- **One dominant accent:** Lime is reserved for the most important message or action in each area.
- **Asymmetry:** Headings, paragraphs, stats, media, and CTAs are often split across two unequal columns.
- **Layering:** Foreground content sits over subtle lime glows, outlined words, photography, or abstract line art.
- **Restraint:** Despite the dramatic typography, the component styling remains minimal—few shadows, minimal borders, no excessive ornamentation.
- **Consistency:** Every section uses the same dark foundation, type system, spacing rhythm, and interaction language.

#### What must not be lost
- The acid-lime accent
- The near-black environment
- Huge uppercase display typography
- Outlined background words
- Dark photographic overlays
- Pill-shaped lime CTAs with circular icon ends
- Thin dark borders
- Editorial two-column section headers
- Full-width imagery
- High section spacing

---

### 2. Color System

#### Primary palette

| Token | Approx. HEX | Usage |
| :--- | :--- | :--- |
| Primary lime | `#D9F45F` | Primary CTAs, key heading words, marquee, selected states, stars, focus accents |
| Primary hover | `#C8E84D` | Estimate for primary button/link hover |
| Page background | `#0A0A0A` | Main body and default section background |
| Elevated surface | `#121310` | Cards, testimonial panels, footer, subtle content wells |
| Raised surface | `#181A17` | Hover states, slightly elevated tiles, nested panels |
| Primary text | `#F1F1ED` | Main headings and high-emphasis text |
| Pure highlight | `#FFFFFF` | Small high-emphasis labels and selected text |
| Body text | `#A0A19A` | Paragraphs and secondary descriptions |
| Muted text | `#74766F` | Metadata, dates, captions, disabled-looking text |
| Border | `#2B2C29` | Card borders, dividers, input outlines |
| Subtle border | `#1D1E1B` | Low-contrast separators on dark surfaces |
| On-primary text | `#0A0A0A` | Text/icons placed on lime backgrounds |
| Outline text stroke | `rgba(255,255,255,0.14)` | Giant outlined words |
| Dark photo overlay | `rgba(10,10,10,0.65–0.85)` | Hero and photographic sections |
| Lime tint | `rgba(217,244,95,0.10–0.16)` | Subtle background glow or icon tint |

#### Color usage rules
- Use `#0A0A0A` for at least 70–80% of the visible page background.
- Use `#121310` only to distinguish cards, footer panels, or content wells from the page background.
- Use `#F1F1ED` for headings and important labels.
- Use `#A0A19A` for paragraphs.
- Use `#D9F45F` sparingly:
  - One primary CTA per major section
  - The most important word in a display heading
  - Active navigation state
  - Marquee band
  - Ratings/stars
  - Focus and selection states
- Never use white text on the lime accent. Always use `#0A0A0A`.
- Never use lime body text for long paragraphs.
- Never use muted gray for essential CTA text.
- Borders should remain subtle; avoid bright gray or white borders.

#### Recommended color hierarchy
- Background: near-black
- Content surface: dark charcoal-green
- Primary text: off-white
- Secondary text: warm gray
- Accent: lime
- Dividers: very dark gray

#### Gradients and overlays
There are no broad decorative color gradients. The background depth comes from photography and overlays.

Acceptable reconstructed effects:
```css
/* Dark photographic overlay */
background: linear-gradient(
  90deg,
  rgba(10, 10, 10, 0.68),
  rgba(10, 10, 10, 0.88)
);

/* Very restrained lime ambience */
background: radial-gradient(
  circle at 0% 35%,
  rgba(217, 244, 95, 0.14),
  transparent 34%
);
```
These should enhance photography or atmosphere only. Do not create purple, blue, orange, or rainbow gradients.

#### Colors that should not be introduced
Avoid introducing new UI colors such as:
- Bright blue
- Purple
- Red
- Orange
- Pink
- Cyan
- Pastel backgrounds
- Large white sections

Photographs may naturally contain other colors, but interface components should remain within the specified palette.

---

### 3. Typography

#### Font family
The exact font cannot be identified with certainty from the screenshot.

Recommended closest Google Font:
```css
font-family: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
```
Acceptable alternative if a slightly more technical character is desired:
```css
font-family: "Space Grotesk", "Inter", system-ui, sans-serif;
```
Use one primary typeface consistently for headings, navigation, buttons, and body text. Do not add a second display font.

#### Font characteristics
- Geometric sans-serif
- Rounded but not playful
- Uppercase display headings
- Tight heading line-height
- Medium-to-bold weight hierarchy
- Minimal or slightly negative heading letter spacing
- Small uppercase labels with wide tracking

#### Practical type scale

| Level | Desktop size | Weight | Line height | Case / tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hero H1 | `clamp(52px, 7vw, 96px)` | 700 | 0.95–1.0 | Uppercase, -0.02em | Main hero statement |
| Display background word | `clamp(72px, 9vw, 140px)` | 700 | 0.9–1.0 | Uppercase, -0.02em | Giant section/outlined words |
| H2 | `clamp(40px, 4.5vw, 64px)` | 600–700 | 1.05 | Sentence or uppercase | Major section headings |
| H3 | `clamp(28px, 3vw, 36px)` | 600 | 1.12 | Sentence | Feature or content headings |
| H4 / card title | `clamp(21px, 2vw, 26px)` | 600 | 1.2 | Sentence | Cards, case titles, posts |
| Large stat | 56–72px | 500–600 | 1.0 | None | Counters and ratings |
| Lead | 18px | 400–500 | 1.6 | None | Introductory paragraphs |
| Body | 16px | 400 | 1.65 | None | General paragraphs |
| Small | 14px | 400–500 | 1.5 | None | Metadata, roles, descriptions |
| Caption / eyebrow | 12–13px | 500–600 | 1.2 | Uppercase, 0.10–0.14em | Section labels |
| Navigation | 14px | 500–600 | 1 | Uppercase, 0.06–0.10em | Header and footer navigation |

#### Typographic rules
- Hero line-height should be visually compact: approximately 0.95.
- Body text should use line-height: 1.6–1.7.
- Use uppercase only for:
  - Hero display words
  - Major display headings
  - Navigation
  - Eyebrows and labels
  - Stats or compact metadata
- Keep paragraphs in sentence case.
- Do not use serif fonts.
- Do not use italics except for a genuinely exceptional editorial detail.
- Keep paragraph width around 560–680px.
- Use 700, not very heavy 800/900, for the primary display text.
- Use 400–500 for body copy.
- Match the screenshot’s mixed emphasis: one line or word in white, the paired line or word in lime.

#### Outlined display text
Use this treatment for large background words such as “DIGITAAL,” “OUR SERVICES,” or the secondary half of a section title:
```css
.display-outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.14);
}
```
For stronger visibility at very large sizes, the stroke can be increased to 1.5px, but it should remain subtle.

---

### 4. Layout and Grid

#### Page canvas
The screenshot is approximately 1366px wide.
Recommended global container:
```css
.container {
  width: calc(100% - 48px);
  max-width: 1170px;
  margin-inline: auto;
}
```
At 1366px this produces approximately 98px side gutters, closely matching the reference.

#### Grid system
Use a 12-column grid:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 24px;
}
```
**Primary proportions:**
- Hero: 6 columns text/heading + 6 columns supporting content
- Editorial section intro: 6–7 columns heading + 5–6 columns description
- Case-study media: 5 columns
- Case-study content: 6–7 columns
- Services: 3 equal columns
- Team: 3 equal columns
- Blog: 3 equal columns
- Awards: graphic/intro plus list
- Logo wall: 5 columns on desktop

#### Header
- Full-width transparent header
- Height: approximately 100px
- No solid glass panel
- Very subtle bottom divider around 1px
- Left: logo
- Center: primary navigation
- Right: search icon and lime CTA

Desktop header inner layout:
```
[Logo]                    [Nav links]                         [Search] [CTA]
```

#### Hero
- Full-bleed photographic or atmospheric background
- Dark overlay
- Left: oversized two-line H1
- Right: paragraph, CTA, avatar group, and customer statistic
- Vertical alignment around the optical center
- Avoid placing the hero content inside a boxed card

Recommended hero dimensions:
```css
.hero {
  min-height: 620px;
  padding-top: 120px;
  padding-bottom: 90px;
}
```
The first heading line should be off-white, and the second should be lime.

#### Full-bleed image banner
A second full-width photographic band appears beneath the hero:
- No border radius
- Dark overlay
- Centered, oversized outlined brand word
- Photography remains visible but subdued

#### Section headers
Use an asymmetric split layout:
- Left: display heading
- Right: short paragraph and optional CTA
- Do not center all section headers
- Allow oversized background typography to overlap section boundaries

#### Cards and content sections
Services, case studies, awards, team, CTA, blog, and footer share the same container width.
Do not create isolated section widths.
Alternate between:
- Full-bleed imagery
- Contained 1170px content
- Dark surface panels
- Large decorative typography

#### Footer
- Background: `#121310`
- Large lime “Let’s Talk” heading
- Four-column link/content structure
- Newsletter/contact area
- Thin divider above a compact copyright bar
- No light footer

---

### 5. Spacing and White Space

#### Spacing scale
Use an 8px-based system:
`4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 / 160px`

#### Practical spacing values

| Context | Recommended value |
| :--- | :--- |
| Desktop section padding | 110–130px top and bottom |
| Standard section spacing | 120px |
| Tablet section spacing | 80–96px |
| Mobile section spacing | 56–72px |
| Section heading to paragraph | 24–32px |
| Paragraph to CTA | 28–36px |
| Grid gap | 24px |
| Large editorial column gap | 48–64px |
| Card padding | 28–36px |
| Card internal gap | 16–24px |
| Button height | 52–56px |
| Header height | 100px desktop |
| Trust/logo row height | 90–110px |
| Case-study row separation | 80–110px |
| Footer column gap | 48–64px |
| Footer top padding | 90–120px |
| Footer bottom padding | 32–48px |

#### Vertical rhythm
- Do not tightly pack sections.
- The design depends on generous empty black space.
- Large display text may overlap neighboring content by approximately 40–80px, but only as a deliberate decorative layer.
- Do not use random margins outside the spacing scale.

---

### 6. Visual Hierarchy

#### Primary focal point
The user’s eye should move in this order:
1. Hero H1
2. Lime second hero line
3. Lime CTA
4. Social/customer proof
5. Full-bleed photographic banner
6. Section display heading
7. Supporting paragraph
8. Cards or case-study media

#### Hero hierarchy
- The H1 is visually dominant because of its scale and high contrast.
- The second line in lime receives the strongest chromatic emphasis.
- The CTA is the dominant interactive element.
- Avatars and “200k” support the CTA without competing with it.
- Body copy remains secondary and gray.

#### Section hierarchy
- Large display headings establish section identity.
- Important words within those headings may be lime.
- Outlined words should act as texture, not as the main readable heading.
- Supporting paragraphs are smaller, gray, and aligned to the right side of editorial headers.
- CTAs remain lime but should not be repeated excessively.

#### Visual weight

| Element | Weight |
| :--- | :--- |
| Lime CTA | Highest interactive weight |
| Hero H1 / key display word | Highest content weight |
| Section H2 | High |
| Card titles | Medium-high |
| Body copy | Medium-low |
| Metadata | Low |
| Outlined background words | Deliberately low |
| Dividers and borders | Very low |

Whitespace is a major design feature. Do not fill every empty area with icons, cards, gradients, or decorations.

---

### 7. Components and UI Patterns

#### 7.1 Navbar

**Shape and structure**
- Full-width
- Transparent over hero
- Height: 100px
- No rounded container
- Thin bottom divider only

**Logo**
- Left aligned
- Lime geometric symbol beside white wordmark
- Approximate logo height: 40–48px

**Navigation links**
- Font: 14px
- Uppercase
- Weight: 500–600
- Color: `#F1F1ED`
- Gap: approximately 36–44px
- Hover/active: `#D9F45F`

**Right actions**
- Search icon: white, approximately 20–22px
- Primary CTA: lime pill with circular dark icon end

#### 7.2 Buttons
The visible button system is strongly consistent and pill-based.

**Primary button**
```css
.button-primary {
  height: 56px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px 8px 26px;
  border: 0;
  border-radius: 999px;
  background: #D9F45F;
  color: #0A0A0A;
  font-size: 15px;
  font-weight: 600;
}
```

**Circular button icon**
- Diameter: 40px
- Background: `#0A0A0A`
- Icon: lime or white
- Fully rounded

**Hover**
- Background darkens slightly to `#C8E84D`
- Icon/label may invert subtly
- No large scale effect
- No shadow

**Focus**
- Use a visible 2px white or lime outline with a small offset.

> Important: Do not invent multiple unrelated button styles. The reference primarily uses one lime primary button.

#### 7.3 Cards

**Service/blog media cards**
- Background: `#121310`
- Border: 1px solid `#2B2C29`
- Radius: 8–12px
- Media usually fills the top of the card
- Image ratio: approximately 4:3
- Dark photographic overlay
- Title: 21–26px, semibold
- Supporting text: 14–16px muted
- Internal spacing: 24–32px

**Testimonial card**
- Dark surface background
- Subtle border
- Radius: approximately 8–12px
- Padding: 32–40px
- Quote in off-white
- Author name and role in smaller gray text
- Avatars/rating remain visually secondary to the quote

**Logo tiles**
- Dark rectangular cells
- Thin border
- No strong shadow
- White or gray monochrome logos
- Approximately 5 columns on desktop
- Logo opacity around 0.6–0.8
- Hover may increase opacity and border visibility

#### 7.4 Inputs
Inputs are not clearly visible in the screenshot. If forms are necessary, use a restrained pattern consistent with the design:
```css
.input {
  height: 52px;
  padding: 0 16px;
  border: 1px solid #2B2C29;
  border-radius: 8px;
  background: #121310;
  color: #F1F1ED;
}

.input::placeholder {
  color: #74766F;
}

.input:focus {
  border-color: #D9F45F;
  outline: none;
}
```
Do not introduce light rounded forms or colorful validation styling.

#### 7.5 Links
- Default: off-white or muted gray
- Hover: lime
- Avoid permanent underlines
- Use underline for keyboard focus or small inline links
- “Read More” links can be compact and semibold

#### 7.6 Icons
- Thin geometric line icons
- Stroke width: approximately 1.5px
- Size: 18–24px
- Colors: white, gray, or lime
- Circular icon containers are fully rounded
- Do not use emoji, filled cartoon icon sets, or multicolor icons

#### 7.7 Images and avatars

**Photography**
- Full-bleed or large editorial blocks
- object-fit: cover
- Dark overlay
- No heavy frames
- Keep colors subdued beneath overlays

**Content images**
- Radius: 8–12px
- Aspect ratio:
  - Case studies: approximately 4:3
  - Blog cards: approximately 16:10
  - Service cards: approximately 4:3

**Avatars**
- Fully circular
- Border: 1–2px subtle lime or gray
- Team avatars can be large, up to 200–240px
- Customer avatars overlap slightly

#### 7.8 Section labels
Section labels are small, restrained, and often prefixed by a lime mark or cross.

Example:
```
+ ABOUT US
+ OUR SERVICES
+ TESTIMONIAL
+ AWARDS & RECOGNITION
+ FROM THE BLOG
```
Use:
- 12–13px
- Uppercase
- Letter spacing: 0.10–0.14em
- Muted or lime accent
- Not a large pill badge

#### 7.9 Marquee
The lime band is a defining graphic pattern.
- Full width
- Lime background
- Black uppercase text
- Height: approximately 56–64px
- Slight diagonal rotation, around -2deg
- Repeating service words separated by stars or asterisks
- No border, shadow, or gradient

#### 7.10 Awards list
- Use rows, not cards
- Thin separator lines
- Label: small uppercase muted text
- Award name: 20–24px semibold
- Date: small uppercase right-aligned text
- Avoid adding icons to every row

#### 7.11 Footer
- Background: `#121310`
- Large lime CTA heading
- Four-column desktop grid
- Links: 14px white/muted
- Hover: lime
- Social icons: simple circles
- Newsletter input should remain dark and minimal
- Bottom copyright bar: black or near-black, 13px gray text

---

### 8. Border Radius, Shadows, and Effects

#### Radius scale
```css
--radius-xs: 6px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
```

#### Radius rules

| Component | Radius |
| :--- | :--- |
| Hero and full-bleed images | 0 |
| Case-study images | 8–10px |
| Blog/service media cards | 8–12px |
| Testimonial panels | 8–12px |
| Inputs | 8px |
| Buttons | 999px |
| Icons/avatars | 999px |
| Logo symbols | 6–10px |

#### Shadows
The design relies more on background separation and borders than shadows.
Use shadows sparingly:
```css
--shadow-sm: 0 8px 24px rgba(0, 0, 0, 0.25);
--shadow-md: 0 16px 48px rgba(0, 0, 0, 0.35);
```
Do not use:
- White shadows
- Lime-colored shadows
- Large soft shadows on every card
- Neon glows around components

#### Effects present in the design
Acceptable effects:
- Dark image overlays
- Very subtle lime ambience
- Transparent outlined typography
- Diagonal lime divider
- Sparse white line illustrations
- Monochrome abstract 3D decoration
- Star marquee separators

Avoid:
- Glassmorphism
- Frosted panels
- Heavy blur cards
- Rainbow gradients
- Random floating shapes
- Excessive hover scaling
- Decorative particle systems

---

### 9. Responsive Design

#### Recommended breakpoints
```css
--bp-desktop: 1200px;
--bp-laptop: 1024px;
--bp-tablet: 768px;
--bp-mobile: 480px;
```

**Desktop: 1200px+**
- Container: 1170px
- Header height: 100px
- Hero H1: up to 96px
- Services/team/blog: 3 columns
- Logo wall: 5 columns
- Footer: 4 columns
- Full asymmetric layouts retained

**Laptop: 1024–1199px**
- Preserve the same design language
- Container uses calc(100% - 48px)
- Header height: 80–90px
- Reduce section padding to 96–110px
- Reduce large editorial gaps to 40px
- Hero may remain two-column until approximately 900px

**Tablet: 768–1023px**
- Hide desktop nav behind a hamburger menu
- Hero stacks into one column
- H1: approximately 56–72px
- Services/team/blog: 2 columns
- Case studies stack with image first
- Awards metadata can sit beneath titles
- Footer: 2 columns
- Section padding: 80–96px
- Container gutter: approximately 32px total

**Mobile: <768px**
- Header height: 68–72px
- Hero H1: 44–56px
- Display background words: 56–72px
- Section H2: 34–44px
- Body remains at least 16px
- All major grids become one column
- Logo wall: 2 columns
- Buttons may become full width only for primary hero CTAs
- Section padding: 56–72px
- Case image and text stack vertically
- Avoid overlapping outlined text with readable content
- Preserve a minimum touch target of 44px

---

### 10. Consistency Rules

1. Use only the specified color palette.
2. Use the same dark background on every page.
3. Use one geometric sans-serif typeface.
4. Use the same 8px spacing scale everywhere.
5. Keep all primary CTAs lime, pill-shaped, and icon-ended.
6. Use only small radius values for media and panels.
7. Use thin dark borders instead of conspicuous shadows.
8. Keep all images dark, subdued, and consistently treated.
9. Use uppercase only for display, labels, and navigation.
10. Keep paragraphs gray and compact in width.
11. Reserve lime for one or two focal elements per viewport.
12. Do not mix glassmorphism, skeuomorphism, or flat colorful cards.
13. Use outlined typography only for display/background words.
14. Keep section spacing generous.
15. Use consistent hover behavior:
    - Text: white → lime
    - Primary button: lime → slightly darker lime
    - Borders: subtle dark border → lime-tinted border
16. Never let decorative typography reduce readability.
17. Keep the same design language across home, inner pages, cards, and footer.

---

### 11. Design Tokens

```css
:root {
  /* Colors */
  --color-primary: #D9F45F;
  --color-primary-hover: #C8E84D;
  --color-primary-subtle: rgba(217, 244, 95, 0.12);
  --color-on-primary: #0A0A0A;

  --color-background: #0A0A0A;
  --color-surface: #121310;
  --color-surface-raised: #181A17;

  --color-text: #F1F1ED;
  --color-text-strong: #FFFFFF;
  --color-text-muted: #A0A19A;
  --color-text-dim: #74766F;

  --color-border: #2B2C29;
  --color-border-subtle: #1D1E1B;

  --color-outline-text: rgba(255, 255, 255, 0.14);
  --color-overlay: rgba(10, 10, 10, 0.72);

  /* Typography */
  --font-family: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;

  --font-size-display: clamp(72px, 9vw, 140px);
  --font-size-h1: clamp(52px, 7vw, 96px);
  --font-size-h2: clamp(40px, 4.5vw, 64px);
  --font-size-h3: clamp(28px, 3vw, 36px);
  --font-size-h4: clamp(21px, 2vw, 26px);
  --font-size-lead: 18px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  --font-size-caption: 13px;

  --line-height-display: 0.95;
  --line-height-heading: 1.1;
  --line-height-body: 1.65;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-caps: 0.12em;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Layout */
  --container-max: 1170px;
  --container-gutter: 24px;
  --grid-columns: 12;
  --grid-gap: 24px;

  --header-height: 100px;
  --section-space: 120px;
  --section-space-tablet: 88px;
  --section-space-mobile: 64px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 80px;
  --space-11: 96px;
  --space-12: 120px;
  --space-13: 160px;

  /* Components */
  --button-height: 56px;
  --button-padding-inline: 26px;
  --button-icon-size: 40px;
  --card-padding: 32px;
  --marquee-height: 56px;

  /* Radius */
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-none: none;
  --shadow-sm: 0 8px 24px rgba(0, 0, 0, 0.25);
  --shadow-md: 0 16px 48px rgba(0, 0, 0, 0.35);

  /* Motion */
  --transition-fast: 160ms ease;
  --transition-base: 220ms ease;

  /* Breakpoints */
  --bp-desktop: 1200px;
  --bp-laptop: 1024px;
  --bp-tablet: 768px;
  --bp-mobile: 480px;
}
```

#### Core utility patterns
```css
.container {
  width: calc(100% - (var(--container-gutter) * 2));
  max-width: var(--container-max);
  margin-inline: auto;
}

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
}

.display-outline {
  color: transparent;
  -webkit-text-stroke: 1px var(--color-outline-text);
}

.primary-button {
  min-height: var(--button-height);
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--button-padding-inline);
  border: 0;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-on-primary);
  font: 600 15px/1 var(--font-family);
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.primary-button:hover {
  background: var(--color-primary-hover);
}

.primary-button:focus-visible {
  outline: 2px solid var(--color-text-strong);
  outline-offset: 3px;
}
```

---

### 12. Rules for Claude Code

Implement the website using the following rules:

1. Use the dark design system only. Do not introduce a light theme or unrelated visual language.
2. Use the supplied design tokens as the source of truth. Prefer CSS custom properties over hard-coded values.
3. Use a near-black page background of #0A0A0A. Do not place the main content on white or light-gray sections.
4. Use #D9F45F as the only interface accent. Do not add blue, purple, orange, red, pink, or cyan UI colors.
5. Use one geometric sans-serif family. Recommended: Plus Jakarta Sans; fallback: Inter, system-ui, sans-serif.
6. Follow the typography hierarchy exactly. Do not randomly enlarge body text or shrink headings outside the defined scale.
7. Preserve oversized uppercase display typography. Use outlined type only for decorative background words.
8. Use a maximum container width of approximately 1170px. Maintain consistent side gutters on every section.
9. Use a 12-column grid and the specified spacing scale. Do not use arbitrary one-off margins.
10. Use generous section spacing. Most desktop sections should have roughly 110–130px vertical padding.
11. Use one primary button style: lime, black text, pill-shaped, approximately 56px high, with a circular dark icon end.
12. Do not invent multiple button styles. If another action is absolutely necessary, derive it from the existing border and color tokens.
13. Use thin dark borders and subtle elevation. Avoid heavy shadows and colored glows.
14. Use 8–12px radii for content images and panels. Use fully rounded radii only for buttons, avatars, and circular icons.
15. Treat all photography consistently: object-fit: cover, dark overlay, subdued contrast, no bright frames.
16. Keep hero and full-bleed banners edge-to-edge. Do not put them inside rounded page containers.
17. Stack sections on tablet and mobile. Preserve the same dark theme, type hierarchy, spacing rhythm, and component appearance.
18. Convert all major grids to one column below approximately 768px.
19. Replace desktop navigation with a dark mobile menu below approximately 1024px.
20. Keep interactive states consistent:
    - Navigation and links: white/gray to lime
    - Primary buttons: lime to slightly darker lime
    - Inputs and cards: subtle border to lime border
21. Do not add unnecessary animations. If motion is used, keep it limited to a horizontal marquee and subtle 160–220ms hover transitions.
22. Do not add glassmorphism, heavy blur, particle effects, decorative gradients, or random floating shapes.
23. Do not change colors, spacing, typography, or component styling from page to page.
24. Use sufficient contrast for accessibility. Body text should remain at least 16px, and all text/background combinations should meet WCAG AA.
25. When uncertain, match the screenshot’s restraint: fewer colors, fewer borders, fewer effects, more negative space.

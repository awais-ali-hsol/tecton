# Website Design System / Style Guide
## Fresh Premium Light Theme — "Editorial Light" (v2)

> **Change summary (v1 → v2):** The previous system was a near-black "acid-lime agency" theme.
> This version replaces it with a fresh, light, premium visual identity synthesized from the
> reference screenshots: the warm off-white canvas + rounded cards + soft shadows of the
> real-estate and flight references, and the bold display typography + deep forest-green
> depth of the adventure reference. Content and functionality are unchanged — only the
> visual layer is redefined below.

---

## 1. Overall Design Direction

### Design character
A light, airy, premium editorial theme with confident accent color.

**Core characteristics:**
- Warm off-white canvas with generous white space
- White floating cards with large radii and soft, warm-tinted shadows
- One confident primary accent (teal) + one energetic secondary accent (coral)
- Deep green-ink typography instead of pure black
- Occasional deep forest-green dark sections for drama and contrast
- Pill-shaped buttons, rounded image media, circular icon chips
- Asymmetric editorial headers retained from the previous system
- Oversized display typography retained, but with a fresher, lighter touch

### Mood and personality
- Fresh, modern, premium, professional
- Confident but not loud; energetic but disciplined
- Warm and approachable (coral warmth) grounded by trust (teal)

### What must not be lost (carried over from the current site)
- Huge, tight display typography and editorial two-column section headers
- Pill CTAs with circular icon ends
- Marquee band and outlined display words (restyled for the light theme)
- Full-bleed imagery and generous section spacing

### What is intentionally left behind
- Near-black page background, acid lime, thin dark borders as the main separator
- The "one dark theme everywhere" rule — replaced with a light-first system
  with dark sections used deliberately (hero option, CTA band, footer)

---

## 2. Color System

### 2.1 Primary palette

| Token | HEX | Usage |
| :--- | :--- | :--- |
| `--color-primary` | `#0E9E8C` | Teal — brand accent, icons, highlights, selection, active nav states |
| `--color-primary-strong` | `#0B7C6D` | Darker teal — primary buttons, link text, hover state (AA-safe with white text) |
| `--color-primary-soft` | `#E2F4F1` | Teal tint — icon chips, tags, badges, hover wash on light surfaces |
| `--color-accent` | `#FF6B57` | Coral — energetic secondary accent: underline marks, stars, highlights, small CTAs, marquee separators |
| `--color-accent-strong` | `#E8503C` | Coral hover/active state (large text & graphics only) |
| `--color-accent-soft` | `#FFE9E5` | Coral tint — feature callouts, promotional badges |
| `--color-ink` | `#12201B` | Deep green-black — primary text, headings, logo wordmark |
| `--color-ink-inverse` | `#FFFFFF` | Text on deep green/teal surfaces |

### 2.2 Neutrals (warm-tinted, never pure gray)

| Token | HEX | Usage |
| :--- | :--- | :--- |
| `--color-background` | `#FAF9F6` | Main page background (warm off-white) |
| `--color-surface` | `#FFFFFF` | Cards, nav bar, panels, inputs |
| `--color-surface-alt` | `#F1EFE9` | Subtle wells, alternating rows, footer newsletter field |
| `--color-border` | `#E6E3DB` | Card borders, dividers, input outlines |
| `--color-border-strong` | `#D4D0C4` | Hover borders, focused card states |
| `--color-text` | `#12201B` | Headings, high-emphasis text |
| `--color-text-muted` | `#5C6660` | Body copy, descriptions (5.9:1 on white — AA) |
| `--color-text-faint` | `#8A938D` | Captions, metadata, placeholders (large/decorative only) |

### 2.3 Dark surfaces (used deliberately, not as default)

| Token | HEX | Usage |
| :--- | :--- | :--- |
| `--color-deep` | `#123B2E` | Forest green — hero option, CTA band, footer |
| `--color-deep-raised` | `#1B4A3A` | Nested panels on deep surfaces |
| `--color-deep-text` | `#EDEAE2` | Body text on deep surfaces |
| `--color-deep-muted` | `#9DB3A9` | Muted text on deep surfaces |
| `--color-deep-border` | `#2A5646` | Borders/dividers on deep surfaces |

### 2.4 Accessibility-verified contrast (WCAG)

| Combination | Ratio | Status |
| :--- | :--- | :--- |
| Ink `#12201B` on background `#FAF9F6` | 15.98:1 | AAA |
| Ink on white surface | 16.82:1 | AAA |
| Muted `#5C6660` on white | 5.96:1 | AA |
| White on primary-strong `#0B7C6D` | 5.10:1 | AA (buttons) |
| Primary-strong `#0B7C6D` on background | 4.84:1 | AA (links) |
| Ink on coral `#FF6B57` | 6.00:1 | AA (accent chips with dark text) |
| White on deep `#123B2E` | 12.42:1 | AAA |

**Hard rules:**
- Primary buttons: `#0B7C6D` background + white text — never white on light teal `#0E9E8C`.
- Coral is never used as button background with white text. Use ink text on coral,
  or reserve coral for icons, underlines, stars, and large display words.
- Body text is always `--color-text` or `--color-text-muted` on light surfaces.
- Never place long-form text on teal/coral tints without ink text.

### 2.5 Color usage rules
- ~80% of any page is background white/off-white + white surfaces.
- Teal carries brand meaning: active states, primary actions, key icons.
- Coral carries energy: ratings, highlights, the "second" emphasis word in display headings,
  promotional moments. One teal + one coral moment per viewport maximum.
- Dark green sections appear at most 2× per page (typically hero and/or footer + one CTA band).
- Photography stays natural and bright — no heavy dark overlays in the light theme;
  deep sections may use a subtle green gradient overlay at most.

---

## 3. Typography

### Font family
```css
font-family: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
```
One family for everything. Optionally use **Space Grotesk** as the display face for
giant headings/marquee if a slightly more technical character is wanted.

### Type scale

| Level | Size | Weight | Line height | Case / tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hero H1 | `clamp(44px, 6vw, 80px)` | 700 | 1.0–1.05 | Sentence or uppercase, -0.02em | Hero statement |
| Display background word | `clamp(64px, 8vw, 120px)` | 700 | 1.0 | Uppercase, -0.02em | Decorative giant words |
| H2 | `clamp(34px, 4vw, 56px)` | 700 | 1.1 | Sentence | Section headings |
| H3 | `clamp(24px, 2.6vw, 32px)` | 600 | 1.15 | Sentence | Feature headings |
| H4 / card title | `clamp(19px, 1.8vw, 24px)` | 600 | 1.25 | Sentence | Cards, case titles |
| Large stat | 48–64px | 600 | 1.0 | None | Counters, ratings |
| Lead | 18px | 400 | 1.65 | None | Section intros |
| Body | 16px | 400 | 1.65 | None | Paragraphs |
| Small | 14px | 400–500 | 1.55 | None | Metadata, roles |
| Caption / eyebrow | 12–13px | 600 | 1.2 | Uppercase, 0.12em | Section labels |
| Navigation | 14px | 600 | 1 | None | Header/footer nav |

### Typographic rules
- Display headings may mix ink + teal, or ink + coral, for the two-line emphasis
  pattern (replaces the old white/lime pattern).
- Outlined display words on light backgrounds use:
  ```css
  -webkit-text-stroke: 1px rgba(18, 32, 27, 0.14);
  color: transparent;
  ```
- On deep green surfaces, outlined words use `rgba(255,255,255,0.14)`.
- Paragraph max-width ~620px; sentence case only.
- No serif, no italics except rare editorial quotes.

---

## 4. Layout and Grid

```css
.container {
  width: calc(100% - 48px);
  max-width: 1200px;
  margin-inline: auto;
}
.grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }
```

- Editorial headers: 7 cols heading / 5 cols description+CTA (asymmetric, not centered).
- Services / team / blog: 3 columns; logo wall: 5 columns.
- Case studies: 5 cols media / 6–7 cols content.
- Section padding: 96–120px desktop, 80px tablet, 56–64px mobile.
- Cards sit on the warm background with visible soft shadows — the "floating card"
  feel from the references replaces the old thin-dark-border separation.

### Header
- Transparent over hero, sticky on scroll with `background: rgba(255,255,255,0.85)`
  + `backdrop-filter: blur(12px)` and `--color-border` bottom hairline.
- Height: 76–84px (more compact than the old 100px dark bar).
- Left logo, center nav, right pill CTA. Active nav link: teal + 2px coral underline dot.

### Hero
- **Default (light):** warm background, oversized H1 left, supporting content right,
  rounded hero image card (radius 24px) or full-bleed photo with white content below.
- **Alternate (deep):** full-bleed forest-green `#123B2E` with subtle lime→teal
  ambient glow, white text, teal pill CTA.
- Min-height 600px; content not boxed in a bordered card.

### Footer
- Deep green `#123B2E`, large white/teal "Let's Talk" heading, coral accent mark,
  4-column grid, hairline dividers in `--color-deep-border`.

---

## 5. Spacing

8px base scale: `4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120px`

| Context | Value |
| :--- | :--- |
| Section padding (desktop) | 100–120px vertical |
| Section header → content | 48–64px |
| Grid gap | 24px (32px for large editorial splits) |
| Card padding | 28–36px |
| Card internal gap | 16–24px |
| Button height | 52–56px |
| Header height | 80px |
| Card row separation | 64–96px |

---

## 6. Border Radius, Shadows, Effects

### Radius (larger and softer than v1)
```css
--radius-sm: 10px;   /* small chips, tags */
--radius-md: 16px;   /* cards, inputs, images */
--radius-lg: 24px;   /* hero media, feature panels */
--radius-pill: 999px;/* buttons, avatars, icon chips */
```

### Shadows (soft, warm-tinted — replace dark borders as primary separator)
```css
--shadow-sm: 0 2px 8px rgba(18, 32, 27, 0.06);
--shadow-md: 0 8px 28px rgba(18, 32, 27, 0.10);
--shadow-lg: 0 16px 48px rgba(18, 32, 27, 0.14);
```
- Cards default: `--shadow-sm` + 1px `--color-border`; hover: `--shadow-md`.
- No colored (teal/coral) glows except a very restrained teal ambient in hero.
- Dividers are 1px `--color-border` hairlines, never heavy.

---

## 7. Components

### 7.1 Buttons
One primary, one secondary, one text link — derived from the same tokens.

```css
/* Primary — teal, white text, pill, circular white-icon end */
.button-primary {
  height: 56px; padding: 8px 8px 8px 28px; border: 0;
  border-radius: 999px; background: #0B7C6D; color: #fff;
  font: 600 15px/1 "Plus Jakarta Sans", sans-serif;
  box-shadow: 0 8px 20px rgba(11, 124, 109, 0.28);
}
.button-primary .icon-end {
  width: 40px; height: 40px; border-radius: 50%;
  background: #fff; color: #0B7C6D; /* inverted chip */
}
.button-primary:hover { background: #0A6E60; transform: translateY(-2px); }
.button-primary:active { transform: translateY(0); }

/* Secondary — white surface, ink text, teal icon chip */
.button-secondary {
  height: 56px; padding: 8px 8px 8px 28px;
  border-radius: 999px; background: #fff; color: #12201B;
  border: 1px solid #E6E3DB; box-shadow: var(--shadow-sm);
}
.button-secondary .icon-end { background: #E2F4F1; color: #0B7C6D; }
.button-secondary:hover { border-color: #0E9E8C; }

/* Accent variant (promotional only) — coral bg + ink text */
.button-accent { background: #FF6B57; color: #12201B; }
.button-accent:hover { background: #F25A46; }
```

### 7.2 Cards
- Background `#FFFFFF`, radius 16px, border 1px `--color-border`, shadow `--shadow-sm`.
- Media tops the card with same-radius top corners (overflow hidden), ratio 4:3 or 16:10.
- Category tag: pill chip in `--color-primary-soft` with `--color-primary-strong` text (teal),
  or `--color-accent-soft` with coral-deep text for promos.
- Hover: shadow `--shadow-md`, border `--color-border-strong`, image scale 1.04 (300ms ease),
  title turns `--color-primary-strong`.
- Team cards: media dominant, name in ink, role in muted, social icon chips appear on hover.

### 7.3 Inputs
```css
.input {
  height: 52px; padding: 0 18px; border-radius: 12px;
  border: 1px solid #E6E3DB; background: #fff; color: #12201B;
  font-size: 15px;
}
.input::placeholder { color: #8A938D; }
.input:hover { border-color: #D4D0C4; }
.input:focus { border-color: #0E9E8C; box-shadow: 0 0 0 4px rgba(14,158,140,0.15); outline: none; }
```

### 7.4 Navigation
- Links: 14–15px, 600, `--color-text`; hover/active: `--color-primary-strong`.
- Active state: teal text + coral 6px dot beneath (teal+coral pairing signature).
- Mobile (<1024px): hamburger → full-screen deep-green menu, white links, teal CTA.

### 7.5 Badges / tags / ratings
- Rating stars: coral `#FF6B57` (replaces lime stars).
- Numeric badges (notification dot): coral bg + white text.
- Service icon chips: 56px circle, `--color-primary-soft` bg, teal 22px line icon (1.5px stroke).

### 7.6 Marquee (restyled)
- White surface band, 1px top/bottom `--color-border`, ink uppercase text,
  teal asterisk/star separators, subtle tilt -1.5deg.
- Dark-section variant: deep green band, white text, coral separators.

### 7.7 Awards / lists
- Row list with hairline dividers; award name 600 ink; year right-aligned in muted.
- A small teal trophy/line icon (20px) may prefix each row.

### 7.8 Section labels
- `+ WHAT WE DO` pattern retained: 12–13px, 600, uppercase, 0.12em tracking, `--color-text-faint`,
  with a teal `+` or coral `+` alternating per section.

---

## 8. Hover / Active / Focus States (summary)

| Element | Default | Hover | Active/Focus |
| :--- | :--- | :--- | :--- |
| Nav links / text links | ink / muted | teal-strong; coral dot on nav | 2px teal outline (focus-visible) |
| Primary button | teal-strong bg | darker teal, lift -2px, shadow grows | returns to rest position |
| Secondary button | white, hairline border | teal border, teal icon chip | — |
| Cards | shadow-sm, border | shadow-md, media scale, teal title | 2px teal outline |
| Inputs | hairline border | border-strong | teal border + 4px teal ring |
| Logo wall tiles | grayscale, 70% opacity | full color, shadow-sm | — |

All transitions 160–220ms ease. No parallax, no scroll-jacking, no particle effects.

---

## 9. Responsive Guidelines

| Breakpoint | Key behavior |
| :--- | :--- |
| ≥1200px | Full 3/5-col grids, 1200px container, section padding 100–120px |
| 1024–1199px | Same language; nav may collapse at 1080px; padding 88–96px |
| 768–1023px | Hamburger menu; hero stacks; grids → 2 cols; footer 2 cols; padding 80px |
| <768px | Single column everywhere; H1 40–48px; logo wall 2 cols; buttons full-width in hero only; padding 56–64px; touch targets ≥44px |

---

## 10. Design Tokens (drop-in `:root`)

```css
:root {
  /* Color */
  --color-background: #FAF9F6;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F1EFE9;
  --color-border: #E6E3DB;
  --color-border-strong: #D4D0C4;

  --color-text: #12201B;
  --color-text-muted: #5C6660;
  --color-text-faint: #8A938D;

  --color-primary: #0E9E8C;
  --color-primary-strong: #0B7C6D;
  --color-primary-soft: #E2F4F1;
  --color-accent: #FF6B57;
  --color-accent-strong: #E8503C;
  --color-accent-soft: #FFE9E5;

  --color-deep: #123B2E;
  --color-deep-raised: #1B4A3A;
  --color-deep-text: #EDEAE2;
  --color-deep-muted: #9DB3A9;
  --color-deep-border: #2A5646;

  --color-outline-ink: rgba(18, 32, 27, 0.14);
  --color-outline-light: rgba(255, 255, 255, 0.14);

  /* Typography */
  --font-family: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --font-size-h1: clamp(44px, 6vw, 80px);
  --font-size-h2: clamp(34px, 4vw, 56px);
  --font-size-h3: clamp(24px, 2.6vw, 32px);
  --font-size-h4: clamp(19px, 1.8vw, 24px);
  --font-size-lead: 18px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  --font-size-caption: 13px;
  --line-height-display: 1.02;
  --line-height-body: 1.65;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-caps: 0.12em;

  /* Layout */
  --container-max: 1200px;
  --grid-gap: 24px;
  --header-height: 80px;
  --section-space: 110px;
  --section-space-mobile: 60px;

  /* Radius */
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(18, 32, 27, 0.06);
  --shadow-md: 0 8px 28px rgba(18, 32, 27, 0.10);
  --shadow-lg: 0 16px 48px rgba(18, 32, 27, 0.14);

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

---

## 11. Consistency Rules (updated)

1. Light-first: background/surface neutrals dominate; deep green only for hero/CTA/footer moments.
2. Teal = brand & actions; coral = energy & highlights; never a third UI hue.
3. One typeface, one type scale, 8px spacing scale everywhere.
4. All CTAs are pill-shaped with a circular icon chip end.
5. Cards are white, rounded 16px, hairline border + soft shadow — no dark bordered tiles.
6. Photography is bright and natural; no heavy dark overlays.
7. Hover: lift + shadow deepen + accent shift (ink → teal). No scale beyond 1.04 on media.
8. Body text ≥16px, muted minimum `#5C6660` on light surfaces.
9. Same visual language across home, inner pages, and footer.
10. When uncertain, add white space — not more color.

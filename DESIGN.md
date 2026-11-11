# WebRajya Design System (DESIGN.md)

This document is the single source of truth for WebRajya's user interface design, styling tokens, component guidelines, motion principles, and accessibility standards.

---

## 1. Brand Identity & Design Direction

- **Core Aesthetic**: Clean, light, professional, and friendly. Built for Indian retail shop owners, restaurant operators, and enterprise businesses.
- **Backgrounds**: Soft warm neutrals (`#F8F3EB` / `#FAFAF9`) and crisp clean whites (`#FFFFFF`).
- **Primary Goal**: Demo bookings for **WebRajya Invoice** (lead product) and **WebRajya POS** (high-speed restaurant/retail billing).
- **Core Principles**:
  - High legibility on mobile devices under bright sunlight.
  - Generous whitespace, rounded modern corners, soft subtle elevation.
  - 100% offline-first reliability reflected through sturdy, snappy UI without heavy bloat.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token | Hex / CSS Var | Semantic Usage |
|---|---|---|
| `Primary` | `#020C2B` / `--wr-primary` | Deep navy for primary headings, brand accents, and authoritative buttons |
| `Secondary / Accent` | `#E58145` / `--wr-secondary` | Warm orange/coral for conversion-focused CTAs ("Book a Free Demo", Key highlights) |
| `Invoice Blue` | `#2563EB` | Product accent for WebRajya Invoice badges, highlights, and borders |
| `POS Amber` | `#D97706` | Product accent for WebRajya POS badges and highlights |
| `MyGarage Forest` | `#059669` | Product accent for WebRajya MyGarage badges and workshop features |
| `Background Base` | `#F8F3EB` / `--wr-background` | Warm paper tone used across page backgrounds |
| `Card White` | `#FFFFFF` | Surface container for content cards, dialogs, and tables |
| `Muted Border` | `#E2E8F0` / `#E5E7EB` | Subtle structural division lines |
| `Muted Text` | `#64748B` / `#475569` | Secondary captions, subheadings, and meta labels |
| `Success Green` | `#16A34A` | Verification badges, checked feature icons, and status indicators |

### 2.2 Typography

Typography is self-hosted via `next/font` for zero layout shift (CLS) and fast offline performance:

- **Primary Font**: `Plus Jakarta Sans` (`font-sans`)
  - Body text: `16px` – `18px` with `1.6` line-height for effortless scanning.
  - Headings: Bold / ExtraBold weights with tight letter-spacing (`tracking-tight`).
- **Devanagari Fallback**: `Noto Sans Devanagari`
  - Ensures clean rendering of Hindi and Devanagari phrases.
- **Monospace Font**: `JetBrains Mono` (`font-mono`)
  - Used for prices (e.g., `₹5,999`), technical badges, GST specifications, and keyboard hotkeys.

### 2.3 Spacing & Radius

- **Radius**: Default `rounded-xl` (`0.75rem` / `12px`) and `rounded-2xl` (`1rem` / `16px`) for cards and interactive surfaces.
- **Pill Radius**: `rounded-full` for badges, tags, and small pill buttons.
- **Spacing Scale**:
  - Micro: `gap-1.5` (6px), `gap-2` (8px), `gap-3` (12px)
  - Card padding: `p-6` (24px) on mobile, `p-8` (32px) on desktop
  - Section vertical rhythm: `py-16 sm:py-24` (64px to 96px)

---

## 3. Component System (shadcn / Base UI)

All UI primitives reside in `@/components/ui/` and leverage Base UI primitives and `cva` (Class Variance Authority):

### 3.1 Button (`src/components/ui/button.tsx`)
- Supports both `<button>` and Next.js `<Link>` (`href` prop) polymorphically.
- **Variants**:
  - `primary`: Solid deep navy (`bg-[#020C2B] text-white hover:bg-[#020C2B]/90`).
  - `cta`: High-contrast orange (`bg-[#E58145] text-white hover:bg-[#D47134] shadow-md hover:shadow-lg`).
  - `secondary`: Clean neutral light surface (`bg-white/80 border border-slate-200 text-slate-900`).
  - `outline`: Bordered with brand contrast (`border-[#020C2B]/20 text-[#020C2B]`).
  - `invoice`: Solid Invoice Blue (`bg-[#2563EB] text-white`).
  - `pos`: Solid POS Amber (`bg-[#D97706] text-white`).
  - `ghost`: Transparent for header links and icon triggers.

### 3.2 Badge (`src/components/ui/badge.tsx`)
- Distinct semantic status pills:
  - `brand`: Navy pill with soft border.
  - `invoice`: Soft blue background (`bg-blue-50 text-blue-700 border-blue-200`).
  - `pos`: Soft amber background (`bg-amber-50 text-amber-700 border-amber-200`).
  - `mygarage`: Soft emerald background (`bg-emerald-50 text-emerald-700 border-emerald-200`).
  - `neutral`: Soft slate badge.

### 3.3 Cards & Surfaces
- Clean white card (`bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow`).
- Feature cards with 24-32px padding and consistent icon badges at the top-left.

### 3.4 Accordion (FAQ)
- Built on Base UI `Accordion` with smooth collapsible states, accessible keyboard controls, and clear `ChevronDown` orientation.

### 3.5 Table (Comparison)
- Built on shadcn `Table` primitives with sticky headers, mobile-horizontal scroll wrapper, and clear checkmark / dash states.

---

## 4. Motion Guidelines

Subtle, high-performance animation guidelines:

1. **Duration**: Fast transitions between `200ms` and `400ms`. Never exceed `500ms`.
2. **Properties**: Animate **only** `transform` and `opacity`. Never animate `height`, `width`, `margin`, or `left/top` to prevent layout thrashing.
3. **Above the Fold**: No entrance animations on critical hero text or primary headings that delay content reading.
4. **Reduced Motion**: All animations must respect `prefers-reduced-motion` using Tailwind's `motion-reduce:transition-none` or Motion's `useReducedMotion()`.
5. **Permitted Motion Components**:
   - `DotPattern`: Lightweight SVG background pattern from Magic UI.
   - `Marquee`: Pure CSS keyframe horizontal ticker for verified customer proof.
   - `NumberTicker`: Fast counter for real stats (<3 sec billing speed, 100% offline).
   - Micro-interactions: Button tap `scale-[0.98]` and subtle hover elevations.

---

## 5. Visual Asset Guidelines

1. **Product Screenshots**:
   - Real product counter UIs and dashboards must use real screenshots with explicit aspect ratios and `next/image` lazy loading.
   - Never replace actual product screenshots with generic clip art or illustrations.
2. **Illustrations (unDraw)**:
   - Used **only** as secondary supporting elements for:
     - "How it works" onboarding steps.
     - Contact & Support empty states.
     - Empty states or error boundaries.
   - All SVGs are recolored to WebRajya brand tokens (`#020C2B`, `#E58145`, `#2563EB`) and saved locally in `/public/illustrations/`. Zero external hotlinking.
3. **Icons**:
   - Exclusively `lucide-react` for standard 1.75px–2px stroke weight consistency across the application.

---

## 6. Do's and Don'ts

### Do:
- Always use the centralized `PRICING_CONFIG` from `src/config/pricing.ts` for any pricing numbers or labels.
- Format all prices in Indian Rupee notation (e.g., `₹5,999`, `₹25,999`).
- Ensure all forms use Base UI / shadcn `Input`, `Label`, and provide explicit error states.
- Support deep linking (e.g., `/pricing?product=pos` and `/demo?product=invoice&plan=yearly`).
- Keep all interactive targets at least 44x44px for touch accessibility on mobile devices.

### Don't:
- Do NOT use heavy 3D WebGL / Spline scenes or video backgrounds that degrade mobile performance on 4G networks.
- Do NOT invent fake customer reviews, ratings, testimonials, or pricing discounts.
- Do NOT hardcode pricing numbers in JSX components.
- Do NOT animate critical above-the-fold content that delays user comprehension.
- Do NOT use more than 2 animation libraries.

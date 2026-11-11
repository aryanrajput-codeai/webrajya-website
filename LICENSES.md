# Open Source Licenses & Attribution — WebRajya

This document tracks all external open-source libraries, design assets, and component architectures used across the WebRajya platform, confirming their commercial compatibility and licensing terms.

---

## 1. Component Libraries & Primitives

### shadcn/ui
- **Repository / Website**: https://ui.shadcn.com | https://github.com/shadcn-ui/ui
- **License**: MIT License
- **Commercial Use**: Permitted without restriction.
- **Scope**: Reusable UI components (Button, Card, Badge, Tabs, Accordion, Sheet, Dialog, Form, Input, Select, Toggle Group, Table, Tooltip).

### Radix UI Primitives (`@radix-ui/*`)
- **Repository / Website**: https://www.radix-ui.com
- **License**: MIT License
- **Commercial Use**: Permitted without restriction.
- **Scope**: Headless accessible primitives powering shadcn/ui components with full WAI-ARIA compliance.

---

## 2. Animation & Interaction

### Motion (`motion`, formerly Framer Motion)
- **Repository / Website**: https://motion.dev | https://github.com/motiondivision/motion
- **License**: MIT License
- **Commercial Use**: Permitted without restriction.
- **Scope**: Micro-interactions, spring transitions, layout transitions, and scroll reveals respecting `prefers-reduced-motion`.

---

## 3. Polished Visual Patterns

### Magic UI
- **Repository / Website**: https://magicui.design | https://github.com/magicuidesign/magicui
- **License**: MIT License
- **Commercial Use**: Permitted without restriction.
- **Scope**: Selected lightweight visual components:
  1. Subtle Dot/Grid Background Pattern (`DotPattern` / `GridPattern`)
  2. Testimonial / Logo Marquee (`Marquee`)
  3. Real Statistic Number Ticker (`NumberTicker`)
  4. Interactive Bento Grid Card (`BentoCard`)

---

## 4. Iconography

### Lucide React (`lucide-react`)
- **Repository / Website**: https://lucide.dev | https://github.com/lucide-icons/lucide
- **License**: ISC License
- **Commercial Use**: Permitted without restriction.
- **Scope**: System-wide icons across navigation, features, pricing, and actions.

---

## 5. Visual Illustrations

### unDraw
- **Website**: https://undraw.co
- **License**: unDraw Open-Source License (MIT equivalent)
- **Commercial Use**: Permitted for commercial and personal use without mandatory attribution. Custom recolored to WebRajya brand tokens (`#020C2B`, `#E58145`).
- **Scope**: Empty states, workflow steps, support/about illustrations. Stored locally in `/public/illustrations/`.

---

## 6. Location & Maps

### MapCN / OpenStreetMap Embed
- **License**: Open Data Commons Open Database License (ODbL) / BSD-2-Clause
- **Commercial Use**: Permitted with map data attribution © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
- **Scope**: Jabalpur, Madhya Pradesh office location on `/contact` and `/about`.

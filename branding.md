# Home Mart Premium Brand Playbook

## Purpose of This File
This document is the single source of truth for brand direction, design decisions, and implementation standards for this Shopify store. All future design, UX, content, and theme updates must follow these rules unless an explicit version update is approved.

## 1. Brand Essence

### Mission Statement
To elevate everyday living through timeless, high-quality home essentials curated for refined spaces and modern routines.

### Core Brand Pillars
1. Elevated Utility
Products must combine practical daily function with premium craftsmanship and design sensibility.
2. Timeless Curation
Selections prioritize longevity, understated elegance, and materials that age beautifully over trend-driven novelty.
3. Quiet Exclusivity
Every touchpoint should feel considered, intentional, and premium without being loud or flashy.

## 2. Target Audience
Our core customer is a design-aware, quality-first buyer aged 28-55 with mid-to-high disposable income, typically urban or affluent suburban, and actively investing in home aesthetics. They value material quality, craftsmanship, and coherent interior styling. They prefer buying fewer, better products, expect seamless digital experiences, and are willing to pay for trust, service, and elevated presentation.

## 3. Visual Identity

### Primary Color Palette (Premium Direction)
- Porcelain White: #F7F5F2 (primary background)
- Warm Ivory: #EFE9E1 (secondary background)
- Graphite: #2F3133 (primary text)
- Deep Olive: #3F4A3C (premium accent)
- Aged Brass: #B08A57 (luxury highlight, sparing use)
- Soft Stone: #C8C2B8 (borders, dividers, subtle UI surfaces)

Usage ratio guideline:
- 70% neutrals (Porcelain White, Warm Ivory)
- 20% dark structure (Graphite, Deep Olive)
- 10% highlight (Aged Brass and Soft Stone)

### Typography Pairing
- Heading Serif: "Cormorant Garamond", serif
- Body Sans-Serif: "Manrope", sans-serif

Fallbacks:
- Headings: "Times New Roman", serif
- Body: "Helvetica Neue", Arial, sans-serif

Type behavior:
- Headings: generous letter spacing, medium weight, large line-height rhythm
- Body: clean and readable, 16px minimum, 1.5 to 1.7 line height
- Buttons/labels: uppercase optional, but avoid aggressive spacing

### Photography Style
- Lighting: soft natural light or diffused studio light; avoid harsh shadows and overexposure
- Mood: calm, editorial, tactile, and aspirational
- Composition: intentional negative space, layered textures, close-up material detail, and styled lifestyle context
- Color treatment: warm-neutral grading, low saturation spikes, true material rendering
- Product framing: premium crops, no cluttered backgrounds, no noisy props

## 4. Brand Voice and Tone

### Voice Principles
- Sophisticated: confident, concise, and polished
- Warmly Expert: informative without being technical or cold
- Understated Luxury: refined language, never hype-driven

### Tone Rules
- Avoid discount language ("cheap", "best deal", "hurry")
- Emphasize craftsmanship, materials, longevity, and experience
- Keep copy clear and elegant; no exaggerated claims

### Product Description Examples (Premium vs Discount)
1. Premium: "Hand-finished ceramic canister with a matte glaze and airtight seal, designed to preserve freshness while elevating countertop aesthetics."
   Discount: "Affordable ceramic container, great value, grab now before stock ends."

2. Premium: "Crafted from solid acacia wood, this serving board offers rich grain character and a balanced silhouette for everyday hosting."
   Discount: "Budget serving board for daily use at a low price."

3. Premium: "A softly weighted linen table runner that brings texture, depth, and a composed dining atmosphere to every setting."
   Discount: "Simple table runner on sale, good quality for the price."

## 5. UI/UX Guidelines

1. Whitespace as a Luxury Signal
Use generous spacing between sections, cards, and text blocks. Never crowd content.

2. Mobile-First Layout Discipline
Design for small screens first; prioritize thumb reach, clear hierarchy, and quick visual scanning.

3. Product Grid Rule (Non-Negotiable)
Mobile collection/product listings must support 3 items per row where legibility and image quality remain intact.
- Minimum touch target remains 44px for interactive elements.
- Maintain consistent image aspect ratio and avoid text overlap.

4. Elegant Interaction Design
Use subtle hover/focus transitions (150-250ms), soft elevation shifts, and restrained color changes. Avoid flashy or bouncy effects.

5. Premium Component Styling
Buttons, cards, and inputs should feel tailored: soft radii, refined borders, clear states, and consistent typography. No overly saturated CTA colors.

## Shopify Theme Implementation Rules (Compatibility and Backend Safety)

These are mandatory to ensure full Shopify compatibility.

1. Respect Shopify Data Contracts
- Use Liquid objects and filters as intended (`product`, `collection`, `cart`, `money` filters, `routes`).
- Do not hardcode product, variant, or cart data that should come from Shopify objects.

2. Preserve Theme Editor Compatibility
- Keep schema-driven settings in section/block JSON schema.
- Make UI controls configurable via theme settings where appropriate (spacing, colors, typography scale).
- Avoid breaking section presets and block limits.

3. Keep App and Backend Integrations Safe
- Do not remove required Shopify form attributes (`form 'product'`, `name="id"`, quantity inputs, line item properties).
- Preserve cart APIs and storefront form behaviors.
- Maintain compatibility with Shopify translations (`locales`) and currency formatting.

4. Performance and Accessibility Baseline
- Optimize assets, lazy-load media where appropriate, and avoid unnecessary JS execution.
- Ensure semantic HTML, visible focus states, keyboard support, and strong contrast.

5. Upgrade-Friendly Code Practices
- Prefer additive, modular changes over destructive rewrites.
- Keep classes/components reusable and naming consistent.
- Document major UI pattern decisions in this file when standards evolve.

## Premium Storefront Execution Checklist
- Mobile-first layouts are implemented and tested first
- Mobile product grid supports 3 columns without usability regression
- Typography and color palette follow this document exactly
- Product imagery and copy reflect premium positioning
- Shopify product/cart/variant workflows remain fully functional
- Theme editor settings remain stable and intuitive
- Accessibility and performance checks pass before release

## Governance for Future Sessions
When making any new theme change, the assistant must:
1. Read this file before proposing design or UX updates.
2. Prioritize premium look and feel over generic templates.
3. Enforce the mobile 3-per-row product grid rule unless explicitly overruled.
4. Keep all changes Shopify-compatible, including backend flows and theme editor controls.
5. Update this document when brand rules materially change.

## Version
- Version: 1.0
- Date: 2026-07-14
- Owner: Home Mart Brand and UX Direction

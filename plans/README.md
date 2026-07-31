# Animation Improvement Plans — [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html)

This directory contains self-contained, machine-executable implementation plans produced by the `improve-animations` skill audit of [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html) and [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).

## Master Roadmap & Plan Status

| Plan | Title | Severity | Category | Status | Dependencies |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [`001-button-press-feedback.md`](file:///Users/user/Documents/workshop/wireframe-samuel/plans/001-button-press-feedback.md) | Add Tactile Button Press Feedback | **HIGH** | Purpose & frequency | **DONE** | None |
| [`002-dropdown-transform-origin.md`](file:///Users/user/Documents/workshop/wireframe-samuel/plans/002-dropdown-transform-origin.md) | Dropdown Menu Transform Origin Alignment | **MEDIUM** | Physicality & origin | **DONE** | None |
| [`003-hero-press-release-sync.md`](file:///Users/user/Documents/workshop/wireframe-samuel/plans/003-hero-press-release-sync.md) | Synchronize Hero Press Release Card & Icon Hover | **MEDIUM** | Cohesion & tokens | **DONE** | None |
| [`004-sustainability-stagger-tightening.md`](file:///Users/user/Documents/workshop/wireframe-samuel/plans/004-sustainability-stagger-tightening.md) | Tighten Sustainability Scroll Reveal Stagger | **LOW** | Easing & duration | **DONE** | None |
| [`005-mobile-drawer-entrance.md`](file:///Users/user/Documents/workshop/wireframe-samuel/plans/005-mobile-drawer-entrance.md) | Add Fluid Top-Edge Physics to Mobile Drawer | **MEDIUM** | Interruptibility & spatial entry | **DONE** | Plan 001 (shared CSS tokens) |

## Recommended Execution Order

1. **Plan 001** (`HIGH` severity) — Establishes core timing tokens (`--ease-out`) and `:active` press feedback for all primary CTAs.
2. **Plan 002** (`MEDIUM` severity) — Aligns dropdown menu scale origins to navbar trigger buttons.
3. **Plan 003** (`MEDIUM` severity) — Locks hero press release card lift and inner arrow icon shift into 220ms synchronization.
4. **Plan 005** (`MEDIUM` severity) — Upgrades mobile menu drawer toggle to fluid top-edge spring physics.
5. **Plan 004** (`LOW` severity) — Tightens ESG sustainability scroll reveals from 480ms delays to 40ms stagger steps.

---

To execute any plan automatically, run:
`/improve-animations execute <plan-file-path>`

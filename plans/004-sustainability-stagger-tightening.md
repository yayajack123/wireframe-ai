# 004 — Tighten Sustainability Scroll Reveal Stagger

- **Status**: DONE
- **Commit**: HEAD
- **Severity**: LOW
- **Category**: Easing & duration / Cohesion
- **Estimated scope**: 1 file (`style.css`), ~20 lines

## Problem

The ESG Sustainability section items (`.sustainability-reveal`) stagger entrance delays up to `0.48s` (480ms) when scrolled into view. This creates a sluggish, lagging feeling where the user has already scrolled past the section before the last card finishes appearing.

Current code in [`style.css:288-319`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css#L288-L319):

```css
/* style.css:288 — current */
.sustainability-reveal-delay-1 { transition-delay: 0.12s; }
.sustainability-reveal-delay-2 { transition-delay: 0.24s; }
.sustainability-reveal-delay-3 { transition-delay: 0.36s; }
.sustainability-reveal-delay-4 { transition-delay: 0.48s; }
```

## Target

Tighten stagger step delays to 40ms increments (`0.04s`, `0.08s`, `0.12s`, `0.16s`) and shorten total reveal duration to 350ms using `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`.

Target CSS:

```css
/* target */
.sustainability-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 350ms cubic-bezier(0.16, 1, 0.3, 1), transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
}

.sustainability-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.sustainability-reveal-delay-1 { transition-delay: 0.04s; }
.sustainability-reveal-delay-2 { transition-delay: 0.08s; }
.sustainability-reveal-delay-3 { transition-delay: 0.12s; }
.sustainability-reveal-delay-4 { transition-delay: 0.16s; }

@media (prefers-reduced-motion: reduce) {
  .sustainability-reveal {
    transition: opacity 200ms ease-out;
    transform: none !important;
    transition-delay: 0s !important;
  }
}
```

## Repo conventions to follow

- Decorative stagger step budget: 30–80ms per item (using optimal 40ms step).
- Reduced-motion fallback dropping position transform and delay completely.

## Steps

1. Open [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
2. Locate `.sustainability-reveal-delay-*` classes around lines 288–319.
3. Update `transition-delay` values to `0.04s`, `0.08s`, `0.12s`, and `0.16s`.
4. Update `.sustainability-reveal` base duration from `0.6s` to `350ms cubic-bezier(0.16, 1, 0.3, 1)`.

## Boundaries

- Do NOT touch IntersectionObserver JavaScript logic in [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html).
- Do NOT change card grid layout or typography.

## Verification

- **Mechanical**: Save [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
- **Feel check**: Scroll down to the Sustainability section on [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html):
  - Confirm the 4 ESG cards cascade in rapidly and crisply without waiting almost half a second for the final card.
  - Verify layout never shifts or blocks scrolling interactions during entry.
- **Done when**: Sustainability cards reveal in a tight, lively 40ms stagger sequence.

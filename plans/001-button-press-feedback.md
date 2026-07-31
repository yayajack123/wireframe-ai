# 001 — Add Tactile Button Press Feedback

- **Status**: DONE
- **Commit**: HEAD
- **Severity**: HIGH
- **Category**: Purpose & frequency / Physicality
- **Estimated scope**: 1 file (`style.css`), ~20 lines

## Problem

Primary CTA buttons (`.btn-contact`, `.about-cta-link`, `.business-cta-link`, `.sustainability-cta-link`) have hover states (`:hover`), but lack active press feedback (`:active`). When clicked or tapped, there is no immediate visual confirmation that the button heard the press, creating a disconnected, non-responsive feel.

Current code in [`style.css:132-153`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css#L132-L153):

```css
/* style.css:132 — current */
.btn-contact {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-contact:hover {
  background-color: #f0f0f0;
  transform: translateY(-1px);
}
```

## Target

Add high-responsiveness active press feedback (`:active { transform: scale(0.97); }`) using a fast 120ms ease-out transition curve, gated to desktop pointing devices via `@media (hover: hover) and (pointer: fine)`.

Target CSS:

```css
/* target */
.btn-contact,
.about-cta-link,
.business-cta-link,
.sustainability-cta-link,
.press-release-card {
  transition: transform 120ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease-out, box-shadow 200ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
  .btn-contact:active,
  .about-cta-link:active,
  .business-cta-link:active,
  .sustainability-cta-link:active {
    transform: scale(0.97);
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn-contact:active,
  .about-cta-link:active,
  .business-cta-link:active,
  .sustainability-cta-link:active {
    transform: none;
    opacity: 0.85;
  }
}
```

## Repo conventions to follow

- Easing curves live as custom variables in CSS root: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`
- Property-specific transitions (`transform`, `opacity`) instead of `transition: all`.

## Steps

1. Open [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
2. Define `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);` at the top of `:root` or main CSS selector.
3. Update `.btn-contact`, `.about-cta-link`, `.business-cta-link`, and `.sustainability-cta-link` rules to include active press feedback (`:active { transform: scale(0.97); }`).
4. Add `@media (prefers-reduced-motion: reduce)` fallback replacing motion scale with clean opacity feedback.

## Boundaries

- Do NOT alter HTML markup or class names in [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html).
- Do NOT change button colors, font sizes, or border-radius values.

## Verification

- **Mechanical**: Save [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css) and verify syntax cleanliness.
- **Feel check**: Open [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html) in browser, click "Contact Us" or "More About Us":
  - Confirm the button immediately scales inward (0.97) on press and releases instantly without latency.
  - In Chrome DevTools, toggle `prefers-reduced-motion` in Rendering tab and confirm button scales are replaced with smooth opacity feedback.
- **Done when**: Clicking any main CTA button provides crisp 120ms press feedback.

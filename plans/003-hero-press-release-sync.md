# 003 — Synchronize Hero Press Release Card & Icon Hover

- **Status**: DONE
- **Commit**: HEAD
- **Severity**: MEDIUM
- **Category**: Cohesion & tokens
- **Estimated scope**: 1 file (`style.css`), ~15 lines

## Problem

The floating press release card in the hero section (`.press-release-card`) lifts upwards on hover (`translateY(-4px)`), but its child arrow icon button animates using an un-coordinated parallel duration and default browser curve, creating visual stutter when hovering rapidly.

Current code in [`style.css:191-198`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css#L191-L198):

```css
/* style.css:191 — current */
.press-release-card {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.press-release-card:hover {
  transform: translateY(-4px);
}
```

## Target

Synchronize card movement (`translateY(-4px)`) and inner arrow icon shift (`translateX(4px)`) under a single unified 220ms `--ease-out` token (`cubic-bezier(0.16, 1, 0.3, 1)`).

Target CSS:

```css
/* target */
.press-release-card {
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease-out;
}

.press-release-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

.press-release-card:hover .group-hover\:translate-x-0\.5 {
  transform: translateX(4px);
  transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Repo conventions to follow

- Unified token: `220ms cubic-bezier(0.16, 1, 0.3, 1)`
- Hardware-accelerated properties (`transform`, `box-shadow`) only.

## Steps

1. Open [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
2. Locate the `.press-release-card` rules around line 191.
3. Replace `transition: all 0.3s` with specific `transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 220ms cubic-bezier(0.16, 1, 0.3, 1)`.
4. Add synchronized arrow shift rule for `.press-release-card:hover svg`.

## Boundaries

- Do NOT alter card HTML markup or text in [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html).
- Do NOT change card dimensions, background colors, or border-radius values.

## Verification

- **Mechanical**: Save [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
- **Feel check**: Open [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html) and hover over the floating Press Release card at bottom-right of hero:
  - Confirm the card lift and arrow icon nudge occur in perfect 220ms synchronization.
  - Confirm rapidly hovering in and out retargets cleanly without resetting animation frames.
- **Done when**: Card hover and child arrow movement lock together in unified motion.

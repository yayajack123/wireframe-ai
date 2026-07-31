# 002 — Dropdown Menu Transform Origin Alignment

- **Status**: DONE
- **Commit**: HEAD
- **Severity**: MEDIUM
- **Category**: Physicality & origin
- **Estimated scope**: 1 file (`style.css`), ~15 lines

## Problem

Desktop navbar dropdown menus (`.dropdown-menu`) currently enter with a default centered `translateY(8px)` shift rather than scaling dynamically from their top-left parent trigger item. This creates an unanchored "floating popover" effect that feels disconnected from the navbar trigger.

Current code in [`style.css:88-100`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css#L88-L100):

```css
/* style.css:88 — current */
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Target

Align the dropdown's transform origin directly to its trigger (`transform-origin: top left;`) and use a crisp initial scale (`scale(0.96) translateY(-4px)`) transitioning to `scale(1) translateY(0)` over 180ms using `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`.

Target CSS:

```css
/* target */
.dropdown-menu {
  opacity: 0;
  visibility: hidden;
  transform-origin: top left;
  transform: scale(0.96) translateY(-4px);
  transition: opacity 180ms ease-out, transform 180ms cubic-bezier(0.16, 1, 0.3, 1), visibility 180ms ease-out;
}

.dropdown-group:hover .dropdown-menu,
.dropdown-group:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: scale(1) translateY(0);
}
```

## Repo conventions to follow

- Easing token: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`
- GPU-accelerated `transform` and `opacity` properties only.

## Steps

1. Open [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
2. Locate the `.dropdown-menu` class definition around line 88.
3. Replace the `transform: translateY(8px)` with `transform-origin: top left; transform: scale(0.96) translateY(-4px);`.
4. Update the transition duration from `0.2s` to `180ms` with `cubic-bezier(0.16, 1, 0.3, 1)`.

## Boundaries

- Do NOT alter dropdown item padding, font sizes, or link URLs in [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html).
- Do NOT change dropdown container background colors or blur values.

## Verification

- **Mechanical**: Save [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
- **Feel check**: Open [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html), hover over "About Us" or "Investors":
  - Confirm the dropdown menu scales smoothly outwards from the top-left edge of the trigger button instead of dropping down from center.
  - Slow down animation speed to 10% in Chrome DevTools to verify zero clipping or jitter during transition.
- **Done when**: Hovering navbar items expands dropdown menus seamlessly from their trigger origin.

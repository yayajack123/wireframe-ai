# 005 — Add Fluid Top-Edge Physics to Mobile Drawer

- **Status**: DONE
- **Commit**: HEAD
- **Severity**: MEDIUM
- **Category**: Interruptibility & spatial entry
- **Estimated scope**: 1 file (`style.css`), ~25 lines

## Problem

The mobile menu drawer (`#mobile-drawer`) uses a basic `hidden` / `flex` display toggle with flat opacity transition. When opening the mobile menu on smaller screens, it appears abruptly without spatial origin from the navbar header edge.

Current code in [`style.css:164-167`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css#L164-L167):

```css
/* style.css:164 — current */
.mobile-drawer {
  transition: opacity 0.3s ease-in-out;
}
```

## Target

Add smooth top-edge entry physics (`transform: translateY(-100%)` → `translateY(0)`) using an iOS-style cubic bezier curve (`cubic-bezier(0.32, 0.72, 0, 1)`) over 280ms.

Target CSS:

```css
/* target */
.mobile-drawer {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
  transition: transform 280ms cubic-bezier(0.32, 0.72, 0, 1), opacity 280ms ease-out;
}

.mobile-drawer.is-open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

@media (prefers-reduced-motion: reduce) {
  .mobile-drawer {
    transform: none !important;
    transition: opacity 200ms ease-out;
  }
}
```

## Repo conventions to follow

- Curve: `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`
- Hardware-accelerated `transform` and `opacity` only.

## Steps

1. Open [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css).
2. Define `.mobile-drawer` entry transform rules (`transform: translateY(-100%); opacity: 0;`).
3. Add `.mobile-drawer.is-open` target state (`transform: translateY(0); opacity: 1;`).
4. Update mobile hamburger button click handler in [`index.html:1286`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html#L1286) to toggle `.is-open` class on `#mobile-drawer`.

## Boundaries

- Do NOT alter mobile menu drawer link links, padding, or text in [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html).
- Do NOT add external animation libraries.

## Verification

- **Mechanical**: Save [`style.css`](file:///Users/user/Documents/workshop/wireframe-samuel/style.css) and [`index.html`](file:///Users/user/Documents/workshop/wireframe-samuel/index.html).
- **Feel check**: Resize browser viewport to mobile (< 1280px) and click the hamburger icon:
  - Confirm the mobile menu drawer glides down smoothly from behind the header bar over 280ms with natural deceleration.
  - Click close icon and confirm drawer retracts back up seamlessly.
- **Done when**: Mobile drawer opens and closes with fluid top-edge spring physics.

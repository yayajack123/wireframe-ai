---
name: figma-scaling
description: Use this skill whenever implementing a Figma design (via vibe-coding with Cursor, Windsurf, Claude Code, or similar AI coding agents) where the Figma canvas width does not match the target rendering viewport width — for example a design made at 1920px that needs to render proportionally at 1440px. Also trigger this when the user mentions "Figma scaling", "design canvas mismatch", "proportional implementation", "pixel-perfect but responsive", converting Figma inspect/dev-mode px values to code, or when setting up a DESIGN.md/SCALING.md reference file for AI coding agents to consume. Make sure to use this even if the user just says something like "my Figma is 1920 but the app renders at 1440" without explicitly asking for a scaling strategy.
---

# Figma-to-Implementation Scaling

A skill for producing a scaling rule set (as a markdown reference file) that lets AI coding agents correctly translate pixel values from a Figma design into proportional implementation values at a different viewport width — without needing a script, API export, or manual per-component table.

## When to use this

Trigger this skill any time there's a **mismatch between the Figma canvas width and the actual rendering viewport**, e.g.:
- Design made at 1920px, but the app/admin panel renders at 1440px desktop
- Design made at 1440px, but needs to scale down further for a 1280px breakpoint
- Multiple breakpoints (mobile/tablet/desktop) each need their own ratio

The core problem this solves: if an AI coding agent copies raw px values straight out of Figma's inspect panel, the resulting UI will be **oversized** relative to the intended viewport, because the agent has no way of knowing the canvas was designed at a different width than the browser will render at.

## Why markdown over a script

For a full vibe-coding workflow (agent reads context, generates code directly), a **markdown rule file beats a conversion script** in almost all cases:
- The agent applies the formula live, to *every* value it encounters — not just ones pre-listed in a table.
- No maintenance overhead: if the design changes, the rule still holds; nothing needs to be re-exported or re-run.
- A script only pays off if the user already has **structured Figma token/variable exports** (e.g. via Figma REST API or a design-tokens plugin). In that case, a one-time script can pre-generate a full reference table, which then gets pasted into the markdown as a static appendix — not run every session.

Default to markdown-only. Only suggest a script if the user confirms they have structured token exports to work from.

## How to build the scaling rule file

1. **Determine the ratio.** `ratio = target_viewport_width / figma_canvas_width`. E.g. 1440 / 1920 = 0.75.
2. **Decide fixed-ratio vs fluid scaling:**
   - **Fixed multiply** — simplest, snaps exactly at the target breakpoint. Recommended default for most vibe-coding setups since it's trivial for an agent to apply consistently.
   - **Fluid `clamp()`** — smoothly interpolates between two breakpoints (e.g. 1440px–1920px) instead of snapping. Use this only if the user explicitly wants smooth resizing across a range of monitor widths, since it adds complexity for the agent to generate correctly.
3. **List what should and shouldn't be scaled.** Typically scale: spacing (padding/margin/gap), font-size, fixed widths/heights of components, border-radius, icon sizes. Typically do NOT scale: border-width/hairlines (keep 1px), box-shadow blur/spread (unless specified), and any value the user has explicitly marked as fixed/absolute.
4. **Prefer `rem` over `px` in theme tokens**, so scaling cascades from a single root font-size rather than needing to be recalculated per component. If using MUI, set this in `theme.ts`; if Tailwind, in the config's base font-size / root.
5. **Write the file using the template below**, filling in the user's actual canvas width, target width, and framework (MUI/Tailwind/etc).
6. **Save it as `SCALING.md`** (standalone) or as a section appended to an existing `DESIGN.md`, whichever the project already uses as its AI-agent context file.

## Template

Use this as the base structure. Adjust the ratio, examples, and "Implementation preference" section to match the user's actual numbers and stack.

```markdown
## Scaling Strategy: Figma ({{FIGMA_WIDTH}}px) → Implementation ({{TARGET_WIDTH}}px)

### Context
Figma canvas was designed at {{FIGMA_WIDTH}}px. Primary rendering target is {{TARGET_WIDTH}}px.
Base scale ratio: {{TARGET_WIDTH}} / {{FIGMA_WIDTH}} = {{RATIO}}

### Rule for AI Agent (mandatory, no exceptions)
Every time you read a pixel value from Figma inspect/dev-mode (padding, margin, gap,
font-size, width, height, border-radius, icon size), do NOT use that number as-is.
Convert it first using:

  implementation_px  = figma_px * {{RATIO}}
  implementation_rem = (figma_px * {{RATIO}}) / 16

Examples:
- Figma 32px → {{EXAMPLE_32}}px ({{EXAMPLE_32_REM}}rem)
- Figma 48px → {{EXAMPLE_48}}px ({{EXAMPLE_48_REM}}rem)
- Figma 16px → {{EXAMPLE_16}}px ({{EXAMPLE_16_REM}}rem)

### Exceptions (do NOT scale)
- border-width (keep 1px for hairlines)
- box-shadow blur/spread, unless stated otherwise
- any value explicitly marked as fixed/absolute in the design spec

### Implementation preference
- Use `rem`, not `px`, in all theme tokens ({{FRAMEWORK}} theme config) so scaling
  cascades from the root instead of being recalculated per component.
- If root font-size at {{FIGMA_WIDTH}}px is 16px, then at {{TARGET_WIDTH}}px root
  font-size becomes {{ROOT_FONT_SCALED}}px — set this ONCE at the root/theme level,
  not manually per component.

### When this rule does NOT apply
- Values already explicitly specified elsewhere in DESIGN.md — those are final, do not re-scale.
- Other breakpoints (mobile/tablet) — those follow their own spacing/typography rules,
  not this ratio.
```

## Notes for the agent generating this file

- Always compute the actual ratio and example conversions for the user's real numbers — don't leave `{{...}}` placeholders in the delivered file.
- Ask (or infer from context/memory) which framework the project uses, since the "Implementation preference" section should name it specifically (MUI theme.ts, Tailwind config, plain CSS custom properties, etc.).
- If the project already has a `DESIGN.md` or similar AI-agent context file, offer to append this as a new section rather than creating a separate file, to keep the number of context files an agent needs to read low.
- If multiple breakpoints exist (not just one target width), repeat the "Scaling Strategy" block once per breakpoint pair, each with its own ratio.

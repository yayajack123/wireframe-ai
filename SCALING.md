# Scaling Strategy: Figma (1920px) → Implementation (1440px)

## Context
Figma canvas was designed at 1920px. Primary rendering target is 1440px.
Base scale ratio: 1440 / 1920 = 0.75

## Rule for AI Agent (mandatory, no exceptions)
Every time you read a pixel value from Figma inspect/dev-mode (padding, margin, gap, font-size, width, height, border-radius, icon size), do NOT use that number as-is.
Convert it first using:

```text
implementation_px  = figma_px * 0.75
implementation_rem = (figma_px * 0.75) / 16
```

### Examples:
- Figma 32px → 24px (1.5rem)
- Figma 24px → 18px (1.125rem)
- Figma 20px → 15px (0.9375rem)
- Figma 18px → 13.5px (0.84375rem)
- Figma 16px → 12px (0.75rem)
- Figma 15px → 11.25px (0.703125rem)

## Exceptions (do NOT scale)
- border-width (keep 1px for hairlines)
- box-shadow blur/spread, unless stated otherwise
- any value explicitly marked as fixed/absolute in the design spec

## Navbar Font-Size Adjustments (1920px → 1440px Target)
- Desktop Nav Link (`18px` / `20px` @ 1920px) → `13.5px` / `15px` (`text-[13.5px] 2xl:text-[15px]` or `text-[0.84375rem] 2xl:text-[0.9375rem]`)
- Dropdown Menu Link (`15px` @ 1920px) → `11.25px` (`text-[11.25px]` / `text-[0.703125rem]`)
- Contact Us CTA (`18px` / `20px` @ 1920px) → `13.5px` / `15px` (`text-[13.5px] 2xl:text-[15px]` or `text-[0.84375rem] 2xl:text-[0.9375rem]`)
- Mobile Drawer Links (`24px` @ 1920px) → `18px` (`text-[18px]` or `text-lg`)
- Logo Container Height (`48px` / `62px` @ 1920px) → `36px` / `46.5px` (`h-[36px] lg:h-[46.5px]`)

# AGENTS.md - AI Agent Operational Directives

This document outlines mandatory protocols and guidelines for all AI agents working within the **wireframe-samuel** repository.

---

## 🚨 Core Rules & Mandates

### 1. Design Execution from Links or Screenshots
When tasked with implementing or updating UI designs based on an image screenshot or external URL link:
* **Required Skills**: You MUST trigger and load the following skills:
  * `/frontend-design`
  * `/caveman`
* **Execution Constraint**: Adhere to concise, high-density outputs while applying modern, intentional visual design foundations.

### 2. Animation & Motion Design
When adding, modifying, or reviewing web transitions, micro-interactions, or page animations:
* **Required Skill**: You MUST trigger and use `/improve-animations`.
* **Execution Constraint**: Ensure animations use appropriate easing, physical spring dynamics where applicable, and respect reduced-motion settings.

### 3. Wireframe Base Layout Standards
When generating or restructuring any wireframe page:
* **Required Templates**: You MUST base the structural HTML grid, container bounds, headers, and footers on pre-existing base wireframes:
  * Use [wireframes/base/home-wireframe.html](file:///Users/user/Documents/workshop/wireframe-samuel/wireframes/base/home-wireframe.html) as the template for landing and home page wireframes.
  * Use [wireframes/base/wireframe.html](file:///Users/user/Documents/workshop/wireframe-samuel/wireframes/base/wireframe.html) as the template for standard inner page wireframes.
* **Execution Constraint**: Maintain structural class naming, layout tokens, and existing script/css linkage patterns from these base templates.

### 4. Figma Link UI Generation Protocol
When generating code from Figma links:
* **Figma MCP Integration**: Use the available Figma MCP server tools (`figma-dev-mode-mcp-server`) to read context, variables, and node metadata directly.
* **Section-by-Section Incremental Build**: NEVER attempt to process or output an entire multi-section Figma page in one go. You MUST break down the design and generate code **one section at a time** (e.g., Header → Hero → Content Section → Footer), verifying each section before proceeding.
* **Proportional Scaling**: You MUST trigger and apply the `/figma-scaling` skill to convert dimensions from the Figma canvas width to the HTML viewport target.
  * Refer to [SCALING.md](file:///Users/user/Documents/workshop/wireframe-samuel/SCALING.md) (e.g., converting 1920px Figma specs to 1440px viewport using `0.75` multiplier).

### 5. PRD Reference & Modification Workflow
* **PRD Lookup**: Always cross-reference [spec/prd.md](file:///Users/user/Documents/workshop/wireframe-samuel/spec/prd.md) for requirements, section components, data fields, and page objectives.
* **PRD First Amendment Rule**: If new components, extra details, or custom requirements are introduced:
  1. The PRD ([spec/prd.md](file:///Users/user/Documents/workshop/wireframe-samuel/spec/prd.md)) MUST be updated first.
  2. Only AFTER [spec/prd.md](file:///Users/user/Documents/workshop/wireframe-samuel/spec/prd.md) is updated should the AI agent be asked to inspect the PRD and execute the corresponding code modifications.

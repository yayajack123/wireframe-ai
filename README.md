# Samuel Group Corporate Website Wireframe

This repository contains the lo-fi & hi-fi wireframes, layout templates, and design specifications for the **Samuel Group Corporate Website** (covering **Samuel Sekuritas Indonesia** and **Samuel Aset Manajemen**).

---

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [AI Agent Instructions & Workflow](#ai-agent-instructions--workflow)
  - [1. Executing Designs from Links or Screenshots](#1-executing-designs-from-links-or-screenshots)
  - [2. Handling Animations](#2-handling-animations)
  - [3. Generating New Wireframes](#3-generating-new-wireframes)
  - [4. Generating UI from Figma Links](#4-generating-ui-from-figma-links)
  - [5. Requirements & PRD Alignment](#5-requirements--prd-alignment)
- [Getting Started](#getting-started)

---

## 🔍 Overview

The Samuel Group corporate website acts as the central hub for investor relations, corporate identity, governance, sustainability, media newsroom, and career listings. 

All design implementations and wireframes adhere to strict design systems, responsive scaling rules, and structured PRD specifications.

---

## 📁 Repository Structure

```text
├── README.md                          # Project documentation and guidelines
├── AGENTS.md                          # Mandatory operational rules for AI agents
├── SCALING.md                         # Figma to HTML responsive scaling specification (1920px → 1440px)
├── index.html                         # Root landing redirect page
├── css/                               # Stylesheet assets
│   ├── style.css                      # Primary styling for high-fidelity pages
│   └── wireframe.css                  # Styling tokens for lo-fi wireframe pages
├── high-fidelity/                     # High-fidelity page implementations
│   ├── index.html                     # Hi-Fi Home Page
│   ├── newsroom.html                  # Hi-Fi Newsroom Page
│   └── careers.html                   # Hi-Fi Careers Page
├── wireframes/                        # Wireframe implementations
│   ├── base/                          # Base layout wireframe templates
│   │   ├── home-wireframe.html        # Base layout template for landing/home page
│   │   └── wireframe.html             # Base layout template for inner pages
│   └── pages/                         # Inner page wireframes
│       ├── business-units-wireframe.html
│       ├── careers-wireframe.html
│       ├── company-profile-wireframe.html
│       ├── contact-wireframe.html
│       ├── governance-wireframe.html
│       ├── history-milestones-wireframe.html
│       ├── insights-wireframe.html
│       ├── investor-highlights-wireframe.html
│       ├── ir-contact-wireframe.html
│       ├── legal-documents-wireframe.html
│       ├── market-disclosure-wireframe.html
│       ├── newsroom-wireframe.html
│       ├── reports-wireframe.html
│       └── sustainability-wireframe.html
├── assets/                            # Static vector assets (logo.svg, etc.)
└── spec/
    └── prd.md                         # Product Requirements Document (PRD)
```

---

## 🤖 AI Agent Instructions & Workflow

To maintain visual consistency, architectural integrity, and accurate implementation when collaborating with AI coding agents (such as Antigravity, Claude Code, Cursor, or Copilot), follow these strict guidelines.

### 1. Executing Designs from Links or Screenshots
When asking an AI agent to execute or recreate a design from an external link or a visual screenshot:
* **Mandatory Skills**: Always invoke `/frontend-design` and `/caveman`.
* **Prompt Example**:
  > *"Execute the design from this screenshot/link using `/frontend-design` and `/caveman`."*

### 2. Handling Animations
When adding, refining, or auditing motion and interaction animations across the UI:
* **Mandatory Skill**: Always use `/improve-animations`.
* **Prompt Example**:
  > *"Audit and enhance the hover and transition animations for the hero section using `/improve-animations`."*

### 3. Generating New Wireframes
When requesting the creation of a new wireframe page:
* **Mandatory Base Layout**: Always inherit the structural layout, header/footer components, and CSS imports from either:
  * [wireframes/base/home-wireframe.html](file:///Users/user/Documents/workshop/wireframe-samuel/wireframes/base/home-wireframe.html) (for landing/home layout structures)
  * [wireframes/base/wireframe.html](file:///Users/user/Documents/workshop/wireframe-samuel/wireframes/base/wireframe.html) (for standard inner page structures)
* **Prompt Example**:
  > *"Generate a new wireframe for the market disclosure page using base layout from [wireframes/base/wireframe.html](file:///Users/user/Documents/workshop/wireframe-samuel/wireframes/base/wireframe.html)."*

### 4. Generating UI from Figma Links
When generating HTML/CSS code directly from a Figma link:
* **Figma MCP**: The agent must connect using the Figma MCP tools (`figma-dev-mode-mcp-server`) to fetch design tokens, node properties, and visual specs.
* **Section-by-Section Generation**: Never generate an entire page in a single turn. Generate and verify code **section by section** (e.g., Hero section, Features section, Footer).
* **Scaling Rules**: Always apply the `/figma-scaling` skill to scale design dimensions from Figma canvas width (e.g., 1920px) to the target viewport (e.g., 1440px using scale factor `0.75`). See [SCALING.md](file:///Users/user/Documents/workshop/wireframe-samuel/SCALING.md) for precise conversion rules.
* **Prompt Example**:
  > *"Use Figma MCP to generate the Navbar section from this Figma link. Apply `/figma-scaling` to scale from 1920px to 1440px viewport."*

### 5. Requirements & PRD Alignment
All page sections, components, and content blocks must directly reflect the specifications defined in the PRD.
* **PRD Source of Truth**: Refer to [spec/prd.md](file:///Users/user/Documents/workshop/wireframe-samuel/spec/prd.md) for all feature details.
* **Updating Requirements**: If new elements, custom logic, or structural changes are required:
  1. **Update [spec/prd.md](file:///Users/user/Documents/workshop/wireframe-samuel/spec/prd.md) first** with the new details.
  2. Ask the AI agent to look up the updated PRD section before executing code changes.
* **Prompt Example**:
  > *"I have updated `spec/prd.md` under Section 3.2. Please look up the PRD and implement the new disclosure table layout."*

---

## 🚀 Getting Started

1. **Preview Wireframes**: Open any `.html` file inside `high-fidelity/` or `wireframes/pages/` directly in a web browser or serve locally using a local development server.
2. **Review Specifications**: Check [spec/prd.md](file:///Users/user/Documents/workshop/wireframe-samuel/spec/prd.md) for content requirements and [SCALING.md](file:///Users/user/Documents/workshop/wireframe-samuel/SCALING.md) for layout metrics.
3. **Agent Integration**: Refer to [AGENTS.md](file:///Users/user/Documents/workshop/wireframe-samuel/AGENTS.md) for full AI agent behavior protocols.

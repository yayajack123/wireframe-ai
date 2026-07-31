# Product Requirements Document (PRD)
## Samuel Group Corporate Website (Samuel Sekuritas Indonesia & Samuel Aset Manajemen)

---

## 1. Overview

This PRD defines the structure, content, and functional requirements for the Samuel Group corporate website. The site serves as the primary digital touchpoint for the group's two core business units — **Samuel Sekuritas Indonesia** (securities/brokerage) and **Samuel Aset Manajemen** (asset management) — and covers corporate identity, investor relations, governance, sustainability, media, careers, and general contact needs.

This document is intended as the reference for producing **lo-fi wireframes** for each page/module listed below.

---

## 2. Objectives

- Establish corporate credibility and transparency (regulatory compliance, governance, legal standing).
- Serve as a digital "pitch deck" for current and prospective investors (Investor Relations Hub).
- Showcase and differentiate the two business units' products and services.
- Centralize official documents (reports, legal filings, governance charters, sustainability reports).
- Support recruitment through an accessible careers/job board experience.
- Provide clear, role-based contact and inquiry routing (retail clients vs. investors/analysts vs. media vs. job applicants).

## 3. Target Audience

| Audience | Primary Needs |
|---|---|
| Prospective retail/institutional clients | Product info, account opening, branch locations |
| Investors & equity analysts | Financial performance, stock data, disclosures, governance |
| Shareholders | Dividends, GMS/RUPS records, shareholder structure |
| Media / journalists | Press releases, corporate news, research insights |
| Job seekers | Open positions, company culture, application process |
| Regulators (OJK, BEI) | Legal documents, compliance, governance disclosures |

---

## 4. Site Map / Information Architecture

1. **About Us Hub**
   1.1 Company Profile
   1.2 History & Milestones
   1.3 Legal Documents
2. **Business Units** (Samuel Sekuritas Indonesia / Samuel Aset Manajemen)
3. **Investors Hub (IR Portal)**
   3.1 Investment Highlights (Overview)
   3.2 Market & Disclosure
   3.3 Reports
   3.4 Investor Relations Contact
4. **Corporate Governance** (single master page)
5. **Sustainability**
6. **Newsroom / Media Hub**
   6.1 News List & Detail
   6.2 Podcast & Research Insights
7. **Careers**
8. **Contact Us** (general)

---

## 5. Page-by-Page Specifications

### 5.1 About Us Hub

#### 5.1.1 Company Profile Page
**Purpose:** Introduce the group's foundation, business values, vision/mission, and management/corporate credibility.

| Section | UI Components |
|---|---|
| Hero Banner | High-res HQ image/short video background, headline ("Pioneering Financial Excellence"), sub-headline, scroll indicator |
| Vision, Mission & Core Values | 2-column layout: left = Vision/Mission text; right = 4-card grid of Core Values (Integrity, Innovation, Client-Centric, Excellence) with icons |
| Interactive Corporate Structure | Interactive organizational chart (clickable zoom/expand) from top leadership down to subsidiary divisions |
| Awards | 3–4 column card grid: trophy/badge image, award name, issuing body (OJK, Bloomberg, IDX), year received |

#### 5.1.2 History & Milestones Page
*Reference: en.ktng.com/about/history*

**Purpose:** Showcase track record, stability, and growth milestones from founding to present.

| Section | UI Components |
|---|---|
| Hero Header | Title ("Our Journey & Growth Milestones"), short narrative intro |
| Timeline Viewer (core component) | Horizontal/vertical scrolling timeline; each year marker (e.g. 1999, 2008, 2015, 2024) includes: year tag, historical photo/documentation, achievement title, 2–3 sentence narrative summary |

#### 5.1.3 Legal Documents Page
**Purpose:** Transparency page proving legal/regulatory standing under OJK & BEI oversight.

| Section | UI Components |
|---|---|
| Hero Header | Title ("Legal Documents & Regulatory Licenses") |
| Interactive Legal Repository | Searchable/filterable table. Columns: Document/License Name, License/Decree Number, Issuing Body (OJK, Ministry of Law & Human Rights, etc.), Issue Date, "Download PDF" button |

---

### 5.2 Business Units

**Purpose:** Central hub separating and showcasing the portfolios/products of Samuel Sekuritas Indonesia and Samuel Aset Manajemen.

| Section | UI Components |
|---|---|
| Hero Unit Switcher | Large tab switcher: "Samuel Sekuritas Indonesia" | "Samuel Aset Manajemen" |
| Dynamic Business Overview | **If Sekuritas tab active:** Institutional & Retail Brokerage, Corporate Finance, Equity Research overview; CTA widget — "Open Trading Account" button + Mobile App download link. **If Aset Manajemen tab active:** Investment Solutions, Mutual Funds (Reksa Dana), Discretionary Fund overview; Daily NAV live chart widget for flagship mutual fund products |
| Key Strengths & Service Offerings | 3–4 icon-card grid (e.g. In-depth Research, Experienced Fund Managers, Advanced Trading Technology) |

---

### 5.3 Investors Hub (IR Portal)

#### 5.3.1 Investment Highlights Page (Overview)
*Reference: en.ktng.com/ir/overview, en.ktng.com/ir/financial-info/financial-highlight*

**Purpose:** A digital pitch deck to sell the company's business strengths and growth prospects to prospective investors and analysts.

| Section | UI Components |
|---|---|
| Top Stock Ticker Widget | Compact bar: stock code, latest price, % change, volume, last update time |
| Key Financial Metric Cards | 4-card grid: Revenue, Net Income, EBITDA, AUM, each with YoY growth indicator (↑%) |
| Multi-Year Growth Trend Chart | Interactive line/bar chart, 3–5 years of financial performance |
| Competitive Moats / Investment Reasons | 3 visual cards: "Why Invest in Samuel Group" (Market Leadership, Robust Risk Management, Consistent Dividend Yield) |

#### 5.3.2 Market & Disclosure Page
*Reference: en.ktng.com/ir/stock-info/chart, en.ktng.com/ir/governance/sharehold*

**Purpose:** Capital market compliance/transparency portal for tracking stock movement, shareholders, and corporate actions.

| Section | UI Components |
|---|---|
| Interactive Stock Chart (live API) | Large candlestick/line chart powered by IDX API, period filters (1D, 1M, 1Y, ALL) + daily stats table (Open, High, Low, Market Cap, P/E Ratio) |
| Shareholder Structure | Pie chart (Founders, Institutions, Public >5% & <5%) + data table of major shareholders with shares held & ownership % |
| Corporate Actions Archive | Chronological data table: Dividends, Stock Splits, Rights Issues, Disclosures |

#### 5.3.3 Reports Page
**Purpose:** Centralized PDF library for all official company reports.

| Section | UI Components |
|---|---|
| Dynamic Filter & Search Bar | Category tabs (All / Financial / Quarterly & Annual / Public Expose) + Year dropdown (2026, 2025, 2024...) |
| PDF Document Grid | File cards with report cover preview, title, release date, file size (MB), "Download PDF" & "Preview" buttons |

#### 5.3.4 Investor Relations Contact Page
**Purpose:** Official communication channel for equity analysts, institutional investors, and shareholders.

| Section | UI Components |
|---|---|
| Direct IR Team Contacts (left column) | Official IR email (ir@samuel.co.id), direct IR hotline, corporate secretariat address |
| Targeted Investor Inquiry Form (right column) | Name, Company/Institution, Email, Phone, Inquiry Topic dropdown (Dividends, Financial Performance, GMS, Others), Message, PDF attachment |

---

### 5.4 Corporate Governance (single master page)
*Reference: en.ktng.com/ir/ir-archives/events, en.ktng.com/ir/governance/overview, en.ktng.com/ir/governance/audit-commitee*

**Purpose:** Demonstrate Good Corporate Governance (GCG) compliance.

| Section | UI Components |
|---|---|
| Governance Pillars & Statement | GCG commitment text + 5 pillar cards (TARIF: Transparency, Accountability, Responsibility, Independence, Fairness) |
| Board & Committees Charters | Expandable accordion list of committees (Audit Committee, Remuneration & Nomination Committee) with charter PDF download buttons |
| GMS/RUPS Archive | Table of shareholder meeting history (Date, Agenda, Minutes Summary, Download Minutes PDF link) |
| Corporate Policies & Secretary | Corporate Secretary contact card + PDF policy grid (Code of Conduct, Whistleblowing System, Risk Policy) |

---

### 5.5 Sustainability
*Reference: en.ktng.com/sustainability/overview*

| Section | Description | UI Components |
|---|---|---|
| CSR | Interface demonstrating continuous local and societal engagement activities | Interactive photo/video card gallery: financial literacy programs, community activities, local environmental initiatives |
| Sustainability Policy | Explicit long-term governance and ecological policy statements | Official policy statements on long-term governance, environmental protection, green operational ethics |
| Sustainability Strategy | Planned roadmap charting corporate growth aligned with global resource management practices | Roadmap/timeline visualization aligned with ESG metrics |
| Sustainability Report | Download center hosting periodic ESG performance data archives | PDF download center for annual Sustainability Reports, with year filter |

---

### 5.6 Newsroom / Media Hub

#### 5.6.1 News List & Detail Page
**Purpose:** Central hub for corporate news, press releases, and media coverage.

| Section | UI Components |
|---|---|
| List Page — Featured News | Hero card with large image for the latest headline |
| List Page — Category Filter Bar | All / Press Release / Corporate / Event |
| List Page — News Grid | 3-column grid with thumbnail, date, category, snippet |
| Detail Page | Title header, meta info (date & author), social share, body content (text/photo), related news carousel |

#### 5.6.2 Podcast & Research Insights Page
**Purpose:** Educational media channel — video/audio podcasts and daily/weekly market research articles.

| Section | UI Components |
|---|---|
| Featured Podcast Episode (Hero Player) | Embedded video (YouTube) / audio player with show notes & timestamps |
| Media & Research Grid | Tab 1: Video/audio podcast episodes (thumbnail + play icon). Tab 2: Market research reports (analysis cards with "Download Research PDF") |

---

### 5.7 Careers
**Purpose:** Recruitment portal to attract top talent and interns.

| Section | UI Components |
|---|---|
| Employer Branding Hero | "Life at Samuel Group" video/photos, employee testimonials, perks & benefits |
| Job Board (Open Positions) | Search bar + department filter + accordion job cards (title, location, department, short qualifications, "Apply Now") → opens Direct Application Form (modal/sub-page): applicant details, LinkedIn profile, resume/CV upload |
| Internship Program & Spontaneous Application | Internship program banner + general CV upload form for proactive applicants |

---

### 5.8 Contact Us (General)
**Purpose:** General page for prospective clients, service inquiries, and branch locations.

| Section | UI Components |
|---|---|
| Smart Routing Inquiry Form | Dropdown for message destination: Client Support/Trading / Asset Management / General Inquiry / Media & PR — routes email to the right department |
| Interactive Office Locations Map | Interactive Google Map (left) + address cards for HQ, hotline, email, and branch offices (right) |

---

## 6. Page Differentiation Reference

### 6.1 Investment Highlights vs. Market & Disclosure

| Aspect | Investment Highlights | Market & Disclosure |
|---|---|---|
| Main Focus | Business pitching & performance | Stock trading data & compliance |
| Target Reader | Prospective/public investors | Active shareholders, equity analysts, OJK/BEI |
| Content Type | Key financial metrics (Revenue, Profit, EBITDA), 3–5 year growth charts, investment moats | Live stock chart via API, shareholder table (>5% & public), dividend/corporate action history |
| Data Nature | Periodic (updated quarterly/annually from financial reports) | Dynamic / near real-time (auto-updated via exchange data feed) |

### 6.2 IR Contact vs. General Contact Us

| Aspect | Investor Relations Contact | General Contact Us |
|---|---|---|
| Audience | Institutional investors, equity analysts, financial media, shareholders | Retail customers, prospective business clients, general partners, job applicants |
| Inquiry Topics | Dividend distribution, financial reports, GMS, corporate issue clarification | Trading account opening, mutual fund products, branch addresses, service inquiries |
| Email Routing | Forwarded directly to IR Team / Corporate Secretary | Forwarded to Customer Service (CS) / General Admin |

### 6.3 Newsroom vs. Podcast & Insights
*(Source document truncated here — to be confirmed before wireframing: recommend clarifying that Newsroom covers corporate/press news for general audiences, while Podcast & Insights covers educational/market-analysis content for investors and clients.)*

---

## 7. Global / Cross-Page Components (assumed — confirm before wireframing)

- Global header/navigation (mega-menu across 8 top-level modules)
- Global footer (sitemap links, regulatory badges, social links, disclaimer)
- Language switcher (ID/EN), given bilingual references in source material
- Cookie/privacy consent banner (financial services compliance)
- Search (global site search, separate from in-page document search bars)

---

## 8. Next Steps

1. Confirm global navigation structure and any missing cross-page components (Section 7).
2. Clarify Newsroom vs. Podcast & Insights differentiation (Section 6.3).
3. Produce low-fidelity wireframes per page, following the section-by-section breakdown in Section 5, prioritizing:
   - Company Profile
   - Business Units
   - Investment Highlights
   - Market & Disclosure
4. Review wireframes against this PRD before moving to high-fidelity design.

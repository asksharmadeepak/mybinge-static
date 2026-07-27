# SEO & GSC review — offlinemedialibrary.com

**Date:** 2026-07-27  
**Source:** Google Search Console export (Web, Last 3 months; chart mostly 2026-07-18 → 2026-07-25)

## Verdict

You are on the right path. The site is in **early discovery**: tiny volume (~3 clicks, ~66 impressions) but queries already map to the intended **category cluster** (`organize movies`, `movie organizer`, etc.).

**Strategy stays:** category domain (Offline Media Library) → product (MyBinge). Do not pivot to brand-only SEO on the marketing site. Tighten titles/CTR around organizer queries; convert via `/download` + Play Store.

### Snapshot

| Area | Status |
|------|--------|
| Homepage | Best performer (3 clicks, 11.5% CTR, ~pos 7) — protect |
| Guide: how-to-organize-downloaded-movies | 20 impr, 0% CTR, ~pos 17.5 — priority |
| `/download` | Conversion URL, not a ranking pillar |
| Brand queries (`MyBinge`) | Not in GSC yet — expected; use Play + YouTube |
| Search appearance | Empty — FAQ/schema later once volume grows |

## What not to change

- Do not abandon category SEO for brand-only keywords.
- Do not mass-publish thin pages until organizer guides reach page 1–2.
- Do not expect GSC to report Download clicks — use GA4 (`download_cta_click`).

---

## GA4: mark `download_cta_click` as a key event

Site events fire when users click Google Play badges (`download_cta_click`), with params:

- `event_category`: `download`
- `link_url` / `destination`: Play Store URL
- `placement`: `hero` | `cta_strip` | `guide_header` | `download_page` | `download_page_bottom`
- `page_path`: current path

### Mark as key event (conversion)

1. Open [Google Analytics](https://analytics.google.com/) → property for `G-9YL4SQSQHK`.
2. **Admin** → **Data display** → **Events** (or **Key events**).
3. Find `download_cta_click` (appears after first live hit), or create it.
4. Toggle **Mark as key event**.
5. Optional: **Admin** → **Data display** → **Custom definitions** — register `placement` and `page_path` as event-scoped custom dimensions for breakdown reports.

### Realtime verify (after deploy)

1. Open the live site in an incognito window.
2. GA4 → **Reports** → **Realtime**.
3. Click a Play badge (home hero, guide CTA, or `/download`).
4. Confirm event `download_cta_click` appears within ~30s.
5. Check event parameters include `placement` and `page_path`.

### Soft funnel (no extra events required)

| Step | How to measure |
|------|----------------|
| Land on site | Sessions / page views |
| Open `/download` | Page path `/download` |
| Click Play | Event `download_cta_click` (key event) |
| Install | Google Play Console (compare later) |

---

## 2-week review cadence

Re-check **GSC + GA4** about **2026-08-10** (and weekly after that).

### Google Search Console

Filter: Search type = Web. Compare last 14 days vs previous 14.

| Metric | Where | Target (30–60 days, realistic) |
|--------|--------|--------------------------------|
| Impressions (site) | Performance → Total | Rising toward hundreds |
| Homepage clicks / CTR / position | Pages → `/` | CTR stays healthy; pos ≤ 10 |
| Guide clicks / CTR / position | Pages → `/guides/how-to-organize-downloaded-movies` | CTR &gt; 0%; aim pos &lt; 10 |
| Query cluster | Queries containing `organize` or `movie organizer` | More queries + better avg position |

Ignore pages with &lt;5 impressions and pos 40+ until the organizer cluster improves.

### Google Analytics 4

| Metric | Where | What “good” looks like |
|--------|--------|-------------------------|
| `download_cta_click` count | Engagement → Events | Steady growth vs sessions |
| Key event rate | Key events | Rising share of engaged sessions |
| Breakdown by `placement` | Event detail / exploration | Know whether hero vs guide vs download page converts |
| `/download` page views | Pages and screens | Guides should feed this path |

### Decision rules

- **CTR weak, impressions OK** → rewrite title/meta again; test SERP snippet.
- **Impressions flat** → more internal links + refresh guide; do not spam new URLs.
- **Clicks up, `download_cta_click` flat** → CTA placement/visibility problem, not SEO.
- **Site clicks up, Play installs flat** → store listing / ASO problem (separate from site SEO).

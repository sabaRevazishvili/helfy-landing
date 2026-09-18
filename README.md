# DoktorABC — Landing Page

A responsive landing page built with plain HTML, CSS, and vanilla JavaScript.

## Project Files

```
├── index.html
├── style.css
├── script.js
└── assets/
    ├── icons/
    └── images/
```

## How to Run Locally

No build step, no dependencies, no npm install — just a static site.

1. Open the project folder in VS Code (or any editor).
2. Install the **Live Server** extension if you don't have it already.
3. Right-click `index.html` → **Open with Live Server** (or click "Go Live" in the bottom right of VS Code).

## Responsive Breakpoints

The layout was built and tested at three widths:

- **1920px**
- **1280px**
- **390px**

## Known Issues / Unfinished Elements

This project is functional but not fully polished. Things I'm aware of and didn't get to finish:

- **Sliders (testimonials & how-it-works)** — the carousel behavior works but is a little buggy: the drag/peek transition isn't perfectly smooth on all screen sizes, and the "how it works" carousel currently only scrolls (no dot/arrow controls wired up like the testimonial slider has).
- **Responsiveness between breakpoints** — the page looks correct at 1920px, 1280px, and 390px specifically, but some in-between widths still have margins/paddings that feel too tight or slightly crushed (particularly around the footer and how-it-works section). This needs more fluid spacing (e.g. `clamp()`) instead of fixed breakpoint values.
- **General polish** — some spacing values were tuned by eye against a reference mockup rather than an exact design spec, so minor pixel-level inconsistencies remain.

## Bonus — LLM Prompt

Prompt I'd use to ask an AI to review/improve this implementation:

> Review this HTML/CSS/JS landing page for responsiveness. It's built with fixed breakpoints at 1920px, 1280px, and 390px, but spacing (margins/padding) breaks or feels cramped at widths in between. Identify every place where fixed pixel values should be replaced with fluid units (`clamp()`, `%`, `vw`, `rem`) so the layout scales smoothly across all viewport widths without new breakpoints. Also review the testimonial and how-it-works sliders for bugs in the carousel/peek behavior and suggest fixes, including adding matching prev/next/dot controls to the how-it-works slider to mirror the testimonial slider's JS. Point out any horizontal-scroll risks. Return the issues as a prioritized list with the specific CSS/JS changes needed for each.

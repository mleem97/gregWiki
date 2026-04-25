# Design System Specification (v1.0.0.35)

## Visual Identity & Tone
The **gregCore** design system utilize a high-energy, vibrant aesthetic optimized for a dark mode environment. The combination of technical typography and high-contrast teal and cyan accents creates a futuristic, precision-oriented atmosphere suitable for modern dashboards and innovative digital products.

## Color Palette
The color strategy is built around a "vibrant" variant, ensuring high visibility and saturation against the dark background.

*   **Primary Accent:** #00bfa5 — A striking teal used for main calls to action (Primary Buttons) and primary interactive states.
*   **Secondary Color:** #10eade — A bright cyan for headlines, supporting UI elements and interactive highlights.
*   **Tertiary Color:** #0ac4fd — A vivid light blue used for decorative elements, badges, and secondary accents.
*   **Neutral Palette:** #47817c — A desaturated, teal-tinted neutral used for surfaces, borders, and background depth.
*   **Background:** #121212 / #1A1A1A — Deep dark surfaces to maintain color harmony.

## Typography
*   **Headlines:** Space Grotesk (or bold fallback) — Technical, idiosyncratic personality. Rendered in **Secondary Color (Cyan)** and All-Caps.
*   **Body & Labels:** Inter (or standard fallback) — High legibility for interface controls.

## Layout & Geometry
*   **Roundedness (Level 2):** Moderate corner radii (8px) provide a balance between professional precision and approachable design.
*   **Spacing (Level 2):** Standard density (12px - 16px). Balances information density with visual breathing room.
*   **Tablet vs. Widget:**
    *   **Tablets** use the **Primary Accent (#00bfa5)** for thick outer borders (3px).
    *   **Widgets** use the **Neutral Palette (#47817c)** for thin outer borders (1.5px).

## Implementation
All UI elements are prozedurally generated at runtime (no external graphics files required) to ensure maximum sharpness and compatibility with Unity 6 IL2CPP environments.

---
title: Visual Philosophy
description: Design principles for the gregFramework ecosystem
---

# 🎨 Visual Philosophy

The gregFramework ecosystem follows a specific visual language designed to feel premium, tactile, and high-tech. Whether you are building a mod UI or a web platform, these principles should guide your design decisions.

## 1. The Core Aesthetic: "Luminescent Architect"

Our design is inspired by high-end data center infrastructure and futuristic terminal interfaces. Key themes include:
- **Depth**: Multi-layered interfaces with clear hierarchy.
- **Tactility**: Subtle textures that make digital surfaces feel "real."
- **Energy**: Harmonious use of glowing accents to draw attention.

---

## 2. Design Tokens

### Colors
- **Background**: Almost black (`#001110` or `#121212`).
- **Primary Accent**: Luminescent Teal (`#61f4d8`). Used for success states and primary CTAs.
- **Secondary Accent**: Electric Cyan (`#1cede1`).
- **Surface**: Dark, translucent surfaces (`rgba(0, 30, 28, 0.8)`).

### Shadows & Glows
- **Hero Glow**: `0 0 80px -20px rgba(97, 244, 216, 0.15)`.
- **Component Glow**: Interactive elements should have a soft glow matching their primary color when hovered or active.

---

## 3. Textures & Effects

### Subtle Noise
All main backgrounds should have a subtle noise texture (opacity `0.05` to `0.2`) to add a premium, tactile feel and prevent flat-color banding.

### Glassmorphism (Glass-Card)
Use backdrop filters for overlays and cards:
- `backdrop-filter: blur(12px)`
- `background: rgba(0, 30, 28, 0.8)`
- `border: 1px solid rgba(255, 255, 255, 0.1)`

---

## 4. Typography
- **Headlines**: Use **Space Grotesk** for a technical, modern look with tight tracking.
- **Body**: Use **Inter** for maximum legibility. Sans-serif is preferred for all UI text.

---

## 5. Accessibility (A11Y)
- **Contrast**: Maintain a minimum contrast ratio of **4.5:1** for all text.
- **Visual Cues**: Never rely on color alone to convey meaning (e.g., add icons to error messages).

*Adhering to these principles ensures that your mod feels like a native part of the gregFramework ecosystem.*

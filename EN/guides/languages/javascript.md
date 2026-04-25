---
title: Modding with JavaScript
description: Modern JavaScript scripting using the V8-integrated Engine
path: /guides/languages/javascript
---

# 📜 Modding with JavaScript

gregCore features a high-performance JavaScript integration powered by the **V8 engine** (via the ClearScript library). This allows web developers to leverage their existing JS knowledge to build complex logical systems within *Data Center*.

---

## 🛠️ Setup & Project Structure

JavaScript mods are loaded from the `Data Center/Mods/JS/` directory. Each mod must be its own subfolder containing an `index.js`.

**Recommended Structure:**
```text
Data Center/
  Mods/
    JS/
      AnalyticsMod/
        index.js
        utils.js
        package.json (informational only)
```

## 🏗️ The Entry Point (`index.js`)

Unlike the browser, there is no `window` or `document`. Instead, gregCore provides a global `greg` object.

```javascript
// index.js

// Hook into game initialization
greg.onInit(() => {
    greg.log.info("JavaScript Engine Online");
});

// Listen to a hook
greg.events.on("greg.economy.MoneyChanged", (payload) => {
    const amount = payload.Amount;
    greg.log.info(`Money changed by: ${amount}`);
});
```

---

## 📦 Modules and Imports

gregCore's JS engine supports standard CommonJS-style `require()` for splitting logic across multiple files.

```javascript
// index.js
const { formatCurrency } = require('./utils');

greg.events.on("greg.economy.MoneyChanged", (payload) => {
    const msg = formatCurrency(payload.Total);
    greg.showNotification(`New Balance: ${msg}`);
});
```

---

## 🛠️ Accessing Services

The JS global `greg` object is organized into modules mirroring the C# SDK.

### UI & Mod Settings
Creating a persistent setting in JS takes just a few lines:

```javascript
greg.settings.registerToggle({
    modId: "jsMod",
    id: "autoSave",
    label: "Enable Auto-Save",
    default: true,
    onChange: (val) => {
        greg.log.info("Auto-save toggled: " + val);
    }
});
```

### World Interaction
Manipulating world objects:
```javascript
const hardware = greg.hardware.getNearbyServers(5.0); // 5 meter radius
hardware.forEach(server => {
    greg.log.info("Found server: " + server.displayName);
});
```

---

## 💾 Saving State

The Persistence Service in JavaScript automatically handles JSON objects.

```javascript
const myData = { level: 1, xp: 100 };

// Saving
greg.persistence.set("my_mod_data", myData);

// Loading
const saved = greg.persistence.get("my_mod_data");
if (saved) {
    greg.log.info("Resuming at level " + saved.level);
}
```

---

## 🐞 Debugging JavaScript

*   **Hot Reloading**: You can press a designated hotkey (usually `F10` in dev mode) to reload all JavaScript mods without restarting the game.
*   **Detailed Exceptions**: If your JS code throws an error, gregCore outputs a full V8 stack trace to the console, including file names and line numbers.
*   **No Browser APIs**: Remember, you cannot use `fetch()`, `setTimeout()`, or `XMLHttpRequest`. Use gregCore-specific equivalents like `greg.http.get()` or `greg.world.schedule()`.

---

## 📖 Related Links
*   [**JavaScript Hook Patterns**](/api/hooks/patterns-js)
*   [**ClearScript V8 Reference**](https://microsoft.github.io/ClearScript/)
*   [**Example: DashBoard (JS)**](/community/examples/dashboard-js)

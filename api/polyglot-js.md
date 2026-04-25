# JavaScript SDK - Installation & Usage

JavaScript/API bindings for gregCore via MoonSharp.

## Installation

```powershell
# SDK pack includes MoonSharp already
Copy-Item greg-js-sdk.zip <Game>\Mods\
```

## Quick Start

```javascript
// Global 'greg' object available
var state = greg.game.getState();
console.log(`Day: ${state.day}, Money: $${state.money}`);

// Place furniture
var result = greg.grid.place("shelf_01", 5, 3, 0);
```

## API Reference

### Game State

```javascript
// Get current game state
var state = greg.game.getState();
// { time: 3600, day: 3, money: 5000, rep: 100 }
```

### Grid Placement

```javascript
// Place furniture
greg.grid.place(prefabId, x, y, z) → { success: bool, id: string }

// Remove from grid  
greg.grid.remove(furnitureId) → bool

// Check if valid
greg.grid.canPlace(prefabId, x, y, z) → bool

// Get grid info
var info = greg.grid.getInfo();
// { occupied: [...], free: [...] }
```

### Wall Rack

```javascript
// Place on wall
greg.wall.placeDevice(deviceType, position, normal) → device

// Get wall type
greg.wall.getWallType(position) → "concrete"|"drywall"|"metal"
```

### Hooks/Events

```javascript
// Register event handler
greg.hooks.on("dayChanged", function(day) {
    console.log("New day: " + day);
});

// Unregister
greg.hooks.off("dayChanged", handler);
```

## Scripts

Write scripts in `<Game>/Mods/gregScripts/`:

```javascript
// my-script.js
greg.hooks.on("dayChanged", function(day) {
    if (day === 7) {
        greg.ui.showNotification("Week complete!");
    }
});
```

## Requirements

- MoonSharp (bundled)
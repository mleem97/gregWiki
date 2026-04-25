# Go SDK - Installation & Usage

Go language bindings for gregCore.

## Installation

```bash
# Download SDK pack
unzip greg-go-sdk.zip -d go/

# Import in your code
import (
    "gregcorego"
)
```

## Quick Start

```go
package main

import (
    "gregcorego"
)

func main() {
    // Initialize
    greg := gregcorego.New()
    
    // Get game state
    state := greg.Game.GetState()
    
    // Place furniture
    err := greg.Grid.Place("shelf_01", 5, 3, 0)
}
```

## API Reference

### Game State

```go
type GameState struct {
    Time      int     // Game time in seconds
    Day       int     // Current day
    Money    float64 // Player money
    Reputation float64
}
```

### Grid Placement

```go
// Place furniture on grid
func (g *GregGrid) Place(prefabId string, x, y, z int) error

// Remove from grid
func (g *GregGrid) Remove(id string) error

// Check if position valid
func (g *GregGrid) CanPlace(prefabId string, x, y, z int) bool
```

### Hooks

```go
// Register hook callback
func (g *GregHooks) OnDayChanged(callback func(day int))

// Unregister
func (g *GregHooks) Unsubscribe(event string, callback interface{})
```

## Examples

See `samples/gregCore.Sample.Go/` for complete examples.

## Requirements

- Go 1.21+
- cgo (for native bridge)
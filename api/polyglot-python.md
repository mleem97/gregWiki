# Python SDK - Installation & Usage

Python language bindings for gregCore via pythonnet.

## Installation

```powershell
# SDK pack already includes pythonnet
# Just install the SDK
Copy-Item greg-python-sdk.zip <Game>\Mods\
```

## Quick Start

```python
import gregcore

# Initialize bridge
gc = gregcore.GregCore()

# Get game state
state = gc.game.get_state()
print(f"Day: {state.day}, Money: ${state.money}")

# Place furniture
gc.grid.place("shelf_01", 5, 3, 0)
```

## API Reference

### Game State

```python
@dataclass
class GameState:
    time: int      # Game time in seconds
    day: int     # Current day  
    money: float # Player money
    rep: float  # Reputation
```

### Grid Placement

```python
# Place furniture on grid
gc.grid.place(prefab_id: str, x: int, y: int, z: int) -> bool

# Remove from grid
gc.grid.remove(furniture_id: str) -> bool

# Check if position valid
gc.grid.can_place(prefab_id: str, x: int, y: int, z: int) -> bool
```

### Wall Rack

```python
# Place device on wall
gc.wall.place_device("outlet_single", position, wall_normal) -> Device

# Get wall type
gc.wall.get_wall_type(position) -> str  # "concrete", "drywall", "metal"
```

### Events

```python
# Register callback
def on_day_changed(day: int):
    print(f"New day: {day}")

gc.hooks.on_day_changed(on_day_changed)
```

## Requirements

- Python 3.10+
- pythonnet (included in gregCore.dll)
---
title: Modding with Python
description: Data-driven modding and automation using the embedded Python engine
path: /guides/languages/python
---

# 🐍 Modding with Python

Python support in gregCore is tailored for developers who want to perform data analysis, complex mathematical modeling, or rapid automation. It is integrated via **Python.NET**, allowing transparent access to all C# services and game objects.

---

## 🛠️ Setup & Project Structure

Python mods reside in `Data Center/Mods/Python/`. Each mod is a folder containing a `__init__.py` file.

**Recommended Structure:**
```text
Data Center/
  Mods/
    Python/
      AutoOptimizer/
        __init__.py
        optimizer_logic.py
        data/
          weights.json
```

## 🏗️ The Entry Point (`__init__.py`)

gregCore initializes the Python environment and imports your mod. Use the `@greg.hook` decorator or subscribe to events directly.

```python
import greg

def on_init():
    greg.log_info("Python Mod: AutoOptimizer loaded.")

# High-level decorator for hook subscription
@greg.hook("greg.economy.MoneyChanged")
def on_money_changed(payload):
    amount = payload.get_double("Amount")
    greg.log_info(f"Python detected transaction: {amount}")

def on_update():
    # Per-frame logic if needed
    pass
```

---

## 🛠️ Accessing C# Services

Because we use Python.NET, you can import C# namespaces directly if you need low-level access, but the `greg` module provides the safest abstraction.

### Example: Market Interaction
```python
def check_market():
    prices = greg.market.get_current_hardware_prices()
    for item, price in prices.items():
        if price < 500:
            greg.log_info(f"Bargain detected: {item} for {price}!")
```

---

## 💾 State Persistence

Python's standard library is fully available. You can use `json`, `pickle`, or `sqlite3` for local storage, or use the gregCore Persistence service for savegame integration.

```python
import greg

# Save data tied to the current savegame
greg.persistence.save("python_config", {"threshold": 10.5, "active": True})
```

---

## 🛡️ Performance Considerations

::: warning
**Global Interpreter Lock (GIL)**: While Python.NET is powerful, it is subject to the GIL. Running a heavy Python script in `on_update` can cause micro-stutters in the game's main thread. Move heavy logic to worker threads using Python's `threading` or `multiprocessing` modules.
:::

---

## 🐞 Debugging Python

*   **Standard Exceptions**: Python errors are caught by gregCore and displayed in the console with full tracebacks.
*   **Virtual Environments**: Standard `pip` packages can be used if they are installed in the global Python environment or if you manually append your `site-packages` path to `sys.path` within your script.

---

## 📖 Related Links
*   [**Python.NET Documentation**](https://pythonnet.github.io/)
*   [**Example: HardwareAnalyzer (Python)**](/community/examples/hardware-analyzer-python)

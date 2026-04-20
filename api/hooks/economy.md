# Economy Hooks (`greg.economy.*`)

::: info
**Total Hooks in Domain**: 12
**Status**: All stable.
:::

This section documents all events related to the player's financial and progression status. These hooks are invaluable for building mods that track profits, manage leveling systems, or reward players for specific actions.

## 1. `greg.economy.MoneyChanged`

### 📝 Overview
- **Trigger**: Fired whenever the player's total balance is updated (e.g., selling an item, paying salary, completing an order).
- **Status**: Stable
- **Version**: Since 1.0.0

### 📦 Payload (`GregPayload.Data`)
| Key | Type | Description |
| :--- | :--- | :--- |
| `amount` | double | The new total balance of the player. |
| `difference` | double | The amount added or subtracted (Positive = Gain, Negative = Loss). |

### 🚀 Usage Examples

<tabs>
  <tab label="C#">
    ```csharp
    Api.Hooks.On("greg.economy.MoneyChanged", p => {
        double diff = (double)p.Data["difference"];
        if (diff > 1000) Api.UI.ShowNotification("Big Profit!");
    });
    ```
  </tab>
  <tab label="Lua">
    ```lua
    greg.on("greg.economy.MoneyChanged", function(p)
        if p.data.difference < 0 then
            greg.log_warning("You just lost money!")
        end
    end)
    ```
  </tab>
  <tab label="Python">
    ```python
    def on_money(p):
        print(f"Balance updated: {p['data']['amount']}")
    greg.on("greg.economy.MoneyChanged", on_money)
    ```
  </tab>
</tabs>

---

## 2. `greg.economy.XpChanged`

### 📝 Overview
- **Trigger**: Fired when the player gains experience points.
- **Status**: Stable
- **Version**: Since 1.0.0

### 📦 Payload (`GregPayload.Data`)
| Key | Type | Description |
| :--- | :--- | :--- |
| `total_xp` | double | Current total XP. |
| `added_xp` | double | Amount of XP gained in this event. |
| `level_up` | bool | True if this gain caused the player to level up. |

---

## 3. `greg.economy.ReputationChanged`

### 📝 Overview
- **Trigger**: Fired when the facility's reputation score changes.
- **Status**: Stable
- **Version**: Since 1.1.0

### 📦 Payload (`GregPayload.Data`)
| Key | Type | Description |
| :--- | :--- | :--- |
| `score` | double | The new reputation score (0-100). |
| `reason` | string | Why it changed (e.g., "SLA_FAIL", "CUSTOMER_HAPPY"). |

---
[Back to Hook Catalog](/api/hooks)

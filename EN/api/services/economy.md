# Economy Service

::: info
**Namespace**: `gregCore.PublicApi.Modules`
**Target Audience**: Beginners & Advanced modders.
**Objective**: Learn how to manage the player's financial and progression status.
:::

The **Economy Service** is the central point for interacting with the player's balance, experience points (XP), and reputation. It ensures that changes are synchronized correctly with the game's internal systems and UI.

## 🛠️ Method Reference

### `double GetBalance()`
Returns the current amount of money the player possesses.
- **Return Type**: `double` (Precision: 2 decimal places).

### `void SetBalance(float amount)`
Sets the player's total money to a specific value.
- **Parameters**: `amount` (float).
- **Caveat**: This overwrites the existing balance. To add money, use `GetBalance() + added_amount`.

### `double GetXP()`
Returns the current total experience points of the player.
- **Return Type**: `double`.

### `void AddXP(float amount)`
Adds experience points to the player's total. This will automatically trigger level-up checks in the game.
- **Parameters**: `amount` (float).

### `double GetReputation()`
Returns the current reputation score (0.0 - 100.0).
- **Return Type**: `double`.

## 🚀 Usage Matrix

| Language | Get Balance Example | Set Reputation Example |
| :--- | :--- | :--- |
| **C#** | `Api.Economy.GetBalance()` | `Api.Economy.SetReputation(85.0f)` |
| **Lua** | `greg.get_player_money()` | `greg.set_player_reputation(85.0)` |
| **Python** | `greg.get_player_money()` | `greg.set_player_reputation(85.0)` |
| **JS** | `greg.get_player_money()` | `greg.fire("economy.SetRep", { val: 85.0 })` |
| **Rust** | `api.get_player_money()` | `api.set_player_reputation(85.0)` |

## ⚡ Related Hooks
- **[`greg.economy.MoneyChanged`](/api/hooks/economy#moneychanged)**: Fires when the balance is updated.
- **[`greg.economy.XpChanged`](/api/hooks/economy#xpchanged)**: Fires when XP is gained.
- **[`greg.economy.ReputationChanged`](/api/hooks/economy#reputationchanged)**: Fires when reputation moves up or down.

::: tip
**Best Practice**: Instead of polling `GetBalance()` every frame, subscribe to the `greg.economy.MoneyChanged` hook to update your UI only when needed.
:::

---
[Back to Services Overview](/api/services)

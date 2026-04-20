---
title: Economy Hooks
description: Documentation for hooks related to player balance, shop transactions, and job payments
path: /api/hooks/economy
---

# 💰 Economy Hooks

The Economy category covers all events related to the player's financial state, market transactions, and worker payouts. These hooks are essential for building mods that introduce new ways to earn money, tax management, or dynamic pricing systems.

## 🗂️ Hook List

The following hooks are available in this category:

| Hook | Summary |
| :--- | :--- |
| **[`bank-manager-on-money-changed`](/api/hooks/economy/bank-manager-on-money-changed)** | Triggered whenever the player's bank balance changes. |
| **[`shop-manager-on-item-purchased`](/api/hooks/economy/shop-manager-on-item-purchased)** | Fires when an item is bought from the hardware shop. |
| **[`job-manager-on-contract-payout`](/api/hooks/economy/job-manager-on-contract-payout)** | Fires when a data center contract is completed. |

> 🔍 *Note: This is a partial list. See the sidebar for the full hierarchy of auto-generated hooks.*

---

## 🏗️ Usage Strategy

When working with Economy hooks, it is highly recommended to use the **`GregAPI.Economy`** service to verify balances before taking action or to apply modifications safely.

### Example: Transaction Logging (C#)
```csharp
GregAPI.Events.Subscribe("greg.economy.MoneyChanged", (payload) => {
    double delta = payload.GetDouble("Amount");
    double total = payload.GetDouble("NewBalance");
    
    GregLogger.Info($"[Finance] Transaction: {delta:C}. New Balance: {total:C}");
});
```

---

## 🛡️ Best Practices

1.  **Read-Only Context**: Try to avoid modifying the balance *inside* a balance-change hook, as this can trigger a loop. If you must apply a tax or bonus, use a slight delay or a state flag.
2.  **Verify Payloads**: Always check for `null` or valid IDs before using `InternalId` from a transaction payload to avoid referencing deleted items.
3.  **Cross-Linking**: Correlate economy events with [Hardware Events](/api/hooks/hardware) to understand *what* was purchased (e.g., which server type).

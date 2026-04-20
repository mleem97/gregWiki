---
title: Custom Customers and Workflows
description: Learn how to define new customer types and business requirements
path: /guides/content/custom-customers
---

# 📈 Custom Customers and Workflows

Customers are the lifeblood of your data center. They provide the income that fuels your expansion. Customizing customers allows you to create high-stakes scenarios, new contract types, and specialized hosting demands.

---

## 1. What defines a Customer?

A customer in *Data Center* is represented by a set of **Requirements**:
- **Compute Load**: How many CPUs/RAM they need.
- **Network Load**: Inbound/Outbound traffic volume.
- **SLA (Service Level Agreement)**: Uptime requirements and penalty fees.
- **Preference**: Specific hardware requirements (e.g., "Must use Intel CPUs").

## 2. Registering a Custom Customer

To add a new customer entity to the world market, use `GregAPI.Workflow.RegisterCustomer()`.

```csharp
var customer = new gregCore.Models.CustomerDef {
    CustomerId = "global_bank_inc",
    DisplayName = "Global Bank Inc.",
    BudgetPerMonth = 150000.0,
    Type = CustomerType.Enterprise,
    Requirements = new Requirements {
        MinRamGb = 2048,
        MinCpuThreads = 128,
        RedundancyLevel = 2, // Requires redundant power/networking
        StorageType = "SSD_NVME"
    }
};

GregAPI.Workflow.RegisterCustomer(customer);
```

---

## 3. Workflow States and Hooks

Customer interaction follows a specific workflow: **Lead -> Contract -> Deployment -> Billing**.

### 💼 Contract Signed
Fires when a player accepts a deal from your custom customer.

#Tabset
#Tab: C#
```csharp
GregAPI.Events.Subscribe("greg.workflow.ContractSigned", (payload) => {
    if (payload.GetString("CustomerId") == "global_bank_inc") {
        GregLogger.Success("Mod: Major contract signed by Global Bank!");
    }
});
```
#Tab: Lua
```lua
greg.on("greg.workflow.ContractSigned", function(payload)
    if payload.CustomerId == "global_bank_inc" then
        greg.log_info("Big business incoming!")
    end
end)
```
#EndTabset

### ⚠️ SLA Breach
Fires if the servers allocated to a customer go offline, causing an SLA penalty.

```lua
greg.on("greg.workflow.SLABreach", function(payload)
    if payload.CustomerId == "global_bank_inc" then
        greg.show_notification("CRITICAL: Global Bank is offline. Fees accumulating!")
    end
end)
```

---

## 4. Customizing the Order Board

You can introduce entirely new types of contracts (e.g., "AI Training Run" or "Crypto Mining Lease") by modifying the marketplace registry.

```csharp
GregAPI.Workflow.AddMarketCategory("High-Frequency Trading", "hft_icon.png");

var order = new OrderDef {
    OrderId = "hft_lease_01",
    Category = "High-Frequency Trading",
    DurationDays = 30,
    Reward = 450000.0
};

GregAPI.Workflow.PostOrder(order);
```

---

## 5. UI Integration

Custom customers can have their own **Branding**. When the player inspects a server rack allocated to your customer, gregCore can display custom logos and colors in the Inspector panel.

```csharp
GregAPI.UI.RegisterBranding("global_bank_inc", new BrandingDef {
    PrimaryColor = "#002d72",
    SecondaryColor = "#ffffff",
    LogoPath = "assets/logos/global_bank.png"
});
```

---

## Common Mistakes ⚠️

- **Unreachable Requirements**: If you define a customer that requires 1000TB of RAM in the early game, the player will never be able to complete the contract. Balance your requirements against the available hardware.
- **Zero SLA Penalties**: If a customer has no penalty for downtime, it breaks the game's risk/reward loop.
- **Missing Icons**: If you define a custom marketplace category without an icon, it may cause a placeholder white box to appear in the UI.

---

## 📖 Related Links
*   [**All Workflow Hooks**](/api/hooks/workflow)
*   [**Marketplace Service**](/api/services/workflow)
*   [**Building Custom Hardwares**](/guides/content/custom-hardware)

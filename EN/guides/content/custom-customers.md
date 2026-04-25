Title: Custom Customers and Workflows
Path: /guides/content/custom-customers
Type: How-to
Audience: mod developer, framework developer
Summary: Learn how to define new customer types, business requirements, and custom contract workflows in gregCore.
Suggested Tags: customers, workflow, economy, registry, branding, json
Related Pages: /guides/content/custom-servers, /api/index
Split Recommendation: Keep as one page

# 📈 Custom Customers and Workflows

Customers are the lifeblood of your data center. They provide the income that fuels your expansion. Customizing customers allows you to create high-stakes scenarios, new contract types, and specialized hosting demands.

**Layer ownership:** customer definitions are in the **Mod Layer**; assignment and runtime checks are handled by the **Core SDK Layer**.

## 1. Defining a Customer

A customer in *Data Center* is represented by a set of **Requirements** (compute, network, storage) and **Metadata** (segment, budget, branding).

### JSON Definition (`Content/Customers/NorthFinanceGroup.json`):

```json
{
  "id": "ccp.customer.fin_north",
  "name": "North Finance Group",
  "segment": "Finance",
  "budget": 250000.0,
  "requirementRules": ["MinimumIOPS", "RequiredSpeed"],
  "ownershipRules": ["ccp.servertype.enterprise", "ccp.servertype.edge"]
}
```

### The Requirement Model
- **Compute Load**: How many CPUs/RAM they need.
- **Network Load**: Inbound/Outbound traffic volume.
- **SLA (Service Level Agreement)**: Uptime requirements and penalty fees.
- **Preference**: Specific hardware requirements (e.g., "Must use Intel CPUs").

## 2. Registration Flow

To add a new customer entity to the world market, use the `GregAPI` or the `GregCustomerRegistry`.

### C# Registration

```csharp
using gregSdk.Definitions;
using gregSdk.Registries;

var customer = new CustomerDefinition {
    Id = "global_bank_inc",
    Name = "Global Bank Inc.",
    Budget = 150000.0,
    Segment = "Enterprise",
    RequirementRules = new string[] { "MinRamGb", "MinCpuThreads" }
};

// Register via the API
GregAPI.Workflow.RegisterCustomer(customer);

// Or using the Registry directly
var registry = new GregCustomerRegistry();
registry.Register(customer);
```

## 3. Workflow States and Hooks

Customer interaction follows a specific workflow: **Lead -> Contract -> Deployment -> Billing**.

### 💼 Contract Signed
Fires when a player accepts a deal from your custom customer.

```csharp
GregAPI.Events.Subscribe("greg.workflow.ContractSigned", (payload) => {
    if (payload.GetString("CustomerId") == "global_bank_inc") {
        GregLogger.Success("Mod: Major contract signed by Global Bank!");
    }
});
```

### ⚠️ SLA Breach
Fires if the servers allocated to a customer go offline, causing an SLA penalty.

```lua
greg.on("greg.workflow.SLABreach", function(payload)
    if payload.CustomerId == "global_bank_inc" then
        greg.show_notification("CRITICAL: Global Bank is offline. Fees accumulating!")
    end
end)
```

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

## 5. UI and Branding

Custom customers can have their own **Branding**. When the player inspects a server rack allocated to your customer, `gregCore` can display custom logos and colors.

```csharp
GregAPI.UI.RegisterBranding("global_bank_inc", new BrandingDef {
    PrimaryColor = "#002d72",
    SecondaryColor = "#ffffff",
    LogoPath = "assets/logos/global_bank.png"
});
```

## Common Mistakes ⚠️

- **Unreachable Requirements**: Balance your requirements against the available hardware. If a customer requires 1000TB of RAM in the early game, the contract will be impossible.
- **Zero SLA Penalties**: Without downtime penalties, the game's risk/reward loop is broken.
- **Policy Violations**: Ensure your `RequirementRules` match the ones implemented in the `GregCustomerPolicyEngine`.

---

## 📖 Related Links
*   [**Building Custom Hardware**](/guides/content/custom-servers)
*   [**Workflow Hooks Catalog**](/api/hooks/index)
*   [**Marketplace Service API**](/api/services/economy)

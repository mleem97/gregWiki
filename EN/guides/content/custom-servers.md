Title: Custom Servers & Hardware
Path: /guides/content/custom-servers
Type: How-to
Audience: mod developer, framework developer
Summary: Deep dive into defining and registering your own server hardware in gregCore, including JSON schema and C# registration.
Suggested Tags: hardware, servers, registry, content-creation, json
Related Pages: /guides/content/custom-switches, /api/index
Split Recommendation: Keep as one page

# 🖥️ Custom Servers & Hardware

The **gregCore Hardware Registry** allows you to add entirely new server types to *Data Center*. Your custom servers will support the full simulation lifecycle: they can be bought in the shop, mounted in racks, connected via cables, and will consume power.

## Capability Status (v1.0.0-pre.4)

- **Ready**: Official `GregServerRegistry` and `ServerDefinition` types are available in `gregSdk`.
- **Validation**: Use `ServerValidator` for automatic schema enforcement.
- **Injection**: Content is automatically registered into the framework's internal catalogs.

## 🧱 The Server Model

A custom server is defined by a `ServerDefinition` object. This metadata tells gregCore how the game should treat your hardware.

| Property | Type | Description |
| :--- | :--- | :--- |
| `Id` | `string` | A unique identifier (e.g., `acme.server.pro_x1`). |
| `DisplayName` | `string` | The name shown in the shop and UI. |
| `BasePrice` | `float` | The default cost before market adjustments. |
| `PowerDraw` | `float` | Base watts consumed when powered on. |
| `SlotCount` | `int` | How many internal component slots (SFP, HDD) are available. |
| `USize` | `int` | Height in Rack Units (1U, 2U, etc.). |

## 🚀 Implementation Workflow

### 1. Define the Metadata (JSON or C#)

You can define your server via a JSON file for data-driven modding or directly in C#.

#### JSON Definition (`Content/Servers/EnterpriseRackServer.json`):
```json
{
  "id": "ccp.server.enterprise_rack_v1",
  "name": "Enterprise Rack Server",
  "serverTypeId": "ccp.servertype.enterprise",
  "rackUnits": 4,
  "powerUsageWatts": 540,
  "maxIOPS": 12000,
  "price": 42000,
  "tags": ["EnterpriseGrade", "RackMount"],
  "modelOverridePath": "Models/Servers/EnterpriseRackServer.prefab"
}
```

#### C# Definition:
```csharp
var myServer = new ServerDefinition {
    Id = "greg.server.titan_v1",
    DisplayName = "Titan V1 Supercomputing Node",
    BasePrice = 12500f,
    PowerDraw = 450f,
    SlotCount = 12,
    USize = 2
};
```

### 2. Register with gregCore

Registration should happen during `OnInitializeMelon`. Once registered, gregCore automatically adds the item to the Shop and prepares the Save System.

```csharp
using gregSdk.Definitions;
using gregSdk.Registries;

// Register via the API
GregAPI.Hardware.RegisterServer(myServer);

// Or using the Registry directly
var registry = new GregServerRegistry();
registry.Register(myServer);
```

### 3. Visuals & Prefabs

gregCore supports **Chassis Mapping**. You can either:
- **Reuse Vanilla Models**: Use an existing Chassis ID to give your server a vanilla look.
- **Custom Assets**: Provide a path to an AssetBundle containing your `.prefab` via `modelOverridePath`.

```csharp
myServer.ChassisId = "server_case_3_blue"; // Uses the vanilla blue 2U case
```

## 🪝 Relevant Hooks

When working with hardware, you'll often want to react to state changes:

- **[`greg.hardware.ServerPowered`](/api/hooks/hardware/server-powered)**: Fired when a server starts or stops drawing power.
- **[`greg.hardware.ServerInstalled`](/api/hooks/hardware/server-installed)**: Fired when a server is placed into a rack slot.
- **[`greg.hardware.ServerBroken`](/api/hooks/hardware/server-broken)**: Fired when a component failure occurs.

## 💾 Persistence

You don't need to write any save/load logic for custom servers. gregCore's **Hardware Persistence Service** tracks every instance of your server in the game world, including its current position, internal components, and wear-and-tear state.

## ❌ Common Mistakes

1.  **Duplicate IDs**: If two mods use the same Server ID, gregCore will log a conflict and only the first one will be registered.
2.  **Missing Dependencies**: If your server uses a custom AssetBundle, ensure the bundle is loaded *before* registration.
3.  **Illegal U-Size**: *Data Center* racks only support 1U to 4U. Setting a higher value might cause clipping or placement errors.

---

::: tip
**Pro-Tip**: Use the `greg.ECONOMY.PricingAdjusted` hook to dynamically change your server's price based on the player's reputation or active contracts!
:::

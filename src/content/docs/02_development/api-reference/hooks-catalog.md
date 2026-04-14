---
id: greg-hooks-catalog
title: greg hooks catalog & events runtime
description: Canonical `greg.*` runtime reference across HookBinder, GregEventDispatcher, GregNativeEventHooks, and EventIds mappings.
---

This page is the **canonical runtime reference** for the `greg.*` hook/event surface.

It merges the previous pages:

- `Hooks Catalog`
- `Greg Hooks & Events`

## Layer ownership

- **Core SDK layer:** `GregEventDispatcher`, `GregNativeEventHooks`, EventIds mapping
- **Hook registry layer:** `greg_hooks.json` + HookBinder-based Harmony wiring
- **Mod layer:** C#/Lua/TS/Rust consumers subscribe via `greg.*`

## Runtime model (single source of truth)

| Surface | Owner | Scope |
| --- | --- | --- |
| `greg_hooks.json` | Core hook registry | Full hook inventory for generated hook pages and HookBinder registration |
| `GregNativeEventHooks` | Core SDK | Named constants for stable subscriptions |
| `EventIds` -> `greg.*` | Core SDK bridge | Native/FFI numeric events normalized to string hook ids |
| `GregEventDispatcher` | Core SDK | Runtime payload bus (`On`, `Once`, `Off`, `Emit`) |

:::tip Canonical policy
If documentation conflicts, prefer this page + generated per-hook pages under **Hooks Library** (`/wiki/development/hooks-library/*`).
:::

## Subscription API

```csharp
GregEventDispatcher.On(GregNativeEventHooks.ServerInsertedInRack, payload =>
{
    // handle payload
}, "MyMod");

GregEventDispatcher.Off(GregNativeEventHooks.ServerInsertedInRack, handler);
GregEventDispatcher.UnregisterAll("MyMod");
```

## Hook string constants (native bridge set)

| C# field | Hook string / expression |
| --- | --- |
| ``ContentOverrideApplied`` | ``greg.CONTENT.OverrideApplied`` |
| ``ContentRegistered`` | ``greg.CONTENT.Registered`` |
| ``ContentLoaded`` | ``greg.CONTENT.Loaded`` |
| ``CustomerAppRequirementsFailed`` | ``GregHookName.Create(GregDomain.Customer, "AppRequirementsFailed")`` |
| ``CustomerAppRequirementsSatisfied`` | ``GregHookName.Create(GregDomain.Customer, "AppRequirementsSatisfied")`` |
| ``CustomerMoneyUpdated`` | ``greg.CUSTOMER.MoneyUpdated`` |
| ``CustomerRequirementEvaluated`` | ``greg.CUSTOMER.RequirementEvaluated`` |
| ``EmployeeAnimationStateChanged`` | ``greg.EMPLOYEE.AnimationStateChanged`` |
| ``EmployeeCustomFired`` | ``GregHookName.Create(GregDomain.Employee, "CustomFired")`` |
| ``EmployeeCustomHired`` | ``GregHookName.Create(GregDomain.Employee, "CustomHired")`` |
| ``EmployeeDispatchProcessed`` | ``greg.EMPLOYEE.DispatchProcessed`` |
| ``EmployeeDispatchQueued`` | ``greg.EMPLOYEE.DispatchQueued`` |
| ``EmployeeIdleStateEntered`` | ``greg.EMPLOYEE.IdleStateEntered`` |
| ``EmployeeIdleStateExited`` | ``greg.EMPLOYEE.IdleStateExited`` |
| ``GameplayIncidentTriggered`` | ``greg.GAMEPLAY.IncidentTriggered`` |
| ``InputActionTriggered`` | ``greg.INPUT.ActionTriggered`` |
| ``InputBindingApplied`` | ``greg.INPUT.BindingApplied`` |
| ``InputBindingStarted`` | ``greg.INPUT.BindingStarted`` |
| ``NetworkBrokenSwitchAdded`` | ``greg.NETWORK.BrokenSwitchAdded`` |
| ``NetworkBrokenSwitchRemoved`` | ``greg.NETWORK.oveBrokenSwitchRemoved`` |
| ``NetworkCableLifecycleChanged`` | ``greg.NETWORK.CableLifecycleChanged`` |
| ``NetworkClearAllCables`` | ``greg.NETWORK.ClearAllCables`` |
| ``NetworkConnectionSpeedSet`` | ``greg.NETWORK.ConnectionSpeedSet`` |
| ``NetworkCreateNewCable`` | ``greg.NETWORK.CreateNewCable`` |
| ``NetworkDispatchProcessed`` | ``greg.NETWORK.DispatchProcessed`` |
| ``NetworkDispatchQueued`` | ``greg.NETWORK.DispatchQueued`` |
| ``NetworkInsertSfp`` | ``greg.NETWORK.InsertSFP`` |
| ``NetworkNetWatchDispatched`` | ``GregHookName.Create(GregDomain.Network, "NetWatchDispatched")`` |
| ``NetworkPositionRemoved`` | ``greg.NETWORK.ovePositionRemoved`` |
| ``NetworkSfpRemoved`` | ``greg.NETWORK.oveSFPRemoved`` |
| ``NetworkSwitchConfigClosed`` | ``greg.NETWORK.SwitchConfigClosed`` |
| ``NetworkSwitchConfigOpened`` | ``greg.NETWORK.SwitchConfigOpened`` |
| ``NetworkTopologyValidated`` | ``greg.NETWORK.TopologyValidated`` |
| ``PlayerCoinChanged`` | ``greg.PLAYER.CoinChanged`` |
| ``PlayerReputationChanged`` | ``greg.PLAYER.ReputationChanged`` |
| ``PlayerXpChanged`` | ``greg.PLAYER.XPChanged`` |
| ``RackButtonUnmountRack`` | ``greg.RACK.ButtonUnmountRack`` |
| ``RackDoorStateChanged`` | ``greg.RACK.DoorStateChanged`` |
| ``ServerAppIdChanged`` | ``greg.SERVER.AppIDChanged`` |
| ``ServerCustomerChanged`` | ``greg.SERVER.CustomerChanged`` |
| ``ServerDeviceRepaired`` | ``greg.SERVER.DeviceRepaired`` |
| ``ServerInsertedInRack`` | ``greg.SERVER.ServerInsertedInRack`` |
| ``ServerItIsBroken`` | ``greg.SERVER.ItIsBroken`` |
| ``ServerLoadingCompleted`` | ``greg.SERVER.LoadingCompleted`` |
| ``ServerLoadingStarted`` | ``greg.SERVER.LoadingStarted`` |
| ``ServerPowerButton`` | ``greg.SERVER.PowerButton`` |
| ``ServerRegisterLink`` | ``greg.SERVER.RegisterLink`` |
| ``ServerUnregisterLink`` | ``greg.SERVER.UnregisterLink`` |
| ``SystemApplicationQuit`` | ``greg.SYSTEM.ApplicationQuit`` |
| ``SystemAutoSaveRequested`` | ``GregHookName.Create(GregDomain.System, "AutoSaveRequested")`` |
| ``SystemButtonBuyShopItem`` | ``greg.SYSTEM.ButtonBuyShopItem`` |
| ``SystemButtonBuyWall`` | ``greg.SYSTEM.ButtonBuyWall`` |
| ``SystemButtonCheckOut`` | ``greg.SYSTEM.ButtonCheckOut`` |
| ``SystemButtonClear`` | ``greg.SYSTEM.ButtonClear`` |
| ``SystemButtonConfirmFireEmployee`` | ``greg.SYSTEM.ButtonConfirmFireEmployee`` |
| ``SystemButtonConfirmHire`` | ``greg.SYSTEM.ButtonConfirmHire`` |
| ``SystemButtonCustomerChosen`` | ``greg.SYSTEM.ButtonCustomerChosen`` |
| ``SystemDayEnded`` | ``greg.SYSTEM.DayEnded`` |
| ``SystemGameDayAdvanced`` | ``GregHookName.Create(GregDomain.System, "GameDayAdvanced")`` |
| ``SystemGameLoaded`` | ``GregHookName.Create(GregDomain.System, "GameLoaded")`` |
| ``SystemGameSaved`` | ``GregHookName.Create(GregDomain.System, "GameSaved")`` |
| ``SystemHookBridgeInstalled`` | ``GregHookName.Create(GregDomain.System, "HookBridgeInstalled")`` |
| ``SystemHookBridgeTriggered`` | ``GregHookName.Create(GregDomain.System, "HookBridgeTriggered")`` |
| ``SystemIncidentResolved`` | ``greg.SYSTEM.IncidentResolved`` |
| ``SystemIncidentTriggered`` | ``greg.SYSTEM.IncidentTriggered`` |
| ``SystemLoadCompleted`` | ``greg.SYSTEM.LoadCompleted`` |
| ``SystemLoadStarted`` | ``greg.SYSTEM.LoadStarted`` |
| ``SystemRuntimeObjectDestroyed`` | ``greg.SYSTEM.RuntimeObjectDestroyed`` |
| ``SystemRuntimeObjectDisabled`` | ``greg.SYSTEM.RuntimeObjectDisabled`` |
| ``SystemRuntimeObjectEnabled`` | ``greg.SYSTEM.RuntimeObjectEnabled`` |
| ``SystemRuntimeObjectLoaded`` | ``greg.SYSTEM.RuntimeObjectLoaded`` |
| ``SystemSaveStarted`` | ``greg.SYSTEM.SaveStarted`` |
| ``SystemShopCartItemAdded`` | ``greg.SYSTEM.ShopCartItemAdded`` |
| ``SystemShopCartItemRemoved`` | ``greg.SYSTEM.ShopCartItemRemoved`` |
| ``SystemSnapshotSaved`` | ``greg.SYSTEM.SnapshotSaved`` |
| ``SystemSpawnedItemRemoved`` | ``greg.SYSTEM.oveSpawnedItemRemoved`` |
| ``UiCancel`` | ``greg.UI.Cancel`` |
| ``UiPauseClosed`` | ``greg.UI.PauseClosed`` |
| ``UiPauseOpened`` | ``greg.UI.PauseOpened`` |
| ``UiPointerClick`` | ``greg.UI.PointerClick`` |
| ``UiPointerEnter`` | ``greg.UI.PointerEnter`` |
| ``UiPointerExit`` | ``greg.UI.PointerExit`` |
| ``UiSubmit`` | ``greg.UI.Submit`` |
| ``UiTabSelected`` | ``greg.UI.TabSelected`` |
| ``UnknownNativeEvent`` | ``greg.SYSTEM.UnmappedNativeEvent`` |
| ``WorldCollisionEntered`` | ``greg.WORLD.CollisionEntered`` |
| ``WorldInteractionHovered`` | ``greg.WORLD.InteractionHovered`` |
| ``WorldTriggerEntered`` | ``greg.WORLD.TriggerEntered`` |

## Event id to hook mapping (native bridge)

| Event id (uint) | EventIds name | GregNativeEventHooks field | Hook string |
| --- | --- | --- | --- |
| 213 | `CableCleared` | `NetworkClearAllCables` | `greg.NETWORK.ClearAllCables` |
| 204 | `CableConnected` | `ServerRegisterLink` | `greg.SERVER.RegisterLink` |
| 211 | `CableCreated` | `NetworkCreateNewCable` | `greg.NETWORK.CreateNewCable` |
| 205 | `CableDisconnected` | `ServerUnregisterLink` | `greg.SERVER.UnregisterLink` |
| 212 | `CableRemoved` | `NetworkPositionRemoved` | `greg.NETWORK.ovePositionRemoved` |
| 215 | `CableSfpInserted` | `NetworkInsertSfp` | `greg.NETWORK.InsertSFP` |
| 216 | `CableSfpRemoved` | `NetworkSfpRemoved` | `greg.NETWORK.oveSFPRemoved` |
| 214 | `CableSpeedChanged` | `NetworkConnectionSpeedSet` | `greg.NETWORK.ConnectionSpeedSet` |
| 1001 | `CustomEmployeeFired` | `EmployeeCustomFired` | `GregHookName.Create(GregDomain.Employee, "CustomFired")` |
| 1000 | `CustomEmployeeHired` | `EmployeeCustomHired` | `GregHookName.Create(GregDomain.Employee, "CustomHired")` |
| 400 | `CustomerAccepted` | `SystemButtonCustomerChosen` | `greg.SYSTEM.ButtonCustomerChosen` |
| 401 | `CustomerSatisfied` | `CustomerAppRequirementsSatisfied` | `GregHookName.Create(GregDomain.Customer, "AppRequirementsSatisfied")` |
| 402 | `CustomerUnsatisfied` | `CustomerAppRequirementsFailed` | `GregHookName.Create(GregDomain.Customer, "AppRequirementsFailed")` |
| 300 | `DayEnded` | `SystemGameDayAdvanced` | `GregHookName.Create(GregDomain.System, "GameDayAdvanced")` |
| 601 | `EmployeeFired` | `SystemButtonConfirmFireEmployee` | `greg.SYSTEM.ButtonConfirmFireEmployee` |
| 600 | `EmployeeHired` | `SystemButtonConfirmHire` | `greg.SYSTEM.ButtonConfirmHire` |
| 702 | `GameAutoSaved` | `SystemAutoSaveRequested` | `GregHookName.Create(GregDomain.System, "AutoSaveRequested")` |
| 701 | `GameLoaded` | `SystemGameLoaded` | `GregHookName.Create(GregDomain.System, "GameLoaded")` |
| 700 | `GameSaved` | `SystemGameSaved` | `GregHookName.Create(GregDomain.System, "GameSaved")` |
| 1100 | `HookBridgeInstalled` | `SystemHookBridgeInstalled` | `GregHookName.Create(GregDomain.System, "HookBridgeInstalled")` |
| 1101 | `HookBridgeTriggered` | `SystemHookBridgeTriggered` | `GregHookName.Create(GregDomain.System, "HookBridgeTriggered")` |
| 100 | `MoneyChanged` | `PlayerCoinChanged` | `greg.PLAYER.CoinChanged` |
| 301 | `MonthEnded` | `SystemSnapshotSaved` | `greg.SYSTEM.SnapshotSaved` |
| 900 | `NetWatchDispatched` | `NetworkNetWatchDispatched` | `GregHookName.Create(GregDomain.Network, "NetWatchDispatched")` |
| 208 | `RackUnmounted` | `RackButtonUnmountRack` | `greg.RACK.ButtonUnmountRack` |
| 102 | `ReputationChanged` | `PlayerReputationChanged` | `greg.PLAYER.ReputationChanged` |
| 207 | `ServerAppChanged` | `ServerAppIdChanged` | `greg.SERVER.AppIDChanged` |
| 201 | `ServerBroken` | `ServerItIsBroken` | `greg.SERVER.ItIsBroken` |
| 206 | `ServerCustomerChanged` | `ServerCustomerChanged` | `greg.SERVER.CustomerChanged` |
| 203 | `ServerInstalled` | `ServerInsertedInRack` | `greg.SERVER.ServerInsertedInRack` |
| 200 | `ServerPowered` | `ServerPowerButton` | `greg.SERVER.PowerButton` |
| 202 | `ServerRepaired` | `ServerDeviceRepaired` | `greg.SERVER.DeviceRepaired` |
| 502 | `ShopCartCleared` | `SystemButtonClear` | `greg.SYSTEM.ButtonClear` |
| 500 | `ShopCheckout` | `SystemButtonCheckOut` | `greg.SYSTEM.ButtonCheckOut` |
| 501 | `ShopItemAdded` | `SystemButtonBuyShopItem` | `greg.SYSTEM.ButtonBuyShopItem` |
| 503 | `ShopItemRemoved` | `SystemSpawnedItemRemoved` | `greg.SYSTEM.oveSpawnedItemRemoved` |
| 209 | `SwitchBroken` | `NetworkBrokenSwitchAdded` | `greg.NETWORK.BrokenSwitchAdded` |
| 210 | `SwitchRepaired` | `NetworkBrokenSwitchRemoved` | `greg.NETWORK.oveBrokenSwitchRemoved` |
| 800 | `WallPurchased` | `SystemButtonBuyWall` | `greg.SYSTEM.ButtonBuyWall` |
| 101 | `XPChanged` | `PlayerXpChanged` | `greg.PLAYER.XPChanged` |

## Important coverage note

The two tables above cover the **native bridge constants/mappings** surface.

The complete hook inventory (including non-EventIds HookBinder hooks) is documented in the generated **Hooks Library** pages.

- Hooks Library root: `/wiki/development/hooks-library`
- Source for generated hook pages: `gregCore/gregFramework/greg_hooks.json`

## Stability advisory: `Interact.OnHoverOver`

- **Layer:** Core SDK layer (`gregCore` Harmony patch class `GregHexViewerPatch`)
- **Current runtime status:** The `Interact.OnHoverOver` postfix hook path is currently safeguarded and disabled as a temporary stability gate.
- **Why:** Crash dump analysis identified a recursive hook loop in the hover path that produced stack overflow failures (`0xc00000fd`) during early runtime interaction.
- **Mitigation applied:** The hook was hard-gated to prevent execution while preserving broader hook/event runtime initialization.
- **Activation switch:** The hook is **opt-in** and only active when environment variable `GREG_ENABLE_HOVER_PATCH` is truthy (`1`, `true`, `yes`, `on`).
- **Impact to mods:** `greg.WORLD.InteractionHovered`-adjacent behavior may be reduced until a safe reimplementation is shipped.
- **Re-enable policy:** Re-enable only after a validated non-recursive implementation passes startup stability and interaction stress checks.

## Fallback behavior

Unknown event ids resolve to ``greg.SYSTEM.UnmappedNativeEvent`` via ``GregNativeEventHooks.Resolve``.

## See also

- [greg hook naming](/wiki/reference/fmf-hook-naming)
- [hooks library](/wiki/development/hooks-library)
- [EventIds source](https://github.com/mleem97/gregFramework/blob/main/gregCore/gregModLoader/EventDispatcher.cs)
- [GregNativeEventHooks source](https://github.com/mleem97/gregFramework/blob/main/gregCore/gregSdk/GregNativeEventHooks.cs)

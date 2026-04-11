---
title: greg.SYSTEM.ButtonBuyShopItem
sidebar_label: ButtonBuyShopItem
description: Canonical event hook for greg.SYSTEM.ButtonBuyShopItem (Normalized Unity Signal).
---

# greg.SYSTEM.ButtonBuyShopItem

This hook is triggered during the $fullHook event lifecycle. It is part of the normalized gregCore event pipeline.

## Payload Contract (GregSignalPayload)
- SourceAsm: Assembly name
- SourceType: Type name
- SourceMethod: Method name
- EntityId: Contextual ID of the affected entity
- TimestampUtc: Time of the event

## Example
````csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.SystemButtonBuyShopItem, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.ButtonBuyShopItem triggered for {entityId}");
});
```
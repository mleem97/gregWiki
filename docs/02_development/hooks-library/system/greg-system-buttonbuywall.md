---
title: greg.SYSTEM.ButtonBuyWall
sidebar_label: ButtonBuyWall
description: Canonical event hook for greg.SYSTEM.ButtonBuyWall (Normalized Unity Signal).
---

# greg.SYSTEM.ButtonBuyWall

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

gregEventDispatcher.On(gregNativeEventHooks.SystemButtonBuyWall, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SYSTEM.ButtonBuyWall triggered for {entityId}");
});
```
---
title: greg.PLAYER.XPChanged
sidebar_label: XPChanged
description: Canonical event hook for greg.PLAYER.XPChanged (Normalized Unity Signal).
---

# greg.PLAYER.XPChanged

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

gregEventDispatcher.On(gregNativeEventHooks.PlayerXpChanged, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.PLAYER.XPChanged triggered for {entityId}");
});
```
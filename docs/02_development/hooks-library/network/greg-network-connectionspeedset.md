---
title: greg.NETWORK.ConnectionSpeedSet
sidebar_label: ConnectionSpeedSet
description: Canonical event hook for greg.NETWORK.ConnectionSpeedSet (Normalized Unity Signal).
---

# greg.NETWORK.ConnectionSpeedSet

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

gregEventDispatcher.On(gregNativeEventHooks.NetworkConnectionSpeedSet, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.NETWORK.ConnectionSpeedSet triggered for {entityId}");
});
```
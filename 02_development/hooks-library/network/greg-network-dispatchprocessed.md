---
title: greg.NETWORK.DispatchProcessed
sidebar_label: DispatchProcessed
description: Canonical event hook for greg.NETWORK.DispatchProcessed (Normalized Unity Signal).
---

# greg.NETWORK.DispatchProcessed

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

gregEventDispatcher.On(gregNativeEventHooks.NetworkDispatchProcessed, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.NETWORK.DispatchProcessed triggered for {entityId}");
});
```

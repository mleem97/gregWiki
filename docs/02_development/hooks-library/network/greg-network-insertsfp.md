---
title: greg.NETWORK.InsertSFP
sidebar_label: InsertSFP
description: Canonical event hook for greg.NETWORK.InsertSFP (Normalized Unity Signal).
---

# greg.NETWORK.InsertSFP

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

gregEventDispatcher.On(gregNativeEventHooks.NetworkInsertSfp, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.NETWORK.InsertSFP triggered for {entityId}");
});
```
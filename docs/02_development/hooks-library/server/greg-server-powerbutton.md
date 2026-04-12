---
title: greg.SERVER.PowerButton
sidebar_label: PowerButton
description: Canonical event hook for greg.SERVER.PowerButton (Normalized Unity Signal).
---

# greg.SERVER.PowerButton

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

gregEventDispatcher.On(gregNativeEventHooks.ServerPowerButton, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SERVER.PowerButton triggered for {entityId}");
});
```

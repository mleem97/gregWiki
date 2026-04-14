---
title: greg.NETWORK.oveBrokenSwitchRemoved
sidebar_label: oveBrokenSwitchRemoved
description: Canonical event hook for greg.NETWORK.oveBrokenSwitchRemoved (Normalized Unity Signal).
---

# greg.NETWORK.oveBrokenSwitchRemoved

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

gregEventDispatcher.On(gregNativeEventHooks.NetworkBrokenSwitchRemoved, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.NETWORK.oveBrokenSwitchRemoved triggered for {entityId}");
});
```

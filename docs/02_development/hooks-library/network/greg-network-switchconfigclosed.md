---
title: greg.NETWORK.SwitchConfigClosed
sidebar_label: SwitchConfigClosed
description: Canonical event hook for greg.NETWORK.SwitchConfigClosed (Normalized Unity Signal).
---

# greg.NETWORK.SwitchConfigClosed

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

gregEventDispatcher.On(gregNativeEventHooks.NetworkSwitchConfigClosed, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.NETWORK.SwitchConfigClosed triggered for {entityId}");
});
```
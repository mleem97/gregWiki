---
title: greg.SERVER.AppIDChanged
sidebar_label: AppIDChanged
description: Canonical event hook for greg.SERVER.AppIDChanged (Normalized Unity Signal).
---

# greg.SERVER.AppIDChanged

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

gregEventDispatcher.On(gregNativeEventHooks.ServerAppIdChanged, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.SERVER.AppIDChanged triggered for {entityId}");
});
```

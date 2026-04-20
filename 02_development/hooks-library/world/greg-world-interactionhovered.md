---
title: greg.WORLD.InteractionHovered
sidebar_label: InteractionHovered
description: Canonical event hook for greg.WORLD.InteractionHovered (Normalized Unity Signal).
---

# greg.WORLD.InteractionHovered

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

gregEventDispatcher.On(gregNativeEventHooks.WorldInteractionHovered, payload => {
    var entityId = gregPayload.Get<string>(payload, "EntityId");
    MelonLoader.MelonLogger.Msg($"Event greg.WORLD.InteractionHovered triggered for {entityId}");
});
```

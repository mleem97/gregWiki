---
title: greg.Input.ActionTriggered
sidebar_label: greg.Input.ActionTriggered
description: "gregCore Hook — Normalized Unity signal for an input action being triggered."
---

# `greg.Input.ActionTriggered`

## Description

- Normalized Unity signal for an input action being triggered.

## How to use this hook

### C# Snippet (using `gregSdk`)

```csharp
using gregSdk;

GregEventDispatcher.On("greg.Input.ActionTriggered", payload =>
{
    // Handle input action triggered event
});
```

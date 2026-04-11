---
title: greg.Content.OverrideApplied
sidebar_label: greg.Content.OverrideApplied
description: "gregCore Hook — Normalized Unity signal for content override being applied."
---

# `greg.Content.OverrideApplied`

## Description

- Normalized Unity signal for content override being applied.

## How to use this hook

### C# Snippet (using `gregSdk`)

```csharp
using gregSdk;

GregEventDispatcher.On("greg.Content.OverrideApplied", payload =>
{
    // Handle content override applied event
});
```

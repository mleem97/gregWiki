---
title: greg.Input.BindingApplied
sidebar_label: BindingApplied
description: "gregCore Hook — Normalized Unity signal for an input binding being applied."
---

# `greg.Input.BindingApplied`

## Description

- Normalized Unity signal for an input binding being applied.

## How to use this hook

### C# Snippet (using `gregSdk`)

```csharp
using gregSdk;

GregEventDispatcher.On("greg.Input.BindingApplied", payload =>
{
    // Handle input binding applied event
});
```

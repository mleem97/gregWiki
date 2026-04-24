import json
import os
import re

# Paths
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
HOOKS_JSON_PATH = os.path.join(ROOT_DIR, "gregCore", "game_hooks.json")
WIKI_HOOKS_DIR = os.path.join(ROOT_DIR, "gregWiki", "api", "hooks")

def camel_to_kebab(name):
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1-\2', s1).lower()

def safe_type(t):
    return t if t else "Unknown"

def build_signature(ret, name, params):
    param_str = ", ".join([f"{safe_type(p.get('Type'))} {p.get('Name')}" for p in params])
    return f"{safe_type(ret)} {name}({param_str})"

def generate_page(hook):
    group = hook.get("Group", "General").lower()
    ns = hook.get("Namespace", "")
    cls = hook.get("ClassName", "")
    method = hook.get("MethodName", "")
    ret = hook.get("ReturnType", "Void")
    params = hook.get("Parameters", [])
    
    # E.g. greg.hardware.ServerPowered
    hook_path = f"greg.{group}.{cls}.{method}".lower()
    
    # Path inside wiki
    group_dir = os.path.join(WIKI_HOOKS_DIR, group)
    os.makedirs(group_dir, exist_ok=True)
    
    file_name = f"{camel_to_kebab(cls)}-{camel_to_kebab(method)}.md"
    file_path = os.path.join(group_dir, file_name)
    
    # Handle Overloads: if file exists, append param count or names to be unique
    if os.path.exists(file_path):
        param_suffix = "-".join([p.get('Name').lower() for p in params])
        if not param_suffix: param_suffix = "alt"
        file_name = f"{camel_to_kebab(cls)}-{camel_to_kebab(method)}-{param_suffix}.md"
        file_path = os.path.join(group_dir, file_name)

    # Payload table
    param_table = "| Name | Type | Description |\n|---|---|---|\n"
    for p in params:
        param_table += f"| `{p.get('Name')}` | `{safe_type(p.get('Type'))}` | ... |\n"
        
    if not params:
        param_table = "*No parameters in payload.*\n"
        
    # Content
    content = f"""---
title: {cls}.{method}
description: Hook event for {cls}.{method}
path: /api/hooks/{group}/{file_name.replace('.md','')}
---

# {cls}.{method}

> **Hook ID:** `{hook_path}`
> **Category:** {group.title()}
> **Namespace:** `{ns}`

This hook intercepts calls to `{cls}.{method}()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
{build_signature(ret, method, params)}
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

{param_table}

## Using this Hook

::: tip
Use this hook to react to `{method}` events in `{cls}`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{{
    public override void OnInitializeMelon()
    {{
        GregAPI.Subscribe("{hook_path}", OnHookTriggered);
    }}

    private void OnHookTriggered(EventPayload payload)
    {{
        // Custom logic here
    }}
}}
```
#Tab: Lua
```lua
greg.subscribe("{hook_path}", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("{hook_path}")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("{hook_path}", (payload) => {{
    // Custom JS logic here
}});
```
#Tab: Rust
```rust
greg::subscribe("{hook_path}", |payload| {{
    // Custom Rust logic here
}});
```
#Tab: Go
```go
greg.Subscribe("{hook_path}", func(payload greg.EventPayload) {{
    // Custom Go logic here
}})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `{ret}`
- **Safe to block?**: {'Yes' if ret != 'Void' else 'Depends on implementation'}
"""
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

def main():
    # Ensure directory exists
    os.makedirs(WIKI_HOOKS_DIR, exist_ok=True)

    if not os.path.exists(HOOKS_JSON_PATH):
        print(f"Error: {HOOKS_JSON_PATH} not found.")
        return
        
    with open(HOOKS_JSON_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    hooks = data if isinstance(data, list) else data.get("Hooks", [])
    print(f"Generating Wiki.js pages for {len(hooks)} hooks...")
    
    for hook in hooks:
        generate_page(hook)
        
    print("Done! Check gregWiki/api/hooks/")

if __name__ == "__main__":
    main()

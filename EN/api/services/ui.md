# UI Service

The **UI Service** allows mods to display notifications, create custom panels, and integrate into the native game menus.

## Namespace
`gregCore.PublicApi.Modules`

## Method Signatures

### `void ShowNotification(string message)`
Displays a temporary notification in the game's UI.

### `void RegisterTab(string id, string displayName, Action<GregUiPanel> onPopulate)`
Registers a new tab in the "Mods" section of the pause menu.

### `void ShowDialog(string title, string content, Action onConfirm = null)`
Shows a modal dialog box to the player.

## Usage Examples

### C#
```csharp
Api.UI.ShowNotification("Hello from C#!");
```

### Lua
```lua
greg.show_notification("Hello from Lua!")
```

### JavaScript
```javascript
greg.fire("greg.ui.ShowNotification", { message: "Hello from JS!" });
```

## Related Hooks
- `greg.ui.TabOpened`
- `greg.ui.DialogClosed`

---
[Back to Services](README.md)

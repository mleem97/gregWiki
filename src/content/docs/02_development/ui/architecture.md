---
title: UI Architecture in Data Center
---
# UI Architecture in Data Center

Data Center uses a standard Unity **uGUI** system. Understanding how it is structured is the first step to modernizing it.

## The UI Stack

1. **Canvases**: Most UI elements are parented to a `Canvas` with a `CanvasScaler` and `GraphicRaycaster`.
2. **StaticUIElements**: A central game class that holds references to many UI singletons (Tooltips, Menus, etc.).
3. **MainGameManager**: Manages high-level UI states like `setIP` (Keypad), `PauseMenu`, and `CustomerCards`.

## uGUI vs. IMGUI (OnGUI)

* **uGUI (Modern)**: Uses `GameObject`s, `RectTransform`s, and components like `Image`, `Button`, and `TextMeshProUGUI`. This is what the game uses for its main interface.
* **IMGUI (Legacy/Debug)**: Uses the `OnGUI()` method and `GUI`/`GUILayout` classes. The `gregCore` debug overlay and some `gregIPAM` tools use this for rapid prototyping.

## Modernization Strategy

To replace the "shitty" vanilla UI with a modern design:

1. **Intercept**: Find the vanilla UI `GameObject` using `GameObject.Find()` or `StaticUIElements`.
2. **Disable/Hide**: Disable the original `Graphic` components or the entire object.
3. **Inject**: Instantiate your own modern UI prefabs or build them via C# code.
4. **Sync**: Bind your UI events to the original game logic (e.g., clicking your modern "Apply" button calls the vanilla `SetIP.Apply()` method).


## Further Reading
* [Replacing Vanilla UI Elements](./replacing-vanilla-ui.md)
* [Building Custom UIs with C#](./custom-ugui-csharp.md)

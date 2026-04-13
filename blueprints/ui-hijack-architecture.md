# Blueprint: The Ultimate Unity UI Hijack Architecture

*This blueprint is based on the official guidelines for premium UI replacement in Unity Modding projects.*

## Core Philosophy
We do not modify; we replace. We do not destroy; we suppress. Our goal is a digital environment that feels native to the GregFramework while maintaining the integrity of the original game logic.

---

## Phase 1: Reconnaissance (Analysis)
1. **Scene Graph Audit**: Identify root canvases (`Canvas_OverAll`, `UIRoot`) to target.
2. **Event System Check**: Verify if a global `EventSystem` exists.
3. **Logic Hooks**: Map original triggers (e.g., `LoadGame()`) to new UI events via Reflection.

## Phase 2: Silent Takedown (Suppression)
1. **Suppress, Don't Destroy**: Use `SetActive(false)` on original UI roots.
2. **Graphic Silencing**: Disable `Graphic` and `Selectable` components to prevent interaction interference without breaking references held by the game.

## Phase 3: The New Foundation (Canvas Setup)
1. **Overlay Canvas**: `ScreenSpaceOverlay` with `sortingOrder 1,000,000`.
2. **Scaling Standard**: MUST use `CanvasScaler` with:
   - `uiScaleMode`: `ScaleWithScreenSize`
   - `referenceResolution`: `1920 x 1080`
   - `screenMatchMode`: `MatchWidthOrHeight` (Match: 0.5)

## Phase 4: Dynamic Construction (Building)
1. **Containerized Layouts**: Use empty GameObjects as semantic containers (Panels).
2. **Layout Groups**: Favor `VerticalLayoutGroup` and `HorizontalLayoutGroup` over fixed coordinates.
3. **RectTransform Anchors**: Configure relative to the screen (e.g., `Y:0.5` for sidebars).

## Phase 5: Logic Binding (Functionality)
1. **AddListener**: Bind buttons to `Action` callbacks.
2. **Method Invocation**: Call vanilla methods (e.g., `GameManager.Instance.Resume()`) from the hijacking class.
3. **State Sync**: Update custom UI elements via `Update()` hooks or specialized polling.

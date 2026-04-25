Title: UMA Reference
Path: /api/models/uma-reference
Type: Reference
Audience: mod developer, framework developer
Summary: Technical reference for the Unity Multipurpose Avatar (UMA) system as used in Data Center for dynamic technician generation.
Suggested Tags: uma, character-system, avatars, technicians, unity, il2cpp
Related Pages: /api/game-api-reference, /roadmap/multiplayer
Split Recommendation: Keep as one page

# UMA (Unity Multipurpose Avatar) Reference

*Data Center* utilizes the **UMA** system to dynamically generate technician characters at runtime. Unlike static models, UMA characters assemble their meshes, materials, and bone structures on-the-fly, which requires specialized handling for modding and multiplayer synchronization.

---

## Technical Overview
UMA characters do not have a `SkinnedMeshRenderer` at prefab time. The renderer and mesh are created only after the `DynamicCharacterAvatar` component executes its generation pipeline.

### Why This Matters
When instantiating a remote player or a custom technician, you must allow the UMA generation cycle (typically 1–3 frames) to complete before attempting to access renderers or materials.

---

## Core Components

### 1. DynamicCharacterAvatar
The primary controller for an UMA character. It manages race, wardrobe recipes, DNA (body shape), and colors.
- **`BuildCharacter()`**: The main entry point to trigger a full character assembly.
- **`ForceUpdate()`**: Marks specific data (DNA, Texture, Mesh) as dirty and forces a rebuild.
- **`characterColors`**: A list of color settings applied to the character's materials.

### 2. UMAData
Holds the runtime state of a generated character, including the bone hierarchy and mesh references.
- **`isOfficiallyCreated`**: A boolean flag indicating the character is fully built and visible.
- **`GetRenderers()`**: Returns the array of generated `SkinnedMeshRenderer` components.
- **`Dirty()`**: Marks the character for a rebuild by the global generator.

### 3. UMAGenerator
A scene-wide singleton (found via `UMAGeneratorBase.FindInstance()`) that processes the queue of characters needing generation. It combines individual slot meshes into a single optimized mesh and merges textures into atlases.

---

## Character Generation Pipeline
1. **Avatar Initialization**: `DynamicCharacterAvatar` loads a recipe (JSON or Asset).
2. **Dirty State**: Data is marked as dirty, adding the character to the `UMAGenerator` queue.
3. **Generation Pass**: The generator processes slots, merges textures, and combines meshes.
4. **Completion**: The `CharacterCreated` callback is fired, and the character becomes visible in the world.

---

## IL2CPP Gotchas & Tips

### SkinnedMeshRenderer Detection
In IL2CPP, standard `GetComponent` calls may fail to find the generated renderer.
- **Workaround**: Search for a child GameObject named `"UMARenderer"` or access the renderer list via `UMAData.GetRenderers()`.

### Remote Player Scripts
When cloning technician prefabs for multiplayer, ensure you disable AI and navigation scripts immediately while keeping UMA and Animator components active for the generation phase.

### Accurate Type Detection
Use `mb.GetIl2CppType().Name` instead of `mb.GetType().Name` to identify UMA components reliably in the IL2CPP runtime.

---

## Related Game Types
- **`MainGameManager.techniciansPrefabs`**: The source prefabs for all NPC technicians.
- **`TechnicianManager.instance.technicians`**: A list of all currently active technician instances in the scene.

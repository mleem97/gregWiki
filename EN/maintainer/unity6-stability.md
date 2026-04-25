# Unity 6 & IL2CPP Stability Report

## The Challenge
The game 'Data Center' uses Unity 6 (6000.x) with the IL2CPP backend. This environment is extremely aggressive regarding code stripping.

## Key Issues Found
1. **IMGUI Stripping:** Managed delegates used in GUI.Window (OnGUI) cause Method unstripping failed crashes.
2. **Missing Field Accessors:** Simple property getters like get_switchId() are inlined and cannot be patched via Harmony.
3. **Assembly Cache Corruption:** MelonLoader's Il2CppAssemblies cache often becomes stale after framework updates.

## Solutions in v1.0.0.35
1. **UGUI Migration:** All IMGUI code has been replaced with persistent UGUI components via the GregUIBuilder.
2. **Field Patching:** Access private fields using ___fieldName in Harmony instead of public getters.
3. **Restored Bricks:** Missing legacy types (gregEventDispatcher) have been restored to greg.Sdk to support older mods.

## Mandatory Maintenance
After every update to gregCore.dll, you **MUST** delete the following folder:
[GamePath]/MelonLoader/Il2CppAssemblies/
This forces a clean metadata regeneration.

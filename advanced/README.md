# Advanced Systems

This section is for **Content Authors** who want to add physical objects and complex gameplay systems to *Data Center*.

## 📂 Advanced Guide Index
- [**Custom Servers**](custom-servers.md): Define new server hardware with unique stats.
- [**Custom Switches**](custom-switches.md): Create networking hardware with custom port counts.
- [**Custom NPCs and Employees**](custom-npcs-employees.md): Define worker behavior and hiring rules.
- [**Custom Customers and Jobs**](custom-customers-jobs.md): Add new contract types and requirements.
- [**Persistence and Save Stability**](persistence-and-save.md): Ensure your data survives game updates.

## 🏛️ Framework Concepts for Content
To create custom content, you'll need to use:
1. **Registries**: To register your new type (e.g., `ServerRegistry`).
2. **Hooks**: To respond to interaction events (e.g., `greg.hardware.ServerInstalled`).
3. **Model Overrides**: To specify the visual representation of your object.

---
[Next: Custom Servers](custom-servers.md)

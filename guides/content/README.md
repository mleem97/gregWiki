# Content Creation Manuals

::: info
**Target Audience**: Content Authors and Advanced Modders.
**Objective**: Learn how to add physical objects, staff, and gameplay systems to *Data Center*.
:::

Content Creation is the process of expanding the game world. While scripting handles the "how" (logic), content creation handles the "what" (entities). gregCore provides a unified registry system to inject your custom assets and definitions into the game's simulation.

## 📂 Content Areas

### 1. [Custom Servers](/guides/content/servers)
Define new server hardware with unique technical specifications, price points, and visual models.
- **Topics**: Stats, Blueprints, Model Overrides.

### 2. [Custom Switches](/guides/content/switches)
Build networking hardware with custom port counts, throughput limits, and compatibility rules.
- **Topics**: Port Mapping,Bandwidth, Routing Logic.

### 3. [NPCs & Employees](/guides/content/npcs-employees)
Create new worker roles for the data center, from specialized technicians to facility managers.
- **Topics**: Roles, Efficiency, Behavior Hooks.

### 4. [Customers & Orders](/guides/content/customers-orders)
Add new companies and contract types to the game's economic simulation.
- **Topics**: SLAs, Job Generation, Requirements.

## 🛠️ The Content Workflow
Every piece of custom content follows a standardized three-step lifecycle:

### Step 1: Definition
Create a data structure (e.g., `ServerType`) that specifies the characteristics of your content. This is your "Blueprint."

### Step 2: Registration
Submit your blueprint to the relevant gregCore Registry during the **`OnLoad`** phase of your mod. This ensures the game's shop and save-system are aware of it.

### Step 3: Integration
Use **Hooks** to define how the game world reacts to your content at runtime. For example, show a special UI when your custom server is clicked.

::: warning
**Save Stability**: Always use unique IDs for your content (e.g., `com.myname.coolserver`). Changing an ID after a player has saved their game will cause the object to disappear or break.
:::

---
[Next: Custom Servers Guide](/guides/content/servers)

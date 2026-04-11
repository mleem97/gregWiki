local MOD_ID = "HexViewer"
local PANEL_ID = "hexviewer.topcenter"
local MAX_DISTANCE = 10.0

local state = {
  visible = false,
  targetType = "Unbekannt",
  targetColor = "N/A",
  targetOwner = "N/A"
}

local hooks = {
  "greg.SERVER.ServerInsertedInRack",
  "greg.NETWORK.CreateNewCable",
  "greg.SERVER.CustomerChanged",
  "greg.RACK.ButtonUnmountRack"
}

local function on_hex_target(payload)
  -- gregCore-specific payload access in Lua bridge host
  state.targetType = greg.payload.get(payload, "ServerType", "Unbekannt")
  state.targetColor = greg.payload.get(payload, "Color", "N/A")
  state.targetOwner = greg.payload.get(payload, "CustomerId", "N/A")
  state.visible = true
end

local function update_target_from_focus()
  -- gregCore-specific target probe in Lua bridge host
  local hit = greg.target.raycast_forward(MAX_DISTANCE)
  if not hit then
    state.visible = false
    return
  end

  state.visible = true

  if hit.objectName and hit.objectName ~= "" then
    state.targetType = hit.objectName
  end
end

local function render_panel()
  if not state.visible then
    return
  end

  -- gregCore-specific native HUD trigger for bridge-hosted IMGUI drawing
  greg.hud.begin_panel(PANEL_ID, {
    x = (greg.screen.width() / 2.0) - 200.0,
    y = 10.0,
    width = 400.0,
    height = 80.0,
    anchor = "TopCenter"
  })

  greg.hud.label("Typ: " .. tostring(state.targetType))
  greg.hud.label("Farbe: " .. tostring(state.targetColor))
  greg.hud.label("Besitzer: " .. tostring(state.targetOwner))

  greg.hud.end_panel()
end

local function on_update(dt, frame)
  -- gregCore-specific tick publish adapter in Lua host
  greg.framework.publish_tick({ deltaTime = dt, frame = frame })
  update_target_from_focus()
end

local function register()
  -- gregCore-specific registration in Lua registry
  greg.registry.register_mod({ id = MOD_ID, name = "HexViewer", version = "00.01.0001" })

  for _, hook in ipairs(hooks) do
    greg.events.on(hook, on_hex_target, MOD_ID)
  end

  greg.events.on_update(on_update, MOD_ID)
  greg.events.on_gui(render_panel, MOD_ID)
end

local function unregister()
  greg.events.unregister_all(MOD_ID)
end

register()

return {
  unregister = unregister
}

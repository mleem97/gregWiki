const MOD_ID: &str = "HexViewer";
const MAX_DISTANCE: f32 = 10.0;

#[derive(Clone, Debug)]
struct HexViewerState {
    visible: bool,
    target_type: String,
    target_color: String,
    target_owner: String,
}

impl Default for HexViewerState {
    fn default() -> Self {
        Self {
            visible: false,
            target_type: "Unbekannt".to_string(),
            target_color: "N/A".to_string(),
            target_owner: "N/A".to_string(),
        }
    }
}

static mut STATE: Option<HexViewerState> = None;

#[allow(dead_code)]
fn initialize_state() {
    unsafe {
        if STATE.is_none() {
            STATE = Some(HexViewerState::default());
        }
    }
}

#[allow(dead_code)]
fn on_hex_target(payload: gregcore_sdk::PayloadRef) {
    initialize_state();

    unsafe {
        if let Some(state) = STATE.as_mut() {
            // gregCore-specific payload extraction from Rust bridge SDK
            state.target_type = gregcore_sdk::payload::get_string(payload, "ServerType", "Unbekannt");
            state.target_color = gregcore_sdk::payload::get_string(payload, "Color", "N/A");
            state.target_owner = gregcore_sdk::payload::get_string(payload, "CustomerId", "N/A");
            state.visible = true;
        }
    }
}

#[allow(dead_code)]
fn update_target_from_focus() {
    initialize_state();

    // gregCore-specific focus query through Rust SDK host
    let hit = gregcore_sdk::targeting::raycast_forward(MAX_DISTANCE);

    unsafe {
        if let Some(state) = STATE.as_mut() {
            match hit {
                Some(focus_hit) => {
                    state.visible = true;
                    if !focus_hit.object_name.is_empty() {
                        state.target_type = focus_hit.object_name;
                    }
                }
                None => {
                    state.visible = false;
                }
            }
        }
    }
}

#[allow(dead_code)]
fn on_gui() {
    initialize_state();

    unsafe {
        if let Some(state) = STATE.as_ref() {
            if !state.visible {
                return;
            }

            // gregCore-specific native IMGUI bridge calls from Rust host
            gregcore_sdk::hud::begin_panel(
                "hexviewer.topcenter",
                gregcore_sdk::hud::PanelRect {
                    x: (gregcore_sdk::screen::width() / 2.0) - 200.0,
                    y: 10.0,
                    width: 400.0,
                    height: 80.0,
                },
            );

            gregcore_sdk::hud::label(&format!("Typ: {}", state.target_type));
            gregcore_sdk::hud::label(&format!("Farbe: {}", state.target_color));
            gregcore_sdk::hud::label(&format!("Besitzer: {}", state.target_owner));

            gregcore_sdk::hud::end_panel();
        }
    }
}

#[no_mangle]
pub extern "C" fn greg_mod_init() {
    initialize_state();

    // gregCore-specific mod registration and event subscriptions
    gregcore_sdk::registry::register_mod(MOD_ID, "HexViewer", "00.01.0001");

    gregcore_sdk::events::on("greg.SERVER.ServerInsertedInRack", on_hex_target, MOD_ID);
    gregcore_sdk::events::on("greg.NETWORK.CreateNewCable", on_hex_target, MOD_ID);
    gregcore_sdk::events::on("greg.SERVER.CustomerChanged", on_hex_target, MOD_ID);
    gregcore_sdk::events::on("greg.RACK.ButtonUnmountRack", on_hex_target, MOD_ID);

    gregcore_sdk::events::on_update(
        |delta_time, frame| {
            gregcore_sdk::framework::publish_tick(delta_time, frame);
            update_target_from_focus();
        },
        MOD_ID,
    );

    gregcore_sdk::events::on_gui(on_gui, MOD_ID);
}

#[no_mangle]
pub extern "C" fn greg_mod_shutdown() {
    gregcore_sdk::events::unregister_all(MOD_ID);
}

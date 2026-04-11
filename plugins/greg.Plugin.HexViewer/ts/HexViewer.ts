const MOD_ID = 'HexViewer';
const PANEL_ID = 'hexviewer.topcenter';
const MAX_DISTANCE = 10;

type TargetPayload = Record<string, unknown>;

type HexViewerState = {
  visible: boolean;
  targetType: string;
  targetColor: string;
  targetOwner: string;
};

const state: HexViewerState = {
  visible: false,
  targetType: 'Unbekannt',
  targetColor: 'N/A',
  targetOwner: 'N/A',
};

const hooks = [
  'greg.SERVER.ServerInsertedInRack',
  'greg.NETWORK.CreateNewCable',
  'greg.SERVER.CustomerChanged',
  'greg.RACK.ButtonUnmountRack',
];

function onHexTarget(payload: TargetPayload): void {
  // gregCore-specific payload extraction in TS bridge host
  state.targetType = greg.payload.get<string>(payload, 'ServerType', 'Unbekannt');
  state.targetColor = greg.payload.get<string>(payload, 'Color', 'N/A');
  state.targetOwner = greg.payload.get<string>(payload, 'CustomerId', 'N/A');
  state.visible = true;
}

function updateTargetFromFocus(): void {
  // gregCore-specific target acquisition in TS bridge host
  const hit = greg.target.raycastForward(MAX_DISTANCE);
  if (!hit) {
    state.visible = false;
    return;
  }

  state.visible = true;

  if (hit.objectName) {
    state.targetType = hit.objectName;
  }
}

function onGui(): void {
  if (!state.visible) {
    return;
  }

  // gregCore-specific native panel trigger (TopCenter anchored IMGUI host)
  greg.hud.beginPanel(PANEL_ID, {
    x: (greg.screen.width() / 2) - 200,
    y: 10,
    width: 400,
    height: 80,
    anchor: 'TopCenter',
  });

  greg.hud.label(`Typ: ${state.targetType}`);
  greg.hud.label(`Farbe: ${state.targetColor}`);
  greg.hud.label(`Besitzer: ${state.targetOwner}`);

  greg.hud.endPanel();
}

function onUpdate(deltaTime: number, frame: number): void {
  // gregCore-specific tick propagation in TS bridge host
  greg.framework.publishTick({ deltaTime, frame });
  updateTargetFromFocus();
}

export function registerHexViewer(): void {
  // gregCore-specific bridge registry registration
  greg.registry.registerMod({
    id: MOD_ID,
    name: 'HexViewer',
    version: '00.01.0001',
  });

  for (const hookName of hooks) {
    greg.events.on(hookName, onHexTarget, MOD_ID);
  }

  greg.events.onUpdate(onUpdate, MOD_ID);
  greg.events.onGui(onGui, MOD_ID);
}

export function unregisterHexViewer(): void {
  greg.events.unregisterAll(MOD_ID);
}

registerHexViewer();

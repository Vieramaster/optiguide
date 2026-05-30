import { buildLensThicknessSimulatorView } from "../logic/build-lens-thickness-simulator-view";
import type { LensThicknessSimulatorView } from "../types/lens-comparison-view";

import { useSimulatorOrchestrator } from "./use-simulator-orchestrator";

export const useLensThicknessSimulatorView = (): LensThicknessSimulatorView => {
  const orchestratorState = useSimulatorOrchestrator();
  const simulatorView = buildLensThicknessSimulatorView(orchestratorState);

  return simulatorView;
};

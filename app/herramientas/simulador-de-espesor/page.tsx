import dynamic from "next/dynamic";

import { PageSkeleton } from "@/shared/components";

const LensThicknessSimulator = dynamic(
  () =>
    import("@/features/tools/lens-thickness").then(
      (mod) => mod.LensThicknessSimulator,
    ),
  {
    loading: () => <PageSkeleton />,
  },
);

const LensThicknessSimulatorPage = () => <LensThicknessSimulator />;

export default LensThicknessSimulatorPage;

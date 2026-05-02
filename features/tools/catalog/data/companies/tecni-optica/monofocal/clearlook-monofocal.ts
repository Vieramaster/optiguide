import type { LensObjectInput } from "@/features/tools/catalog/types/optica-company";

export const CLEARLOOK_MONOFOCAL: LensObjectInput[] = [
    { key: "cl-cr39-v1-base", lens: "clearLook_cr39_01" },
    { key: "cl-cr39-v1-arbasic", lens: "clearLook_cr39_01", treatment: ["ClearLookArBasic"] },
    { key: "cl-cr39-v1-arsupra", lens: "clearLook_cr39_01", treatment: ["ClearLookArSupra"] },
  
    { key: "cl-cr39-v2-arbasic-fotoCL1", lens: "clearLook_cr39_02", treatment: ["ClearLookArBasic"], photochromatic: "FotocromaticoCL1" },
    { key: "cl-cr39-v2-arsupra-fotoCL1", lens: "clearLook_cr39_02", treatment: ["ClearLookArSupra"], photochromatic: "FotocromaticoCL1" },
    { key: "cl-cr39-v2-arbasic-fotoCL2", lens: "clearLook_cr39_02", treatment: ["ClearLookArBasic"], photochromatic: "FotocromaticoCL2" },
    { key: "cl-cr39-v2-arsupra-fotoCL2", lens: "clearLook_cr39_02", treatment: ["ClearLookArSupra"], photochromatic: "FotocromaticoCL2" },
  
    { key: "cl-poli-v1-arbasic", lens: "clearLook_policarbonate_01", treatment: ["ClearLookArBasic"] },
    { key: "cl-poli-v1-arsupra", lens: "clearLook_policarbonate_01", treatment: ["ClearLookArSupra"] },
  
    { key: "cl-160-v1-arbasic", lens: "clearLook_sharp160_01", treatment: ["ClearLookArBasic"] },
    { key: "cl-160-v1-arsupra", lens: "clearLook_sharp160_01", treatment: ["ClearLookArSupra"] },
    { key: "cl-160-v1-arbasic-blue", lens: "clearLook_sharp160_01", treatment: ["ClearLookArBasic", "ClearBlue"] },
    { key: "cl-160-v1-arsupra-blue", lens: "clearLook_sharp160_01", treatment: ["ClearLookArSupra", "ClearBlue"] },
    { key: "cl-160-v1-arbasic-fotoCL3", lens: "clearLook_sharp160_01", treatment: ["ClearLookArBasic"], photochromatic: "FotocromaticoCL3" },
    { key: "cl-160-v1-arsupra-fotoCL3", lens: "clearLook_sharp160_01", treatment: ["ClearLookArSupra"], photochromatic: "FotocromaticoCL3" },
  
    { key: "cl-167-v1-arbasic", lens: "clearLook_sharp167_01", treatment: ["ClearLookArBasic"] },
    { key: "cl-167-v1-arsupra", lens: "clearLook_sharp167_01", treatment: ["ClearLookArSupra"] },
    { key: "cl-167-v2-arbasic-fotoCL3", lens: "clearLook_sharp167_02", treatment: ["ClearLookArBasic"], photochromatic: "FotocromaticoCL3" },
    { key: "cl-167-v2-arsupra-fotoCL3", lens: "clearLook_sharp167_02", treatment: ["ClearLookArSupra"], photochromatic: "FotocromaticoCL3" },
  
    { key: "cl-174-v1-arbasic", lens: "clearLook_sharp174_01", treatment: ["ClearLookArBasic"] },
    { key: "cl-174-v1-arsupra", lens: "clearLook_sharp174_01", treatment: ["ClearLookArSupra"] },
    { key: "cl-174-v2-arbasic", lens: "clearLook_sharp174_02", treatment: ["ClearLookArBasic"] },
    { key: "cl-174-v2-arsupra", lens: "clearLook_sharp174_02", treatment: ["ClearLookArSupra"] },
  
    { key: "cl-cr39-v4-polar", lens: "clearLook_cr39_04", treatment: ["ClearLookPolarized"] },
    { key: "cl-cr39-v4-polar-arbasic", lens: "clearLook_cr39_04", treatment: ["ClearLookPolarized", "ClearLookArBasic"] },
    { key: "cl-cr39-v4-polar-arsupra", lens: "clearLook_cr39_04", treatment: ["ClearLookPolarized", "ClearLookArSupra"] },
  
    { key: "cl-160-v2-stock-arbasic", lens: "clearLook_sharp160_02", treatment: ["ClearLookArBasic"] },
    { key: "cl-160-v2-stock-arbasic-blue", lens: "clearLook_sharp160_02", treatment: ["ClearLookArBasic", "ClearBlue"] },
  
    { key: "cl-cr39-v3-arbasic-fotoCL3", lens: "clearLook_cr39_03", treatment: ["ClearLookArBasic"], photochromatic: "FotocromaticoCL3" }
  ];
  
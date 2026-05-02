import type { LensObjectInput } from "@/features/tools/catalog/types/optica-company";

export const ESSILOR_MONOFOCAL: LensObjectInput[] = [
  { key: "es-orma1-base", lens: "essilor_orma_01" },
  { key: "es-orma1-midindex", lens: "essilor_orma_01", treatment: ["MidIndex"] },

  { key: "es-orma2-arsupra", lens: "essilor_orma_02", treatment: ["ClearLookSupra"] },
  { key: "es-orma2-sapphire", lens: "essilor_orma_02", treatment: ["CrizalSapphire"] },
  { key: "es-orma2-rock", lens: "essilor_orma_02", treatment: ["CrizalRock"] },
  { key: "es-orma2-prevencia", lens: "essilor_orma_02", treatment: ["CrizalPrevencia"] },

  { key: "es-orma3-base", lens: "essilor_orma_03" },
  { key: "es-orma3-midindex", lens: "essilor_orma_03", treatment: ["MidIndex"] },

  { key: "es-orma4-base", lens: "essilor_orma_04" },
  { key: "es-orma4-clook", lens: "essilor_orma_04", treatment: ["ClearLook"] },
  { key: "es-orma4-arsupra", lens: "essilor_orma_04", treatment: ["ClearLookSupra"] },
  { key: "es-orma4-sapphire", lens: "essilor_orma_04", treatment: ["CrizalSapphire"] },
  { key: "es-orma4-forte", lens: "essilor_orma_04", treatment: ["CrizalForte"] },
  { key: "es-orma4-prevencia", lens: "essilor_orma_04", treatment: ["CrizalPrevencia"] },

  { key: "es-orma5-base", lens: "essilor_orma_05" },
  { key: "es-orma5-clook", lens: "essilor_orma_05", treatment: ["ClearLook"] },
  { key: "es-orma5-arsupra", lens: "essilor_orma_05", treatment: ["ClearLookSupra"] },
  { key: "es-orma5-sapphire", lens: "essilor_orma_05", treatment: ["CrizalSapphire"] },
  { key: "es-orma5-forte", lens: "essilor_orma_05", treatment: ["CrizalForte"] },
  { key: "es-orma5-prevencia", lens: "essilor_orma_05", treatment: ["CrizalPrevencia"] },

  // BLUECUT
  { key: "es-orma1-bluecut-midindex", lens: "essilor_orma_01", treatment: ["BlueCut", "MidIndex"] },
  { key: "es-orma1-bluecut-clook", lens: "essilor_orma_01", treatment: ["BlueCut", "ClearLook"] },
  { key: "es-orma1-bluecut-arsupra", lens: "essilor_orma_01", treatment: ["BlueCut", "ClearLookSupra"] },

  { key: "es-ormix1-bluecut-midindex", lens: "essilor_ormix_01", treatment: ["BlueCut", "MidIndex"] },
  { key: "es-ormix1-bluecut-clook", lens: "essilor_ormix_01", treatment: ["BlueCut", "ClearLook"] },
  { key: "es-ormix1-bluecut-arsupra", lens: "essilor_ormix_01", treatment: ["BlueCut", "ClearLookSupra"] },

  { key: "es-ormix2-bluecut-midindex", lens: "essilor_ormix_02", treatment: ["BlueCut", "MidIndex"] },
  { key: "es-ormix2-bluecut-clook", lens: "essilor_ormix_02", treatment: ["BlueCut", "ClearLook"] },
  { key: "es-ormix2-bluecut-arsupra", lens: "essilor_ormix_02", treatment: ["BlueCut", "ClearLookSupra"] },

  { key: "es-ormix3-bluecut-midindex", lens: "essilor_ormix_03", treatment: ["BlueCut", "MidIndex"] },
  { key: "es-ormix3-bluecut-clook", lens: "essilor_ormix_03", treatment: ["BlueCut", "ClearLook"] },
  { key: "es-ormix3-bluecut-arsupra", lens: "essilor_ormix_03", treatment: ["BlueCut", "ClearLookSupra"] },

  { key: "es-ormix4-base", lens: "essilor_ormix_04" },
  { key: "es-ormix4-bluecut-arsupra", lens: "essilor_ormix_04", treatment: ["BlueCut", "ClearLookSupra"] },

  // TRANSITIONS GREY
  { key: "es-orma2-base-transGenSGrey", lens: "essilor_orma_02", photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma2-forte-transGenSGrey", lens: "essilor_orma_02", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGrey" },

  { key: "es-orma6-base-transGenSGrey", lens: "essilor_orma_06", photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma6-clook-transGenSGrey", lens: "essilor_orma_06", treatment: ["ClearLook"], photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma6-arsupra-transGenSGrey", lens: "essilor_orma_06", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma6-sapphire-transGenSGrey", lens: "essilor_orma_06", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma6-forte-transGenSGrey", lens: "essilor_orma_06", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma6-prevencia-transGenSGrey-v1", lens: "essilor_orma_06", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGrey" },
  { key: "es-orma6-prevencia-transGenSGrey-v2", lens: "essilor_orma_06", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGrey" },

  // TRANSITIONS COLORS
  { key: "es-orma6-base-transGenSColors", lens: "essilor_orma_06", photochromatic: "TransitionsGenSColors" },
  { key: "es-orma6-clook-transGenSColors", lens: "essilor_orma_06", treatment: ["ClearLook"], photochromatic: "TransitionsGenSColors" },
  { key: "es-orma6-arsupra-transGenSColors", lens: "essilor_orma_06", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGenSColors" },
  { key: "es-orma6-sapphire-transGenSColors", lens: "essilor_orma_06", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSColors" },
  { key: "es-orma6-forte-transGenSColors", lens: "essilor_orma_06", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSColors" },
  { key: "es-orma6-prevencia-transGenSColors", lens: "essilor_orma_06", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSColors" },

  // GENERIC FOTO
  { key: "es-orma2-clook-fotoGeneric", lens: "essilor_orma_02", treatment: ["ClearLook"], photochromatic: "Generic" },
  { key: "es-orma11-arsupra-fotoGeneric", lens: "essilor_orma_11", treatment: ["ClearLook"], photochromatic: "Generic" },
  { key: "es-orma12-base-fotoGeneric", lens: "essilor_orma_12", photochromatic: "Generic" },
  { key: "es-orma12-clook-fotoGeneric", lens: "essilor_orma_12", treatment: ["ClearLook"], photochromatic: "Generic" },
  { key: "es-orma12-arsupra-fotoGeneric", lens: "essilor_orma_12", treatment: ["ClearLookSupra"], photochromatic: "Generic" },
  { key: "es-orma8-bluecut-midindex-fotoGeneric", lens: "essilor_orma_08", treatment: ["BlueCut", "MidIndex"], photochromatic: "Generic" },

  // POLAR
  { key: "es-orma13-polar", lens: "essilor_orma_13", treatment: ["GenericPolarized"] },
  { key: "es-orma13-polar-clook", lens: "essilor_orma_13", treatment: ["GenericPolarized", "ClearLook"] },
  { key: "es-orma13-polar-arsupra", lens: "essilor_orma_13", treatment: ["GenericPolarized", "ClearLookSupra"] },

  // XPERIO
  { key: "es-orma14-xperio", lens: "essilor_orma_14", treatment: ["Xperio"] },
  { key: "es-orma14-xperio-clook", lens: "essilor_orma_14", treatment: ["Xperio", "ClearLook"] },
  { key: "es-orma14-xperio-arsupra", lens: "essilor_orma_14", treatment: ["Xperio", "ClearLookSupra"] },
  { key: "es-orma14-xperio-sapphire", lens: "essilor_orma_14", treatment: ["Xperio", "CrizalSapphire"] },
  { key: "es-orma14-xperio-trio", lens: "essilor_orma_14", treatment: ["Xperio", "CrizalTrio"] },
  { key: "es-orma14-xperio-sapphire-v2", lens: "essilor_orma_14", treatment: ["Xperio", "CrizalSapphire"] },
  { key: "es-orma14-xperio-forte", lens: "essilor_orma_14", treatment: ["Xperio", "CrizalForte"] },
  { key: "es-orma14-xperio-prevencia", lens: "essilor_orma_14", treatment: ["Xperio", "CrizalPrevencia"] },

  // EYEZEN
  { key: "es-eyezen1-base", lens: "essilor_ormix_eyezen_01" },
  { key: "es-eyezen1-trio", lens: "essilor_ormix_eyezen_01", treatment: ["TrioCleanblue"] },
  { key: "es-eyezen1-clook", lens: "essilor_ormix_eyezen_01", treatment: ["ClearLook"] },
  { key: "es-eyezen1-arsupra", lens: "essilor_ormix_eyezen_01", treatment: ["ClearLookSupra"] },
  { key: "es-eyezen1-sapphire", lens: "essilor_ormix_eyezen_01", treatment: ["CrizalSapphire"] },
  { key: "es-eyezen1-forte", lens: "essilor_ormix_eyezen_01", treatment: ["CrizalForte"] },
  { key: "es-eyezen1-prevencia", lens: "essilor_ormix_eyezen_01", treatment: ["CrizalPrevencia"] },

  { key: "es-eyezen1-base-transGen8", lens: "essilor_ormix_eyezen_01", photochromatic: "TransitionsGen8" },
  { key: "es-eyezen1-trio-transGen8", lens: "essilor_ormix_eyezen_01", treatment: ["TrioCleanblue"], photochromatic: "TransitionsGen8" },
  { key: "es-eyezen1-clook-transGen8", lens: "essilor_ormix_eyezen_01", treatment: ["ClearLook"], photochromatic: "TransitionsGen8" },
  { key: "es-eyezen1-arsupra-transGen8", lens: "essilor_ormix_eyezen_01", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGen8" },
  { key: "es-eyezen1-sapphire-transGen8", lens: "essilor_ormix_eyezen_01", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGen8" },
  { key: "es-eyezen1-forte-transGen8", lens: "essilor_ormix_eyezen_01", treatment: ["CrizalForte"], photochromatic: "TransitionsGen8" },
  { key: "es-eyezen1-prevencia-transGen8", lens: "essilor_ormix_eyezen_01", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGen8" },

  // PREMIUM
  { key: "es-eyezenPremium1-base", lens: "essilor_premium_eyezen_01" },
  { key: "es-eyezenPremium1-trio", lens: "essilor_premium_eyezen_01", treatment: ["TrioCleanblue"] },
  { key: "es-eyezenPremium1-clook", lens: "essilor_premium_eyezen_01", treatment: ["ClearLook"] },
  { key: "es-eyezenPremium1-arsupra", lens: "essilor_premium_eyezen_01", treatment: ["ClearLookSupra"] },
  { key: "es-eyezenPremium1-sapphire", lens: "essilor_premium_eyezen_01", treatment: ["CrizalSapphire"] },
  { key: "es-eyezenPremium1-forte", lens: "essilor_premium_eyezen_01", treatment: ["CrizalForte"] },
  { key: "es-eyezenPremium1-prevencia", lens: "essilor_premium_eyezen_01", treatment: ["CrizalPrevencia"] },

  { key: "es-eyezen2-base", lens: "essilor_ormix_eyezen_02" },
  { key: "es-eyezen2-base-transGenSGrey", lens: "essilor_ormix_eyezen_02", photochromatic: "TransitionsGenSGrey" },
  { key: "es-eyezen2-trio", lens: "essilor_ormix_eyezen_02", treatment: ["CrizalTrio"] },
  { key: "es-eyezen2-sapphire", lens: "essilor_ormix_eyezen_02", treatment: ["CrizalSapphire"] },
  { key: "es-eyezen2-forte", lens: "essilor_ormix_eyezen_02", treatment: ["CrizalForte"] },
  { key: "es-eyezen2-prevencia", lens: "essilor_ormix_eyezen_02", treatment: ["CrizalPrevencia"] },

  // AIRWEAR
  { key: "es-airwear1-base", lens: "essilor_airwear_01" },
  { key: "es-airwear1-bluecut-arsupra", lens: "essilor_airwear_01", treatment: ["BlueCut", "ClearLookSupra"] },

  { key: "es-airwear2-base", lens: "essilor_airwear_02" },
  { key: "es-airwear2-clook", lens: "essilor_airwear_02", treatment: ["ClearLook"] },
  { key: "es-airwear2-arsupra", lens: "essilor_airwear_02", treatment: ["ClearLookSupra"] },
  { key: "es-airwear2-trio", lens: "essilor_airwear_02", treatment: ["TrioCleanblue"] },
  { key: "es-airwear2-sapphire", lens: "essilor_airwear_02", treatment: ["CrizalSapphire"] },
  { key: "es-airwear2-forte", lens: "essilor_airwear_02", treatment: ["CrizalForte"] },
  { key: "es-airwear2-prevencia", lens: "essilor_airwear_02", treatment: ["CrizalPrevencia"] },

  { key: "es-airwear3-base", lens: "essilor_airwear_03" },
  { key: "es-airwear3-clook", lens: "essilor_airwear_03", treatment: ["ClearLook"] },
  { key: "es-airwear3-arsupra", lens: "essilor_airwear_03", treatment: ["ClearLookSupra"] },
  { key: "es-airwear3-trio", lens: "essilor_airwear_03", treatment: ["TrioCleanblue"] },
  { key: "es-airwear3-sapphire", lens: "essilor_airwear_03", treatment: ["CrizalSapphire"] },
  { key: "es-airwear3-forte", lens: "essilor_airwear_03", treatment: ["CrizalForte"] },
  { key: "es-airwear3-prevencia", lens: "essilor_airwear_03", treatment: ["CrizalPrevencia"] },

  { key: "es-airwear4-base", lens: "essilor_airwear_04" },
  { key: "es-airwear4-clook", lens: "essilor_airwear_04", treatment: ["ClearLook"] },

  { key: "es-airwear5-base-transGenSGreyBrown", lens: "essilor_airwear_05", photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwear5-clook-transGenSGreyBrown", lens: "essilor_airwear_05", treatment: ["ClearLook"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwear5-arsupra-transGenSGreyBrown", lens: "essilor_airwear_05", treatment: ["ClearLookSupra"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwear5-trio-transGenSGreyBrown", lens: "essilor_airwear_05", treatment: ["TrioCleanblue"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwear5-sapphire-transGenSGreyBrown", lens: "essilor_airwear_05", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwear5-forte-transGenSGreyBrown", lens: "essilor_airwear_05", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwear5-prevencia-transGenSGreyBrown", lens: "essilor_airwear_05", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" },

  { key: "es-airwear6-arsupra-fotoGeneric", lens: "essilor_airwear_06", treatment: ["ClearLookSupra"], photochromatic: "Generic" },

  { key: "es-airwear7-xperio", lens: "essilor_airwear_07", treatment: ["Xperio"] },
  { key: "es-airwear7-xperio-trio", lens: "essilor_airwear_07", treatment: ["Xperio", "TrioCleanblue"] },
  { key: "es-airwear7-xperio-sapphire", lens: "essilor_airwear_07", treatment: ["Xperio", "CrizalSapphire"] },
  { key: "es-airwear7-xperio-forte", lens: "essilor_airwear_07", treatment: ["Xperio", "CrizalForte"] },
  { key: "es-airwear7-xperio-prevencia", lens: "essilor_airwear_07", treatment: ["Xperio", "CrizalPrevencia"] },

  { key: "es-airwearEye1-base", lens: "essilor_airwear_eyezen_01" },
  { key: "es-airwearEye1-sapphire", lens: "essilor_airwear_eyezen_01", treatment: ["CrizalSapphire"] },
  { key: "es-airwearEye1-forte", lens: "essilor_airwear_eyezen_01", treatment: ["CrizalForte"] },
  { key: "es-airwearEye1-prevencia", lens: "essilor_airwear_eyezen_01", treatment: ["CrizalPrevencia"] },

  { key: "es-airwearEye1-base-transGenSGreyBrown", lens: "essilor_airwear_eyezen_01", photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwearEye1-sapphire-transGenSGreyBrown", lens: "essilor_airwear_eyezen_01", treatment: ["CrizalSapphire"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwearEye1-forte-transGenSGreyBrown", lens: "essilor_airwear_eyezen_01", treatment: ["CrizalForte"], photochromatic: "TransitionsGenSGreyandBrown" },
  { key: "es-airwearEye1-prevencia-transGenSGreyBrown", lens: "essilor_airwear_eyezen_01", treatment: ["CrizalPrevencia"], photochromatic: "TransitionsGenSGreyandBrown" }
];
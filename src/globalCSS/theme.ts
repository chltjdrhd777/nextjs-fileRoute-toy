const calcRem = (px: number) => `${px / 16}rem` as const;
const makeMedia = (minWidth: number, minmax: "up" | "down") => {
  return `@media screen and (${minmax === "up" ? "min-width" : "max-width"}: ${minWidth}px)`;
};

const colors = {
  mainColor: "#4e80e1",
  pointBlue: "#555bff",
  pointYello: "#ffc114",
  pointCarrot: "#ff5248",
  pointMint: "#19cdca",
  pointPink: "#E7286A",

  lightblue: "#C5E2EE",
  starColor: "#fd4",
  waringColor: "#FF6363",

  grayOne: "#F7F7F7",
  grayTwo: "#E5E5E5",
  grayThree: "#999999",
  grayFour: "#737373",
  blackOne: "#1c1c1c",
  blackTwo: "#111",
} as const;

// const fontSizes = {
//   xsmall: calcRem(12),
//   small: calcRem(14),
//   base: calcRem(16),
//   lg: calcRem(18),
//   xl: calcRem(20),
//   xxl: calcRem(22),
//   xxxl: calcRem(24),
//   xxxxl: calcRem(16 * 2),
// } as const;

// const paddings = {
//   xxsmall: calcRem(4),
//   xsmall: calcRem(6),
//   small: calcRem(8),
//   base: calcRem(10),
//   lg: calcRem(12),
//   xl: calcRem(14),
//   xxl: calcRem(16),
//   xxxl: calcRem(18),
//   xxxxl: calcRem(24),
//   global: calcRem(16 * 6),
// } as const;

// const margins = {
//   xxsmal: calcRem(4),
//   xsmal: calcRem(6),
//   small: calcRem(8),
//   base: calcRem(10),
//   lg: calcRem(12),
//   xl: calcRem(14),
//   xxl: calcRem(16),
//   xxxl: calcRem(18),
//   xxxxl: calcRem(24),
//   global: calcRem(16 * 6),
// } as const;

const deviceSizeUnits = {
  mobileS: 320,
  mobileM: 450,
  mobileL: 576,
  tablet: 768,
  desktop: 922,
  tabletL: 1024,
  fullScreen: 1980,
} as const;

export const theme = {
  colors,
  // fontSizes,
  // paddings,
  // margins,
  deviceSizeUnits,
  makeMedia,
};

export type ThemeType = typeof theme;

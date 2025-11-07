// @/ui/fonts.ts
import {
  Alegreya_Sans,
  Alegreya_SC,
  Lato,
  Saira,
  Saira_Condensed,
} from "next/font/google";
import localFont from "next/font/local";

export const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const sairaCondensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const nithyaRanjana = localFont({
  src: [
    {
      path: "./../../public/fonts/NithyaRanjanaDU-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const alegreyaSansBold = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

export const alegreyaSansItalic = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const alegreyaSansBoldItalic = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export const alegreyaSansExtraBold = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

export const alegreyaSansExtraBoldItalic = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});

export const alegreyaSansBlack = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["900"],
});

export const alegreyaSansBlackItalic = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

export const alegreyaSansExtraLight = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100"],
});

export const alegreyaSansExtraLightItalic = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100"],
  style: ["italic"],
});

export const alegreyaSansMedium = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const alegreyaSansMediumItalic = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
});

export const alegreyaSc = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const alegreyaScItalic = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const alegreyaScMedium = Alegreya_SC({
  subsets: ["latin"],
  weight: ["500"],
});

export const alegreyaScMediumItalic = Alegreya_SC({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
});

export const alegreyaScBold = Alegreya_SC({
  subsets: ["latin"],
  weight: ["700"],
});

export const alegreyaScBoldItalic = Alegreya_SC({
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

export const alegreyaScExtraBold = Alegreya_SC({
  subsets: ["latin"],
  weight: ["800"],
});

export const alegreyaScExtraBoldItalic = Alegreya_SC({
  subsets: ["latin"],
  weight: ["800"],
  style: ["italic"],
});

export const alegreyaScBlack = Alegreya_SC({
  subsets: ["latin"],
  weight: ["900"],
});

export const alegreyaScBlackItalic = Alegreya_SC({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

export const alegreyaScRegular = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const alegreyaScRegularItalic = Alegreya_SC({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

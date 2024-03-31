import { Cardo } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";
import FixelFont from "next/font/local";
import Museo from "next/font/local";
import BrandonGrotesque from "next/font/local";

export const cardo = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const fixel = FixelFont(
  {
    src: "./FixelText-Regular.woff2",
    weight: "400",
    style: "normal",
  },
  {
    src: "./FixelText-Bold.woff2",
    weight: "700",
    style: "normal",
  }
);

export const museoLocal = Museo(
  {
    src: "./MuseoSansCyrl-300.woff2",
    weight: "300",
    style: "normal",
  },
  {
    src: "./MuseoSansCyrl-500.woff2",
    weight: "500",
    style: "normal",
  },
  {
    src: "./MuseoSansCyrl-700.woff2",
    weight: "700",
    style: "normal",
  }
);

export const brandonGrotesque = BrandonGrotesque(
  {
    src: "./BrandonGrotesque-Regular.woff",
    weight: "400",
    style: "normal",
  },
  {
    src: "./BrandonGrotesque-MediumItalic.woff",
    weight: "500",
    style: "italic",
  },
  {
    src: "./BrandonGrotesque-Bold.woff",
    weight: "700",
    style: "normal",
  }
);

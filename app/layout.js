import "./globals.css";
// import { cardo } from "./ui/fonts";
import { museoLocal } from "./ui/fonts";
// import { fixel } from "./ui/fonts";

export const metadata = {
  title: "Ukrainian Coffee Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${museoLocal.className} flex flex-col items-center bg-white text-black h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

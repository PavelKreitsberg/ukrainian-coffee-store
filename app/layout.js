import "./globals.css";
import { cardo } from "./ui/fonts";

export const metadata = {
  title: "Ukrainian Coffee Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cardo.className} flex flex-col items-center bg-slate-50 h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

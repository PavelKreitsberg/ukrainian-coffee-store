import "./globals.css";
import { cardo } from "./ui/fonts";

export const metadata = {
  title: "Ukrainian Coffee Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cardo.className}>{children}</body>
    </html>
  );
}

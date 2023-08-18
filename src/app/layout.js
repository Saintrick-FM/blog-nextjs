"use client";

// import { GlobalStyle } from "@/assets/styles/global_css";
import "./globals.css";

import { Montserrat } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: "Blog | Connexion",
//   description: "Page de connexion de notre blog",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

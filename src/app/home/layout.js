"use client";
import { Montserrat } from "next/font/google";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/assets/styles/themes/default";
import { GlobalStyle } from "@/assets/styles/global_css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    // <html lang="fr">
    <ThemeProvider theme={defaultTheme}>
      <body
        className={montserrat.className}
        style={{ height: "auto !important", position: "relative" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          {children}
        </div>
      </body>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
    // </html>
  );
}

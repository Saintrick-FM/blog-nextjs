"use client";

import { Montserrat } from "next/font/google";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../assets/styles/themes/default";
import { GlobalStyle } from "../assets/styles/global_css";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
import { Provider } from "react-redux";
import {store} from "../helpers/redux_toolkit";

export default function RootLayout({ children }) {
  return (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <html lang="fr">
        <body
          className={montserrat.className}
          style={{
            height: "auto !important",
            position: "relative",
            fontFamily: "Montserrat, sans-serif ! important",
          }}
          >
          {children}
        </body>
        <GlobalStyle></GlobalStyle>
      </html>
    </ThemeProvider>
    </Provider>
  );
}

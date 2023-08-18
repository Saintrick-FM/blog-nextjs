"use client";
import { Montserrat } from "next/font/google";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      {children}
    </div>
    // </html>
  );
}

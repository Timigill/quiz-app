"use client";

import React from "react";
import GlobalStyle from "../styles/GlobalStyles"; // Make sure this file exists and is correct

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}

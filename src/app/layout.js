"use client";

import Header from "../components/Header";
import "./globals.css";

import { AuthContextProvider } from "./../contexts/UserContext.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}

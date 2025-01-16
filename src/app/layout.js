"use client";

import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/theme-provider";
import { Manrope, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import store from "@/store";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} ${dmSans.className}`}>
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}

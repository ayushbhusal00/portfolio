"use client";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        {children}
        <Toaster position='top-right' />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}

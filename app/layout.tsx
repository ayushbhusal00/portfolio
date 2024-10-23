import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";

const manropeGX = localFont({
  src: "./fonts/ManropeGX.woff2",
  variable: "--font-manrope", // Correct variable name
  weight: "200 500 700 900",
});

export const metadata: Metadata = {
  title: "Ayush | Personal Portfolio",
  description: "Ayush is a Web Designer with over 5 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${manropeGX.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative`}
        style={{ fontFamily: "var(--font-manrope), sans-serif" }} // Explicitly set font-family
      >
        <div className='bg-orange-100 dark:bg-orange-600 dark:bg-opacity-20 -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-purple-100 dark:bg-purple-600 dark:bg-opacity-20 -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position='top-right' />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        <div className='bg-orange-100 dark:bg-orange-600 dark:bg-opacity-20 -z-10 absolute bottom-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-purple-100 dark:bg-purple-600 dark:bg-opacity-20 -z-10 absolute bottom-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Analytics />
      </body>
    </html>
  );
}

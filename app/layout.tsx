import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-36`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position='top-right' />
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
        <div className='bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] dark:bg-[#676394] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ClientProviders from "@/components/ClientProviders";
// import MicrosoftClarity from "@/components/MicrosoftClarity";

import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const manropeGX = localFont({
  src: "./fonts/ManropeGX.woff2",
  variable: "--font-manrope",
  weight: "200 500 700 900",
});

// export const metadata: Metadata = {
//   title: "Ayush | Personal Portfolio",
//   description: "Ayush is a Web Designer with over 5 years of experience.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' type='image/x-icon' href='/emoji.svg' />
        <Script
          type='text/javascript'
          id='microsoft-clarity'
          strategy='afterInteractive'
        >
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "v0mbtxb1ye");`}
        </Script>
      </head>

      <body
        className={`${manropeGX.variable} antialiased bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative`}
        style={{ fontFamily: "var(--font-manrope), sans-serif" }}
      >
        {/* Microsoft Clarity (Client Only) */}
        {/* <MicrosoftClarity /> */}

        {/* App Providers */}
        <ClientProviders>{children}</ClientProviders>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientProviders from "@/components/ClientProviders";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

/* JetBrains Mono Variable */
const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-VariableFont_wght.ttf",
  variable: "--font-jetbrains",
  weight: "100 800",
});
/* Libre Baskerville Variable */
const libreBaskerville = localFont({
  src: "./fonts/LibreBaskerville-Italic-VariableFont_wght.ttf",
  variable: "--font-libre-baskerville",
  weight: "200 900",
});

/* Instrument Serif */
const instrumentSerif = localFont({
  src: [
    {
      path: "./fonts/InstrumentSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InstrumentSerif-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`scroll-smooth ${libreBaskerville.variable} ${instrumentSerif.variable}`}
    >
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

      <body className='antialiased bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50 dark:text-opacity-90 relative'>
        <SpeedInsights />
        <ClientProviders>{children}</ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}

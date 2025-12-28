"use client";

import Header from "@/components/header";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className='
        w-full max-w-content mx-auto bg-[#fafafa]
       
      '
    >
      <Header />
      {children}
    </motion.main>
  );
}

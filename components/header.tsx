"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { UseActiveSectionContext } from "@/context/active-section";
import dynamic from "next/dynamic";
import AyushLogoDark from "@/public/Ayush-Logo-Dark.json";
import AyushLogoLight from "@/public/Ayush-Logo-Light.json";
import { useTheme } from "@/context/theme-context";

const Header = () => {
  const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
    ssr: false,
  });
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    UseActiveSectionContext();
  const { theme } = useTheme();

  return (
    <header className='sticky top-0 z-[999] w-full flex justify-center '>
      <motion.div
        className='w-full  px-4 md:px-24 flex items-center py-4 md:py-2 border-b  border-[#e4e4e7] dark:border-gray-700 bg-[#fafafa] dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Navigation Links */}
        <nav className='flex flex-wrap w-full justify-between items-center gap-2 md:gap-5'>
          <Link
            className={clsx(
              `flex items-center justify-center hover:text-gray-750 dark:hover:text-gray-300 transition 
              text-gray-750 dark:text-white `
            )}
            href={"/"}
            onClick={() => {
              setTimeOfLastClick(Date.now());
            }}
          >
            {/* <Image src={Logo} alt='Website Logo' width={60} height={16} /> */}

            {theme === "dark" ? (
              <Lottie lottie={AyushLogoDark} />
            ) : (
              <Lottie lottie={AyushLogoLight} />
            )}
          </Link>

          <ul className='flex flex-wrap w-auto justify-end items-center gap-y-1 text-[0.8rem] font-medium text-gray-300 dark:text-gray-500'>
            {links.map((link) => (
              <motion.li
                className='relative hidden md:block'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    `flex items-center justify-center px-3 py-2 hover:text-gray-950 dark:hover:text-gray-300 transition ${
                      activeSection === link.name
                        ? "text-gray-950 dark:text-white"
                        : "text-gray-500"
                    }
                    `
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className=' dark:bg-gray-700 rounded-md absolute inset-0 -z-10'
                      layoutId='activeSection'
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
            <div className='vertical-divide hidden sm:block' />
            {/* Dark/Light Mode Toggle Switch */}
            <div className='ml-4 flex gap-4'>
              <Link
                className='group hidden sm:block sm:w-auto justify-center bg-gradient-to-tr dark:from-purple-500 dark:to-violet-500 dark:bg-gradient-to-tr from-orange-500 to-amber-500 text-white px-3 py-2 rounded-[6px] outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
                href='#contact'
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                }}
              >
                Say "Hello"
              </Link>
              {/* <Switch /> */}
            </div>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;

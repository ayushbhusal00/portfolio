"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { UseActiveSectionContext } from "@/context/active-section";
import Switch from "@/components/switch"; // Import the Switch component
import Lottie from "@lottielab/lottie-player/react";
import AyushLogoDark from "@/public/Ayush-Logo-Dark.json";
import AyushLogoLight from "@/public/Ayush-Logo-Light.json";
import { useTheme } from "@/context/theme-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    UseActiveSectionContext();
  const { theme } = useTheme();

  return (
    <header className='sticky top-0 z-[999] w-full flex justify-center py-0 md:py-4 '>
      <motion.div
        className='w-full max-w-[100%] md:max-w-[75%] flex items-center px-4 py-4 md:py-2 md:rounded-full border border-white dark:border-gray-800 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Navigation Links */}
        <nav className='flex flex-wrap w-full justify-between items-center gap-2 md:gap-5'>
          <Link
            className={clsx(
              `flex items-center justify-center hover:text-gray-950 dark:hover:text-gray-300 transition 
              text-gray-950 dark:text-white `
            )}
            href={"#home"}
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

          <ul className='flex flex-wrap w-auto justify-end items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-gray-500'>
            {links.map((link) => (
              <motion.li
                className='relative hidden sm:block'
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
                      className='bg-gray-100 dark:bg-gray-700 rounded-full absolute inset-0 -z-10'
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
            <div className='vertical-divide' />
            {/* Dark/Light Mode Toggle Switch */}
            <div className='ml-4 flex gap-4'>
              <Link
                className='group w-full sm:w-auto justify-center bg-gradient-to-tr dark:from-purple-500 dark:to-violet-500 dark:bg-gradient-to-tr from-orange-500 to-amber-500 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition'
                href='#contact'
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                }}
              >
                Say "Hello"
              </Link>
              <Switch />
            </div>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;

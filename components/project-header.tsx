"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import Switch from "@/components/switch";
import { useTheme } from "@/context/theme-context";
import Lottie from "@lottielab/lottie-player/react";
import AyushLogoDark from "@/public/Ayush-Logo-Dark.json";
import AyushLogoLight from "@/public/Ayush-Logo-Light.json";
import { caseStudies } from "@/lib/data";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectHeader = () => {
  const totalDataCount = caseStudies.length;
  const { id } = useParams();
  const { theme } = useTheme();
  const projectId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);
  const router = useRouter();
  return (
    <header className='sticky top-0 z-[999] w-full flex justify-center py-0 md:py-4 '>
      <motion.div
        className='w-full max-w-[100%] md:max-w-[90%] lg:max-w-[75%] flex items-center px-4 py-4 md:py-2 md:rounded-full border border-white dark:border-gray-700 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]'
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
          >
            {/* <Image src={Logo} alt='Website Logo' width={60} height={16} /> */}

            {theme === "dark" ? (
              <Lottie lottie={AyushLogoDark} />
            ) : (
              <Lottie lottie={AyushLogoLight} />
            )}
          </Link>

          <ul className='flex flex-wrap w-auto justify-end items-center gap-y-1 text-[0.9rem] font-medium text-gray-300 dark:text-gray-500'>
            {projectId !== 0 ? (
              <motion.li
                className='relative hidden md:block '
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <div
                  className='flex gap-1 items-center justify-center cursor-pointer text-gray-500 dark:text-white px-3 py-2 hover:text-gray-950 dark:hover:text-gray-300'
                  onClick={() => router.push(`/projects/${projectId - 1}`)}
                >
                  <FaArrowLeft /> Previous
                </div>
              </motion.li>
            ) : null}
            {projectId !== totalDataCount - 1 ? (
              <motion.li
                className='relative hidden md:block '
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <div
                  className='flex gap-1 items-center justify-center cursor-pointer text-gray-500 dark:text-white px-3 py-2 hover:text-gray-950 dark:hover:text-gray-300'
                  onClick={() => router.push(`/projects/${projectId + 1}`)}
                >
                  Next <FaArrowRight />
                </div>
              </motion.li>
            ) : null}
            <div className='vertical-divide' />
            {/* Dark/Light Mode Toggle Switch */}
            <div className='ml-4 flex gap-4'>
              <Switch />
            </div>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default ProjectHeader;

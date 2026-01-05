"use client";

import React from "react";
import { motion } from "framer-motion";
import OhoDigital from "@/public/oho-digital.png";
import NiuralGroup from "@/public/Niural-Group.png";

import Image from "next/image";
import SectionHeading from "./section-heading";

export default function Story() {
  return (
    <motion.section
      className='w-full min-h-[10vh] md:min-h-[50vh] flex flex-col items-center justify-center leading-8 scroll-mt-[28] border-b border-[#e6e8eb]'
      id='story'
    >
      <div className='w-full   flex flex-col sm:flex-row items-center text-left'>
        <div className='relative h-[-webkit-fill-available] w-full min-h-[50vh] px-4 py-16 sm:w-[50%] flex flex-row gap-2 items-center justify-center bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_6px)]'>
          {/* First Image Card */}
          <motion.div
            className='absolute left-[3rem] sm:left-0 w-[10rem] sm:w-[20rem]'
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src={NiuralGroup}
              alt='Enjoying Cooking by myself'
              className='rounded-lg shadow-lg'
            />
          </motion.div>

          {/* Second Image Card */}

          <motion.div
            className='absolute right-[2rem] sm:right-0 w-[10rem] sm:w-[20rem]'
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 8, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src={OhoDigital}
              alt='Group Picture With the M&S Team'
              className='rounded-lg shadow-lg'
            />
          </motion.div>
        </div>
        <div className='w-70 sm:w-[60%] gap-4 p-12 py-28 sm:py-32  text-gray-700 dark:text-gray-400'>
          <SectionHeading>My Story</SectionHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            For the past 4 years I have worked to help visionary founders turn
            their ideas into realities. Specializing in creating intuitive and
            scalable design systems, I focus on crafting seamless user
            interfaces and memorable brand. I oversee the entire product
            lifecycle, ensuring the final user experience aligns with the
            original vision. With a strong emphasis on product testing and
            continuous improvement, I’m committed to delivering designs that
            captivate users, drive engagement, and attract investors.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

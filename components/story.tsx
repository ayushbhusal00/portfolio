"use client";

import React from "react";
import { motion } from "framer-motion";
import Friends1 from "@/public/friends1.png";
import Friends2 from "@/public/friends2.png";
import PassionToCook from "@/public/passion-to-cook.png";
import { UseSectionInView } from "@/lib/hooks";
import Image from "next/image";
import SectionHeading from "./section-heading";

//Logo Imports
import Litaliano from "@/public/litaliano.png";
import Antidote from "@/public/antidote.png";
import AntidoteDark from "@/public/antidote-dark.png";
import WePlayLogo from "@/public/WePlayLogo.png";
import WePlayLogoDark from "@/public/weplay-dark.png";
import Niural from "@/public/niural.png";
import { useTheme } from "@/context/theme-context";

export default function Story() {
  const { ref } = UseSectionInView("Story");
  const { theme } = useTheme();

  return (
    <motion.section
      className='max-w-[60rem] min-h-[50vh] mb-28 flex flex-col gap-2 sm:gap-5 items-center justify-center leading-8 sm:mb-40 scroll-mt-28]'
      id='story'
    >
      <SectionHeading>My Story</SectionHeading>
      <div className='flex flex-col sm:flex-row items-center text-left gap-[6rem] sm:gap-[2rem] mb-20'>
        <div className='relative w-[30rem] min-h-[5rem] sm:w-[60%] h-auto flex flex-row gap-2 sm:gap-[2rem] items-center justify-center'>
          {/* First Image Card */}
          <motion.div
            ref={ref}
            className='absolute w-[16rem]'
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src={PassionToCook}
              alt='Enjoying Cooking by myself'
              className='rounded-lg shadow-lg'
            />
          </motion.div>

          {/* Second Image Card */}

          <motion.div
            ref={ref}
            className='absolute right-0.5 w-[16rem]'
            initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 8, scale: 1 }}
            transition={{ duration: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src={Friends1}
              alt='Image of my friends attending events'
              className='rounded-lg shadow-lg'
            />
          </motion.div>
        </div>
        <div className='w-70 sm:w-[60%] gap-4'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            For the past 4 years I have worked to help visionary founders turn
            their ideas into scalable digital realities. Specializing in
            creating intuitive, scalable design systems, I focus on crafting
            seamless user interfaces and memorable brand experiences. I oversee
            the entire product lifecycle, ensuring the final user experience
            aligns with the original vision. With a strong emphasis on product
            testing and continuous improvement, I’m committed to delivering
            designs that captivate users, drive engagement, and attract
            investors.
          </motion.p>
        </div>
      </div>
      <div className='flex flex-col gap-4 text-center items-center'>
        <p className='text-xl text-gray-400 mb-4 tracking-wider'>
          So far I have helped 8+ companies ship their products to Prod
        </p>
        <div className='flex gap-8'>
          <Image
            src={Litaliano}
            alt={"Litaliano: Global Wine Ecommerce"}
            width={160}
            height={70}
          />
          <Image
            src={theme === "light" ? Antidote : AntidoteDark}
            alt={"Antidote: Thrift Clothes Online"}
            width={160}
            height={70}
          />
          <Image
            src={theme === "light" ? WePlayLogo : WePlayLogoDark}
            alt={"WePlay: Online Sports Booking Platform"}
            width={160}
            height={70}
          />
          <Image
            src={Niural}
            alt={"Niural: Global payroll & payments platform"}
            width={160}
            height={70}
          />
        </div>
      </div>
    </motion.section>
  );
}

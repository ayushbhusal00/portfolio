"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import Portrait from "@/public/Portrait.png";
import ImageTrail from "@/components/ImageTrail";

import { UseSectionInView } from "@/lib/hooks";

import Thumbnail1 from "@/public/ecommerce-thumbnail.png";
import Thumbnail2 from "@/public/Lifecorpus-thumbnail.png";
import Thumbnail3 from "@/public/niural-thumbnail.png";
import Thumbnail4 from "@/public/vesper-thumbnail.png";
// import Thumbnail5 from "@/public/bottle-simulation.png";
// import Thumbnail6 from "@/public/bottle-simulation-2.png";
// import Thumbnail7 from "@/public/bottle-simulation-3.gif";
import Thumbnail8 from "@/public/antidote-preview.png";
import Thumbnail9 from "@/public/hydrolink preview.png";

export default function intro() {
  const { ref } = UseSectionInView("Home");

  // Convert StaticImageData to URL strings
  const imageUrls = [
    typeof Thumbnail1 === "string" ? Thumbnail1 : Thumbnail1.src,
    typeof Thumbnail2 === "string" ? Thumbnail2 : Thumbnail2.src,
    typeof Thumbnail3 === "string" ? Thumbnail3 : Thumbnail3.src,
    typeof Thumbnail4 === "string" ? Thumbnail4 : Thumbnail4.src,
    // typeof Thumbnail5 === "string" ? Thumbnail5 : Thumbnail5.src,
    // typeof Thumbnail6 === "string" ? Thumbnail6 : Thumbnail6.src,
    // typeof Thumbnail7 === "string" ? Thumbnail7 : Thumbnail7.src,
    typeof Thumbnail8 === "string" ? Thumbnail8 : Thumbnail8.src,
    typeof Thumbnail9 === "string" ? Thumbnail9 : Thumbnail9.src,
  ];

  return (
    <section
      ref={ref}
      id='home'
      className='w-full scroll-mt-[100rem] p-16 sm:p-6 md:py-28 border-b border-[#e6e8eb] relative'
    >
      <div className='flex flex-col items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={Portrait}
              alt='Ayush Portrait'
              width='240'
              height='240'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
        <motion.div
          className='max-w-[38.75rem] md:mx-6 mb-5'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <motion.h1
            className='mb-5 mt-4 px-4 text-[2rem] md:mx-6  font-bold text-center !leading-[1.5] text-[#18181b]'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Web/Product Designer based in Kathmandu, Nepal
          </motion.h1>
          <motion.p
            className='mb-5 mt-4 px-4 text-[0.9rem] font-medium text-center text-[#52525b]'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Crafting designs and building products that should be able to solve
            some of your problems and help make your life uncomplicated +
            aesthetically pleasing.
          </motion.p>
        </motion.div>
        <motion.div
          className='flex flex-col max-w-[38.75rem] sm:flex-row sm:w-full  gap-4 items-center justify-center px-4 text-sm font-medium relative z-10 pointer-events-auto'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <a
            className='group md:w-full sm:w-auto justify-center text-white px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition rounded-[6px] pointer-events-auto relative z-20
  bg-[#27272A] shadow-[0_0.75px_0_0_rgba(255,255,255,0.20)_inset,0_1px_2px_0_rgba(0,0,0,0.40),0_0_0_1px_#18181B]'
            href='/CV.pdf'
            download={true}
          >
            Download CV{" "}
            <HiDownload className='opacity-70 group-hover:translate-x-1 transition' />
          </a>

          <a
            className=' hidden sm:flex dark:bg-white/10 p-4 items-center gap-2 cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-gray-100 dark:hover:bg-white/20 active:scale-105 transition dark:text-white/50 rounded-[6px] pointer-events-auto relative z-20
  bg-white
  shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
            href='https://www.linkedin.com/in/ayush-bhusal-331143119/'
            target='blank'
          >
            <BsLinkedin />
          </a>
          <a
            className=' dark:bg-white/10 p-4 hidden sm:flex items-center gap-2 cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-gray-100 dark:hover:bg-white/20 active:scale-105 transition dark:text-white/50 rounded-[6px] pointer-events-auto relative z-20
  bg-white
  shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
            href='https://github.com/ayushbhusal00'
            target='blank'
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
      <div className='absolute inset-0 -z-5 w-full h-svh'>
        <ImageTrail variant={9} items={imageUrls as string[]} />
      </div>
    </section>
  );
}

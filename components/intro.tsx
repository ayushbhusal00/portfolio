"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

import Portrait from "@/public/Portrait.png";
import ImageTrail from "@/components/ImageTrail";

import Thumbnail1 from "@/public/ecommerce-trail.png";
import Thumbnail2 from "@/public/Lifecorpus-trail.png";
import Thumbnail3 from "@/public/niuralai-trail.png";
import Thumbnail4 from "@/public/Simulation-trail.png";
import Thumbnail5 from "@/public/falfull-trail.png";
import Thumbnail6 from "@/public/warpp-trail.png";

import Thumbnail8 from "@/public/antidote-trail.png";
import Thumbnail9 from "@/public/hydrolink trail.png";
import Link from "next/link";
// import DoorKeysScene from "./DoorKeysScene";

export default function intro() {
  // Convert StaticImageData to URL strings
  const imageUrls = [
    typeof Thumbnail1 === "string" ? Thumbnail1 : Thumbnail1.src,
    typeof Thumbnail2 === "string" ? Thumbnail2 : Thumbnail2.src,
    typeof Thumbnail3 === "string" ? Thumbnail3 : Thumbnail3.src,

    typeof Thumbnail4 === "string" ? Thumbnail4 : Thumbnail4.src,
    typeof Thumbnail5 === "string" ? Thumbnail5 : Thumbnail5.src,
    typeof Thumbnail6 === "string" ? Thumbnail6 : Thumbnail6.src,
    // typeof Thumbnail7 === "string" ? Thumbnail7 : Thumbnail7.src,
    typeof Thumbnail8 === "string" ? Thumbnail8 : Thumbnail8.src,
    typeof Thumbnail9 === "string" ? Thumbnail9 : Thumbnail9.src,
  ];

  return (
    <section
      id='home'
      className='w-full scroll-mt-[100rem] bg-bg-base relative'
    >
      <div className='flex flex-col items-center  sm:py-32 sm:px-2 md:py-40  px-4 py-16 justify-center'>
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
              className='h-24 w-24 rounded-full object-cover border-[0.25rem] border-border-base shadow-xl'
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
            className='py-2 text-[2rem] font-bold text-center !leading-[1.5] text-text-base'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Web/Product Designer based in Kathmandu, Nepal
          </motion.h1>
          <motion.p
            className='py-2 text-[0.9rem] font-medium text-center text-text-subtle'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I design interfaces, experiences, and brand identities that make a
            difference.
          </motion.p>
        </motion.div>
        <motion.div
          className='flex w-full md:max-w-[38.75rem] sm:flex-row sm:w-full gap-4 items-start justify-start py-4 text-sm font-medium relative z-10 pointer-events-auto'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            className='w-full md:w-[50%] justify-center group text-center bg-gradient-to-tr dark:from-purple-500 dark:to-violet-500 dark:bg-gradient-to-tr from-orange-500 to-amber-500 text-text-base dark:text-text:base px-3 py-4 rounded-[6px] outline-none focus:scale-110 hover:bg-bg-base active:scale-105 transition shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
            href='/#contact'
          >
            Say Hello{" "}
          </Link>

          <Link
            className=' sm:flex p-4 items-center gap-2 cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-bg-base active:scale-105 transition rounded-[6px] pointer-events-auto relative z-20 bg-bg-base shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] text-text-subtle'
            href='https://www.linkedin.com/in/ayush-bhusal-331143119/'
            target='blank'
          >
            <BsLinkedin />
          </Link>
          <Link
            className=' p-4 sm:flex items-center gap-2 cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-bg-base active:scale-105 transition rounded-[6px] pointer-events-auto relative z-20 bg-bg-base shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0,0.08)] text-text-subtle'
            href='https://github.com/ayushbhusal00'
            target='blank'
          >
            <FaGithubSquare />
          </Link>
        </motion.div>
      </div>
      {/* <div className='w-[1px] h-[100%] min-h-[500px] bg-border-base'></div> */}
      {/* <div className='w-full h-[100%]'>
        <DoorKeysScene />
      </div> */}
      <div className='hidden md:block absolute inset-0  w-svw h-full pointer-events-none'>
        <ImageTrail variant={9} items={imageUrls as string[]} />
      </div>
    </section>
  );
}

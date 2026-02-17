"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

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

import Shilouette from "@/public/shilouette.png";

export default function Intro() {
  const imageUrls = [
    Thumbnail1.src,
    Thumbnail2.src,
    Thumbnail3.src,
    Thumbnail4.src,
    Thumbnail5.src,
    Thumbnail6.src,
    Thumbnail8.src,
    Thumbnail9.src,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      id='home'
      className='w-full scroll-mt-[100rem] max-w-[920px] mx-auto bg-bg-base relative'
    >
      <div className='flex flex-row-reverse items-center sm:py-32 sm:px-2 md:py-40 px-4 py-16 justify-between gap-10 mx-auto'>
        {/* Portrait */}
        <motion.div
          className='relative'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={Portrait}
            alt='Ayush Portrait'
            width={400}
            height={400}
            quality={90}
            priority
            placeholder='blur'
            className='h-[30rem] w-[30rem] rounded-full object-cover border-[0.25rem] border-border-base shadow-xl'
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className='mx-6'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.p
            variants={itemVariants}
            className='py-2 text-[0.9rem] text-text-base'
          >
            Hey 👋, I&apos;m Ayush
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className='py-2 text-[2.5rem] font-bold !leading-snug text-text-base'
            style={{
              fontFamily: "Libre Baskerville Variable, serif",
              fontStyle: "italic",
            }}
          >
            Product Designer & Engineer
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className='py-2 text-[0.9rem] text-text-subtle max-w-[38.75rem] mb-5'
          >
            I design interfaces, experiences, and brand identities that make a
            difference. Blending product thinking and technical execution.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className='flex gap-4 items-start py-4 text-sm font-medium relative z-10'
          >
            {/* Say Hello Button */}
            <Link
              href='/#contact'
              className='relative group inline-block transition-transform duration-300 ease-out hover:scale-105'
            >
              <span
                className='absolute -inset-1 rounded-[6px] group-hover:-inset-1.5 transition-all z-0'
                style={{
                  backgroundImage: `url(${Shilouette.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <span className='relative block min-w-[160px] px-3 py-4 rounded-[6px] bg-black dark:bg-white text-white dark:text-text-base text-center font-medium shadow-md'>
                Say Hello
              </span>
            </Link>

            {/* LinkedIn */}
            <Link
              href='https://www.linkedin.com/in/ayush-bhusal-331143119/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 rounded-[6px] bg-bg-base shadow-[0_1px_2px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] hover:bg-bg-subtle transition text-text-subtle'
            >
              <BsLinkedin />
            </Link>

            {/* Github */}
            <Link
              href='https://github.com/ayushbhusal00'
              target='_blank'
              rel='noopener noreferrer'
              className='p-4 rounded-[6px] bg-bg-base shadow-[0_1px_2px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] hover:bg-bg-subtle transition text-text-subtle'
            >
              <FaGithubSquare />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className='hidden md:block absolute inset-0 w-svw h-full pointer-events-none'>
        <ImageTrail items={imageUrls as string[]} />
      </div>
    </motion.section>
  );
}

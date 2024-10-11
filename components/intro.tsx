"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import Portrait from "@/public/Portrait.png";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";

export default function intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id='home'
      className=' max-w-[50rem] scroll-mt-[100rem] mb-20 sm:mb-0'
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
        <motion.h1
          className='mb-10 mt-4 px-4 text-2xl font-medium text-center !leading-[1.5] sm:text-3xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className='font-bold'>Hello, I'm Ayush.</span> I'm a{" "}
          <span className='font-bold'>Web Designer</span> with{" "}
          <span className='font-bold'>over 4 years</span> of experience. I enjoy
          creating <span className='italic'>Designs</span> for{" "}
          <span className='underline'>Web and Mobile Applications</span>.
        </motion.h1>
        <motion.div
          className='flex flex-col sm:flex-row  w-full gap-4 items-center justify-center px-4 text-lg font-medium'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            className='group w-full sm:w-auto justify-center bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition'
            href='#contact'
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here
            <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
          </Link>
          <a
            className='bg-gray-50 w-full sm:w-auto justify-center dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-100 dark:hover:bg-white/20 active:scale-105 transition borderBlack cursor-pointer'
            href='/CV.pdf'
            download={true}
          >
            Download CV{" "}
            <HiDownload className='opacity-70 group-hover:translate-x-1 transition' />
          </a>
          <a
            className='bg-gray-50 hidden sm:flex dark:bg-white/10 p-4 items-center gap-2 rounded-full cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-gray-100 dark:hover:bg-white/20 active:scale-105 transition dark:text-white/50'
            href='https://www.linkedin.com/in/ayush-bhusal-331143119/'
            target='blank'
          >
            <BsLinkedin />
          </a>
          <a
            className='bg-gray-50 dark:bg-white/10 p-4 hidden sm:flex items-center gap-2 rounded-full cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-gray-100 dark:hover:bg-white/20 active:scale-105 transition dark:text-white/50'
            href='https://github.com/ayushbhusal00'
            target='blank'
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

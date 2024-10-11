"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className='max-w-[45rem] mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        I’m a Web Designer with a strong foundation in{" "}
        <span className='font-medium'>both design and development</span>. After
        completing a diploma in Animation and a bachelor’s degree in Computing,
        I’ve honed my ability to create{" "}
        <span className='font-medium'>user-focused designs</span>{" "}
        <span className='italic'>
          , while being creative and trendy with times.
        </span>
      </p>
      <p>
        <span className='italic'>What I love most is shaping how</span>,
        applications feel and function, aligning user experience with business
        goals. My development skills in React,{" "}
        <span className='font-medium'>React Native, Next.js, and Node.js</span>{" "}
        allow me to make smarter design decisions. I also use{" "}
        <span className='font-medium'>
          Figma, Confluence, Jira, and Adobe Suite{" "}
        </span>
        for design and research, constantly learning new tools to enhance my
        work.
      </p>
    </motion.section>
  );
}

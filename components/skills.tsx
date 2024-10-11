"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { UseSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = UseSectionInView("Skills");
  return (
    <section
      ref={ref}
      className='max-w-[45rem] mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      id='skills'
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center text-lg text-gray-800 dark:text-white/80 gap-4'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-white dark:bg-white/10 border  border-black/[0.1] rounded-xl py-3 px-5'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

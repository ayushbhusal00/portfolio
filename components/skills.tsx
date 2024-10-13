"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { skillsCategories } from "@/lib/data";
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
      className='max-w-5xl mx-auto mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      id='skills'
    >
      <SectionHeading>Skills</SectionHeading>

      <div className='flex flex-wrap justify-center gap-8'>
        {skillsCategories.map((category, index) => (
          <motion.div
            key={index}
            className={`w-[18rem] h-[16rem] p-4 rounded-lg shadow-lg relative overflow-hidden ${category.color} rotate-1`}
            variants={fadeInAnimationVariants}
            initial='initial'
            animate='animate'
            custom={index}
          >
            <div className='absolute top-0 left-0 w-full h-8 bg-white/80 text-lg font-semibold flex items-center justify-center'>
              {category.title}
            </div>
            <ul className='mt-10 space-y-3 text-left text-gray-900 dark:text-gray-100'>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className='text-lg'>
                  {skill}
                </li>
              ))}
            </ul>
            <div className='absolute bottom-4 right-4 text-sm text-gray-500'>
              and more
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

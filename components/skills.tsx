"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { skillsCategories } from "@/lib/data";
import { UseSectionInView } from "@/lib/hooks";
import clsx from "clsx";

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
      className='max-w-[70rem] mx-auto mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      id='skills'
    >
      <SectionHeading>Skills</SectionHeading>

      <div className='flex flex-wrap justify-center gap-8'>
        {skillsCategories.map((category, index) => (
          <motion.div
            key={index}
            className={clsx(
              `w-[18rem] p-4 rounded-lg shadow-lg overflow-hidden relative border border-1 border-gray-100 dark:border-gray-700 `
            )}
            variants={fadeInAnimationVariants}
            initial='initial'
            animate='animate'
            custom={index}
          >
            <div
              className={clsx(
                `absolute top-0 left-0 w-full h-12 ${category.color} text-md font-semibold flex items-center justify-center`
              )}
            >
              {category.title}
            </div>
            <ul className='space-y-3 text-left text-gray-900 dark:text-gray-100'>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className='text-md'>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

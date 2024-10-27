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
    transition: { delay: 0.1 * index },
  }),
};

export default function Skills() {
  const { ref } = UseSectionInView("Skills");

  return (
    <section
      ref={ref}
      className='w-full sm:max-w-[70rem] px-4 mx-auto mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      id='skills'
    >
      <SectionHeading>Skills</SectionHeading>

      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-6'>
        {skillsCategories.map((category, index) => (
          <motion.div
            key={index}
            className={clsx(
              `w-auto sm:w-[18rem] rounded-lg shadow-lg overflow-hidden relative border-2 border-l-gray-200 border-b-gray-200 border-t-white border-r-white dark:border-l-gray-700 dark:border-b-gray-700 dark:border-t-gray-800 dark:border-r-gray-800`
            )}
            variants={fadeInAnimationVariants}
            initial='initial'
            animate='animate'
            custom={index}
          >
            <div
              className={clsx(
                `absolute top-0 left-0 w-full h-10 ${category.color} bg-opacity-80 dark:bg-opacity-40 text-lg font-semibold flex items-center justify-center text-gray-800 dark:text-gray-300`
              )}
            >
              {category.title}
            </div>
            <ul className='mt-12 space-y-2 text-left text-gray-900 dark:text-gray-100'>
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className='text-md border-b border-b-1 border-b-gray-200 dark:border-b-gray-800 px-4'
                >
                  {skill}
                </li>
              ))}
              <li className='text-md text-gray-400 px-4'>and more</li>
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

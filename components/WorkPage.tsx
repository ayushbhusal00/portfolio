"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Niural Inc.",
    role: "Senior Product Designer",
    period: "Nov 2022 - present | +3 years",
    description:
      "Designed and launched user-centric web interfaces for Niural App and Landing Page, integrated Web3 and fiat payments, maintained a design system, optimized performance, integrated Zendesk, and conducted user testing to improve UX and engagement.",
    location: "Niural Inc.",
  },
  {
    company: "Infinity Digital Agency",
    role: "Web Designer",
    period: "Oct 2021 – Mar 2022 | 6 months",
    description:
      "Developed user-centered web interfaces with strategic design elements, delivered feature plans for clients like LifeCorpus and Antidote, and implemented a scalable design system using Storybook for consistency across projects.",
    location: "Infinity Digital Agency",
  },
  {
    company: "The Vesper House Pvt. Ltd.",
    role: "Web Designer",
    period: "Jul 2020 - Apr 2021 | 10 months",
    description:
      "Designed a WordPress e-commerce platform for Vesper Fine Wine, integrated payment APIs, optimized with analytics tools, improved database queries, and boosted sales by 70% and engagement by 25%.",
    location: "The Vesper House Pvt. Ltd.",
  },
  {
    company: "Prime International Pvt. Ltd.",
    role: "Multimedia Designer",
    period: "Apr 2019 – Jan 2020 | 10 months",
    description:
      "Developed a responsive portfolio website using PHP, HTML, CSS, created detailed product mockups with 3DS MAX, contributed to key design decisions, and designed multimedia assets to enhance product design and brand identity.",
    location: "Prime International Pvt. Ltd.",
  },
  {
    company: "OHO Digital Ventures Pvt. Ltd.",
    role: "Associate Web Designer",
    period: "Apr 2018 – Jan 2019 | 10 months",
    description:
      "Designed web assets, illustrations, UX flows, frontend code, led 2 web design projects, contributed to user research, and created branding/video assets for promotions.",
    location: "OHO Digital Ventures Pvt. Ltd.",
  },
];

export default function WorkPage() {
  return (
    <div className='bg-bg-base'>
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className='group border-b border-border-base last:border-0 relative overflow-hidden transition-colors hover:bg-bg-subtle'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className='grid grid-cols-1 md:grid-cols-12 items-start p-8 md:p-16 gap-8'>
            {/* Year Column */}
            <div className='md:col-span-2'>
              <span className='text-sm font-mono text-text-subtle'>
                {exp.period}
              </span>
            </div>

            {/* Role & Company Column */}
            <div className='md:col-span-5'>
              <h3 className='text-2xl md:text-4xl font-semibold tracking-tight text-text-base'>
                {exp.company}
              </h3>
              <p className='text-lg md:text-xl text-text-subtle mt-2 italic font-serif'>
                {exp.role}
              </p>
            </div>

            {/* Description Column */}
            <div className='md:col-span-5'>
              <p className='text-base md:text-lg text-text-subtle leading-relaxed max-w-md'>
                {exp.description}
              </p>
              <div className='mt-6 flex items-center gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-blue-500' />
                <span className='text-[10px] font-mono uppercase tracking-widest text-text-subtle'>
                  {exp.location}
                </span>
              </div>
            </div>
          </div>

          {/* Significa-style hover line */}
          <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-text-base transition-all duration-500 group-hover:w-full' />
        </motion.div>
      ))}
    </div>
  );
}

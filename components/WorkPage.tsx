"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Angelswing.io",
    role: "Senior Product Designer",
    period: "2024 — Present",
    description:
      "Leading the redesign of digital twin platforms and optimizing complex data workflows.",
    location: "Remote / Seoul",
  },
  {
    company: "Freelance",
    role: "UX Engineer",
    period: "2022 — 2024",
    description:
      "Designed and developed brand identities and high-fidelity prototypes for global startups.",
    location: "Kathmandu",
  },
  {
    company: "Daraz (Alibaba Group)",
    role: "E-commerce Specialist",
    period: "2021 — 2022",
    description:
      "Streamlined product listings and improved merchant experience through design-thinking.",
    location: "Kathmandu",
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

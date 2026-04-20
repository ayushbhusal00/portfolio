"use client";

import React from "react";
import { motion } from "framer-motion";

const awards = [
  {
    year: "2025",
    title: "Global Design Recognition",
    org: "Niural stood out as a global competitor in the payroll space. Securing a Series A funding round of 31+ Million USD.",
    link: "#",
  },

  {
    year: "2021",
    title: "138 percent spike in new sign-ups for Warpp",
    org: "Warpp recorded top 100 app store category ranking after the campaign.",
    link: "https://www.ayushbhusal.com.np/playground/0",
  },
  {
    year: "2020",
    title:
      "Introduced new design framework in the manufacturing landscape for packaging design",
    org: "Prime International Pvt. Ltd.",
    link: "https://www.ayushbhusal.com.np/playground/1",
  },
];

export default function Achievements() {
  return (
    <section className='bg-bg-base border-t border-border-base'>
      <div className='grid grid-cols-1 md:grid-cols-12'>
        {/* Label Column */}
        <div className='md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-border-base'>
          <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle mb-4'>
            03. Recognition
          </p>
          <h2 className='text-4xl font-bold tracking-tighter text-text-base'>
            Milestones & <br /> Achievements.
          </h2>
        </div>

        {/* List Column */}
        <div className='md:col-span-8'>
          {awards.map((award, idx) => (
            <motion.a
              key={idx}
              href={award.link}
              target='_blank'
              className='group flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 border-b border-border-base last:border-0 hover:bg-bg-subtle transition-colors'
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-12'>
                <span className='text-sm font-mono text-text-subtle'>
                  {award.year}
                </span>
                <div>
                  <h3 className='text-xl md:text-2xl font-medium text-text-base group-hover:italic transition-all'>
                    {award.title}
                  </h3>
                  <p className='text-sm text-text-subtle'>{award.org}</p>
                </div>
              </div>
              <span className='hidden md:block text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all'>
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

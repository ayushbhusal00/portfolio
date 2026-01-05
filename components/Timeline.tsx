"use client";

import React from "react";
import { motion } from "framer-motion";

// Assumes TailwindCSS is already set up (as in ayushbhusal.com.np)
// Design inspiration: medusajs.com — minimal, editorial, timeline feel

export type Experience = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
};

export default function ExperienceTimeline({
  data,
}: {
  data: readonly Experience[];
}) {
  return (
    <section className='relative mx-auto max-w-5xl px-6 py-24'>
      {/* Vertical line */}
      <div className='absolute left-6 top-0 h-full w-px bg-zinc-200 md:left-1/2' />

      <div className='space-y-24'>
        {data.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-[calc(50%-3rem)] rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md ${
                  isLeft ? "md:text-right" : "md:text-left"
                }`}
              >
                <span className='mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500'>
                  {item.date}
                </span>

                <h3 className='text-lg font-medium text-zinc-900'>
                  {item.title}
                </h3>

                <p className='mt-1 text-sm text-zinc-600'>{item.location}</p>

                <p className='mt-4 text-sm leading-relaxed text-zinc-700'>
                  {item.description}
                </p>
              </div>

              {/* Center dot */}
              <div className='absolute left-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white md:left-1/2 md:-translate-x-1/2'>
                <div className='text-zinc-700'>{item.icon}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

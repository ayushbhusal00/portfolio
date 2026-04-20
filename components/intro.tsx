"use client";

import React from "react";
import { motion } from "framer-motion";
import Portrait from "@/public/Portrait.png";
import Image from "next/image";

export default function Intro() {
  return (
    <section id='home' className='relative border-b border-border-base'>
      <div className='grid grid-cols-1 md:grid-cols-12 items-end'>
        <div className='md:col-span-8 p-6 md:p-12 md:pb-24 space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle mb-6'>
              Senior Product Designer & Developer
            </p>
            <h1 className='text-5xl md:text-[5.5rem] font-bold leading-[0.9] tracking-tighter text-text-base mb-8'>
              AYUSH <br /> BHUSAL.
            </h1>
            <p className='text-xl md:text-2xl text-text-subtle leading-snug max-w-xl'>
              I design interfaces, experiences, and brand identities that make a
              difference. Blending product thinking and technical execution.
            </p>
          </motion.div>
        </div>

        {/* Subtle Portrait / Info Column */}
        <div className='md:col-span-4 border-l border-border-base h-full flex flex-col justify-end p-6 md:p-12'>
          <div className='space-y-4'>
            <p className='text-xs font-mono text-text-subtle'>
              Currently in Kathmandu, NP
            </p>
            <p className='text-xs font-mono text-text-subtle leading-relaxed'>
              Working at the intersection of UX Design and Frontend Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

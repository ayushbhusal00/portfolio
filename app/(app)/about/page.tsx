"use client";

import React from "react";
import { motion } from "framer-motion";
import Story from "@/components/story";
import WorkPage from "@/components/WorkPage";

export default function About() {
  return (
    <main className='justify-center flex bg-bg-base text-text-base'>
      <div className='md:mx-16 border-x border-border-base w-full max-w-[1536px]'>
        {/* --- SECTION 01: THE STORY --- */}
        <Story />

        {/* --- SECTION 02: THE MISSION (Editorial Statement) --- */}
        <section className='border-y border-border-base bg-bg-subtle/30 px-6 py-24 md:py-40'>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle mb-12'>
              My Philosophy
            </p>
            <h2 className='text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-text-base uppercase'>
              Bridging the gap between <br />
              <span className='italic font-serif font-medium text-text-subtle lowercase'>
                aesthetic design
              </span>{" "}
              <br />& technical excellence.
            </h2>
          </div>
        </section>

        {/* --- SECTION 03: EXPERIENCE / WORK HISTORY --- */}
        <section className='relative w-full'>
          <div className='px-6 py-12 border-b border-border-base'>
            <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle'>
              02. Professional Path
            </p>
          </div>
          <WorkPage />
        </section>
      </div>
    </main>
  );
}

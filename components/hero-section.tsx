"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Playground from "@/public/playground.png";

export default function HeroSection() {
  return (
    <motion.section
      id='playground-hero'
      className='w-full border-b border-[#e6e8eb] flex flex-col md:flex-row px-16 gap-10 py-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* First Image Card */}
      <motion.div
        className='max-w-[40rem]'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        viewport={{ once: true }}
      >
        <Image
          src={Playground}
          alt='Enjoying Cooking by myself'
          className='rounded-lg shadow-lg '
        />
      </motion.div>

      <div className='mx-auto max-w-6xl'>
        {/* Kicker */}
        <motion.span
          className='mb-4 inline-block rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-sm font-medium text-zinc-600'
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          Playground
        </motion.span>

        {/* Main heading */}
        <motion.h1
          className='mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-5xl'
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Exploring ideas beyond production work
        </motion.h1>

        {/* Description */}
        <motion.p
          className='mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600'
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          A space to experiment with concepts, motion, and emerging tech. Unlike
          my projects, this is where I learn, iterate, and push ideas forward
          without constraints.
        </motion.p>

        {/* Optional meta line */}
        <motion.p
          className='mt-4 text-sm text-zinc-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Concepts · Motion · UI Systems · Frontend Experiments · Learning
        </motion.p>
      </div>
    </motion.section>
  );
}

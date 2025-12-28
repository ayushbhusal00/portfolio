"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DesignProcessImage from "@/public/design-process.png";

export default function DesignProcess() {
  return (
    <motion.section
      id='playground-hero'
      className='w-full border-b text-center border-[#e6e8eb] flex flex-col px-16 gap-10 py-32'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className='mx-auto max-w-6xl'>
        {/* Main heading */}
        <motion.h1
          className='mt-4 max-w-3xl text-2xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-4xl'
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          How I Work
        </motion.h1>

        {/* Description */}
        <motion.p
          className='mt-2 max-w-3xl text-lg leading-relaxed text-zinc-600'
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          A structured approach to solving meaningful problems
        </motion.p>
      </div>
      {/* First Image Card */}
      <motion.div
        className='w-full'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        viewport={{ once: true }}
      >
        <Image
          src={DesignProcessImage}
          alt='Enjoying Cooking by myself'
          className='rounded-lg shadow-lg '
        />
      </motion.div>
    </motion.section>
  );
}

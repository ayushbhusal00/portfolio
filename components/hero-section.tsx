"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export interface HeroSectionProps {
  image: StaticImageData;
  tag: string;
  title: string;
  subtitle: string;
  category: string;
}
export default function HeroSection({
  image,
  tag,
  title,
  subtitle,
  category,
}: HeroSectionProps) {
  return (
    <motion.section
      id='playground-hero'
      className={clsx(
        "w-full border-b border-[#e6e8eb] flex flex-col md:flex-row px-8 md:px-16 gap-10 py-32"
      )}
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
          src={image}
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
          {tag}
        </motion.span>

        {/* Main heading */}
        <motion.h1
          className='mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-zinc-900 sm:text-5xl'
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className='mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600'
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {subtitle}
        </motion.p>

        {/* Optional meta line */}
        <motion.p
          className='mt-4 text-sm text-zinc-500'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {category}
        </motion.p>
      </div>
    </motion.section>
  );
}

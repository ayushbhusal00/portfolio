"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DesignProcessImage from "@/public/design-process.png";
import Design from "@/public/Design.png";
import Define from "@/public/Define.png";
import Discover from "@/public/Discover.png";
import Deliver from "@/public/Deliver.png";

export default function DesignProcess() {
  return (
    <motion.section
      id='playground-hero'
      className='w-full border-b text-center border-[#e6e8eb] flex flex-col px-4 py-16 gap-10 '
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
        className='w-full  hidden md:block'
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
      <motion.div
        className='w-full block md:hidden'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        viewport={{ once: true }}
      >
        {[
          {
            img: Discover,
            caption: "Discover",
            heading: "Explore the Problem",
            description:
              "Uncover user needs, context, and opportunities by exploring widely before making decisions.",
          },
          {
            img: Define,
            caption: "Define",
            heading: "Clarify the focus",
            description:
              "Synthesize insights to frame the real problem worth solving.",
          },
          {
            img: Design,
            caption: "Design",
            heading: "Create and Test",
            description:
              "Generate ideas, prototype quickly and iterate through feedback.",
          },
          {
            img: Deliver,
            caption: "Deliver",
            heading: "Launch with Impact",
            description:
              "Refine, validate, and ship solutions that create real value.",
          },
        ].map((obj, i) => {
          return (
            <div key={i} className='border-[#e6e8eb]'>
              <Image
                src={obj.img}
                alt={obj.caption}
                className='rounded-lg shadow-lg '
              />
              <div className='text-left flex flex-col gap-1 py-8'>
                <p className='font-mono text-zinc-400 text-sm'>{obj.caption}</p>
                <p className='text-zinc-900 text-3xl font-bold '>
                  {obj.heading}
                </p>
                <p className='text-zinc-900 text-2xl>'>{obj.description}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

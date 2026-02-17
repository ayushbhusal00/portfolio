"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NotWorking from "@/public/when-i-am-not-working.svg";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function OutsideWork() {
  return (
    <motion.section
      className='flex justify-center items-center text-center leading-8 scroll-mt-28 border-t border-border-base bg-bg-base'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative py-[6rem] flex flex-col w-full max-w-[920px] mx-auto sm:flex-row items-center text-left gap-[6rem] sm:gap-[2rem] md:my-20'>
        <Image
          className='absolute top-0 left-0'
          src={NotWorking}
          alt='Text Explaining When I am Not Working'
          loading='lazy'
        />

        <motion.div
          className='flex flex-col gap-6'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <div className='grid grid-cols-2 gap-5 col-span-2'>
            {/* Video 1 */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video'>
              <ReactPlayer
                width='100%'
                height='100%'
                controls={false}
                src='/bottle2.mp4'
                playing
                loop
                muted
              />
            </div>

            {/* GIF */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video relative'>
              <Image
                src='/bottle-simulation-3.gif'
                alt='Bottle Simulation'
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Image */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video relative'>
              <Image
                src='/virgin-gold-animation-render.png'
                alt='Virgin Gold Animation Render'
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Video 2 */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video'>
              <ReactPlayer
                width='100%'
                height='100%'
                controls={false}
                src='/dialogue-practice.mp4'
                playing
                loop
                muted
              />
            </div>

            {/* Image */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video relative'>
              <Image
                src='/antidote-preview.png'
                alt='Antidote Preview'
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Image */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video relative'>
              <Image
                src='/highlander-animation-render.png'
                alt='Highlander Animation Render'
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Image */}
            <div className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video relative'>
              <Image
                src='/playroomkit-thumbnail.png'
                alt='Playroom Kit Thumbnail'
                fill
                sizes='(max-width: 768px) 50vw, 33vw'
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

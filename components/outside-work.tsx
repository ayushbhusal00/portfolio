"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NotWorking from "@/public/when-i-am-not-working.svg";
import Link from "next/link";
import {
  SparkleIcon,
  PlayPauseIcon,
  CubeTransparentIcon,
} from "@phosphor-icons/react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function OutsideWork() {
  const items = [
    {
      title: "3D Rendering",
      type: "image",
      icon: <CubeTransparentIcon size={32} color='purple' weight='regular' />,
      images: ["/bottle-simulation-3.gif", "/virgin-gold-animation-render.png"],
    },
    {
      title: "3D Animation",
      type: "video",
      icon: <PlayPauseIcon size={32} color='purple' weight='regular' />,
      images: ["/dialoguepractice.mp4", "/bottle2.mp4"],
    },
    {
      title: "Illustration",
      type: "image",
      icon: <SparkleIcon size={32} color='purple' weight='regular' />,
      images: ["/NairobiDeathScene.jpg", "/highlander-animation-render.png"],
    },
  ];

  return (
    <motion.section
      className='flex overflow-hidden justify-center items-center text-center leading-8 scroll-mt-28 border-t border-border-base bg-bg-base'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className='relative py-[6rem] flex flex-col w-full max-w-[920px] mx-auto items-center text-left gap-8 md:my-20'>
        {/* Header */}
        <div className='w-full flex justify-between items-start px-4'>
          <Image
            src={NotWorking}
            alt='Text Explaining When I am Not Working'
            loading='lazy'
          />

          <Link
            href={"/playground"}
            className='text-sm font-medium mt-4 sm:mt-0 text-text-subtle'
          >
            VIEW PLAYGROUND ↗
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          className='w-full grid grid-cols-3 gap-5 px-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial='rest'
              whileHover='hover'
              animate='rest'
              variants={{
                rest: { y: 0 },
                hover: { y: -12 },
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className='relative min-h-[240px] rounded-2xl border border-border-base bg-bg-base cursor-pointer overflow-visible'
            >
              {/* Glow background (still clipped) */}
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10'
              />

              {/* ---------- IMAGE STACK ---------- */}
              <div className='absolute inset-0 pointer-events-none'>
                {/* Back Image */}
                <motion.div
                  variants={{
                    rest: { scale: 1, y: 0, rotate: -7 },
                    hover: { scale: 1.15, y: -25, rotate: -7 },
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className='absolute right-[-40px] top-[-30px] z-[5] w-[120px] h-[120px]'
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.images[0]}
                      alt=''
                      fill
                      className='rounded-xl object-cover shadow-xl'
                    />
                  ) : (
                    <div className='w-full h-full relative overflow-hidden rounded-xl shadow-xl'>
                      <ReactPlayer
                        src={item.images[0]}
                        playing
                        loop
                        muted
                        controls={false}
                        width='100%'
                        height='100%'
                        className='!absolute !top-0 !left-0'
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </motion.div>

                {/* Front Image */}
                <motion.div
                  variants={{
                    rest: { scale: 1, y: 0, rotate: 7 },
                    hover: { scale: 1.15, y: -15, rotate: 7 },
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className='absolute right-[40px] top-[10px] z-[10] w-[120px] h-[120px]'
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.images[1]}
                      alt=''
                      fill
                      className='rounded-xl object-cover shadow-xl'
                    />
                  ) : (
                    <div className='w-full h-full relative overflow-hidden rounded-xl shadow-xl'>
                      <ReactPlayer
                        src={item.images[1]}
                        playing
                        loop
                        muted
                        controls={false}
                        width='100%'
                        height='100%'
                        className='!absolute !top-0 !left-0'
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* ---------- TEXT CONTENT ---------- */}
              <div className='relative z-20 p-6 flex flex-col justify-end h-full gap-2'>
                <motion.div
                  variants={{
                    rest: { opacity: 0.6 },
                    hover: { opacity: 1 },
                  }}
                  className='text-sm text-text-subtle mt-2'
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -4 },
                  }}
                  className='text-lg font-regular text-text-base'
                >
                  {item.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

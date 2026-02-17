"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import NotWorking from "@/public/when-i-am-not-working.svg";
import Link from "next/link";

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
      <div className='relative py-[6rem] flex flex-col w-full max-w-[920px] mx-auto items-center text-left gap-[2rem] sm:gap-[2rem] md:my-20'>
        <div className='w-full flex justify-between items-start flex-row px-4'>
          <Image
            src={NotWorking}
            alt='Text Explaining When I am Not Working'
            loading='lazy'
          />
          <Link
            href={"/playground"}
            className='text-sm font-medium mt-4 sm:mt-0 text-text-subtle'
          >
            VIEW PLAYGORUND ↗
          </Link>
        </div>

        <motion.div
          className='flex flex-col gap-6 px-4'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
        >
          <div className='grid grid-cols-2 gap-5 col-span-2'>
            {[
              {
                type: "video",
                src: "/bottle2.mp4",
                alt: "Bottle Video",
              },
              {
                type: "image",
                src: "/bottle-simulation-3.gif",
                alt: "Bottle Simulation",
              },
              {
                type: "image",
                src: "/virgin-gold-animation-render.png",
                alt: "Virgin Gold Animation Render",
              },
              {
                type: "video",
                src: "/dialogue-practice.mp4",
                alt: "Dialogue Practice",
              },
              {
                type: "image",
                src: "/antidote-preview.png",
                alt: "Antidote Preview",
              },
              {
                type: "image",
                src: "/highlander-animation-render.png",
                alt: "Highlander Animation Render",
              },
              {
                type: "image",
                src: "/playroomkit-thumbnail.png",
                alt: "Playroom Kit Thumbnail",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.src}
                className='shadow-elevation-card-rest rounded-lg overflow-hidden aspect-video relative'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {item.type === "video" ? (
                  <ReactPlayer
                    width='100%'
                    height='100%'
                    controls={false}
                    src={item.src}
                    playing
                    loop
                    muted
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes='(max-width: 768px) 50vw, 33vw'
                    style={{ objectFit: "cover" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

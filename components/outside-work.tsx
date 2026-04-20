"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NotWorking from "@/public/when-i-am-not-working.svg";
import Link from "next/link";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function OutsideWork() {
  const explorations = [
    {
      title: "Bottle Simulation",
      category: "3D Rendering / Fluid",
      src: "/bottle-simulation-3.gif",
      type: "image",
    },
    {
      title: "Dialogue Practice",
      category: "3D Animation",
      src: "/dialoguepractice.mp4",
      type: "video",
    },
    {
      title: "Nairobi Scene",
      category: "Illustration",
      src: "/NairobiDeathScene.jpg",
      type: "image",
    },
    {
      title: "Virgin Gold Render",
      category: "3D Rendering",
      src: "/virgin-gold-animation-render.png",
      type: "image",
    },
  ];

  return (
    <section className='bg-bg-base border-t border-border-base overflow-hidden'>
      {/* Editorial Header */}
      <div className='flex flex-col md:flex-row justify-between items-end p-8 md:p-16 gap-8'>
        <div className='max-w-2xl'>
          <Image
            src={NotWorking}
            alt='When I am not working'
            className='mb-8 opacity-80'
          />
          <h2 className='text-3xl md:text-5xl font-bold tracking-tighter text-text-base'>
            Exploring the boundaries of <br />
            <span className='italic font-serif font-medium text-text-subtle'>
              visual storytelling.
            </span>
          </h2>
        </div>
        <Link
          href={"/playground"}
          className='text-[10px] font-mono uppercase tracking-[0.2em] px-6 py-3 border border-border-base rounded-full hover:bg-text-base hover:text-bg-base transition-all'
        >
          View Playground ↗
        </Link>
      </div>

      {/* Dribbble-style Glanceable Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 border-t border-border-base'>
        {explorations.map((item, idx) => (
          <motion.div
            key={idx}
            className={`group relative overflow-hidden border-border-base ${idx % 2 === 0 ? "md:border-r" : ""} border-b`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className='aspect-[4/3] relative bg-bg-subtle overflow-hidden'>
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
              ) : (
                <div className='w-full h-full'>
                  <ReactPlayer
                    src={item.src}
                    playing
                    loop
                    muted
                    width='100%'
                    height='100%'
                    playsInline
                    className='object-cover scale-[1.01]'
                  />
                </div>
              )}

              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8'>
                <p className='text-[10px] font-mono uppercase tracking-widest text-white/60 mb-2'>
                  {item.category}
                </p>
                <h3 className='text-2xl text-white font-medium'>
                  {item.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

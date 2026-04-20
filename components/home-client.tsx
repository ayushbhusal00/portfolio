"use client";

import dynamic from "next/dynamic";
import Intro from "@/components/intro";
import Header from "@/components/header";
import Shilouette from "@/public/shilouette.png";
import Link from "next/link";
import FeaturedProjects from "./featured-projects";
import { motion } from "framer-motion";
import Achievements from "./achievements";

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <div className='h-96 w-full animate-pulse bg-bg-subtle' />,
});

const OutsideWork = dynamic(() => import("@/components/outside-work"));
const Contact = dynamic(() => import("@/components/contact"));

export default function HomeClient() {
  return (
    <main className='flex flex-col relative bg-bg-base font-sans'>
      {/* 00. PLAYGROUND BANNER - Refined typography
      <Link
        href={"/playground"}
        className='group relative block w-full overflow-hidden bg-bg-base border-b border-border-base'
      >
        <div
          className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity'
          style={{
            backgroundImage: `url(${Shilouette.src})`,
            backgroundSize: "cover",
          }}
        />
        <div className='md:mx-16 border-x border-border-base px-6 py-3 flex items-center justify-between'>
          <p className='text-[10px] font-mono uppercase tracking-[0.2em] text-text-base flex items-center gap-4'>
            <span className='inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
            Projects and experiments, browse playground
          </p>
          <span className='text-sm font-mono opacity-40 group-hover:translate-x-1 transition-transform'>
            →
          </span>
        </div>
      </Link> */}

      <Header />

      <div className='bg-bg-base w-full'>
        <div className='md:mx-16 border-x border-border-base'>
          <Intro />
          {/* Section Divider */}
          {/* <div className='border-y border-border-base px-6 py-4'>
            <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle'>
              01. Selected Cases
            </p>
          </div> */}
          <FeaturedProjects />
          <div className='border-y border-border-base px-6 py-4'>
            <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle'>
              02. Selected Work
            </p>
          </div>
          <Projects />
          {/* <section className='border-t border-border-base bg-bg-subtle/30'>
            <motion.div
              className='py-24 px-6 text-center'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <h2 className='text-4xl md:text-6xl font-bold tracking-tighter text-text-base uppercase'>
                Bored? <br />{" "}
                <span className='text-text-subtle italic font-serif lowercase'>
                  Get me images ↓
                </span>
              </h2>
            </motion.div>
          </section> */}
          <Achievements /> {/* Add it here */}
          <OutsideWork />
        </div>
      </div>

      <Contact />
    </main>
  );
}

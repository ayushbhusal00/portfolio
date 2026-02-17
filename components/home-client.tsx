"use client";

import dynamic from "next/dynamic";
import Intro from "@/components/intro";
import Header from "@/components/header";
import Shilouette from "@/public/shilouette.png";
import Link from "next/link";

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => (
    <section className='scroll-mt-28 w-full max-w-[920px] mx-auto text-start flex flex-col justify-center'>
      <p className='text-text-subtle text-sm px-6'>SELECTED PROJECTS ↓</p>
      <div className='py-12 flex justify-center'>
        <span className='h-6 w-6 rounded-full border-2 border-border-base border-t-text-subtle animate-spin' />
      </div>
    </section>
  ),
});

const OutsideWork = dynamic(() => import("@/components/outside-work"));

const Contact = dynamic(() => import("@/components/contact"));

const arrow = () => {
  return (
    <svg
      className='shrink-0 transition-transform duration-200 group-hover:translate-x-1'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <rect width='20' height='20' rx='4' fill='#08060D'></rect>
      <rect
        x='0.5'
        y='0.5'
        width='19'
        height='19'
        rx='3.5'
        stroke='white'
        strokeOpacity='0.15'
      ></rect>
      <path
        d='M10 6L14 10L10 14'
        stroke='white'
        strokeWidth='1.2'
        strokeLinejoin='round'
      ></path>
      <path
        d='M14 10L6 10'
        stroke='white'
        strokeWidth='1.2'
        strokeLinejoin='round'
      ></path>
    </svg>
  );
};

export default function HomeClient() {
  return (
    <main className='flex flex-col items-center relative bg-bg-base'>
      {/* Top silhouette strip with background image */}
      <div
        className='relative w-full h-12 overflow-hidden bg-no-repeat bg-cover bg-top flex items-center justify-start px-4 md:px-16'
        style={{ backgroundImage: `url(${Shilouette.src})` }}
      >
        <Link href={"/playground"} className='group w-full'>
          <p className='text-text-base font-mono text-left w-full flex items-center text-sm font-medium shadow-sm gap-2 uppercase'>
            Projects and experiments, browse playground
            {arrow()}
          </p>
        </Link>
      </div>

      <Header />

      <div className='bg-bg-base w-full'>
        <div className='md:mx-16 border-x border-border-base'>
          <Intro />
          <Projects />
          <OutsideWork />
        </div>
      </div>

      <Contact />
    </main>
  );
}

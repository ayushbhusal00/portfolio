"use client";

import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";
import Companies from "@/components/companies";
// import DesignProcess from "@/components/design-process";
// import PlaygroundHome from "./playgroundHome";

import Shilouette from "@/public/shilouette.png";
import Link from "next/link";

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
            Announcing my new game, browse playground
            {arrow()}
          </p>
        </Link>
      </div>

      <Header />

      <div className='bg-bg-base w-full max-w-7xl'>
        <div className='md:mx-16 border-x border-border-base'>
          <Intro />

          <section
            data-v-00d99581=''
            className='border-t px-10 py-6 md:py-8 flex flex-col justify-center gap-5 nickel-container'
          >
            <h6
              data-v-00d99581=''
              className='text-center text-text-subtle md:text-start '
            >
              Trusted by the world&apos;s best software teams
            </h6>
          </section>
          <Companies />

          {/* <DesignProcess /> */}
          <Projects />
          {/* <PlaygroundHome /> */}
          <OutsideWork />
        </div>
      </div>

      <Contact />
    </main>
  );
}

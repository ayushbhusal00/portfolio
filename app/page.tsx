"use client";
import Intro from "@/components/intro";

import Story from "@/components/story";
import Projects from "@/components/projects";

import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";
import Companies from "@/components/companies";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className='flex flex-col items-center relative'>
      <Header />
      <div className='md:mx-16 border-x border-[#e6e8eb] bg-[#fafafa]'>
        <Intro />
        <Companies />
        <Story />
        <Projects />
        <OutsideWork />
      </div>
      <Contact />
    </main>
  );
}

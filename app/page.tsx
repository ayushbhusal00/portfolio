"use client";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";
import Companies from "@/components/companies";
import DesignProcess from "@/components/design-process";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className='flex flex-col items-center relative'>
      <Header />
      <div className='md:mx-16 border-x border-[#e6e8eb] bg-[#fafafa]'>
        <Intro />
        <Companies />

        <DesignProcess />
        <Projects />
        <OutsideWork />
      </div>
      <Contact />
    </main>
  );
}

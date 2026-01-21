"use client";

import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";
import Companies from "@/components/companies";
// import DesignProcess from "@/components/design-process";
// import PlaygroundHome from "./playgroundHome";

export default function HomeClient() {
  return (
    <main className='flex flex-col items-center relative bg-[#fafafa]'>
      <Header />

      <div className='md:mx-16 border-x border-[#e6e8eb]'>
        <Intro />
        <Companies />
        {/* <DesignProcess /> */}
        <Projects />
        {/* <PlaygroundHome /> */}
        <OutsideWork />
      </div>

      <Contact />
    </main>
  );
}

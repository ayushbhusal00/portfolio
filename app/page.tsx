"use client";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Story from "@/components/story";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";
import Font from "@/components/Font";
export default function Home() {
  const letters = "HELLO".split("");
  return (
    <main className='flex flex-col items-center p-0 md:px-4 relative'>
      <Header />
      <Intro />
      <SectionDivider />
      <Story />
      <Projects />
      <Skills />
      <OutsideWork />
      <Contact />
      {/* <Font /> */}
    </main>
  );
}

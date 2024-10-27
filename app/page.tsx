import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Story from "@/components/story";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className='flex flex-col items-center p-0 md:px-4'>
      <Header />
      <Intro />
      <SectionDivider />
      <Story />
      <Projects />
      <Skills />
      <OutsideWork />
      <Contact />
    </main>
  );
}

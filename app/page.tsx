import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Story from "@/components/story";
import Works from "@/components/works";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Header />
      <Intro />
      <SectionDivider />
      <Story />
      <Works />
      <Skills />
      <OutsideWork />
      <Contact />
    </main>
  );
}

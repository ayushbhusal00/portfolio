import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Story from "@/components/story";
import Works from "@/components/works";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import OutsideWork from "@/components/outside-work";
import Modal from "@/components/modal";

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Modal id={1} />
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

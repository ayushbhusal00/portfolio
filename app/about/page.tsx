import Contact from "@/components/contact";
import Story from "@/components/story";
import TimelineComponent from "@/components/Timeline";

import { experiencesData } from "@/lib/data";

export default function About() {
  return (
    <main className='flex flex-col items-center relative mx-auto max-w-[72rem] border-x border-[#e6e8eb]  bg-[#fafafa]'>
      <Story />
      <TimelineComponent data={experiencesData} />
      <Contact />
    </main>
  );
}

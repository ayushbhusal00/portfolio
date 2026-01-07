import SectionHeading from "@/components/section-heading";
import Story from "@/components/story";
import TimelineComponent from "@/components/Timeline";

import { experiencesData } from "@/lib/data";

export default function About() {
  return (
    <main className='flex flex-col items-center relative mx-auto max-w-[72rem] border-x border-[#e6e8eb]  bg-[#fafafa]'>
      <Story />
      <SectionHeading className='w-full border-b border-[#e6e8eb] p-12 text-center'>
        Job History
      </SectionHeading>
      <TimelineComponent data={experiencesData} />
    </main>
  );
}

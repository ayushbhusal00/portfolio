import SectionHeading from "@/components/section-heading";
import Story from "@/components/story";

import WorkPage from "@/components/WorkPage";

export default function About() {
  return (
    <main className='md:mx-16 justify-center flex bg-[#fafafa] text-neutral-900 border-x border-[#e6e8eb]'>
      <div className=''>
        <Story />
        <SectionHeading className='w-full border-b border-[#e6e8eb] p-12 text-center'>
          My Work History
        </SectionHeading>

        <section className='relative h-[300vh] w-full bg-gradient-to-t from-[#FAF6ED] to-[#fafafa]'>
          <WorkPage />
        </section>
      </div>
    </main>
  );
}

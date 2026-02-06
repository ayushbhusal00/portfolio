import SectionHeading from "@/components/section-heading";
import Story from "@/components/story";

import WorkPage from "@/components/WorkPage";

export default function About() {
  return (
    <main className=' justify-center flex bg-bg-base text-text-base '>
      <div className='md:mx-16 border-x border-border-base'>
        <Story />
        <SectionHeading className='w-full border-b border-border-base p-12 text-center'>
          My Work History
        </SectionHeading>

        <section className='relative h-[300vh] w-full bg-gradient-to-t from-[var(--bg-muted)] to-[var(--bg-base)]'>
          <WorkPage />
        </section>
      </div>
    </main>
  );
}

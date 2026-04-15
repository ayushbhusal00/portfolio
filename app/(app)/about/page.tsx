import OfficeSection from "@/components/office-section";
import SectionHeading from "@/components/section-heading";
import Story from "@/components/story";
import TimelineNew from "@/components/timeline-new";

import WorkPage from "@/components/WorkPage";

export default function About() {
  // Example usage
  const demoItems = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding the problem space.",
    },
    { id: 2, title: "Research", description: "User interviews and insights." },
    { id: 3, title: "Design", description: "Crafting intuitive experiences." },
    { id: 4, title: "Development", description: "Building scalable systems." },
    { id: 5, title: "Launch", description: "Shipping to production." },
  ];

  return (
    <main className=' justify-center flex bg-bg-base text-text-base '>
      <div className='md:mx-16 border-x border-border-base'>
        <Story />
        <SectionHeading className='w-full border-b border-border-base p-12 text-center'>
          My Work History
          {/* <TimelineNew /> */}
        </SectionHeading>

        {/* <OfficeSection /> */}
        <section className='relative w-full bg-bg-base'>
          <WorkPage />
        </section>
      </div>
    </main>
  );
}

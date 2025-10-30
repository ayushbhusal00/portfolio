"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { caseStudies } from "@/lib/data";
import Project from "./project";
import { UseSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = UseSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id='projects'
      className='scroll-mt-28 w-full mx-auto mb-28 flex flex-col justify-center px-4'
    >
      <SectionHeading className='mb-0'>Projects</SectionHeading>

      <div className='w-full mx-auto flex flex-col items-center justify-center'>
        {caseStudies.map((work, index) => (
          <React.Fragment key={index}>
            <Project
              index={index}
              title={work.companyName}
              description={work.heroSection.description}
              tags={work.heroSection.tools}
              imageUrl={work.heroSection.image}
            />
          </React.Fragment>
        ))}
      </div>
      {/* <Link
        className='bg-gradient-to-tr mx-auto dark:from-purple-500 dark:to-violet-500 dark:bg-gradient-to-tr from-orange-500 to-amber-500 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition'
        href='projects/'
      >
        View Em All
      </Link> */}
    </section>
  );
}

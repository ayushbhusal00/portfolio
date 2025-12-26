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
      className='scroll-mt-28 w-full mx-auto flex flex-col justify-center'
    >
      <SectionHeading className='my-10 px-6'>Projects</SectionHeading>

      <div className='w-full mx-auto flex flex-col items-center justify-center '>
        {caseStudies.map((work, index) => (
          <Project
            key={work.id}
            index={index}
            title={work.title}
            description={work.overview}
            // tags={work.role.split(" — ")}
            imageUrl={work.thumbnail} // ⬅️ FIXED
          />
        ))}
      </div>
    </section>
  );
}

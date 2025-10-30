"use client";

import React from "react";
import { caseStudies } from "@/lib/data";
import Work from "@/components/project";
export const dynamic = "force-dynamic";
export default function ProjectsPage() {
  return (
    <section className='max-w-[50rem] mx-auto justify-center'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-2xl font-bold my-10'>All Projects</h1>
        {caseStudies.map((work, index) => (
          <React.Fragment key={index}>
            <Work
              index={index}
              title={work.companyName}
              description={work.heroSection.description}
              tags={work.heroSection.tools}
              imageUrl={work.heroSection.image}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

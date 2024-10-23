"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { caseStudies } from "@/lib/data";
import Work from "./work";
import { UseSectionInView } from "@/lib/hooks";

export default function Works() {
  const { ref } = UseSectionInView("Works", 0.5);

  return (
    <section ref={ref} id='works' className='scroll-mt-28 mb-28'>
      <SectionHeading>Works Selected from 2019</SectionHeading>
      <div>
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

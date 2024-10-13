"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { worksData } from "@/lib/data";
import Work from "./work";
import { UseSectionInView } from "@/lib/hooks";

export default function Works() {
  const { ref } = UseSectionInView("Works", 0.5);

  return (
    <section ref={ref} id='works' className='scroll-mt-28 mb-28'>
      <SectionHeading>Works Selected from 2019</SectionHeading>
      <div>
        {worksData.map((work, index) => (
          <React.Fragment key={index}>
            <Work {...work} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

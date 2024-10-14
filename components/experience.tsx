"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SectionHeading from "./section-heading";
import { UseSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

// Dynamically import Chrono to avoid SSR issues
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

export default function Experience() {
  const { ref } = UseSectionInView("Experience");
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Wait until the component is mounted to handle client-side logic
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const items = [
    {
      title: "Apr 2018 – Jan 2019",
      cardTitle: "Associate Web Designer",
      cardSubtitle: "OHO Digital Ventures Pvt. Ltd.",
      cardDetailedText: `Designed web assets, illustrations, UX flows, frontend code, led 2 web design projects, contributed to user research, and created branding/video assets for promotions.`,
    },
    {
      title: "Apr 2019 – Jan 2020",
      cardTitle: "Multimedia Designer",
      cardSubtitle: `Prime International Pvt. Ltd.`,
      cardDetailedText: `Developed a responsive portfolio website using PHP, HTML, CSS, created detailed product mockups with 3DS MAX, contributed to key design decisions, and designed multimedia assets to enhance product design and brand identity.`,
    },
    {
      title: "Jul 2020 - Apr 2021",
      cardTitle: "Web Designer",
      cardSubtitle: `The Vesper House Pvt. Ltd.`,
      cardDetailedText: `Designed a WordPress e-commerce platform for Vesper Fine Wine, integrated payment APIs, optimized with analytics tools, improved database queries, and boosted sales by 70% and engagement by 25%.`,
    },
    {
      title: "Oct 2021 – Mar 2022",
      cardTitle: "Web Designer",
      cardSubtitle: `Infinity Digital Agency`,
      cardDetailedText: `Developed user-centered web interfaces with strategic design elements, delivered feature plans for clients like LifeCorpus and Antidote, and implemented a scalable design system using Storybook for consistency across projects.`,
    },
    {
      title: "Nov 2022 - present",
      cardTitle: "Niural Inc.",
      cardSubtitle: `Senior Web Designer`,
      cardDetailedText: `Designed and launched user-centric web interfaces for Niural App and Landing Page, integrated Web3 and fiat payments, maintained a design system, optimized performance, integrated Zendesk, and conducted user testing to improve UX and engagement.`,
    },
  ];

  if (!isMounted) return null; // Ensure this doesn't render on the server

  return (
    <section
      ref={ref}
      className='max-w-[60rem] mb-28 text-center leading-8 sm:mb-40 scroll-mt-28'
      id='experience'
    >
      <SectionHeading>Experience</SectionHeading>
      {theme === "light" ? (
        <Chrono
          items={items}
          mode='HORIZONTAL'
          timelinePointShape='square'
          parseDetailsAsHTML
          controlPanel='false'
          toolBar='false'
          theme={{
            primary: "#f97316", //orange/line
            secondary: "#f97316", //orange/dates
            cardBgColor: "#f9fafb", //gray/50
            cardMediaBgColor: "#f9fafb",
            cardTitleColor: "#111827", //gray-900
            cardSubtitleColor: "#111827",
            titleColor: "#6b7280", //gray-500/ title
            titleBgColorActive: "yellow",
            subTitleColor: "#a3a3a3",
            titleColorActive: "#e2e8f0",
            cardDetailsColor: "#64748b",
          }}
          // disableToolbar
          buttonTexts={{
            first: "Jump to First",
            last: "Jump to Last",
            next: "Next",
            previous: "Previous",
          }}
        />
      ) : (
        <Chrono
          items={items}
          mode='HORIZONTAL'
          timelinePointShape='square'
          parseDetailsAsHTML
          controlPanel='false'
          toolBar='false'
          theme={{
            primary: "#8b5cf6", //violet/line
            secondary: "#8b5cf6", //violet/dates
            cardBgColor: "#1f2937",
            cardMediaBgColor: "#1f2937",
            cardTitleColor: "#e2e8f0",
            cardSubtitleColor: "#e2e8f0",
            titleColor: "#e2e8f0",
            titleBgColorActive: "yellow",
            subTitleColor: "#a3a3a3",
            titleColorActive: "#e2e8f0",
            cardDetailsColor: "#64748b",
          }}
          // disableToolbar
          buttonTexts={{
            first: "Jump to First",
            last: "Jump to Last",
            next: "Next",
            previous: "Previous",
          }}
        />
      )}
      {/* //********************************************************* */}
      {/* <VerticalTimeline lineColor='' animate={false}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.50)",
                fontSize: "1.5rem",
                backdropFilter: "blur(5rem)",
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='!mt-1 !font-normal text-gray-750 dark:text-white/50'>
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline> */}
    </section>
  );
}

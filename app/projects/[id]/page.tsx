"use client"; // Ensure this component is rendered on the client side

import { useParams } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectDetail() {
  const { id } = useParams(); // Retrieve the project ID from the URL
  const projectId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent running on server

    const handleScroll = () => {
      const sectionOffsets = sectionRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top || 0
      );
      const visibleIndex = sectionOffsets.findIndex((offset) => offset >= 0);
      if (visibleIndex !== -1) setActiveSectionIndex(visibleIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudy = caseStudies[projectId];

  return (
    <section className='mx-auto w-full max-w-[100%] md:max-w-[90%] lg:max-w-[75%] px-4'>
      <div className='relative flex w-full h-full'>
        {/* Sticky Sidebar for Navigation */}
        <div className='hidden sm:block sticky top-[10%] w-1/4 p-5 h-[100vh]'>
          {/* top-[20%] ensures it starts 20% down, adjusting for the header */}
          <ul className='space-y-4 text-gray-700 dark:text-gray-300 overflow-y-auto'>
            <li className='font-bold'>{caseStudy.companyName}</li>
            {caseStudy.sections.map((section, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-orange-600 dark:hover:text-purple-400 ${
                  activeSectionIndex === index
                    ? "text-orange-600 dark:text-purple-400 font-semibold"
                    : ""
                }`}
                onClick={() =>
                  sectionRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                {section.content[0].title}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className='w-full sm:w-3/4 p-6 overflow-y-auto h-full'>
          <Image
            src={caseStudy.heroSection.image}
            alt={caseStudy.heroSection.title}
            className='w-full h-[360px] object-cover'
          />
          {/* Images and captions */}
          <div className='space-y-6 mt-4'>
            <h2 className='text-xl font-semibold mb-4'>
              {caseStudy.heroSection.title}
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              {caseStudy.heroSection.description}
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-4'>
              <div>
                <p className='text-gray-500'>Collaborators:</p>
                <p className='font-bold'>
                  {caseStudy.heroSection.collaborators.join(", ")}
                </p>
              </div>
              <div>
                <p className='text-gray-500'>Duration:</p>
                <p className='font-bold'>{caseStudy.heroSection.duration}</p>
              </div>
              <div>
                <p className='text-gray-500'>Tools:</p>
                <p className='font-bold'>
                  {caseStudy.heroSection.tools.join(", ")}
                </p>
              </div>
              <div>
                <p className='text-gray-500'>Roles:</p>
                <p className='font-bold'>
                  {caseStudy.heroSection.roles.join(", ")}
                </p>
              </div>
            </div>
            <div className='space-y-6 mt-4'>
              {caseStudy.sections.map((section, index) =>
                section.content.map((content) => (
                  <div
                    key={index}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                  >
                    <h2 className='text-xl font-semibold mb-4'>
                      {content.title}
                    </h2>
                    <p className='text-gray-600 dark:text-gray-300 mb-4'>
                      {content.description}
                    </p>
                    {content.image &&
                      content.image.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img}
                          alt={`${content.title} - ${idx + 1}`}
                          className='w-full h-auto object-cover mb-4'
                        />
                      ))}
                    {!Array.isArray(content.image) && content.image && (
                      <Image
                        src={content.image}
                        alt={content.title}
                        className='w-full h-auto object-cover'
                      />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

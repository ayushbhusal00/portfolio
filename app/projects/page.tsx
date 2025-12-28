"use client";

import { useState } from "react";
import { caseStudies } from "@/lib/data";
import WorkItem from "@/components/work-item";
import HeroSection from "@/components/hero-section";
import ProjectsInProd from "@/public/projects-in-prod.png";

export default function ProjectsPage() {
  const categories = [
    "All",
    ...Array.from(new Set(caseStudies.map((p) => p.category))),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((p) => p.category === activeCategory);

  return (
    <section className='mx-auto max-w-[72rem] border-x border-[#e6e8eb]'>
      <HeroSection
        image={ProjectsInProd}
        tag={"Projects"}
        title={"Featured and Selected works"}
        subtitle={
          "Selected work from my journey designing and building thoughtful, scalable, and user-driven digital experiences."
        }
        category={"UX · UI Systems · Motion · Frontend · Brand Identity"}
      />
      {/* Header */}
      <header className='px-16 py-8 w-full flex justify-between'>
        <h1 className='text-[28px] font-semibold tracking-tight text-zinc-900'>
          Projects
        </h1>
        {/* Filter pills */}
        <div className='flex gap-2 items-center overflow-x-auto hide-scrollbars py-[1px] w-screen md:w-auto px-0 md:py-0 md:overflow-visible'>
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                rounded-full flex items-center justify-center py-1 border font-medium text-sm border-transparent transition-all text-ui-fg-muted whitespace-nowrap px-3 h-[32px] md:hover:bg-[#]
                ${
                  isActive
                    ? "bg-white text-black shadow-elevation-card-rest "
                    : " text-zinc-500 hover:bg-white "
                }
              `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </header>

      {/* Grid */}
      <div className='w-full  divide-y divide-[#e6e8eb]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-y border-[#e6e8eb]'>
          {filteredProjects.map((project) => (
            <WorkItem
              key={project.id}
              index={project.id}
              title={project.title}
              description={project.tagline}
              category={project.category}
              imageUrl={
                typeof project.thumbnail === "string"
                  ? project.thumbnail
                  : project.thumbnail.src
              }
              isPasswordProtected={project.isPasswordProtected}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

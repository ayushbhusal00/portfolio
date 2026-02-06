"use client";

import { useState } from "react";
import HeroSection from "@/components/hero-section";
import WorkItem from "@/components/work-item";
import { playgroundProjects } from "@/lib/data";
import PlaygroundImage from "@/public/playground.png";

export default function PlaygroundPage() {
  const categories = [
    "All",
    ...Array.from(new Set(playgroundProjects.map((p) => p.category))),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? playgroundProjects
      : playgroundProjects.filter((p) => p.category === activeCategory);

  return (
    <main className='flex flex-col items-center relative bg-bg-base'>
      <section className='mx-auto max-w-7xl border-x border-border-base '>
        <HeroSection
          image={PlaygroundImage}
          tag='Playground'
          title='Exploring ideas beyond production work'
          subtitle='A space to experiment with concepts, motion, and emerging tech. Unlike my projects, this is where I learn, iterate, and push ideas forward without constraints.'
          category='Concepts · Motion · UI Systems · Frontend Experiments · Learning'
        />

        {/* Header */}
        <header className='px-16 py-8 w-full flex justify-between'>
          <h1 className='text-[28px] font-semibold tracking-tight text-text-base'>
            Playground
          </h1>

          {/* Filter pills */}
          <div className='flex gap-2 items-center overflow-x-auto hide-scrollbars py-[1px] w-screen md:w-auto'>
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full flex items-center justify-center px-3 h-[32px] text-sm font-medium whitespace-nowrap transition-all
                  ${
                    isActive
                      ? "bg-bg-subtle text-text-base shadow-elevation-card-rest"
                      : "text-text-subtle hover:bg-bg-subtle hover:text-text-base"
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
        <div className='w-full divide-y divide-border-base'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-y border-border-base'>
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
                href={project.url}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

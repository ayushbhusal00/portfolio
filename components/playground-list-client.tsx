"use client";

import { useMemo, useState } from "react";
import HeroSection from "@/components/hero-section";
import WorkItem from "@/components/work-item";
import PlaygroundImage from "@/public/playground.png";

export type PlaygroundListItem = {
  id: string;
  slug: string;
  title: string;
  tagline?: string | null;
  category?: string | null;
  thumbnailUrl?: string | null;
  url?: string | null;
};

type Props = {
  items: PlaygroundListItem[];
};

export default function PlaygroundListClient({ items }: Props) {
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          items
            .map((p) => p.category)
            .filter((c): c is string => Boolean(c && c.length > 0)),
        ),
      ),
    ],
    [items],
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((p) => p.category === activeCategory),
    [activeCategory, items],
  );

  return (
    <main className='flex flex-col items-center relative bg-bg-base'>
      <section className='md:mx-16 border-x border-border-base '>
        <HeroSection
          image={PlaygroundImage}
          tag='Playground'
          title='Exploring ideas beyond production work'
          subtitle='I loose sleep to design sprints and my silly little sidequests. Design is my passion and I make time to code cool little tools or experiments.'
          category='Concepts · Motion · UI Systems · Frontend Experiments · Learning'
        />

        {/* Header */}
        <header className='px-6 md:px-16 py-8 w-full flex justify-between'>
          <h1 className='text-[28px] font-semibold tracking-tight text-text-base'>
            Playground
          </h1>

          {/* Filter pills */}
          <div className='gap-2 hidden md:flex items-center overflow-x-auto hide-scrollbars py-[1px] w-screen md:w-auto'>
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
            {filteredProjects.map((project, index) => (
              <WorkItem
                key={project.id}
                index={index}
                title={project.title}
                description={project.tagline || ""}
                category={project.category || undefined}
                imageUrl={project.thumbnailUrl || "/placeholder.png"}
                href={project.url || `/playground/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

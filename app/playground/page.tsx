"use client";
import HeroSection from "@/components/hero-section";
import WorkItem from "@/components/work-item";
import { playgroundProjects } from "@/lib/data";
import PlaygroundImage from "@/public/playground.png";

export default function Playground() {
  return (
    <main className='flex flex-col items-center relative mx-auto max-w-[72rem] border-x border-[#e6e8eb]'>
      <HeroSection
        image={PlaygroundImage}
        tag={"Playground"}
        title={"Exploring ideas beyond production work"}
        subtitle={
          "A space to experiment with concepts, motion, and emerging tech. Unlike my projects, this is where I learn, iterate, and push ideas forward without constraints."
        }
        category={
          "Concepts · Motion · UI Systems · Frontend Experiments · Learning"
        }
      />
      {/* Grid */}
      <div className='w-full divide-y divide-[#e6e8eb]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-y border-[#e6e8eb]'>
          {playgroundProjects.map((project) => (
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
    </main>
  );
}

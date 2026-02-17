"use client";

import { useState, useEffect } from "react";
import WorkItem from "@/components/work-item";
import WorkItemSkeleton from "@/components/work-item-skeleton";
import HeroSection from "@/components/hero-section";
import ProjectsInProd from "@/public/projects-in-prod.png";
import { caseStudies } from "@/lib/data";

const SKELETON_COUNT = 6;

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const res = await fetch("/api/project?depth=2");
        const data = await res.json();
        // Find niural case study
        const niural = caseStudies.find(
          (cs) => cs.slug === "niural-global-payroll",
        );
        // Remove any niural from payload (by slug or id if present)
        const filtered = (data.docs || []).filter(
          (p: any) => p.slug !== "niural-global-payroll" && p.slug !== "niural",
        );
        // Append niural case study as a project
        const projectsWithNiural = niural ? [niural, ...filtered] : filtered;
        setProjects(projectsWithNiural);
        const cats = Array.from(
          new Set(projectsWithNiural.map((p: any) => p.category)),
        ).filter(Boolean);
        setCategories(["All", ...cats.map(String)]);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className='bg-bg-base'>
      <section className='md:mx-16 border-x border-border-base'>
        <HeroSection
          image={ProjectsInProd}
          tag={"Projects"}
          title={"Featured and Selected works"}
          subtitle={
            "Selected work from my journey designing and building thoughtful, scalable, and user-driven digital experiences."
          }
          category={"UX · UI Systems · Motion · Frontend · Brand Identity"}
        />
        {/* Header - only show when data is loaded */}
        {!loading && (
          <header className='px-6 md:px-16 py-8 w-full flex justify-between'>
            <h1 className='text-[28px] font-semibold tracking-tight text-text-base'>
              Projects
            </h1>
            <div className='gap-2 hidden md:flex items-center overflow-x-auto hide-scrollbars py-[1px] w-screen md:w-auto px-0 md:py-0 md:overflow-visible'>
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
                    ? "bg-bg-subtle text-text-base shadow-elevation-card-rest "
                    : " text-text-subtle hover:bg-bg-subtle hover:text-text-base"
                }
              `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </header>
        )}

        {/* Grid */}
        <div className='w-full divide-y divide-border-base'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-y border-border-base'>
            {loading
              ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <WorkItemSkeleton key={i} />
                ))
              : filteredProjects.map((project, idx) => {
                  const imageUrl =
                    typeof project.thumbnail === "string"
                      ? project.thumbnail
                      : (project.thumbnail?.url ??
                        (project.thumbnail as { src?: string })?.src ??
                        "/placeholder.png");
                  const href =
                    project.slug === "niural-global-payroll"
                      ? "/niural"
                      : `/projects/${project.id}`;
                  return (
                    <WorkItem
                      key={project.id}
                      index={idx}
                      title={project.title}
                      description={project.tagline}
                      category={project.category}
                      imageUrl={imageUrl}
                      isPasswordProtected={project.isPasswordProtected}
                      href={href}
                    />
                  );
                })}
          </div>
        </div>
      </section>
    </main>
  );
}

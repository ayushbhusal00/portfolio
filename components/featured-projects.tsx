"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Project from "./project";
import ProjectCardSkeleton from "./project-card-skeleton";
import { caseStudies } from "@/lib/data";
import FeaturedProject from "./featured-project";
import dynamic from "next/dynamic";
import FeaturedCardSkeleton from "./featured-card-skeleton";

import { InfoIcon } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const res = await fetch("/api/project?depth=1");
        const data = await res.json();
        // Find niural case study
        const niural = caseStudies.find(
          (cs) => cs.slug === "niural-global-payroll"
        );
        // Remove any niural from payload (by slug or id if present)
        const filtered = (data.docs || []).filter(
          (p: any) => p.slug !== "niural-global-payroll" && p.slug !== "niural"
        );
        // Append niural case study as a project
        const projectsWithNiural = niural ? [niural, ...filtered] : filtered;
        setProjects(projectsWithNiural);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <motion.section
      id='projects'
      className='scroll-mt-28 w-full max-w-[1536px] mx-auto text-start flex flex-col justify-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className='w-full mx-auto items-center justify-center'>
        {loading ? (
          <div className='hidden md:grid w-full md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Array.from({ length: 3 }).map((_, i) => (
              <FeaturedCardSkeleton key={i} />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className='py-12 text-text-subtle'>No projects found.</div>
        ) : (
          <motion.div
            className='w-full hidden md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-30px" }}
          >
            {projects.map((project, index) => {
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
                <motion.div key={project.id} variants={itemVariants}>
                  <FeaturedProject
                    index={index}
                    title={project.title}
                    description={project.overview || project.tagline || ""}
                    imageUrl={imageUrl}
                    isPasswordProtected={project.isPasswordProtected}
                    href={href}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
      <div className='aspect-video overflow-hidden rounded-2xl p-6 w-full max-w-[1536px] mx-auto'>
        <ReactPlayer
          width='100%'
          height='100%'
          controls
          autoPlay
          className='rounded-2xl overflow-hidden shadow-elevation-card-rest'
          src={"https://vimeo.com/1183236358?share=copy&fl=sv&fe=ci"}
          loop
        />
      </div>
      <div className='mx-6 px-2 py-2 bg-bg-subtle rounded-full flex gap-2 justify-center items-center'>
        <InfoIcon size={18} className='text-text-base' />
        <p className='text-text-base'>
          Stay tuned! Showreel is getting updates soon.
        </p>
      </div>
      {/* Hover Overlay */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        {/* Tooltip / CTA */}
        <div className='pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black shadow-lg backdrop-blur'>
          ▶ Play Showreel
        </div>
      </div>
    </motion.section>
  );
}

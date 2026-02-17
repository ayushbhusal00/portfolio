"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Project from "./project";
import ProjectCardSkeleton from "./project-card-skeleton";
import { caseStudies } from "@/lib/data";

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

export default function Projects() {
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
          (cs) => cs.slug === "niural-global-payroll",
        );
        // Remove any niural from payload (by slug or id if present)
        const filtered = (data.docs || []).filter(
          (p: any) => p.slug !== "niural-global-payroll" && p.slug !== "niural",
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
      className='scroll-mt-28 w-full max-w-[920px] mx-auto text-start flex flex-col justify-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <motion.p
        className='text-text-subtle text-sm px-6'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        SELECTED PROJECTS ↓
      </motion.p>

      <div className='w-full mx-auto flex flex-col items-center justify-center'>
        {loading ? (
          <div className='grid w-full grid-cols-1 gap-8'>
            {Array.from({ length: 2 }).map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className='py-12 text-text-subtle'>No projects found.</div>
        ) : (
          <motion.div
            className='w-full flex flex-col gap-8'
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
                  <Project
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
    </motion.section>
  );
}

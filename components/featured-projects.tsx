"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isPinnedPlaying, setIsPinnedPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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

  const handleShowreelClick = () => {
    setIsPinnedPlaying((prev) => {
      const next = !prev;
      setIsPlaying(next);
      return next;
    });
  };

  return (
    <motion.section
      id='projects'
      className='scroll-mt-28 w-full max-w-[1536px] mx-auto text-start flex flex-col justify-center mt-6'
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
      {/* <div className='aspect-video overflow-hidden rounded-2xl p-6 w-full max-w-[1536px] mx-auto'>
        <ReactPlayer
          width='100%'
          height='100%'
          controls
          muted
          autoPlay
          className='rounded-2xl overflow-hidden shadow-elevation-card-rest'
          src={"https://vimeo.com/1183236358?share=copy&fl=sv&fe=ci"}
          loop
        />
      </div> */}
      <div
        className={`m-6 relative group overflow-hidden rounded-2xl ${
          isHovered ? "cursor-none" : "cursor-pointer"
        }`}
        onMouseEnter={() => {
          setIsHovered(true);
          if (!isPinnedPlaying) setIsPlaying(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          if (!isPinnedPlaying) setIsPlaying(false);
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
        onClick={handleShowreelClick}
      >
        {/* Thumbnail */}
        <Image
          src='/thumbnail.png'
          alt='Showreel thumbnail'
          width={1600}
          height={900}
          className='w-full h-full object-cover transition duration-500 group-hover:scale-105'
        />

        {/* Vimeo video controlled by state */}
        <ReactPlayer
          width='100%'
          height='100%'
          src='https://vimeo.com/1183236358?share=copy&fl=sv&fe=ci'
          playing={isPlaying}
          muted
          controls={isPinnedPlaying}
          className={`absolute inset-0 transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Dim overlay while idle */}
        {!isPlaying && (
          <div className='absolute inset-0 bg-black/30 transition duration-300' />
        )}

        {/* Custom cursor tooltip */}
        {isHovered && !isPinnedPlaying && (
          <div
            className='pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-wide text-black shadow-lg backdrop-blur'
            style={{ left: cursorPos.x, top: cursorPos.y }}
          >
            Play Showreel
          </div>
        )}
      </div>
      {/* <div className='mx-6 px-2 py-2 bg-bg-subtle rounded-full flex gap-2 justify-center items-center'>
        <InfoIcon size={18} className='text-text-base' />
        <p className='text-text-base'>
          Stay tuned! Showreel is getting updates soon.
        </p>
      </div> */}
    </motion.section>
  );
}

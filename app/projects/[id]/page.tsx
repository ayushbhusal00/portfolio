"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/lib/data";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = caseStudies[parseInt(params.id)];

  if (!project) return <div>Not Found</div>;

  const prev = caseStudies[project.id - 1];
  const next = caseStudies[project.id + 1];

  return (
    <main className='w-full mx-auto'>
      {/* HERO IMAGE */}
      <Image
        src={project.heroImage}
        alt={project.title}
        className='w-full h-auto object-cover'
        priority
      />

      <div className='max-w-3xl mx-auto px-4 py-20 space-y-20'>
        {/* OVERVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl font-semibold'>{project.title}</h1>
          <p className='mt-5 text-xl text-neutral-600 dark:text-neutral-300'>
            {project.overview}
          </p>
        </motion.div>

        {/* SECTIONS WITH IMAGES INSERTED */}
        {project.sections.map((sec, i) => (
          <motion.div
            key={i}
            className='space-y-6'
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className='text-2xl font-medium'>{sec.heading}</h2>

            {sec.content && (
              <p className='text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                {sec.content}
              </p>
            )}

            {sec.bullets && (
              <ul className='space-y-2'>
                {sec.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            )}

            {/* INSERT DESIGN IMAGE AFTER EACH SECTION */}
            {project.gallery[i] && (
              <Image
                src={project.gallery[i]}
                alt='design'
                className='rounded-xl w-full h-auto mt-6'
              />
            )}
          </motion.div>
        ))}

        {/* AUTO NEXT / PREVIOUS */}
        <div className='flex justify-between border-t pt-10'>
          {prev ? (
            <Link href={prev.url} className='opacity-60 hover:opacity-100'>
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link href={next.url} className='opacity-60 hover:opacity-100'>
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
}

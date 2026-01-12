"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";

import { caseStudies } from "@/lib/data";
import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";

/* -----------------------------
   Reading progress
-------------------------------- */
function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/* -----------------------------
   Page
-------------------------------- */
export default function NiuralPage({ params }: { params: { id: string } }) {
  const project = caseStudies[parseInt(params.id)];

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  /* -----------------------------
     Hooks MUST be unconditional
  -------------------------------- */
  const progress = useReadingProgress();

  const readingTime = useMemo(() => {
    if (!project) return 0;

    const words =
      project.overview.split(" ").length +
      project.sections.reduce(
        (acc, s) => acc + (s.content?.split(" ").length || 0),
        0
      );

    return Math.max(3, Math.round(words / 200));
  }, [project]);

  /* -----------------------------
     Auth check
  -------------------------------- */
  useEffect(() => {
    if (!project) return;

    const checkAuth = async () => {
      if (!project.isPasswordProtected) {
        setIsAuthenticated(true);
        setIsCheckingAuth(false);
        return;
      }

      const token = getToken();
      if (token) {
        const isValid = await verifyToken(token);
        if (isValid) setIsAuthenticated(true);
      }

      setIsCheckingAuth(false);
    };

    checkAuth();
  }, [project]);

  if (!project) return <div>Not Found</div>;

  /* -----------------------------
     Password gate
  -------------------------------- */
  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth) {
      return (
        <div className='min-h-screen flex items-center justify-center'>
          <p className='text-zinc-600'>Loading...</p>
        </div>
      );
    }

    return (
      <PasswordProtection
        onAuthenticated={() => setIsAuthenticated(true)}
        projectTitle={project.title}
      />
    );
  }

  /* -----------------------------
     Related Projects (shared)
  -------------------------------- */
  const relatedProjects = caseStudies
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      {/* Reading progress */}
      <div className='fixed top-0 left-0 z-50 h-[2px] w-full'>
        <div
          className='h-full bg-zinc-900 transition-all'
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* {--currently used for Niural} */}
      {/* Custom Render OR Generic Case Study  */}
      {project.render ? (
        <main className=''>
          {/* Back Link */}
          <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-8'>
            <div className='mx-auto w-fit px-6 py-3 bg-zinc-200 rounded-full text-center mb-8 text-xsm'>
              Page currently in early development
            </div>
            <Link
              href='/'
              className='text-right text-sm text-zinc-500 hover:text-zinc-900 transition inline-block max-w-7xl'
            >
              ← Back
            </Link>
          </div>
          {project.render()}
        </main>
      ) : (
        <main className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-12'>
          {/* Back Link */}
          <div className='mx-auto max-w-7xl pt-8 '>
            <Link
              href='/'
              className='text-sm text-zinc-500 hover:text-zinc-900 transition inline-block mb-8'
            >
              ← Back
            </Link>
          </div>
          <article className='space-y-16'>
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='space-y-6'
            >
              <h1 className='text-[40px] md:text-[48px] font-semibold tracking-tight'>
                {project.title}
              </h1>

              <p className='text-[18px] leading-[1.7] text-zinc-600 max-w-[680px]'>
                {project.overview}
              </p>

              <div className='flex items-center gap-4 text-sm text-zinc-500'>
                <span>{project.duration}</span>
                <span>•</span>
                <span>{readingTime} min read</span>
              </div>
            </motion.header>

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='rounded-xl overflow-hidden bg-white shadow'
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                className='w-full h-auto'
                priority
              />
            </motion.div>

            {/* Sections */}
            <section className='space-y-20'>
              {project.sections.map((sec, i) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className='space-y-6'
                >
                  {sec.heading && (
                    <h2 className='text-[28px] font-medium'>{sec.heading}</h2>
                  )}

                  {sec.content && (
                    <p className='text-[16px] leading-[1.75] text-zinc-600 max-w-7xl'>
                      {sec.content}
                    </p>
                  )}

                  {sec.bullets && (
                    <ul className='list-disc pl-5 space-y-2 text-zinc-600'>
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {i === 0 && project.videoUrl ? (
                    <ReactPlayer
                      width='100%'
                      height='480px'
                      muted
                      controls
                      src={project.videoUrl}
                    />
                  ) : (
                    project.gallery[i] && (
                      <Image
                        src={project.gallery[i]}
                        alt='design'
                        className='rounded-xl shadow'
                      />
                    )
                  )}
                </motion.section>
              ))}
            </section>
          </article>
        </main>
      )}

      {/* Related Projects (always shown) */}
      {relatedProjects.length > 0 && (
        <section className='border-b border-neutral-200 w-full py-24 px-5 sm:px-8 lg:px-12'>
          <h2 className='text-[24px] font-medium'>You may also like</h2>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 '>
            {relatedProjects.map((item) => (
              <Link key={item.id} href={item.url} className='group'>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  className='rounded-xl'
                />
                <h3 className='mt-4 text-[16px] font-medium'>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

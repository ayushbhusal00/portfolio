"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";

import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";
import { caseStudies } from "@/lib/data";

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

      setProgress((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

type Project = (typeof caseStudies)[number];

export default function NiuralClient({ project }: { project: Project }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const progress = useReadingProgress();

  const readingTime = useMemo(() => {
    const words =
      project.overview.split(" ").length +
      project.sections.reduce(
        (acc, s) => acc + (s.content?.split(" ").length || 0),
        0
      );

    return Math.max(3, Math.round(words / 200));
  }, [project]);

  /* ---------------- Auth check ---------------- */
  useEffect(() => {
    const checkAuth = async () => {
      if (!project.isPasswordProtected) {
        setIsAuthenticated(true);
        setIsCheckingAuth(false);
        return;
      }

      const token = getToken();
      if (token && (await verifyToken(token))) {
        setIsAuthenticated(true);
      }

      setIsCheckingAuth(false);
    };

    checkAuth();
  }, [project]);

  /* ---------------- Password gate ---------------- */
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
        projectTitle={project.title}
        onAuthenticated={() => setIsAuthenticated(true)}
      />
    );
  }

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

      {/* Custom render */}
      {project.render ? (
        <main>
          <div className='mx-auto max-w-7xl px-6 pt-8'>
            <Link href='/' className='text-sm text-zinc-500'>
              ← Back
            </Link>
          </div>
          {project.render()}
        </main>
      ) : (
        <main className='mx-auto max-w-7xl px-6 py-12'>
          <article className='space-y-16'>
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className='text-5xl font-semibold'>{project.title}</h1>
              <p className='mt-4 text-zinc-600 max-w-xl'>{project.overview}</p>
              <p className='mt-2 text-sm text-zinc-500'>
                {readingTime} min read
              </p>
            </motion.header>

            <Image
              src={project.heroImage}
              alt={project.title}
              priority
              className='rounded-xl'
            />

            {project.sections.map((sec, i) => (
              <section key={i} className='space-y-6'>
                {sec.heading && (
                  <h2 className='text-2xl font-medium'>{sec.heading}</h2>
                )}
                {sec.content && <p className='text-zinc-600'>{sec.content}</p>}

                {i === 0 && project.videoUrl ? (
                  <ReactPlayer
                    width='100%'
                    height='480px'
                    controls
                    src={project.videoUrl}
                  />
                ) : (
                  project.gallery[i] && (
                    <Image
                      src={project.gallery[i]}
                      alt='design'
                      className='rounded-xl'
                    />
                  )
                )}
              </section>
            ))}
          </article>
        </main>
      )}

      {/* Related */}
      {relatedProjects.length > 0 && (
        <section className='border-t border-zinc-200 py-24 px-6'>
          <h2 className='text-xl font-medium'>You may also like</h2>
          <div className='mt-8 grid md:grid-cols-3 gap-8'>
            {relatedProjects.map((item) => (
              <Link key={item.id} href={item.url}>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  className='rounded-xl'
                />
                <h3 className='mt-4'>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import clsx from "clsx";
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
   TOC scroll spy
-------------------------------- */
function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

/* -----------------------------
   Page
-------------------------------- */
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = caseStudies[parseInt(params.id)];

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Check authentication for password-protected projects
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
        if (isValid) {
          setIsAuthenticated(true);
        }
      }
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, [project]);

  const progress = useReadingProgress();

  const toc =
    project?.sections
      .filter((sec) => Boolean(sec.heading))
      .map((sec) => ({
        title: sec.heading!,
        id: sec.heading!.toLowerCase().replace(/\s+/g, "-"),
      })) || [];

  const activeId = useActiveHeading(toc.map((t) => t.id));

  const relatedProjects = caseStudies
    .filter((p) => p.id !== project?.id)
    .slice(0, 3);

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

  if (!project) return <div>Not Found</div>;

  // Show password protection if project is protected and user is not authenticated
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

  return (
    <>
      {/* Reading progress bar */}
      <div className='fixed top-0 left-0 z-50 h-[2px] w-full bg-transparent'>
        <div
          className='h-full bg-zinc-900 transition-all'
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className='mx-auto max-w-[1100px] px-6 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16'>
          {/* ================= CONTENT ================= */}
          <article className='space-y-12'>
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='space-y-6'
            >
              <Link
                href='/'
                className='text-sm text-zinc-500 hover:text-zinc-900 transition'
              >
                ← Back
              </Link>

              <h1 className='text-[40px] leading-[1.1] md:text-[48px] font-semibold tracking-tight text-zinc-900'>
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
              className='rounded-xl overflow-hidden bg-white
              shadow-[0_1px_2px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                className='w-full h-auto'
                priority
              />
            </motion.div>

            {/* ================= SECTIONS ================= */}
            <section className='space-y-12'>
              {project.sections.map((sec, i) => (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className='space-y-6'
                >
                  {sec.heading && (
                    <h2
                      id={sec.heading.toLowerCase().replace(/\s+/g, "-")}
                      className='text-[28px] leading-[1.3] font-medium text-zinc-900 scroll-mt-28'
                    >
                      {sec.heading}
                    </h2>
                  )}

                  {sec.content && (
                    <p className='text-[16px] leading-[1.75] text-zinc-600 max-w-[680px]'>
                      {sec.content}
                    </p>
                  )}

                  {sec.bullets && (
                    <ul className='list-disc pl-5 space-y-2 text-[16px] leading-[1.7] text-zinc-600'>
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {/* Media: index 1 = video, others = image */}
                  {i === 0 && project.videoUrl ? (
                    <div className='mt-10 rounded-xl overflow-hidden shadow-elevation-card-rest'>
                      <ReactPlayer
                        width='100%'
                        height='480px'
                        muted
                        controls
                        src={project.videoUrl}
                        config={{
                          vimeo: {
                            title: false,
                            byline: false,
                            portrait: false,
                            vimeo_logo: false,
                            controls: true,
                            dnt: true,
                          },
                        }}
                      />
                    </div>
                  ) : (
                    project.gallery[i] && (
                      <Image
                        src={project.gallery[i]}
                        alt='design'
                        className='mt-10 rounded-xl
                        shadow-[0_1px_2px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
                      />
                    )
                  )}
                </motion.section>
              ))}
            </section>

            {/* ================= RELATED ================= */}
            {relatedProjects.length > 0 && (
              <section className='pt-20 border-t border-zinc-200'>
                <h2 className='text-[24px] font-medium text-zinc-900'>
                  You may also like
                </h2>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {relatedProjects.map((item) => (
                    <Link key={item.id} href={item.url} className='group block'>
                      <div
                        className='overflow-hidden rounded-xl bg-white
                        shadow-[0_1px_2px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)]'
                      >
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          className='h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                        />
                      </div>

                      <div className='mt-4 space-y-2'>
                        <span className='text-xs uppercase tracking-wide text-zinc-500'>
                          Case Study
                        </span>
                        <h3 className='text-[16px] font-medium leading-tight'>
                          {item.title}
                        </h3>
                        <p className='text-sm text-zinc-600 line-clamp-2'>
                          {item.tagline || item.overview}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ================= TOC ================= */}
          <aside className='hidden lg:block'>
            <div className='sticky top-28'>
              <p className='mb-4 text-xs font-semibold uppercase tracking-wide text-zinc-500'>
                On this page
              </p>

              <ul className='space-y-2 text-sm'>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={clsx(
                        "block transition",
                        activeId === item.id
                          ? "text-zinc-900 font-medium"
                          : "text-zinc-500 hover:text-zinc-900"
                      )}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

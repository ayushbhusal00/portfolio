"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import clsx from "clsx";

import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";
import { playgroundProjects } from "@/lib/data";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Section = {
  heading?: string;
  content?: string;
  bullets?: string[];
  videoUrl?: string;
};

type Project = {
  id: number;
  title: string;
  overview: string;
  heroImage: any;
  gallery: any[];
  sections: Section[];
  duration?: string;
  readTime?: number;
  videoUrl?: string;
  websiteLink?: string;
  thumbnail: any;
  tagline?: string;
  isPasswordProtected?: boolean;
  url: string;
};

/* -------------------------------------------------------------------------- */
/*                            Reading Progress Hook                            */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                              TOC Scroll Spy                                */
/* -------------------------------------------------------------------------- */

function useActiveHeading(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

/* -------------------------------------------------------------------------- */
/*                                Client Page                                 */
/* -------------------------------------------------------------------------- */

export default function PlaygroundClient({ project }: { project: Project }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  /* ---------------- Authentication ---------------- */
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

  const progress = useReadingProgress();

  const toc =
    project.sections
      .filter((s) => s.heading)
      .map((s) => ({
        title: s.heading!,
        id: s.heading!.toLowerCase().replace(/\s+/g, "-"),
      })) ?? [];

  const activeId = useActiveHeading(toc.map((t) => t.id));

  const relatedProjects = playgroundProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const readingTime = useMemo(() => {
    const words =
      project.overview.split(" ").length +
      project.sections.reduce(
        (acc, s) => acc + (s.content?.split(" ").length || 0),
        0
      );

    return Math.max(3, Math.round(words / 200));
  }, [project]);

  /* ---------------- Password Gate ---------------- */
  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth) {
      return (
        <div className='min-h-screen flex items-center justify-center'>
          <p className='text-zinc-500'>Loading…</p>
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

  /* ---------------- Render ---------------- */
  return (
    <>
      {/* Reading progress */}
      <div className='fixed top-0 left-0 z-50 h-[2px] w-full'>
        <div
          className='h-full bg-zinc-900 transition-all'
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className='mx-auto max-w-[1100px] px-6 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16'>
          {/* ================= CONTENT ================= */}
          <article className='space-y-12'>
            <Link href='/playground' className='text-sm text-zinc-500'>
              ← Back
            </Link>

            <h1 className='text-[48px] font-semibold tracking-tight'>
              {project.title}
            </h1>

            <p className='text-lg text-zinc-600 max-w-[680px]'>
              {project.overview}
            </p>

            <div className='text-sm text-zinc-500'>
              {project.duration} • {project.readTime || readingTime} min read
            </div>

            <Image
              src={project.heroImage}
              alt={project.title}
              priority
              className='rounded-xl'
            />

            {project.sections.map((sec, i) => (
              <section key={i} className='space-y-6'>
                {sec.heading && (
                  <h2
                    id={sec.heading.toLowerCase().replace(/\s+/g, "-")}
                    className='text-2xl font-medium scroll-mt-28'
                  >
                    {sec.heading}
                  </h2>
                )}

                {sec.content && (
                  <p className='text-zinc-600 leading-relaxed'>{sec.content}</p>
                )}

                {sec.videoUrl && (
                  <ReactPlayer
                    width='100%'
                    height='480px'
                    controls
                    src={sec.videoUrl}
                  />
                )}
              </section>
            ))}

            {/* ================= RELATED ================= */}
            {relatedProjects.length > 0 && (
              <section className='pt-20 border-t border-zinc-200'>
                <h2 className='text-xl font-medium'>You may also like</h2>

                <div className='mt-8 grid md:grid-cols-3 gap-8'>
                  {relatedProjects.map((item) => (
                    <Link key={item.id} href={item.url} className='group'>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        className='rounded-xl transition group-hover:scale-[1.03]'
                      />
                      <h3 className='mt-4 font-medium'>{item.title}</h3>
                      <p className='text-sm text-zinc-600 line-clamp-2'>
                        {item.tagline || item.overview}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* ================= TOC ================= */}
          <aside className='hidden lg:block'>
            <div className='sticky top-28'>
              <p className='mb-4 text-xs uppercase text-zinc-500'>
                On this page
              </p>

              <ul className='space-y-2 text-sm'>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={clsx(
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

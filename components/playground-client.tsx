"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";
import type { StaticImageData } from "next/image";

type PlaygroundSection = {
  heading?: string;
  content?: string;
  bullets?: string[];
};

type Project = {
  title: string;
  tagline?: string;
  overview: string;
  heroImage: string | StaticImageData;
  gallery?: (string | StaticImageData)[];
  sections: PlaygroundSection[];
  videoUrl?: string;
  websiteLink?: string;
  duration?: string;
  readTime?: string | number;
  isPasswordProtected?: boolean;
};

type RelatedProject = {
  title: string;
  tagline?: string;
  overview?: string;
  url: string;
  thumbnail: string | StaticImageData;
};

export default function PlaygroundClient({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: RelatedProject[];
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!project.isPasswordProtected) {
        setIsAuthenticated(true);
        setIsCheckingAuth(false);
        return;
      }
      const token = getToken();
      if (token && (await verifyToken(token))) setIsAuthenticated(true);
      setIsCheckingAuth(false);
    };
    checkAuth();
  }, [project]);

  const sections = useMemo(
    () =>
      project.sections.filter(
        (s: PlaygroundSection) => s.heading || s.content || s.bullets,
      ),
    [project.sections],
  );

  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth) return <div className='min-h-screen bg-bg-base' />;
    return (
      <PasswordProtection
        projectTitle={project.title}
        onAuthenticated={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <div className='md:mx-16 border-x border-border-base bg-bg-base min-h-screen'>
      {/* 1. TOP NAV / BACK BUTTON */}
      <div className='border-b border-border-base px-6 py-4 flex justify-between items-center sticky top-[65px] bg-bg-base/80 backdrop-blur-md z-40'>
        <Link
          href='/playground'
          className='text-[10px] font-mono uppercase tracking-[0.2em] text-text-subtle hover:text-text-base flex items-center gap-2 transition-all'
        >
          ← Back to Playground
        </Link>
        <div className='flex gap-4'>
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target='_blank'
              className='text-[10px] font-mono uppercase tracking-[0.2em] underline underline-offset-4'
            >
              Live Link ↗
            </a>
          )}
        </div>
      </div>

      <article>
        {/* 2. HERO HEADER */}
        <header className='border-b border-border-base grid grid-cols-1 md:grid-cols-12'>
          <div className='md:col-span-8 p-8 md:p-16 border-b md:border-b-0 md:border-r border-border-base'>
            <h1 className='text-5xl md:text-[5rem] font-bold tracking-tighter leading-[0.9] text-text-base uppercase mb-8'>
              {project.title}
            </h1>
            <p className='text-xl md:text-2xl text-text-subtle leading-snug max-w-xl'>
              {project.tagline || project.overview}
            </p>
          </div>

          {/* Metadata Column */}
          <div className='md:col-span-4 p-8 md:p-16 flex flex-col justify-between gap-12 bg-bg-subtle/20'>
            <div className='space-y-8'>
              <div>
                <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-2'>
                  Duration
                </p>
                <p className='text-sm text-text-base font-medium'>
                  {project.duration || "2 Weeks"}
                </p>
              </div>
              <div>
                <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-2'>
                  Reading Time
                </p>
                <p className='text-sm text-text-base font-medium'>
                  {project.readTime || 3} min read
                </p>
              </div>
            </div>
            <p className='text-xs font-mono text-text-subtle leading-relaxed italic'>
              Exploration into interaction design and technical implementation.
            </p>
          </div>
        </header>

        {/* 3. HERO IMAGE - Full Bleed Grid */}
        <div className='border-b border-border-base bg-bg-subtle'>
          <div className='relative aspect-video w-full'>
            <Image
              src={project.heroImage}
              alt={project.title}
              priority
              fill
              className='object-cover p-8 md:p-16'
            />
          </div>
        </div>

        {/* 4. CONTENT SECTIONS */}
        <div className='max-w-5xl mx-auto py-24 px-6 md:px-0'>
          <div className='space-y-32'>
            {sections.map((sec: PlaygroundSection, i: number) => {
              const sectionImage = project.gallery?.[i];
              return (
                <section
                  key={i}
                  className='grid grid-cols-1 md:grid-cols-12 gap-12 items-start'
                >
                  <div className='md:col-span-4 sticky top-32'>
                    {sec.heading && (
                      <h2 className='text-2xl font-bold tracking-tighter text-text-base uppercase'>
                        {sec.heading}
                      </h2>
                    )}
                  </div>

                  <div className='md:col-span-8 space-y-10'>
                    {sec.content && (
                      <p className='text-xl text-text-subtle leading-relaxed'>
                        {sec.content}
                      </p>
                    )}

                    {sec.bullets && (
                      <ul className='space-y-4 border-l border-border-base pl-6'>
                        {sec.bullets.map((b: string, idx: number) => (
                          <li
                            key={idx}
                            className='text-text-subtle leading-relaxed'
                          >
                            <span className='text-text-base font-mono mr-2'>
                              —
                            </span>{" "}
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {sectionImage && (
                      <div className='relative aspect-video w-full overflow-hidden rounded-2xl border border-border-base shadow-2xl'>
                        <Image
                          src={sectionImage}
                          alt={sec.heading || project.title}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          {project.videoUrl && (
            <div className='mt-32 rounded-3xl overflow-hidden border border-border-base shadow-2xl bg-black aspect-video'>
              <ReactPlayer
                width='100%'
                height='100%'
                controls
                src={project.videoUrl}
              />
            </div>
          )}
        </div>

        {/* 5. RELATED PROJECTS */}
        <section className='border-t border-border-base bg-bg-subtle/30'>
          <div className='px-8 py-16 md:px-16 md:py-24'>
            <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-4'>
              <div className='max-w-xl'>
                <p className='text-[10px] font-mono uppercase tracking-[0.3em] text-text-subtle mb-4'>
                  Discovery
                </p>
                <h2 className='text-4xl font-bold tracking-tighter text-text-base uppercase'>
                  Keep <br />
                  <span className='italic font-serif font-medium text-text-subtle lowercase'>
                    Exploring.
                  </span>
                </h2>
              </div>
            </div>

            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
              {relatedProjects.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  className='group flex flex-col gap-6'
                >
                  <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-bg-base border border-border-base'>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0'
                    />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-bold uppercase tracking-tight group-hover:italic transition-all'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-text-subtle line-clamp-2 leading-relaxed'>
                      {item.tagline || item.overview}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

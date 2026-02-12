"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";

import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";

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
  slug: string;
  title: string;
  tagline?: string;
  overview: string;
  heroImage: any;
  gallery?: any[];
  sections: Section[];
  duration?: string;
  readTime?: number;
  videoUrl?: string;
  websiteLink?: string;
  thumbnail?: any;
  isPasswordProtected?: boolean;
  url: string;
};

type RelatedProject = {
  slug: string;
  title: string;
  tagline?: string | null;
  overview: string;
  url: string;
  thumbnail?: any;
};

/* -------------------------------------------------------------------------- */
/*                                Client Page                                 */
/* -------------------------------------------------------------------------- */

export default function PlaygroundClient({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: RelatedProject[];
}) {
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
      if (token && (await verifyToken(token))) setIsAuthenticated(true);
      setIsCheckingAuth(false);
    };

    checkAuth();
  }, [project]);

  /* ---------------- Clean Sections ---------------- */
  const sections = useMemo(
    () => project.sections.filter((s) => s.heading || s.content || s.bullets),
    [project.sections],
  );

  /* ---------------- TOC ---------------- */
  const toc = sections
    .filter((s) => s.heading)
    .map((s) => ({
      title: s.heading!,
      id: s.heading!.toLowerCase().replace(/\s+/g, "-"),
    }));

  /* ---------------- Password Gate ---------------- */
  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth) {
      return (
        <div className='min-h-screen flex items-center justify-center bg-bg-base'>
          <p className='text-text-subtle'>Loading…</p>
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

  /* ------------------------------------------------------------------------ */
  /*                                  Render                                  */
  /* ------------------------------------------------------------------------ */

  return (
    <section className='md:mx-16 border-x border-border-base bg-bg-base'>
      <div>
        {/* ================= CONTENT ================= */}
        <article className='mx-auto max-w-3xl py-24 px-6'>
          {/* Back */}
          <Link
            href='/playground'
            className='text-sm text-text-subtle hover:underline'
          >
            ← Back to playground
          </Link>

          {/* Header */}
          <header className='mt-10 space-y-6'>
            <h1 className='text-4xl text-text-base md:text-5xl font-semibold tracking-tight leading-tight'>
              {project.title}
            </h1>

            {project.tagline && (
              <p className='text-xl text-text-subtle leading-relaxed'>
                {project.tagline}
              </p>
            )}

            <p className='text-lg text-text-subtle leading-relaxed'>
              {project.overview}
            </p>

            <div className='text-sm text-text-subtle'>
              <p>Duration · 3 min read</p>
            </div>

            {project.websiteLink && (
              <a
                href={project.websiteLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-border-base px-5 py-2 text-sm font-medium text-text-base hover:bg-bg-base transition'
              >
                Visit website
                <span>↗</span>
              </a>
            )}
          </header>

          {/* Hero */}
          <div className='relative mt-16'>
            <Image
              src={project.heroImage}
              alt={project.title}
              priority
              width={1600}
              height={900}
              className='w-full rounded-2xl object-cover'
            />
          </div>

          {/* Sections */}
          <div className='mt-24 space-y-24'>
            {sections.map((sec, i) => {
              const sectionImage = project.gallery?.[i];

              return (
                <section key={i} className='space-y-10'>
                  {sec.heading && (
                    <h2
                      id={sec.heading.toLowerCase().replace(/\s+/g, "-")}
                      className='text-2xl text-text-base md:text-3xl font-semibold tracking-tight scroll-mt-28'
                    >
                      {sec.heading}
                    </h2>
                  )}

                  {sec.content && (
                    <p className='text-base text-text-subtle leading-relaxed'>
                      {sec.content}
                    </p>
                  )}

                  {sec.bullets && (
                    <ul className='list-disc pl-6 space-y-2 text-text-subtle'>
                      {sec.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {/* Section image */}
                  {sectionImage && (
                    <div className='relative'>
                      <Image
                        src={sectionImage}
                        alt={sec.heading || project.title}
                        width={1600}
                        height={900}
                        className='w-full rounded-2xl object-cover'
                      />
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* Video (END ONLY) */}
          {project.videoUrl && (
            <div className='mt-32 aspect-video overflow-hidden rounded-2xl'>
              <ReactPlayer
                width='100%'
                height='100%'
                controls
                src={project.videoUrl}
              />
            </div>
          )}
        </article>
        {/* ================= RELATED ================= */}
        {relatedProjects.length > 0 && (
          <section className='border-t border-border-base'>
            <div className='mx-auto max-w-3xl px-6 py-24 '>
              <div className='mb-12'>
                <h2 className='text-2xl font-semibold tracking-tight text-text-base'>
                  Related playgrounds
                </h2>
                <p className='mt-3 text-text-subtle leading-relaxed'>
                  More experiments and explorations in interaction, motion, and
                  systems thinking.
                </p>
              </div>

              <div className='grid gap-14 md:grid-cols-3'>
                {relatedProjects.map((item, idx) => (
                  <Link
                    key={item.url || idx}
                    href={item.url}
                    className='group flex flex-col gap-5'
                  >
                    <div className='overflow-hidden rounded-2xl'>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={800}
                        height={600}
                        className='w-full object-cover transition-transform duration-500 group-hover:scale-105'
                      />
                    </div>

                    <div className='space-y-1'>
                      <h3 className='font-medium group-hover:underline text-text-base'>
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
        )}
      </div>
    </section>
  );
}

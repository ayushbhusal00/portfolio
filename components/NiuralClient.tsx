"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";

import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";
import { caseStudies, CaseStudy } from "@/lib/data";

// -------- Reading Progress Hook --------
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

type Props = {
  project: Omit<CaseStudy, "RenderComponent">;
  children?: ReactNode;
};

export default function NiuralClient({ project, children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const progress = useReadingProgress();
  console.log("Project data in NiuralClient:", project);

  const readingTime = useMemo(() => {
    const words =
      project.overview.split(" ").length +
      project.sections.reduce(
        (acc, s) => acc + (s.content?.split(" ").length || 0),
        0,
      );
    return Math.max(3, Math.round(words / 200));
  }, [project]);

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

  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth) {
      return (
        <div className='min-h-screen flex items-center justify-center text-sm text-text-subtle'>
          Loading…
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

  const related = caseStudies.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <section className='bg-bg-base'>
      {/* Reading progress */}
      <div className='fixed top-0 left-0 z-50 h-[2px] w-full bg-bg-base'>
        <div
          className='h-full bg-bg-base transition-width duration-150'
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Alternate content slot */}
      {children ? (
        <main>{children}</main>
      ) : (
        <main className='md:mx-16 border-x border-border-base'>
          <div className='mx-auto max-w-3xl px-6 py-16 md:py-28'>
            {/* Title header */}
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <h1 className='text-4xl text-text-base md:text-5xl font-bold leading-tight'>
                {project.title}
              </h1>
              <p className='text-lg text-text-subtle leading-relaxed'>
                {project.overview}
              </p>
              <p className='text-sm text-text-subtle'>{readingTime} min read</p>
            </motion.header>

            {/* Hero image full width */}
            {project.heroImage && (
              <div className='relative my-10 w-full'>
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  className='w-full rounded-2xl object-cover'
                  priority
                />
              </div>
            )}

            {/* Content sections */}
            <article className='space-y-20'>
              {project.sections.map((section, index) => {
                const hasContent =
                  section.heading || section.content || section.bullets;

                const sectionImage = project.gallery?.[index];
                if (!hasContent && !sectionImage) return null;
                if (!hasContent && sectionImage) {
                  return (
                    <div key={index} className='relative w-full'>
                      <Image
                        src={sectionImage}
                        alt={section.heading || project.title}
                        className='w-full rounded-2xl object-cover'
                      />
                    </div>
                  );
                }

                return (
                  <section key={index} className='space-y-8'>
                    {section.heading && (
                      <h2 className='text-2xl md:text-3xl text-text-base font-semibold leading-tight'>
                        {section.heading}
                      </h2>
                    )}

                    {section.content && (
                      <p className='text-base text-text-subtle leading-relaxed'>
                        {section.content}
                      </p>
                    )}

                    {section.bullets && (
                      <ul className='list-disc pl-5 space-y-2 text-text-subtle'>
                        {section.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}

                    {sectionImage && (
                      <div className='relative w-full'>
                        <Image
                          src={sectionImage}
                          alt={section.heading || project.title}
                          className='w-full rounded-2xl object-cover'
                        />
                      </div>
                    )}
                  </section>
                );
              })}
            </article>

            {/* Video full block */}
            {project.videoUrl && (
              <div className='my-20 aspect-video w-full overflow-hidden rounded-2xl'>
                <ReactPlayer
                  controls
                  width='100%'
                  height='100%'
                  src={project.videoUrl}
                />
              </div>
            )}
          </div>
        </main>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <section className='md:mx-16 border-x border-border-base'>
          <div className='border-t border-border-base'>
            <div className='mx-auto  max-w-3xl  py-24 px-6'>
              {/* Section intro */}
              <div className='max-w-2xl mb-16'>
                <h2 className='text-2xl text-text-base md:text-3xl font-semibold tracking-tight'>
                  More case studies
                </h2>
              </div>

              {/* List */}
              <div className='grid gap-16 md:grid-cols-3'>
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={p.url}
                    className='group flex flex-col gap-6'
                  >
                    {/* Image */}
                    <div className='overflow-hidden rounded-2xl'>
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        className='w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                      />
                    </div>

                    {/* Meta */}
                    <div className='space-y-2'>
                      <h3 className='text-lg font-medium text-text-subtle leading-snug group-hover:underline'>
                        {p.title}
                      </h3>

                      {p.tagline && (
                        <p className='text-sm text-text-subtle leading-relaxed'>
                          {p.tagline}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

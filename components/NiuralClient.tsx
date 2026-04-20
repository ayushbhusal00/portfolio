"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";
import { CaseStudy } from "@/lib/data";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type RelatedProject = {
  id: string;
  slug?: string;
  title: string;
  tagline?: string | null;
  overview: string;
  url: string;
  thumbnail?: { url?: string; src?: string } | string;
};

/* ---------------- Related Project Card (Significa Style) ---------------- */

function RelatedProjectCard({ project: p }: { project: RelatedProject }) {
  const thumbSrc =
    typeof p.thumbnail === "string"
      ? p.thumbnail
      : ((p.thumbnail as any)?.url ?? (p.thumbnail as any)?.src);

  const isNiural = p.slug === "niural-global-payroll" || String(p.id) === "0";
  const href =
    p.slug === "niural-global-payroll" ? "/niural" : `/projects/${p.id}`;
  const token = typeof window !== "undefined" ? getToken() : null;

  const [tokenValid, setTokenValid] = useState<boolean | null>(
    isNiural ? (token ? null : false) : true,
  );

  useEffect(() => {
    if (!isNiural || !token) return;
    let mounted = true;
    verifyToken(token).then((valid) => {
      if (mounted) setTokenValid(valid);
    });
    return () => {
      mounted = false;
    };
  }, [isNiural, token]);

  const hasAccess = !isNiural || tokenValid === true;

  return (
    <Link href={href} className='group flex flex-col gap-6'>
      <div className='relative aspect-[4/3] overflow-hidden rounded-2xl bg-bg-subtle'>
        <Image
          src={thumbSrc}
          alt={p.title}
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className={`object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 ${
            isNiural && !hasAccess ? "blur-sm" : ""
          }`}
          unoptimized={String(thumbSrc || "").includes("/api/media/")}
        />
        {isNiural && !hasAccess && (
          <div className='absolute top-3 left-3 z-10'>
            <span className='px-2 py-1 rounded-full text-[10px] uppercase font-mono bg-white/80 border border-border-base shadow-sm'>
              Protected
            </span>
          </div>
        )}
      </div>
      <div className='space-y-1'>
        <h3 className='text-xl font-medium text-text-base group-hover:underline italic font-serif'>
          {p.title}
        </h3>
        {p.tagline && (
          <p className='text-sm text-text-subtle leading-snug'>{p.tagline}</p>
        )}
      </div>
    </Link>
  );
}

/* ---------------- Reading Progress ---------------- */

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

/* ---------------- Main Component ---------------- */

type Props = {
  project: Omit<CaseStudy, "RenderComponent">;
  children?: ReactNode;
  relatedProjects?: RelatedProject[];
};

export default function NiuralClient({
  project,
  children,
  relatedProjects = [],
}: Props) {
  const progress = useReadingProgress();
  const token = typeof window !== "undefined" ? getToken() : null;
  const [tokenValid, setTokenValid] = useState<boolean | null>(
    project.isPasswordProtected ? (token ? null : false) : true,
  );

  useEffect(() => {
    if (!project.isPasswordProtected || !token) return;
    let mounted = true;
    verifyToken(token).then((valid) => {
      if (mounted) setTokenValid(valid);
    });
    return () => {
      mounted = false;
    };
  }, [project.isPasswordProtected, token]);

  const isAuthenticated = !project.isPasswordProtected || tokenValid === true;
  const isCheckingAuth = project.isPasswordProtected && tokenValid === null;

  const [related, setRelated] = useState<RelatedProject[]>(relatedProjects);

  useEffect(() => {
    async function fetchRelated() {
      try {
        const res = await fetch(
          `/api/project?limit=3&sort=-createdAt&where[slug][not_equals]=${encodeURIComponent(project.slug)}`,
        );
        const data = await res.json();
        if (Array.isArray(data.docs)) {
          setRelated(
            data.docs.map((item: any) => ({
              id: item.id,
              slug: item.slug,
              title: item.title,
              tagline: item.tagline ?? null,
              overview: item.overview ?? "",
              url: item.url ?? `/projects/${item.id}`,
              thumbnail:
                typeof item.thumbnail === "object"
                  ? item.thumbnail
                  : (item.thumbnail ?? undefined),
            })),
          );
        }
      } catch {}
    }
    fetchRelated();
  }, [project.slug]);

  const readingTime = useMemo(() => {
    const words =
      project.overview.split(" ").length +
      project.sections.reduce(
        (acc, s) => acc + (s.content?.split(" ").length || 0),
        0,
      );
    return Math.max(3, Math.round(words / 200));
  }, [project]);

  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth)
      return (
        <div className='min-h-screen flex items-center justify-center text-sm text-text-subtle'>
          Loading…
        </div>
      );
    return (
      <PasswordProtection
        projectTitle={project.title}
        onAuthenticated={() => setTokenValid(true)}
      />
    );
  }

  return (
    <section className='bg-bg-base'>
      {/* Scroll Progress Bar */}
      <div className='fixed top-0 left-0 z-50 h-[3px] w-full bg-border-base/20'>
        <div
          className='h-full bg-text-base transition-all duration-150'
          style={{ width: `${progress}%` }}
        />
      </div>

      {children ? (
        <main>{children}</main>
      ) : (
        <main className='md:mx-16 border-x border-border-base'>
          {/* --- HERO HEADER --- */}
          <div className='px-6 md:px-20 pt-20 pb-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='max-w-5xl'
            >
              <h1 className='text-5xl md:text-8xl font-bold tracking-tight text-text-base mb-8'>
                {project.title.split("—")[0]}.
              </h1>
              <p className='text-2xl md:text-3xl text-text-base leading-tight max-w-3xl'>
                {project.overview}
              </p>
            </motion.div>
          </div>

          {/* --- IMPACT GRID (Significa Style) --- */}
          <div className='grid grid-cols-2 md:grid-cols-4 border-y border-border-base'>
            <div className='p-8 border-r border-border-base'>
              <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-3'>
                Published
              </p>
              <p className='text-lg font-medium'>2024</p>
            </div>
            <div className='p-8 border-r border-border-base'>
              <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-3'>
                Reading Time
              </p>
              <p className='text-lg font-medium'>{readingTime} min</p>
            </div>
            <div className='p-8 border-r border-border-base'>
              <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-3'>
                Type
              </p>
              <p className='text-lg font-medium'>Case Study</p>
            </div>
            <div className='p-8'>
              <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle mb-3'>
                Focus
              </p>
              <p className='text-lg font-medium'>Digital Product</p>
            </div>
          </div>

          {/* --- HERO MEDIA --- */}
          <div className='p-4 md:p-8 bg-bg-subtle/50'>
            {project.videoUrl ? (
              <div className='aspect-video w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl bg-black'>
                <ReactPlayer
                  controls
                  autoPlay
                  width='100%'
                  height='100%'
                  src={project.videoUrl}
                />
              </div>
            ) : (
              (project.heroImage || (project as any).thumbnail?.url) && (
                <div className='relative aspect-video w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl'>
                  <Image
                    src={
                      typeof project.heroImage === "string"
                        ? project.heroImage
                        : ((project.heroImage as any)?.url ??
                          (project as any).thumbnail?.url)
                    }
                    alt={project.title}
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
              )
            )}
          </div>

          {/* --- DYNAMIC SECTIONS (Chapters) --- */}
          <div className='py-12'>
            {project.sections.map((section, index) => {
              const sectionImage = project.gallery?.[index];
              const sectionImgSrc =
                typeof sectionImage === "string"
                  ? sectionImage
                  : (sectionImage as any)?.url;

              if (!section.heading && !section.content && !sectionImgSrc)
                return null;

              return (
                <div
                  key={index}
                  className='border-b border-border-base last:border-0'
                >
                  <div className='mx-auto max-w-4xl py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12'>
                    {/* Chapter Label */}
                    <div className='md:col-span-3'>
                      <p className='text-[10px] font-mono uppercase tracking-[0.2em] text-text-subtle sticky top-24'>
                        0{index + 1}.{" "}
                        {section.heading?.split(" ")[0] || "Chapter"}
                      </p>
                    </div>

                    {/* Content Body */}
                    <div className='md:col-span-9 space-y-8'>
                      {section.heading && (
                        <h2 className='text-3xl md:text-4xl font-semibold text-text-base leading-tight'>
                          {section.heading}
                        </h2>
                      )}

                      {section.content && (
                        <p className='text-lg md:text-xl text-text-subtle leading-relaxed'>
                          {section.content}
                        </p>
                      )}

                      {section.bullets && section.bullets.length > 0 && (
                        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
                          {section.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className='flex gap-3 text-base text-text-subtle'
                            >
                              <span className='text-text-base opacity-30'>
                                —
                              </span>{" "}
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {sectionImgSrc && (
                        <div className='relative aspect-video w-full overflow-hidden rounded-2xl border border-border-base shadow-sm mt-12 bg-white'>
                          <Image
                            src={sectionImgSrc}
                            alt={section.heading || project.title}
                            fill
                            className='object-cover'
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- CONTACT CTA (Significa Style) --- */}
          <div className='py-24 px-6 text-center border-t border-border-base bg-bg-subtle/30'>
            <h3 className='text-2xl font-medium mb-6'>
              Interested in this project?
            </h3>
            <Link
              href='/'
              className='inline-block px-8 py-4 bg-text-base text-bg-base rounded-full font-medium hover:scale-105 transition-transform'
            >
              Let&apos;s work together
            </Link>
          </div>
        </main>
      )}

      {/* --- RELATED PROJECTS --- */}
      {related.length > 0 && (
        <section className='md:mx-16 border-x border-border-base'>
          <div className='border-t border-border-base py-24 px-6'>
            <div className='mx-auto max-w-5xl'>
              <h2 className='text-xs font-mono uppercase tracking-[0.3em] text-text-subtle mb-16 text-center'>
                More Case Studies
              </h2>
              <div className='grid gap-12 md:grid-cols-3'>
                {related.map((p) => (
                  <RelatedProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}

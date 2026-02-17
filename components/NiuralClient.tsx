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

/* ---------------- Related Project Card ---------------- */

function RelatedProjectCard({ project: p }: { project: RelatedProject }) {
  const thumbSrc =
    typeof p.thumbnail === "string"
      ? p.thumbnail
      : ((p.thumbnail as any)?.url ?? (p.thumbnail as any)?.src);

  const isNiural = p.slug === "niural-global-payroll" || String(p.id) === "0";

  const href =
    p.slug === "niural-global-payroll" ? "/niural" : `/projects/${p.id}`;

  const token = typeof window !== "undefined" ? getToken() : null;

  /* ✅ derive initial state */
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
      <div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
        <Image
          src={thumbSrc}
          alt={p.title}
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            isNiural && !hasAccess ? "blur-sm" : ""
          }`}
          unoptimized={String(thumbSrc || "").includes("/api/media/")}
        />

        {isNiural && !hasAccess && (
          <div className='absolute top-2 left-2 z-10'>
            <span className='inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-bg-base/90 backdrop-blur-sm text-zinc-700 border border-border-base shadow-sm'>
              Password Protected
            </span>
          </div>
        )}
      </div>

      <div className='space-y-2'>
        <h3 className='text-lg font-medium text-text-subtle leading-snug group-hover:underline'>
          {p.title}
        </h3>

        {p.tagline && <p className='text-sm text-text-subtle'>{p.tagline}</p>}
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

  /* ✅ derive initial auth state */
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

  /* ---------------- Related Projects Fetch ---------------- */

  const [related, setRelated] = useState<RelatedProject[]>(relatedProjects);

  useEffect(() => {
    async function fetchRelated() {
      try {
        const res = await fetch(
          "/api/project?limit=3&sort=-createdAt&where[slug][not_equals]=" +
            encodeURIComponent(project.slug),
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

  /* ---------------- Reading Time ---------------- */

  const readingTime = useMemo(() => {
    const words =
      project.overview.split(" ").length +
      project.sections.reduce(
        (acc, s) => acc + (s.content?.split(" ").length || 0),
        0,
      );

    return Math.max(3, Math.round(words / 200));
  }, [project]);

  /* ---------------- Auth Gate ---------------- */

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
        onAuthenticated={() => setTokenValid(true)}
      />
    );
  }

  /* ---------------- Render ---------------- */

  return (
    <section className='bg-bg-base'>
      <div className='fixed top-0 left-0 z-50 h-[2px] w-full bg-bg-base'>
        <div
          className='h-full bg-bg-base transition-width duration-150'
          style={{ width: `${progress}%` }}
        />
      </div>

      {children ? (
        <main>{children}</main>
      ) : (
        <main className='md:mx-16 border-x border-border-base'>
          <div className='mx-auto max-w-3xl px-6 py-16 md:py-28'>
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-8'
            >
              <h1 className='text-4xl text-text-base md:text-5xl font-bold'>
                {project.title}
              </h1>

              <p className='text-lg text-text-subtle'>{project.overview}</p>

              <p className='text-sm text-text-subtle'>{readingTime} min read</p>
            </motion.header>

            {(project.heroImage || (project as any).thumbnail?.url) && (
              <div className='relative my-10 aspect-video w-full overflow-hidden rounded-2xl'>
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
            )}

            <article className='space-y-20'>
              {project.sections.map((section, index) => {
                const sectionImage = project.gallery?.[index];
                const sectionImgSrc =
                  typeof sectionImage === "string"
                    ? sectionImage
                    : (sectionImage as any)?.url;

                if (!section.heading && !section.content && !sectionImgSrc)
                  return null;

                return (
                  <section key={index} className='space-y-8'>
                    {section.heading && (
                      <h2 className='text-2xl md:text-3xl font-semibold'>
                        {section.heading}
                      </h2>
                    )}

                    {section.content && (
                      <p className='text-base text-text-subtle'>
                        {section.content}
                      </p>
                    )}

                    {sectionImgSrc && (
                      <div className='relative aspect-video w-full overflow-hidden rounded-2xl'>
                        <Image
                          src={sectionImgSrc}
                          alt={section.heading || project.title}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}
                  </section>
                );
              })}
            </article>

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

      {related.length > 0 && (
        <section className='md:mx-16 border-x border-border-base'>
          <div className='border-t border-border-base'>
            <div className='mx-auto max-w-3xl py-24 px-6'>
              <h2 className='text-2xl md:text-3xl font-semibold mb-16'>
                More case studies
              </h2>

              <div className='grid gap-16 md:grid-cols-3'>
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";

import PasswordProtection from "@/components/password-protection";
import { verifyToken, getToken } from "@/lib/jwt";
import { caseStudies, CaseStudy } from "@/lib/data";

// ================= HOOK =================

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

// ================= PROPS =================

type Props = {
  project: Omit<CaseStudy, "RenderComponent">;
  children?: ReactNode;
};

// ================= COMPONENT =================

export default function NiuralClient({ project, children }: Props) {
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

  // -------- Auth --------
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

  if (project.isPasswordProtected && !isAuthenticated) {
    if (isCheckingAuth) {
      return (
        <div className='min-h-screen flex items-center justify-center'>
          Loading...
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
    <>
      {/* Reading progress */}
      <div className='fixed top-0 left-0 z-50 h-[2px] w-full'>
        <div className='h-full bg-zinc-900' style={{ width: `${progress}%` }} />
      </div>

      {/* Custom OR default */}
      {children ? (
        <main>{children}</main>
      ) : (
        <main className='mx-auto max-w-7xl px-6 py-12'>
          <article className='space-y-16'>
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className='text-5xl font-semibold'>{project.title}</h1>
              <p className='mt-4 text-zinc-600'>{project.overview}</p>
              <p className='mt-2 text-sm text-zinc-500'>
                {readingTime} min read
              </p>
            </motion.header>

            <Image src={project.heroImage} alt={project.title} />

            {project.sections.map((s, i) => (
              <section key={i}>
                {s.heading && <h2>{s.heading}</h2>}
                {s.content && <p>{s.content}</p>}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {project.videoUrl && (
              <ReactPlayer controls width='100%' src={project.videoUrl} />
            )}
          </article>
        </main>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className='border-t py-24 px-6'>
          <h2>You may also like</h2>
          <div className='grid md:grid-cols-3 gap-8 mt-8'>
            {related.map((p) => (
              <Link key={p.id} href={p.url}>
                <Image src={p.thumbnail} alt={p.title} />
                <h3>{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

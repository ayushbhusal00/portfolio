"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ReactPlayer from "react-player";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PasswordProtection from "@/components/password-protection";
import { caseStudies } from "@/lib/data";
import { getToken, verifyToken } from "@/lib/jwt";

/* ----------------------------------------
   Images
---------------------------------------- */

import DesignSystem from "@/public/design-system.png";
import DesignSystemModule from "@/public/Design-System-Module.png";
import DesignPattern from "@/public/patterns.png";
import DesignComponent from "@/public/components.png";

import BankAccount from "@/public/BankAccount.png";
import Benefits from "@/public/Benefits.png";
import Timesheets from "@/public/EmployeeDashboard.png";
import AccountPayable from "@/public/InvoiceDetail.png";
import LogIn from "@/public/LogIn.png";
import Payroll from "@/public/Payroll.png";

/* ----------------------------------------
   Data
---------------------------------------- */

const systemScreens = [
  {
    img: DesignSystem,
    caption:
      "Design system overview defining tokens, layout primitives, and core components",
  },
  {
    img: DesignSystemModule,
    caption:
      "Modular system architecture supporting payroll, payments, and benefits products",
  },
  {
    img: DesignPattern,
    caption:
      "Standardized interaction patterns for tables, forms, and financial workflows",
  },
  {
    img: DesignComponent,
    caption:
      "Reusable components optimized for dense enterprise data and accessibility",
  },
];

const productScreens = [
  {
    img: LogIn,
    caption:
      "Secure login and authentication flow designed for enterprise compliance",
  },
  {
    img: Timesheets,
    caption:
      "Employee dashboard balancing visibility, approvals, and time tracking",
  },
  {
    img: BankAccount,
    caption:
      "Bank account setup flow designed to reduce errors in sensitive financial data",
  },
  {
    img: Benefits,
    caption:
      "Benefits management interface aligned with payroll and employee records",
  },
  {
    img: AccountPayable,
    caption:
      "Accounts payable workflow supporting invoices, approvals, and audit trails",
  },
  {
    img: Payroll,
    caption:
      "Payroll execution view providing clarity into status, totals, and exceptions",
  },
];

const heroVideoUrls = [
  { url: "https://www.youtube.com/watch?v=llYZT0TfKwA" },
  { url: "https://www.youtube.com/watch?v=He7jMtTn1kw" },
];

/* ----------------------------------------
   Related Projects Component
---------------------------------------- */

function RelatedProjectsSection({ related }: { related: any[] }) {
  const [accessMap, setAccessMap] = React.useState<{ [id: string]: boolean }>(
    {},
  );

  useEffect(() => {
    let isMounted = true;

    async function checkAccess() {
      const results: { [id: string]: boolean } = {};

      for (const p of related) {
        const isNiural =
          p.slug === "niural-global-payroll" || String(p.id) === "0";

        if (!isNiural) {
          results[p.id] = true;
        } else {
          const token = getToken();
          results[p.id] = token ? await verifyToken(token) : false;
        }
      }

      if (isMounted) setAccessMap(results);
    }

    checkAccess();
    return () => {
      isMounted = false;
    };
  }, [related]);

  return (
    <section className='md:mx-16 border-x border-border-base'>
      <div className='border-t border-border-base'>
        <div className='mx-auto max-w-3xl py-24 px-6'>
          <h2 className='text-2xl font-semibold mb-12 text-text-base'>
            More Case Studies
          </h2>

          <div className='grid gap-16 md:grid-cols-3'>
            {related.map((p) => {
              const thumbSrc =
                typeof p.thumbnail === "string"
                  ? p.thumbnail
                  : (p.thumbnail?.url ?? p.thumbnail?.src);

              const isProtected =
                p.slug === "niural-global-payroll" || String(p.id) === "0";

              const hasAccess = accessMap[p.id];

              return (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className='group flex flex-col gap-6'
                >
                  <div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
                    <Image
                      src={thumbSrc}
                      alt={p.title}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isProtected && !hasAccess ? "blur-sm" : ""
                      }`}
                    />

                    {isProtected && !hasAccess && (
                      <span className='absolute top-2 left-2 px-2 py-1 text-xs text-white rounded-full bg-white/90 border'>
                        Password Protected
                      </span>
                    )}
                  </div>

                  <div>
                    <h3
                      className='text-xl text-text-base font-medium leading-snug group-hover:underline'
                      style={{
                        fontFamily: "Instryment Sans, serif",
                        fontStyle: "italic",
                      }}
                    >
                      {p.title}
                    </h3>
                    {p.tagline && (
                      <p className='text-sm text-text-subtle leading-relaxed'>
                        {p.tagline}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------
   Main Page
---------------------------------------- */

export default function NiuralPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [related, setRelated] = useState<any[]>([]);

  const moreCaseStudies = caseStudies.filter(
    (cs) => cs.slug !== "niural-global-payroll",
  );

  useEffect(() => {
    async function checkAuth() {
      const token = getToken();
      if (token && (await verifyToken(token))) {
        setIsAuthenticated(true);
      }
      setIsCheckingAuth(false);
    }
    checkAuth();
  }, []);

  useEffect(() => {
    async function fetchRelated() {
      try {
        const res = await fetch(
          "/api/project?limit=3&sort=-createdAt&where[slug][not_equals]=niural-global-payroll",
        );
        const data = await res.json();

        if (Array.isArray(data.docs)) {
          setRelated(data.docs);
        }
      } catch {}
    }

    fetchRelated();
  }, []);

  if (!isAuthenticated) {
    if (isCheckingAuth) {
      return (
        <div className='min-h-screen flex items-center justify-center text-sm text-text-subtle'>
          Loading…
        </div>
      );
    }

    return (
      <PasswordProtection
        projectTitle='Niural — Designing a Power Platform'
        onAuthenticated={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <section className='bg-bg-base'>
      <main className='md:mx-16 flex justify-center border-x border-border-base'>
        <div className='max-w-3xl py-24 px-6 flex flex-col gap-16'>
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-8'
          >
            <h1 className='text-4xl text-text-base md:text-5xl font-bold'>
              Niural — Designing a Power Platform
            </h1>

            <p className='text-lg text-text-subtle'>
              Niural is a global workforce management tool for enterprise
              payroll, compliance, and vendor payments. I led the design of a
              unified system across their core products, enabling faster
              iteration and global scalability while reducing complexity for
              users.
            </p>

            <p className='text-sm text-text-subtle'>4 min read</p>
          </motion.header>
          {/* HERO VIDEO */}
          <Carousel>
            <CarouselContent>
              {heroVideoUrls.map((video, index) => (
                <CarouselItem key={index}>
                  <div className='aspect-video overflow-hidden rounded-2xl'>
                    <ReactPlayer
                      width='100%'
                      height='100%'
                      controls
                      src={video.url}
                      className='rounded-2xl overflow-hidden shadow-elevation-card-rest'
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

          {/* PROBLEM */}
          <div className='mx-auto max-w-3xl space-y-6'>
            <h2 className='text-2xl text-text-base font-medium'>The Problem</h2>
            <p className='text-text-subtle'>
              Niural’s product surface expanded rapidly as new financial
              workflows were introduced. Payroll, contractor payments, and
              benefits shared similar concepts but evolved independently,
              creating inconsistencies and cognitive load.
            </p>
            <p className='text-text-subtle'>
              The challenge was to simplify complex financial operations while
              enabling teams to scale globally — without slowing down product
              development.
            </p>
          </div>

          {/* SYSTEM & APPROACH */}
          <div className='mx-auto max-w-3xl space-y-10'>
            <h2 className='text-2xl text-text-base font-medium'>
              Designing the System
            </h2>
            <p className='text-text-subtle'>
              I focused on building a shared foundation across products:
              reusable patterns, consistent data structures, and predictable
              interaction models — optimized for enterprise workflows.
            </p>
            <ul className='space-y-4 text-text-subtle'>
              <li>• Unified layout and navigation patterns</li>
              <li>• Standardized tables, forms, and empty states</li>
              <li>• Clear hierarchy for dense financial data</li>
              <li>• Token-driven design system for fast iteration</li>
            </ul>
          </div>

          {/* SYSTEM SCREENS */}
          <div>
            <Carousel>
              <CarouselContent>
                {systemScreens.map(({ img, caption }, i) => (
                  <CarouselItem key={i}>
                    <div className='relative aspect-[16/9] overflow-hidden rounded-2xl border border-border-base bg-bg-base'>
                      <Image
                        src={img}
                        alt={caption}
                        fill
                        className='object-cover'
                      />
                      <p className='absolute bottom-3 left-3 rounded bg-bg-base px-2 py-1 text-xs font-mono text-text-subtle'>
                        {caption}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className='mt-6 flex justify-center gap-4'>
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>

          {/* DECISIONS & TRADEOFFS */}
          <div className='mx-auto max-w-3xl space-y-12'>
            <h2 className='text-2xl text-text-base  font-medium'>
              Key Decisions & Tradeoffs
            </h2>

            <div className='space-y-8'>
              <div>
                <p className='text-xs font-mono uppercase text-text-subtle'>
                  Why a unified design system
                </p>
                <p className='mt-2 text-text-subtle'>
                  Multiple teams were shipping features in parallel. A shared
                  system reduced duplication, improved accessibility, and
                  allowed engineers to move faster with confidence.
                </p>
              </div>

              <div>
                <p className='text-xs font-mono uppercase text-text-subtle'>
                  Tradeoff: flexibility vs consistency
                </p>
                <p className='mt-2 text-text-subtle'>
                  Early constraints limited visual freedom but ensured clarity
                  and predictability. Flexibility was reintroduced once core
                  patterns stabilized.
                </p>
              </div>
            </div>
          </div>

          {/* PRODUCT SCREENS */}
          <div className='space-y-10'>
            <h2 className='mx-auto max-w-3xl text-text-base  text-2xl font-medium'>
              Product Screens
            </h2>
            {productScreens.map(({ img, caption }, i) => (
              <div
                key={i}
                className='relative aspect-[16/9] overflow-hidden rounded-2xl border border-border-base bg-bg-base'
              >
                <Image src={img} alt={caption} fill className='object-cover' />
                <p className='absolute bottom-3 left-3 rounded bg-bg-base px-2 py-1 text-xs font-mono text-text-subtle'>
                  {caption}
                </p>
              </div>
            ))}
          </div>

          {/* IMPACT */}
          <div className='mx-auto max-w-3xl space-y-6'>
            <h2 className='text-2xl text-text-base  font-medium'>Impact</h2>
            <p className='text-text-subtle'>
              The system improved consistency across products, reduced design
              debt, and enabled faster feature delivery. Teams scaled globally
              while maintaining clarity in complex financial flows.
            </p>
            <p className='text-text-subtle'>
              This foundation continues to support new products, markets, and
              regulatory requirements.
            </p>
          </div>

          {/* MORE CASE STUDIES */}
          {moreCaseStudies.length > 0 && (
            <div className='mt-24'>
              <h2 className='text-2xl font-semibold mb-6'>More Case Studies</h2>
              <div className='grid gap-8'>
                {moreCaseStudies.map((cs) => (
                  <Link
                    key={cs.slug}
                    href={cs.url}
                    className='block p-6 rounded-lg border border-border-base bg-bg-base hover:bg-bg-subtle transition'
                  >
                    <div className='flex items-center gap-4'>
                      <Image
                        src={
                          typeof cs.thumbnail === "string"
                            ? cs.thumbnail
                            : cs.thumbnail?.src
                        }
                        alt={cs.title}
                        width={80}
                        height={80}
                        className='w-20 h-20 object-cover rounded-md border'
                      />
                      <div>
                        <h3 className='text-lg font-bold mb-1'>{cs.title}</h3>
                        <p className='text-sm text-text-subtle'>{cs.tagline}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* RELATED PROJECTS */}
      {related.length > 0 && <RelatedProjectsSection related={related} />}
    </section>
  );
}

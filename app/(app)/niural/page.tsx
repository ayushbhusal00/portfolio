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

/* --- Assets and Data remain the same as your provided code --- */
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

const systemScreens = [
  { img: DesignSystem, caption: "Design system tokens and primitives" },
  {
    img: DesignSystemModule,
    caption: "Modular architecture for global payroll",
  },
  { img: DesignPattern, caption: "Standardized interaction patterns" },
  { img: DesignComponent, caption: "Reusable enterprise components" },
];

const productScreens = [
  { img: LogIn, caption: "Secure Authentication Flow" },
  { img: Timesheets, caption: "Employee Dashboard" },
  { img: BankAccount, caption: "Financial Data Entry" },
  { img: Benefits, caption: "Benefits Management" },
  { img: AccountPayable, caption: "Accounts Payable Workflow" },
  { img: Payroll, caption: "Payroll Execution View" },
];

const heroVideoUrls = [
  { url: "https://www.youtube.com/watch?v=llYZT0TfKwA" },
  { url: "https://www.youtube.com/watch?v=He7jMtTn1kw" },
];

export default function NiuralPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const token = getToken();
      if (token && (await verifyToken(token))) setIsAuthenticated(true);
      setIsCheckingAuth(false);
    }
    checkAuth();
  }, []);

  if (!isAuthenticated && !isCheckingAuth) {
    return (
      <PasswordProtection
        projectTitle='Niural — Designing a Power Platform'
        onAuthenticated={() => setIsAuthenticated(true)}
      />
    );
  }

  return (
    <section className='bg-bg-base font-sans'>
      <main className='md:mx-16 flex flex-col justify-center border-x border-border-base'>
        {/* --- 1. HERO SECTION (Mishmash Style) --- */}
        <div className='px-6 md:px-20 pt-16 pb-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-5xl'
          >
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-text-base mb-8'>
              Niural.
            </h1>
            <p className='text-2xl md:text-3xl text-text-base leading-tight max-w-3xl'>
              Designing a unified Power Platform for global workforce management
              and enterprise payroll.
            </p>
          </motion.div>
        </div>

        {/* --- 2. IMPACT STATS GRID --- */}
        <div className='grid grid-cols-2 md:grid-cols-4 border-y border-border-base'>
          <div className='p-8 border-r border-border-base'>
            <p className='text-xs font-mono uppercase text-text-subtle mb-2'>
              Role
            </p>
            <p className='text-lg font-medium'>Lead Product Designer</p>
          </div>
          <div className='p-8 border-r border-border-base'>
            <p className='text-xs font-mono uppercase text-text-subtle mb-2'>
              Deliverables
            </p>
            <p className='text-lg font-medium'>Design System, Web App</p>
          </div>
          <div className='p-8 border-r border-border-base'>
            <p className='text-xs font-mono uppercase text-text-subtle mb-2'>
              Read Time
            </p>
            <p className='text-lg font-medium'>4 min read</p>
          </div>
          <div className='p-8'>
            <p className='text-xs font-mono uppercase text-text-subtle mb-2'>
              Timeline
            </p>
            <p className='text-lg font-medium'>2023 — 2024</p>
          </div>
        </div>

        {/* --- 3. SHOWCASE VIDEO --- */}
        <div className='p-4 md:p-8 bg-bg-subtle'>
          <Carousel className='w-full max-w-5xl mx-auto'>
            <CarouselContent>
              {heroVideoUrls.map((video, index) => (
                <CarouselItem key={index}>
                  <div className='aspect-video overflow-hidden rounded-2xl shadow-2xl'>
                    <ReactPlayer
                      width='100%'
                      height='100%'
                      controls
                      src={video.url}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className='right-4' />
            <CarouselPrevious className='left-4' />
          </Carousel>
        </div>

        {/* --- 4. CONTEXT / CHAPTER 1: THE CHALLENGE --- */}
        <div className='w-full mx-auto max-w-3xl py-24 px-6 space-y-8'>
          <h2 className='text-xs font-mono uppercase tracking-widest text-text-subtle'>
            01. The Mission
          </h2>
          <h3 className='text-3xl md:text-4xl font-semibold text-text-base leading-tight'>
            New goals, new challenges. Rethinking the e-commerce of workforce
            management.
          </h3>
          <p className='text-lg text-text-subtle leading-relaxed'>
            Niural is a global workforce management tool for enterprise payroll,
            compliance, and vendor payments. As the product surface expanded
            rapidly, payroll, contractor payments, and benefits began to evolve
            independently, creating inconsistencies and increasing cognitive
            load for users.
          </p>
          <p className='text-lg text-text-subtle leading-relaxed'>
            The objective was crystal clear: simplify complex financial
            operations while enabling global scalability without slowing down
            the rapid pace of product development.
          </p>
        </div>

        {/* --- 5. CHAPTER 2: DESIGN & SYSTEM (The "Design" Pillar) --- */}
        <div className='border-t border-border-base'>
          <div className='w-full mx-auto max-w-3xl py-24 px-6 space-y-12'>
            <h2 className='text-xs font-mono uppercase tracking-widest text-text-subtle'>
              02. Design
            </h2>
            <h3 className='text-3xl md:text-4xl font-semibold text-text-base'>
              Defining standards that support global growth.
            </h3>
            <p className='text-lg text-text-subtle'>
              I focused on building a shared foundation: reusable patterns,
              consistent data structures, and predictable interaction models
              optimized for dense enterprise workflows.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
              <div>
                <p className='font-bold text-text-base mb-2'>
                  Unified Navigation
                </p>
                <p className='text-text-subtle text-sm'>
                  Consistent layout patterns across disparate financial tools.
                </p>
              </div>
              <div>
                <p className='font-bold text-text-base mb-2'>Data Density</p>
                <p className='text-text-subtle text-sm'>
                  Clear hierarchy optimized for tables, forms, and audit trails.
                </p>
              </div>
            </div>

            <Carousel className='w-full'>
              <CarouselContent>
                {systemScreens.map(({ img, caption }, i) => (
                  <CarouselItem key={i}>
                    <div className='relative aspect-[16/10] overflow-hidden rounded-xl border border-border-base bg-white shadow-sm'>
                      <Image
                        src={img}
                        alt={caption}
                        fill
                        className='object-cover p-4'
                      />
                      <div className='absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-mono border border-border-base'>
                        {caption}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className='mt-8 flex justify-start gap-2'>
                <CarouselPrevious className='static translate-y-0' />
                <CarouselNext className='static translate-y-0' />
              </div>
            </Carousel>
          </div>
        </div>

        {/* --- 6. CHAPTER 3: OPERATIONAL (The "Tradeoffs" Pillar) --- */}
        <div className='bg-text-base text-bg-base py-24'>
          <div className='w-full mx-auto max-w-3xl px-6 space-y-12'>
            <h2 className='text-xs font-mono uppercase tracking-widest opacity-60'>
              03. Operational
            </h2>
            <h3 className='text-3xl md:text-4xl font-semibold'>
              Strategic Tradeoffs: Efficiency vs. Flexibility.
            </h3>

            <div className='space-y-12'>
              <div>
                <p className='text-xs font-mono uppercase opacity-50 mb-4'>
                  The Engineering Impact
                </p>
                <p className='text-xl opacity-90'>
                  By implementing a token-driven system, we reduced duplication
                  and allowed engineers to ship parallel features with 100%
                  confidence in visual consistency.
                </p>
              </div>
              <div className='border-l-2 border-bg-subtle/20 pl-6'>
                <p className='text-xs font-mono uppercase opacity-50 mb-4'>
                  The Tradeoff
                </p>
                <p className='text-xl opacity-90'>
                  We initially sacrificed visual freedom to stabilize core
                  patterns. Once the foundation was bulletproof, we reintroduced
                  flexibility for product-specific nuances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 7. PRODUCT GALLERY --- */}
        <div className='py-24 space-y-20'>
          <div className='mx-auto max-w-3xl px-6'>
            <h2 className='text-xs font-mono uppercase tracking-widest text-text-subtle mb-8'>
              04. Interface
            </h2>
            <h3 className='text-3xl md:text-4xl font-semibold text-text-base'>
              The end-to-end experience.
            </h3>
          </div>

          <div className='px-4 md:px-20 grid grid-cols-1 gap-12'>
            {productScreens.map(({ img, caption }, i) => (
              <div key={i} className='space-y-4'>
                <div className='relative aspect-[16/9] overflow-hidden rounded-3xl border border-border-base bg-bg-base'>
                  <Image
                    src={img}
                    alt={caption}
                    fill
                    className='object-cover'
                  />
                </div>
                <p className='text-sm font-mono text-text-subtle text-center uppercase tracking-tighter'>
                  — {caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- 8. FINAL IMPACT --- */}
        <div className='w-full mx-auto max-w-3xl py-24 px-6 border-t border-border-base'>
          <h2 className='text-xs font-mono uppercase tracking-widest text-text-subtle mb-8'>
            05. Outcome
          </h2>
          <div className='space-y-6'>
            <p className='text-2xl text-text-base leading-snug'>
              The system successfully reduced design debt and halved iteration
              time for new features. Teams are now empowered to scale into new
              regulatory markets while maintaining total clarity in complex
              financial flows.
            </p>
            <Link
              href='/'
              className='inline-block font-bold border-b-2 border-text-base pb-1 mt-8 hover:opacity-70 transition-opacity'
            >
              Let&apos;s work together
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}

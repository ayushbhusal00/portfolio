"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ReactPlayer from "react-player";
// Images
import DesignSystem from "@/public/design-system.png";
import DesignSystemModule from "@/public/Design-System-Module.png";
import DesignPattern from "@/public/patterns.png";
import DesignComponent from "@/public/components.png";
// import ImageGif from "@/public/ImageGif.gif";

// Niural designs
import BankAccount from "@/public/BankAccount.png";
import Benefits from "@/public/Benefits.png";
import Timesheets from "@/public/EmployeeDashboard.png";
import AccountPayable from "@/public/InvoiceDetail.png";
import LogIn from "@/public/LogIn.png";
import Payroll from "@/public/Payroll.png";

/* ----------------------------------------
   Helpers
---------------------------------------- */

function ScrollProgress() {
  return (
    <motion.div
      className='fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-bg-base'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ ease: "linear", duration: 0.6 }}
    />
  );
}

/* ----------------------------------------
   Data
---------------------------------------- */

/* ----------------------------------------
   Caption Maps
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
   Page
---------------------------------------- */

export default function NiuralProjectPage() {
  return (
    <>
      <main className='md:mx-16 justify-center flex bg-bg-base text-text-base border-x border-border-base'>
        <div className=' max-w-3xl py-24 px-6  flex gap-16 flex-col'>
          {/* ----------------------------------------
            HERO / OVERVIEW
        ---------------------------------------- */}

          <div className='mx-auto max-w-3xl space-y-6'>
            <p className='text-xs font-mono uppercase text-text-subtle'>
              Case Study
            </p>
            <h1 className='text-4xl font-medium leading-tight'>
              Designing a scalable payroll & finance platform for global teams
            </h1>
            <p className='text-lg text-text-subtle'>
              Niural helps distributed companies manage payroll, payments,
              benefits, and compliance in a single platform. I led product
              design across core workflows and the design system.
            </p>

            <div className='grid grid-cols-2 gap-6 pt-8 text-sm text-text-subtle'>
              <p>
                <span className='block font-medium text-text-base'>Role</span>
                Product Designer
              </p>
              <p>
                <span className='block font-medium text-text-base'>
                  Timeline
                </span>
                2022 — Present
              </p>
              <p>
                <span className='block font-medium text-text-base'>
                  Platform
                </span>
                Web (Enterprise)
              </p>
              <p>
                <span className='block font-medium text-text-base'>Focus</span>
                Payroll, Payments, Design System
              </p>
            </div>
          </div>
          <Carousel>
            <CarouselContent>
              {heroVideoUrls.map((video, index) => (
                <CarouselItem key={index}>
                  <div
                    key={index}
                    className='aspect-video overflow-hidden rounded-2xl'
                  >
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
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

          {/* ----------------------------------------
            PROBLEM
        ---------------------------------------- */}

          <div className='mx-auto max-w-3xl space-y-6'>
            <h2 className='text-2xl font-medium'>The Problem</h2>
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

          {/* ----------------------------------------
            SYSTEM & APPROACH
        ---------------------------------------- */}

          <div className='mx-auto max-w-3xl space-y-10'>
            <h2 className='text-2xl font-medium'>Designing the System</h2>

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

          {/* ----------------------------------------
            SYSTEM SCREENS (CAROUSEL)
        ---------------------------------------- */}

          <div className=''>
            <Carousel>
              <CarouselContent>
                {systemScreens.map(({ img, caption }, i) => (
                  <CarouselItem key={i}>
                    <div className='relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#e6e8eb] bg-white'>
                      <Image
                        src={img}
                        alt={caption}
                        fill
                        className='object-cover'
                      />
                      <p className='absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-mono text-text-subtle'>
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

          {/* ----------------------------------------
            DECISIONS & TRADEOFFS
        ---------------------------------------- */}

          <div className='mx-auto max-w-3xl space-y-12'>
            <h2 className='text-2xl font-medium'>Key Decisions & Tradeoffs</h2>

            <div className='space-y-8'>
              <div>
                <p className='text-xs font-mono uppercase text-neutral-500'>
                  Why a unified design system
                </p>
                <p className='mt-2 text-text-subtle'>
                  Multiple teams were shipping features in parallel. A shared
                  system reduced duplication, improved accessibility, and
                  allowed engineers to move faster with confidence.
                </p>
              </div>

              <div>
                <p className='text-xs font-mono uppercase text-neutral-500'>
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

          {/* ----------------------------------------
            PRODUCT SCREENS (CAROUSEL)
        ---------------------------------------- */}

          <div className=' space-y-10'>
            <h2 className='mx-auto max-w-3xl text-2xl font-medium'>
              Product Screens
            </h2>

            {productScreens.map(({ img, caption }, i) => (
              <div
                key={i}
                className='relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#e6e8eb] bg-white'
              >
                <Image src={img} alt={caption} fill className='object-cover' />
                <p className='absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-mono text-neutral-600'>
                  {caption}
                </p>
              </div>
            ))}
          </div>

          {/* ----------------------------------------
            IMPACT
        ---------------------------------------- */}

          <div className='mx-auto max-w-3xl space-y-6'>
            <h2 className='text-2xl font-medium'>Impact</h2>
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
        </div>
      </main>
    </>
  );
}

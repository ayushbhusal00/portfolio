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

// Images
import DesignSystem from "@/public/design-system.png";
import DesignSystemModule from "@/public/Design-System-Module.png";
import DesignPattern from "@/public/patterns.png";
import DesignComponent from "@/public/components.png";
// import ImageGif from "@/public/ImageGif.gif";

// Niural designs
import Integrations from "@/public/QuickbooksIntegration.png";
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
      className='fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-neutral-900'
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
    img: Integrations,
    caption:
      "QuickBooks integration enabling seamless data sync with external systems",
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

/* ----------------------------------------
   Page
---------------------------------------- */

export default function NiuralProjectPage() {
  return (
    <>
      <ScrollProgress />

      <main className='mx-auto max-w-[72rem] bg-[#fafafa] text-neutral-900'>
        {/* ----------------------------------------
            HERO / OVERVIEW
        ---------------------------------------- */}
        <section className='border-b border-neutral-200 px-6 py-32'>
          <div className='mx-auto max-w-3xl space-y-6'>
            <p className='text-xs font-mono uppercase text-neutral-500'>
              Case Study
            </p>
            <h1 className='text-4xl font-medium leading-tight'>
              Designing a scalable payroll & finance platform for global teams
            </h1>
            <p className='text-lg text-neutral-600'>
              Niural helps distributed companies manage payroll, payments,
              benefits, and compliance in a single platform. I led product
              design across core workflows and the design system.
            </p>

            <div className='grid grid-cols-2 gap-6 pt-8 text-sm text-neutral-600'>
              <p>
                <span className='block font-medium text-neutral-900'>Role</span>
                Product Designer
              </p>
              <p>
                <span className='block font-medium text-neutral-900'>
                  Timeline
                </span>
                2022 — Present
              </p>
              <p>
                <span className='block font-medium text-neutral-900'>
                  Platform
                </span>
                Web (Enterprise)
              </p>
              <p>
                <span className='block font-medium text-neutral-900'>
                  Focus
                </span>
                Payroll, Payments, Design System
              </p>
            </div>
          </div>

          <div className='mx-auto mt-20 max-w-5xl'>
            <div className='relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#e6e8eb] bg-white'>
              <Image
                src={DesignSystem}
                alt='Design system overview'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </section>

        {/* ----------------------------------------
            PROBLEM
        ---------------------------------------- */}
        <section className='border-b border-neutral-200 px-6 py-24'>
          <div className='mx-auto max-w-3xl space-y-6'>
            <h2 className='text-2xl font-medium'>The Problem</h2>
            <p className='text-neutral-700'>
              Niural’s product surface expanded rapidly as new financial
              workflows were introduced. Payroll, contractor payments, and
              benefits shared similar concepts but evolved independently,
              creating inconsistencies and cognitive load.
            </p>
            <p className='text-neutral-700'>
              The challenge was to simplify complex financial operations while
              enabling teams to scale globally — without slowing down product
              development.
            </p>
          </div>
        </section>

        {/* ----------------------------------------
            SYSTEM & APPROACH
        ---------------------------------------- */}
        <section className='px-6 pt-24'>
          <div className='mx-auto max-w-3xl space-y-10'>
            <h2 className='text-2xl font-medium'>Designing the System</h2>

            <p className='text-neutral-700'>
              I focused on building a shared foundation across products:
              reusable patterns, consistent data structures, and predictable
              interaction models — optimized for enterprise workflows.
            </p>

            <ul className='space-y-4 text-neutral-700'>
              <li>• Unified layout and navigation patterns</li>
              <li>• Standardized tables, forms, and empty states</li>
              <li>• Clear hierarchy for dense financial data</li>
              <li>• Token-driven design system for fast iteration</li>
            </ul>
          </div>
        </section>

        {/* ----------------------------------------
            SYSTEM SCREENS (CAROUSEL)
        ---------------------------------------- */}
        <section className='border-b border-neutral-200 px-6 py-24'>
          <div className='mx-auto max-w-5xl'>
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
                      <p className='absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-mono text-neutral-600'>
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
        </section>

        {/* ----------------------------------------
            DECISIONS & TRADEOFFS
        ---------------------------------------- */}
        <section className='border-b border-neutral-200 px-6 py-24'>
          <div className='mx-auto max-w-3xl space-y-12'>
            <h2 className='text-2xl font-medium'>Key Decisions & Tradeoffs</h2>

            <div className='space-y-8'>
              <div>
                <p className='text-xs font-mono uppercase text-neutral-500'>
                  Why a unified design system
                </p>
                <p className='mt-2 text-neutral-700'>
                  Multiple teams were shipping features in parallel. A shared
                  system reduced duplication, improved accessibility, and
                  allowed engineers to move faster with confidence.
                </p>
              </div>

              <div>
                <p className='text-xs font-mono uppercase text-neutral-500'>
                  Tradeoff: flexibility vs consistency
                </p>
                <p className='mt-2 text-neutral-700'>
                  Early constraints limited visual freedom but ensured clarity
                  and predictability. Flexibility was reintroduced once core
                  patterns stabilized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------
            PRODUCT SCREENS (CAROUSEL)
        ---------------------------------------- */}
        <section className='border-b border-neutral-200 px-6 py-24'>
          <div className='mx-auto max-w-5xl space-y-10'>
            <h2 className='mx-auto max-w-3xl text-2xl font-medium'>
              Product Screens
            </h2>

            <Carousel>
              <CarouselContent>
                {productScreens.map(({ img, caption }, i) => (
                  <CarouselItem key={i}>
                    <div className='relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#e6e8eb] bg-white'>
                      <Image
                        src={img}
                        alt={caption}
                        fill
                        className='object-cover'
                      />
                      <p className='absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-mono text-neutral-600'>
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
        </section>

        {/* ----------------------------------------
            IMPACT
        ---------------------------------------- */}
        <section className='px-6 py-32'>
          <div className='mx-auto max-w-3xl space-y-6'>
            <h2 className='text-2xl font-medium'>Impact</h2>
            <p className='text-neutral-700'>
              The system improved consistency across products, reduced design
              debt, and enabled faster feature delivery. Teams scaled globally
              while maintaining clarity in complex financial flows.
            </p>
            <p className='text-neutral-700'>
              This foundation continues to support new products, markets, and
              regulatory requirements.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

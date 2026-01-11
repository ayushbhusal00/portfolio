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
import ImageGif from "@/public/ImageGif.gif";

/* ---------------------------------- DATA --------------------------------- */

const achievements = [
  {
    label: "Business Impact",
    value: "384% ROI",
    description:
      "Design-led workflow improvements reduced operational friction and increased enterprise adoption.",
  },
  {
    label: "Company Growth",
    value: "$31M+",
    description:
      "Contributed as a founding designer through system design, execution, and product strategy during Series A growth.",
  },
  {
    label: "Efficiency at Scale",
    value: "92,000+ hrs",
    description:
      "Automated payroll, approvals, and compliance flows for finance and operations teams.",
  },
  {
    label: "Design Leadership",
    value: "< 6 months",
    description:
      "Built scalable foundations and mentored designers to independently ship complex initiatives.",
  },
];

/* -------------------------------- COMPONENT ------------------------------- */

export default function NiuralProjectPage() {
  return (
    <main className='bg-[#fafafa] text-neutral-900 min-h-screen mx-auto max-w-7xl'>
      {/* ------------------------------- HERO -------------------------------- */}
      <section className='border-b border-neutral-200 w-full py-28 px-5 sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-7xl space-y-14'>
          <div className='max-w-3xl'>
            <span className='text-sm font-medium text-neutral-500'>
              Case Study · Enterprise Fintech
            </span>

            <h1 className='mt-5 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight'>
              Designing the Foundation of Niural’s
              <br className='hidden sm:block' />
              Global Payroll Platform
            </h1>

            <p className='mt-6 text-lg md:text-xl leading-relaxed text-neutral-600'>
              As a{" "}
              <strong className='text-neutral-900 font-semibold'>
                founding product designer
              </strong>
              , I led the design of Niural’s core payroll and payments
              platform—shaping systems, workflows, and teams that scaled the
              product from early traction to a{" "}
              <strong className='text-neutral-900 font-semibold'>
                $31M+ Series A business
              </strong>
              .
            </p>

            {/* Role Snapshot */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
              <div>
                <p className='text-sm text-neutral-500'>Role</p>
                <p className='font-medium'>Founding Product Designer</p>
              </div>
              <div>
                <p className='text-sm text-neutral-500'>Scope</p>
                <p className='font-medium'>Payroll · Payments · Systems · AI</p>
              </div>
              <div>
                <p className='text-sm text-neutral-500'>Stage</p>
                <p className='font-medium'>Seed → Series A</p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <Carousel>
            <CarouselContent>
              {[
                DesignSystem,
                DesignSystemModule,
                DesignPattern,
                DesignComponent,
              ].map((img, i) => (
                <CarouselItem key={i}>
                  <div className='relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
                    <Image
                      src={img}
                      alt={`Niural interface ${i + 1}`}
                      fill
                      className='object-cover'
                      priority={i === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='flex justify-center gap-4 mt-6'>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* --------------------------- SYSTEM OVERVIEW -------------------------- */}
      <section className='border-b border-neutral-200 py-28 px-5 sm:px-8 lg:px-12'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className='max-w-3xl space-y-6'
        >
          <h2 className='text-[28px] font-medium'>Designing at Scale</h2>

          <p className='text-[16px] leading-[1.75] text-zinc-600'>
            I designed and operationalized Niural’s design system to support
            multiple product lines—including payroll, global payments, benefits,
            and internal tooling. By defining shared patterns, components, and
            documentation, the team was able to ship faster while maintaining
            consistency across complex, regulated workflows.
          </p>
        </motion.div>

        <div className='mt-14 w-full aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
          <Image
            src={ImageGif}
            alt='System overview'
            className='object-cover w-full'
            priority
          />
        </div>
      </section>

      {/* ---------------------------- ACHIEVEMENTS ---------------------------- */}
      <section className='py-28 px-5 sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-7xl'>
          <h2 className='text-3xl font-medium tracking-tight text-center'>
            Outcomes & Impact
          </h2>

          <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {achievements.map((item) => (
              <div
                key={item.label}
                className='rounded-xl border border-neutral-200 p-8 bg-white'
              >
                <p className='text-sm uppercase tracking-wide text-neutral-500'>
                  {item.label}
                </p>
                <p className='mt-4 text-5xl font-semibold'>{item.value}</p>
                <p className='mt-4 text-base text-neutral-600'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

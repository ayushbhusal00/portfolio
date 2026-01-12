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

//niural designs
import Integrations from "@/public/QuickbooksIntegration.png";
import BankAccount from "@/public/BankAccount.png";
import Benefits from "@/public/Benefits.png";
import Timesheets from "@/public/EmployeeDashboard.png";
import AccountPayable from "@/public/InvoiceDetail.png";
import LogIn from "@/public/LogIn.png";
import Payroll from "@/public/Payroll.png";

const capabilities = [
  {
    title: "SaaS Platforms",
    description: "Scalable SaaS products with complex user flows.",
    icon: SaaSIcon,
  },
  {
    title: "Design Systems",
    description: "Reusable components and tokens for fast-moving teams.",
    icon: DesignSystemIcon,
  },
  {
    title: "B2B Products",
    description: "Enterprise-focused workflows and dashboards.",
    icon: B2BIcon,
  },
  {
    title: "Fintech & Payments",
    description: "Financial tools, payroll, invoicing, and compliance UX.",
    icon: PaymentsIcon,
  },
  {
    title: "Web Applications",
    description: "High-performance web apps built for scale.",
    icon: WebAppIcon,
  },
  {
    title: "Mobile Products",
    description: "iOS & Android experiences with native patterns.",
    icon: MobileIcon,
  },
  {
    title: "Ecommerce",
    description: "Conversion-optimized commerce experiences.",
    icon: EcommerceIcon,
  },
  {
    title: "Analytics Dashboards",
    description: "Data-heavy interfaces with clarity and hierarchy.",
    icon: AnalyticsIcon,
  },
  {
    title: "Prototyping",
    description: "High-fidelity prototypes for validation and sales.",
    icon: PrototypeIcon,
  },
  {
    title: "Brand & Identity",
    description: "Visual systems that scale with the product.",
    icon: BrandIcon,
  },
  {
    title: "Developer Handoff",
    description: "Specs, tokens, and assets engineers love.",
    icon: HandoffIcon,
  },
  {
    title: "Motion & Interaction",
    description: "Delightful micro-interactions and transitions.",
    icon: MotionIcon,
  },
];

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
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-1 pt-16'>
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
      <section className='relative mx-auto max-w-7xl px-6 py-24'>
        {/* Header */}
        <div className='mb-16 max-w-2xl'>
          <p className='mb-3 text-sm font-medium uppercase tracking-wider text-[#313131]'>
            What I Build
          </p>
          <h2 className='text-4xl font-semibold text-[#52525B]'>
            Digital products across industries
          </h2>
          <p className='mt-4 text-neutral-400'>
            From early-stage startups to Series A companies, I designed systems
            and products that scale with users and businesses.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 gap-2 pt-8 sm:grid-cols-3 lg:grid-cols-4 mb-18'>
          {capabilities.map((item, index) => (
            <div
              key={index}
              className='group p-1 rounded-sm transition hover:border-neutral-100 hover:bg-neutral-100'
            >
              <div className='mb-4 flex h-10 w-10 items-center justify-center '>
                <item.icon />
              </div>
              <h3 className='text-sm font-medium text-[#313131]'>
                {item.title}
              </h3>
              <p className='mt-1 text-xs text-[#52525B]'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='relative mx-auto max-w-7xl px-10 py-24'>
        {/* Carousel */}
        <Carousel>
          <CarouselContent>
            {[
              LogIn,
              Timesheets,
              Payroll,
              BankAccount,
              Benefits,
              AccountPayable,
              Integrations,
            ].map((img, i) => (
              <CarouselItem key={i}>
                <div className=' relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
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
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Medusa-style Icons                             */
/* -------------------------------------------------------------------------- */

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 20 20'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      className='text-[#52525B] group-hover:text-[#313131] transition'
    >
      {children}
    </svg>
  );
}

function SaaSIcon() {
  return (
    <IconWrapper>
      <rect x='0' y='2' width='14' height='10' rx='2' />
      <path d='M7 8h10M7 12h6' />
    </IconWrapper>
  );
}

function DesignSystemIcon() {
  return (
    <IconWrapper>
      <rect x='4' y='4' width='6' height='6' rx='1' />
      <rect x='14' y='4' width='6' height='6' rx='1' />
      <rect x='4' y='14' width='6' height='6' rx='1' />
      <rect x='14' y='14' width='6' height='6' rx='1' />
    </IconWrapper>
  );
}

function B2BIcon() {
  return (
    <IconWrapper>
      <path d='M4 7h16M4 12h16M4 17h16' />
    </IconWrapper>
  );
}

function PaymentsIcon() {
  return (
    <IconWrapper>
      <rect x='0' y='2' width='14' height='10' rx='2' />
      <path d='M3 10h18' />
    </IconWrapper>
  );
}

function WebAppIcon() {
  return (
    <IconWrapper>
      <circle cx='12' cy='12' r='9' />
      <path d='M3 12h18' />
    </IconWrapper>
  );
}

function MobileIcon() {
  return (
    <IconWrapper>
      <rect x='7' y='3' width='10' height='18' rx='2' />
      <path d='M11 17h2' />
    </IconWrapper>
  );
}

function EcommerceIcon() {
  return (
    <IconWrapper>
      <path d='M6 6h15l-1.5 9h-12z' />
      <circle cx='9' cy='20' r='1' />
      <circle cx='18' cy='20' r='1' />
    </IconWrapper>
  );
}

function AnalyticsIcon() {
  return (
    <IconWrapper>
      <path d='M4 18V10M10 18V6M16 18v-4' />
    </IconWrapper>
  );
}

function PrototypeIcon() {
  return (
    <IconWrapper>
      <rect x='3' y='3' width='18' height='18' rx='2' />
      <path d='M9 9h6v6H9z' />
    </IconWrapper>
  );
}

function BrandIcon() {
  return (
    <IconWrapper>
      <path d='M12 3l7 4v10l-7 4-7-4V7z' />
    </IconWrapper>
  );
}

function HandoffIcon() {
  return (
    <IconWrapper>
      <path d='M4 12h8l-2-2M12 12l-2 2' />
      <path d='M20 12h-4' />
    </IconWrapper>
  );
}

function MotionIcon() {
  return (
    <IconWrapper>
      <path d='M3 12c3-6 6 6 9 0s6 6 9 0' />
    </IconWrapper>
  );
}

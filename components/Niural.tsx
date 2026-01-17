"use client";

import { useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import ReactPlayer from "react-player";
import { Icon } from "@phosphor-icons/react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type HeroTab = {
  id: string;
  label: string;
  image: StaticImageData | string;
  icon: Icon;
};

type Props = {
  heroTabs?: HeroTab[];
  workSections: {
    label: string;
    icon: Icon;
    featured?: boolean;
    heroImage?: StaticImageData | string;
  }[];
  achievements: {
    label: string;
    value: string;
    description: string;
  }[];
};

/* -------------------------------------------------------------------------- */
/*                              Capabilities                                  */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export default function Niural({
  heroTabs = [],
  workSections,
  achievements,
}: Props) {
  const [activeTab, setActiveTab] = useState<HeroTab | null>(
    heroTabs[0] ?? null
  );

  // Derived state (no effects, no cascading renders)
  const safeActiveTab = useMemo(() => {
    if (!heroTabs.length) return null;

    const exists = activeTab && heroTabs.some((tab) => tab.id === activeTab.id);

    return exists ? activeTab : heroTabs[0];
  }, [activeTab, heroTabs]);

  if (!heroTabs.length) {
    return (
      <div className='p-8 text-center text-red-500'>
        No hero tabs available for this case study.
      </div>
    );
  }

  return (
    <main className='bg-[#fafafa] text-neutral-900'>
      {/* ---------------- HERO ---------------- */}
      <section>
        <div className='mx-auto max-w-7xl pb-16'>
          <div className='flex flex-col gap-12'>
            <div>
              <span className='text-sm text-neutral-500'>Case Study</span>

              <h1 className='mt-4 text-5xl font-medium tracking-tight'>
                {"Designing Niural's"} <br /> Global Payroll Platform
              </h1>

              <p className='mt-6 text-lg text-neutral-600 max-w-xl'>
                As a founding designer, I helped shape Niural into a scalable
                enterprise platform — contributing to its growth into a{" "}
                <strong className='font-medium text-neutral-900'>
                  $31M+ Series A company
                </strong>
                .
              </p>

              {/* Tabs */}
              {safeActiveTab && (
                <div className='mt-10 flex flex-wrap gap-2'>
                  {heroTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = tab.id === safeActiveTab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition
                          ${
                            isActive
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
                          }`}
                      >
                        <Icon size={16} />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Image */}
            {safeActiveTab && (
              <div className='relative aspect-[16/10] w-full rounded-xl border bg-white'>
                <Image
                  src={safeActiveTab.image}
                  alt={safeActiveTab.label}
                  className='rounded-xl object-contain'
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- WORK SECTIONS ---------------- */}
      <section>
        <div className='mx-auto max-w-7xl py-16'>
          <h2 className='text-3xl font-medium tracking-tight'>
            Features I led
          </h2>

          <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center'>
            {workSections.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`group flex flex-col items-center gap-3 border p-6 text-sm transition
                    ${
                      item.featured
                        ? "bg-white"
                        : "text-neutral-500 hover:bg-white"
                    }`}
                >
                  <Icon
                    size={22}
                    className='text-neutral-400 group-hover:text-neutral-900'
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- VIDEO ---------------- */}
      <section>
        <div className='mx-auto max-w-7xl py-16'>
          <ReactPlayer
            src='https://www.youtube.com/watch?v=DA04eSOce1s'
            width='100%'
            height='480px'
            controls
            className='rounded-xl overflow-hidden'
          />
        </div>
      </section>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <section>
        <div className='mx-auto max-w-7xl py-16'>
          <h2 className='text-3xl font-medium tracking-tight'>Achievements</h2>

          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {achievements.map((item) => (
              <div
                key={item.label}
                className='rounded-lg border p-6 bg-[#fafafa]'
              >
                <p className='text-xs uppercase tracking-wide text-neutral-500'>
                  {item.label}
                </p>
                <p className='mt-4 text-4xl font-medium tracking-tight'>
                  {item.value}
                </p>
                <p className='mt-4 text-sm text-neutral-600'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES ---------------- */}
      <section className='mx-auto max-w-7xl px-6 py-24'>
        <div className='mb-16 max-w-2xl'>
          <p className='mb-3 text-sm uppercase tracking-wider text-neutral-400'>
            What I Build
          </p>
          <h2 className='text-4xl font-semibold text-white'>
            Digital products across industries
          </h2>
          <p className='mt-4 text-neutral-400'>
            From early-stage startups to Series A companies, I design systems
            and products that scale with users and businesses.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {capabilities.map((item, index) => (
            <div
              key={index}
              className='group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-700 hover:bg-neutral-900'
            >
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950'>
                <item.icon />
              </div>
              <h3 className='text-base font-medium text-white'>{item.title}</h3>
              <p className='mt-2 text-sm text-neutral-400'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Icons                                   */
/* -------------------------------------------------------------------------- */

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      className='text-neutral-300 transition group-hover:text-white'
    >
      {children}
    </svg>
  );
}

function SaaSIcon() {
  return (
    <IconWrapper>
      <rect x='3' y='4' width='18' height='14' rx='2' />
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
      <rect x='3' y='6' width='18' height='12' rx='2' />
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

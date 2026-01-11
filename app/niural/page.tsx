"use client";

import Image from "next/image";
import {
  CreditCard,
  Brain,
  Clock,
  Receipt,
  Users,
  Buildings,
  ShieldCheck,
  ChartLineUp,
  CurrencyDollar,
  ArrowsClockwise,
  PlugChargingIcon,
  HeartIcon,
} from "@phosphor-icons/react";

import DesignSystem from "@/public/design-system.png";
import Integrations from "@/public/QuickbooksIntegration.png";
import Benefits from "@/public/Benefits.png";
import Payroll from "@/public/Payroll.png";
import PaymentMethod from "@/public/BankAccount.png";

/* ---------------------------------------
   HERO TABS (STATIC DATA)
--------------------------------------- */
const heroTabs = [
  {
    id: "design-system",
    label: "Design System",
    image: DesignSystem,
    icon: CreditCard,
  },
  {
    id: "payroll",
    label: "Payroll",
    image: Payroll,
    icon: Clock,
  },
  {
    id: "payment-method",
    label: "Payment Method",
    image: PaymentMethod,
    icon: CurrencyDollar,
  },
  {
    id: "integrations",
    label: "Integrations",
    image: Integrations,
    icon: PlugChargingIcon,
  },
  {
    id: "benefits",
    label: "Benefits",
    image: Benefits,
    icon: HeartIcon,
  },
];

/* ---------------------------------------
   WORK SECTIONS GRID
--------------------------------------- */
const workSections = [
  { label: "Payroll", icon: CreditCard, featured: true },
  { label: "Global Payments", icon: CurrencyDollar, featured: true },
  { label: "Projects", icon: ChartLineUp, featured: true },
  { label: "AI", icon: Brain, featured: true },

  { label: "Timesheets", icon: Clock },
  { label: "Time Tracking", icon: Clock },
  { label: "Expense Management", icon: Receipt },
  { label: "Accounts Payable", icon: Receipt },
  { label: "Accounts Receivable", icon: Receipt },
  { label: "Invoices & Bills", icon: Receipt },

  { label: "Contractor Management", icon: Users },
  { label: "EOR", icon: Buildings },
  { label: "US Benefits", icon: ShieldCheck },
  { label: "Global Benefits", icon: ShieldCheck },
  { label: "Approval Policies", icon: ShieldCheck },

  { label: "Reporting", icon: ChartLineUp },
  { label: "Organization", icon: Buildings },
  { label: "Integrations", icon: ArrowsClockwise },
];

/* ---------------------------------------
   ACHIEVEMENTS
--------------------------------------- */
const achievements = [
  {
    label: "ROI",
    value: "384%",
    description:
      "Design-led product improvements helped unlock significant operational efficiency.",
  },
  {
    label: "Series A Valuation",
    value: "$31M+",
    description:
      "Contributed as a founding designer during Niural’s growth to Series A funding.",
  },
  {
    label: "Hours Saved",
    value: "92,000+",
    description:
      "Reduced operational overhead through payroll, approvals, and automation.",
  },
  {
    label: "Team Impact",
    value: "< 6 mo",
    description:
      "Built and led a design team that shipped multiple zero-to-one initiatives.",
  },
];

/* ---------------------------------------
   PAGE
--------------------------------------- */
export default function NiuralProjectPage() {
  const heroImage = heroTabs[0]; // default hero visual

  return (
    <main className='bg-[#fafafa] text-neutral-900'>
      {/* -------------------------------- */}
      {/* HERO */}
      {/* -------------------------------- */}
      <section className='border-b border-neutral-200'>
        <div className='mx-auto max-w-7xl px-6 py-28'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
            {/* Text */}
            <div>
              <span className='text-sm text-neutral-500'>Case Study</span>

              <h1 className='mt-4 text-5xl font-medium tracking-tight'>
                Designing Niural’s <br /> Global Payroll Platform
              </h1>

              <p className='mt-6 text-lg text-neutral-600 max-w-xl'>
                As a founding designer, I helped shape Niural into a scalable
                enterprise platform — contributing to its growth into a{" "}
                <strong className='font-medium text-neutral-900'>
                  $31M+ Series A company
                </strong>
                .
              </p>
            </div>

            {/* Image */}
            <div className='relative aspect-[16/10] rounded-xl border border-neutral-200 bg-white'>
              <Image
                src={heroImage.image}
                alt={heroImage.label}
                fill
                className='object-contain p-6'
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* WORK SECTIONS */}
      {/* -------------------------------- */}
      <section className='border-t border-neutral-200 bg-[#fafafa]'>
        <div className='mx-auto max-w-7xl px-6 py-24'>
          <h2 className='text-3xl font-medium tracking-tight'>Work sections</h2>

          <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {workSections.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center justify-center gap-3 border border-neutral-200 p-6 text-center text-sm ${
                    item.featured
                      ? "bg-white text-neutral-900"
                      : "text-neutral-500"
                  }`}
                >
                  <Icon
                    size={22}
                    className={
                      item.featured ? "text-neutral-900" : "text-neutral-400"
                    }
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* ACHIEVEMENTS */}
      {/* -------------------------------- */}
      <section className='border-t border-neutral-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-24'>
          <h2 className='text-3xl font-medium tracking-tight'>Achievements</h2>

          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {achievements.map((item) => (
              <div
                key={item.label}
                className='rounded-lg border border-neutral-200 p-6'
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
    </main>
  );
}

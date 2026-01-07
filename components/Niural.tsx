"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import ReactPlayer from "react-player";
import { Icon } from "@phosphor-icons/react";

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

export default function Niural(props: Props) {
  const { heroTabs = [], workSections, achievements } = props;

  console.log("workSections", workSections);

  // Always call hooks unconditionally at the top level
  const hasHeroTabs = Array.isArray(heroTabs) && heroTabs.length > 0;
  const [activeTab, setActiveTab] = useState<HeroTab | null>(
    hasHeroTabs ? heroTabs[0] : null
  );

  // Update active tab when heroTabs change
  useEffect(() => {
    if (hasHeroTabs) {
      const currentTabExists =
        activeTab && heroTabs.find((tab) => tab.id === activeTab.id);
      if (!currentTabExists) {
        setActiveTab(heroTabs[0]);
      }
    }
  }, [heroTabs, hasHeroTabs, activeTab]);

  if (!hasHeroTabs) {
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
          <div className='flex flex-col gap-12 items-left'>
            {/* Text */}
            <div>
              <span className='text-sm text-neutral-500'>Case Study</span>

              <h1 className='mt-4 text-5xl font-medium tracking-tight'>
                Designing Niural's <br /> Global Payroll Platform
              </h1>

              <p className='mt-6 text-lg text-neutral-600 max-w-xl'>
                As a founding designer, I helped shape Niural into a scalable
                enterprise platform — contributing to its growth into a{" "}
                <strong className='font-medium text-neutral-900'>
                  $31M+ Series A company
                </strong>
                .
              </p>

              {/* Pills */}
              {activeTab && (
                <div className='mt-10 flex flex-wrap gap-2'>
                  {heroTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = tab.id === activeTab.id;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-2 rounded-full py-2 px-2 text-sm border transition
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
            {activeTab && (
              <div className='relative aspect-[16/10] w-full max-w-7xl rounded-xl border bg-white'>
                <Image
                  src={activeTab.image}
                  alt={activeTab.label}
                  className='object-contain overflow-clip rounded-xl'
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
                  className={`group flex flex-col items-center justify-center gap-3 border px-2 p-6 text-sm transition
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
      <section></section>

      {/* ---------------- ACHIEVEMENTS ---------------- */}
      <section>
        <div className='mx-auto max-w-7xl py-16'>
          <h2 className='text-3xl font-medium tracking-tight'>Achievements</h2>
          <div className='mx-auto max-w-7xl py-16'>
            <ReactPlayer
              src='https://www.youtube.com/watch?v=DA04eSOce1s'
              width='100%'
              height='480px'
              controls
              className='rounded-xl overflow-hidden'
            />
          </div>

          <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-2 bg-neutral-200 rounded-lg'>
            {achievements.map((item) => (
              <div
                key={item.label}
                className='rounded-lg border border-neutral-200 p-6 bg-[#fafafa]'
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

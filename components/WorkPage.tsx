"use client";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import Image from "next/image";
import GradientBlue from "@/public/gradient-background.jpg";

//Experience
import NiuralExperience from "@/public/niural-experience.png";
import IdaExoerience from "@/public/ida-experience.png";
import VesoerExoerience from "@/public/vesper-experiences.png";
import PrimeExperience from "@/public/prime-experience.png";
import OhoExperience from "@/public/oho-experience.png";

export const experiencesData = [
  {
    title: "Senior Product Designer",
    location: "Niural Inc.",
    description:
      "Designed and launched user-centric web interfaces for Niural App and Landing Page, integrated Web3 and fiat payments, maintained a design system, optimized performance, integrated Zendesk, and conducted user testing.",
    icon: FaReact,
    date: "Nov 2022 - Present",
    rightImage: NiuralExperience,
  },
  {
    title: "Web Designer",
    location: "Infinity Digital Agency",
    description:
      "Developed user-centered web interfaces, delivered feature plans, and implemented a scalable design system.",
    icon: FaReact,
    date: "Oct 2021 – Mar 2022",
    rightImage: IdaExoerience,
  },
  {
    title: "Web Designer",
    location: "The Vesper House Pvt. Ltd.",
    description:
      "Designed a WordPress e-commerce platform, integrated payment APIs, and boosted sales by 70%.",
    icon: LuGraduationCap,
    date: "Jul 2020 - Apr 2021",
    rightImage: VesoerExoerience,
  },
  {
    title: "Multimedia Designer",
    location: "Prime International Pvt. Ltd.",
    description:
      "Built responsive websites, created 3D product mockups, and multimedia assets.",
    icon: FaReact,
    date: "Apr 2019 – Jan 2020",
    rightImage: PrimeExperience,
  },
  {
    title: "Associate Web Designer",
    location: "OHO Digital Ventures Pvt. Ltd.",
    description: "Designed UX flows, frontend code, and branding materials.",
    icon: CgWorkAlt,
    date: "Apr 2018 – Jan 2019",
    rightImage: OhoExperience,
  },
] as const;

const rotations = [
  "rotate-[4deg]",
  "rotate-[2deg]",
  "rotate-[-2deg]",
  "rotate-[-4deg]",
  "rotate-[1deg]",
];

export default function WorkPage() {
  return (
    <section className='relative min-h-[300vh] w-full bg-linear-to-t from-[#FAF6ED] to-[#fafafa]'>
      <div className='mx-auto max-w-6xl px-6 pt-32'>
        {experiencesData.map((exp, index) => {
          const Icon = exp.icon;

          return (
            <div
              key={index}
              className='sticky'
              style={{
                top: `${6 + index * 2}rem`,
                zIndex: 10 + index * 10,
              }}
            >
              {/* CARD */}
              <div
                className={`
                  relative h-[420px] w-full rounded-lg
                  bg-white
                  shadow-[0_0_16px_8px_rgba(120,120,120,0.28)]
                  ${rotations[index % rotations.length]}
                  stamp-edge
                  mb-32
                `}
              >
                {/* CONTENT */}
                <div className='relative h-full w-full overflow-hidden'>
                  <div className='flex h-full'>
                    {/* LEFT */}
                    <div className='w-[40%] p-8 flex flex-col justify-between'>
                      <span className='text-xs font-mono opacity-60'>
                        {String(index + 1).padStart(2, "0")} / {exp.location} /{" "}
                        {exp.title}
                      </span>

                      <div className='space-y-3'>
                        <h2 className='font-serif text-[30px] leading-[130%]'>
                          {exp.title}
                        </h2>
                        <p className='text-xs opacity-80 leading-snug'>
                          {exp.description}
                        </p>
                        <span className='text-[11px] uppercase tracking-wide opacity-50'>
                          {exp.date}
                        </span>
                      </div>

                      {Icon && <Icon className='text-xl opacity-30 self-end' />}
                    </div>

                    {/* RIGHT */}
                    <div className='relative w-[60%] bg-gradient-to-br from-neutral-100 to-neutral-200'>
                      {exp.rightImage ? (
                        <Image src={exp.rightImage} alt={exp.title} fill />
                      ) : (
                        <Image src={GradientBlue} alt={"gradient"} fill />
                      )}
                    </div>
                  </div>
                </div>

                {/* Grain */}
                <div
                  className='pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-multiply'
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 125 125' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                    backgroundSize: "125px 125px",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

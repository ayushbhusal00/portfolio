"use client";

import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import Image from "next/image";

// Images
import GradientBlue from "@/public/gradient-background.jpg";
import NiuralExperience from "@/public/niural-experience.png";
import IdaExperience from "@/public/ida-experience.png";
import VesperExperience from "@/public/vesper-experiences.png";
import PrimeExperience from "@/public/prime-experience.png";
import OhoExperience from "@/public/oho-experience.png";

export const experiencesData = [
  {
    title: "Senior Product Designer",
    location: "Niural Inc.",
    description:
      "Designed and launched user-centric payroll & payments experiences, built scalable systems, and led design foundations through Series A.",
    icon: FaReact,
    date: "Nov 2022 – Present",
    rightImage: NiuralExperience,
  },
  {
    title: "Web Designer",
    location: "Infinity Digital Agency",
    description:
      "Designed conversion-focused web interfaces and scalable design systems.",
    icon: FaReact,
    date: "Oct 2021 – Mar 2022",
    rightImage: IdaExperience,
  },
  {
    title: "Web Designer",
    location: "The Vesper House",
    description:
      "Built a WordPress e-commerce platform and boosted sales by 70%.",
    icon: LuGraduationCap,
    date: "Jul 2020 – Apr 2021",
    rightImage: VesperExperience,
  },
  {
    title: "Multimedia Designer",
    location: "Prime International",
    description:
      "Created responsive websites, 3D mockups, and multimedia assets.",
    icon: FaReact,
    date: "Apr 2019 – Jan 2020",
    rightImage: PrimeExperience,
  },
  {
    title: "Associate Web Designer",
    location: "OHO Digital Ventures",
    description: "Designed UX flows, frontend UI, and branding materials.",
    icon: CgWorkAlt,
    date: "Apr 2018 – Jan 2019",
    rightImage: OhoExperience,
  },
] as const;

const rotations = [
  "rotate-[3deg]",
  "rotate-[1deg]",
  "rotate-[-2deg]",
  "rotate-[-4deg]",
  "rotate-[2deg]",
];

export default function WorkPage() {
  return (
    <section className='relative min-h-[350vh] w-full bg-linear-to-t from-[#FAF6ED] to-[#fafafa]'>
      <div className='px-6 pt-32'>
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
                  border border-grey-900
                  relative h-[420px] w-full
                  bg-white
                  rounded-lg
                  
                  shadow-[0_12px_40px_rgba(0,0,0,0.18)]
                  overflow-hidden
                  stamp-edge
                  ${rotations[index % rotations.length]}
                  mb-32
                `}
              >
                {/* CONTENT */}
                <div className='relative z-10 flex flex-col md:flex-row h-full'>
                  {/* LEFT */}
                  <div className='w-full md:w-[40%] p-8 flex flex-col justify-between'>
                    <span className='text-xs font-mono opacity-60'>
                      {String(index + 1).padStart(2, "0")} / {exp.location}
                    </span>

                    <div className='space-y-3'>
                      <h2 className='font-serif text-[30px] leading-[1.3]'>
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
                  <div className='relative w-full md:w-[60%] sm:min-h-[320px] md:h-auto bg-gradient-to-br from-neutral-100 to-neutral-200'>
                    <Image
                      src={exp.rightImage ?? GradientBlue}
                      alt={exp.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

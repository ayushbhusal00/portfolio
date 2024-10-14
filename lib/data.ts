import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NiuralWebsite from "@/public/NiuralWebsite.png";
import VesperFineWines from "@/public/VesperFineWines.png";
import WePlay from "@/public/WePlay.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Story",
    hash: "#story",
  },
  {
    name: "Works",
    hash: "#works",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Advanced Diploma in Animation and Visual Effects",
  //   location: "Nepal, Maya Animation Academy",
  //   description: "Professional Training: Passed with Grade A",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "Aug 2016 - Sep 2017",
  // },
  // {
  //   title: "B.Sc. with Honors in Computing (Software Engineering)",
  //   location: "Nepal, NAAMI College affiliated with University of Northampton",
  //   description: "Academic Honors: Passed with First Class Honors (A)",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "Sep 2016 - Jul 2019",
  // },

  {
    title: "Associate Web Designer",
    location: "OHO Digital Ventures Pvt. Ltd.",
    description:
      "Designed web assets, illustrations, UX flows, frontend code, led 2 web design projects, contributed to user research, and created branding/video assets for promotions.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2018 – Jan 2019 | 10 months",
  },
  {
    title: "Multimedia Designer",
    location: "Prime International Pvt. Ltd.",
    description:
      "Developed a responsive portfolio website using PHP, HTML, CSS, created detailed product mockups with 3DS MAX, contributed to key design decisions, and designed multimedia assets to enhance product design and brand identity.",
    icon: React.createElement(FaReact),
    date: "Apr 2019 – Jan 2020 | 10 months",
  },

  {
    title: "Web Designer",
    location: "The Vesper House Pvt. Ltd.",
    description:
      "Designed a WordPress e-commerce platform for Vesper Fine Wine, integrated payment APIs, optimized with analytics tools, improved database queries, and boosted sales by 70% and engagement by 25%.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2020 - Apr 2021 | 10 months",
  },
  {
    title: "Web Designer",
    location: "Infinity Digital Agency",
    description:
      "Developed user-centered web interfaces with strategic design elements, delivered feature plans for clients like LifeCorpus and Antidote, and implemented a scalable design system using Storybook for consistency across projects.",
    icon: React.createElement(FaReact),
    date: "Oct 2021 – Mar 2022 | 6 months",
  },
  {
    title: "Senior Web Designer",
    location: "Niural Inc.",
    description:
      "Designed and launched user-centric web interfaces for Niural App and Landing Page, integrated Web3 and fiat payments, maintained a design system, optimized performance, integrated Zendesk, and conducted user testing to improve UX and engagement.",
    icon: React.createElement(FaReact),
    date: "Nov 2022 - present | +2 years",
  },
] as const;

export const worksData = [
  {
    title: "Niural Inc.",
    description:
      "Its a global payroll platform, that serves all aspects of hiring from hiring to payroll.",
    tags: ["Figma", "Design System", "Branding", "UX Research", "WebFlow"],
    imageUrl: NiuralWebsite,
    colorFrom: "#bef264", // lime-200 equivalent
    colorTo: "#10b981", // emerald-500 equivalent
  },
  {
    title: "WePlay",
    description:
      "Platform for sports booking and learning. Help users find players to play with, book venues and interact with the community",
    tags: [
      "Figma",
      "Animate CC",
      "Illustrator",
      "UI Design",
      "Mobile Design",
      "Web Design",
    ],
    imageUrl: WePlay,
    colorFrom: "#fecaca", // red-200 equivalent
    colorTo: "#f43f5e", // rose-500 equivalent
  },
  {
    title: "Vesper Fine Wines",
    description:
      "An ecommerce website to buy best and largest varietal of wines in Nepal. Responsive and user-friendly application for both Web and Mobile users.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma"],
    imageUrl: VesperFineWines,
    colorFrom: "#fde68a", // amber-200 equivalent
    colorTo: "#ef4444", // red-500 equivalent
  },
] as const;

export const skillsData = [
  "Figma",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "LottiLab",
  "Miro",
  "HTML5",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "React Native",
  "Three JS",
  "Framer Motion",
] as const;

// Group skills into categories
export const skillsCategories = [
  {
    title: "Things I Create",
    skills: [
      "Websites",
      "App Design",
      "Visual Identity",
      "Illustrations",
      "Design Systems",
      "UI Animation",
    ],
    color: "bg-lime-200 dark:bg-lime-900",
  },
  {
    title: "For Products In",
    skills: ["SaaS", "FinTech", "Web 3.0", "AI", "MedTech"],
    color: "bg-purple-200 dark:bg-purple-900",
  },
  {
    title: "Using Tools Like",
    skills: [
      "Figma",
      "After Effects",
      "Framer",
      "Illustrator",
      "Photoshop",
      "Spline",
    ],
    color: "bg-blue-200 dark:bg-blue-900",
  },
] as const;

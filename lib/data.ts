import React from "react";
import { StaticImageData } from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
/* ---------------- WEPLAY IMPORTS ---------------- */
import WePlay from "@/public/weplay-thumbnail.png";
import WeplayHeroSection from "@/public/weplay-herosection.png";
import WePlayDesignRequirement from "@/public/weplay-designrequirement.png";
import WePlayBranding from "@/public/weplay-branding.png";
import WeplayUserResearch from "@/public/section1-weplay.png";

import WePlayDesign1 from "@/public/weplay-design-1.png";
import WePlayDesign2 from "@/public/weplay-design-2.png";
import WePlayDesign3 from "@/public/weplay-design-3.png";
import WePlayDesign4 from "@/public/weplay-design-4.png";
import WePlayDesign5 from "@/public/weplay-design-5.png";

/* ---------------- WEPLAY IMPORTS ---------------- */
import LifeCorpusThumbnail from "@/public/Lifecorpus-thumbnail.png";
import LifeCorpusCareer from "@/public/Lifecorpus-Career.png";
import LifeCorpusColors from "@/public/Lifecorpus-colors.png";
import LifeCorpusDesignReq from "@/public/lifecorpus-designreq.png";
import LifeCorpusMarketing from "@/public/Lifecorpus-marketing.png";

/* ---------------- NIURAL IMPORTS ---------------- */

import NiuralThumbnail from "@/public/niural-thumbnail.png";
import NiuralHeroSection from "@/public/Hero Section.png";
import DesignSystem from "@/public/Design System.png";
import TimeSheet from "@/public/Time Sheet.png";
import Payroll from "@/public/Payroll.png";
import PaymentMethod from "@/public/Payment Method.png";

/* ---------------- VESPER IMPORTS ---------------- */
import VesperFineWines from "@/public/VesperFineWines.png";
import VesperThumbnail from "@/public/vesper-thumbnail.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },

  {
    name: "Projects",
    hash: "/projects",
  },

  { name: "Playground", hash: "/playground" },
  { name: "Skills", hash: "#skills" },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
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
  // {
  //   title: "Senior Web Designer",
  //   location: "Niural Inc.",
  //   description:
  //     "Designed and launched user-centric web interfaces for Niural App and Landing Page, integrated Web3 and fiat payments, maintained a design system, optimized performance, integrated Zendesk, and conducted user testing to improve UX and engagement.",
  //   icon: React.createElement(FaReact),
  //   date: "Nov 2022 - present | +2 years",
  // },
] as const;

export const projectsData = [
  {
    title: "Niural Inc.",
    description:
      "Its a global payroll platform, that serves all aspects of hiring from hiring to payroll.",
    tags: ["Figma", "Design System", "Branding", "UX Research", "WebFlow"],
    imageUrl: NiuralHeroSection,
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
    colorFrom: "#fecaca",
    colorTo: "#f43f5e",
  },
  {
    title: "Vesper Fine Wines",
    description:
      "An ecommerce website to buy best and largest varietal of wines in Nepal. Responsive and user-friendly application for both Web and Mobile users.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma"],
    imageUrl: VesperFineWines,
    //   colorFrom: "#bef264", // lime-200 equivalent
    //   colorTo: "#10b981", // emerald-500 equivalent
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
    skills: ["SaaS", "FinTech", "Web 3.0", "AI", "VR", "3D Visualization"],
    color: "bg-purple-200 dark:bg-purple-900",
  },
  {
    title: "Using Tools Like",
    skills: [
      "Figma",
      "After Effects",
      "Webflow",
      "Illustrator",
      "Photoshop",
      "Lottie",
    ],
    color: "bg-blue-200 dark:bg-blue-900",
  },
] as const;

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  overview: string;

  date: string;
  readTime: string;
  category: "Case study" | "Product" | "Ecosystem" | "User story";

  url: string;
  color?: string;

  thumbnail: StaticImageData | string;
  heroImage: StaticImageData | string;
  gallery: (StaticImageData | string)[];

  role: string;
  duration: string;
  videoUrl?: string;
  isPasswordProtected?: boolean;

  sections: {
    heading?: string;
    content?: string;
    bullets?: string[];
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 0,
    slug: "niural-global-payroll",
    title: "Niural — Designing payroll for modern teams",
    tagline: "Reducing operational complexity in global payroll management.",
    overview:
      "Niural is a global payroll platform supporting fiat and crypto payouts.",

    date: "Dec 10, 2025",
    readTime: "5 min read",
    category: "Product",

    url: "/projects/0",
    color: "#088236",
    isPasswordProtected: true,

    thumbnail: NiuralThumbnail,
    heroImage: NiuralThumbnail,
    gallery: [DesignSystem, TimeSheet, Payroll, PaymentMethod],

    role: "Product Designer — UX, UI, Interaction Design",
    duration: "Ongoing",

    sections: [
      {
        heading: "Context",
        content:
          "Global payroll introduces complexity around compliance, currencies, and approvals.",
      },
      {
        heading: "Design Strategy",
        bullets: [
          "Clear workflow separation",
          "Predictable interaction patterns",
          "Scalable design system",
        ],
      },
      {
        heading: "Impact",
        content:
          "Positioned Niural as a modern alternative to legacy payroll tools.",
      },
    ],
  },
  {
    id: 1,
    slug: "lifecorpus-healthcare-trust",
    title: "LifeCorpus SA: A Modern UI Revamp for Healthcare Support",
    videoUrl: "https://vimeo.com/1149309422?controls=0&background=1",

    tagline:
      "Designing clarity, confidence, and scalability in a sensitive healthcare ecosystem.",

    overview:
      "LifeCorpus SA is a healthcare support platform focused on providing accessible services, education, and NDIS-related assistance to people across Southern Australia.",

    date: "Dec 10, 2025",
    readTime: "3 min read",
    category: "Ecosystem",

    url: "/projects/1",
    color: "#0F766E",

    thumbnail: LifeCorpusThumbnail,
    heroImage: LifeCorpusThumbnail,

    gallery: [
      LifeCorpusCareer,
      LifeCorpusDesignReq,
      LifeCorpusColors,
      LifeCorpusColors,
      LifeCorpusMarketing,
    ],

    role: "Product Designer — UX, UI, Information Architecture",
    duration: "4 months",

    sections: [
      {
        // No heading
        content:
          "This project takes a new approach to healthcare support in Southern Australia. Healthcare has long been a field with limited design inspiration, often relying on outdated patterns that fail to engage or guide users effectively. LifeCorpus set out to modernise their website experience—moving away from legacy layouts toward a contemporary system that could support marketing campaigns, educational blogs around NDIS services, and direct user assistance. The platform also needed to enable users to create support tickets, submit digital forms, and book services seamlessly.",
      },
      {
        heading: "Building for Scale & Content Growth",
        content:
          "To create a platform that could scale with the LifeCorpus team, content management was a key consideration. The team needed the flexibility to publish blogs, manage careers, and launch marketing pages without increasing development overhead. Payload CMS was selected due to its open-source nature and developer-friendly architecture. By leveraging Payload’s pre-designed admin interface, we significantly reduced the need to design complex backend experiences. This allowed the design process to focus on front-facing patterns, layouts, and components—keeping the CMS structure intentionally constrained while still offering enough variation for content creators to experiment and build visually engaging pages.",
      },
      {
        heading: "Design System & Component Strategy",
        content:
          "A structured design system was established early in the process. Typography, color palettes, components, spacing tokens, and layout rules were defined during the design phase. Wireframes were first translated into reusable patterns, which later evolved into a full suite of production-ready pages. This systematic approach ensured visual consistency, faster handoff to development, and a scalable foundation that could grow with future features and content needs.",
      },
      {},
      {
        heading: "Design Strategy",
        bullets: [
          "Clear information hierarchy to support diverse user needs",
          "Accessible interaction patterns aligned with healthcare usability standards",
          "Visual cues that reinforce trust, security, and professionalism",
          "Flexible layouts designed for CMS-driven content",
          "Consistent components to maintain brand integrity across pages",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "weplay-community-sports",
    title: "WePlay: Redesigning Community Sports Booking at Scale",

    tagline:
      "Redesigning the booking experience to support discovery, engagement, and repeat play.",

    overview:
      "WePlay is a community sports booking platform that helps players discover venues, organise games, and connect with other players. While the product showed early traction as a booking tool, it struggled to retain users beyond their first session due to limited discovery, social interaction, and engagement loops.",

    date: "Dec 10, 2025",
    readTime: "3 min read",
    category: "Case study",

    url: "/projects/2",
    color: "#AF2E4F",

    thumbnail: WePlay,
    heroImage: WeplayHeroSection,

    gallery: [
      WePlay,
      WePlayDesignRequirement,
      WeplayUserResearch,
      WePlayBranding,
      WePlayDesign1,
      WePlayDesign2,
      WePlayDesign3,
      WePlayDesign4,
      WePlayDesign5,
    ],

    role: "Product Designer — UX Research, Web Design, UI Design, Prototyping",
    duration: "3 months",
    videoUrl: "https://vimeo.com/1149309393",

    sections: [
      {
        heading: "Project Background",
        content:
          "WePlay launched as a functional sports venue booking platform focused on helping users reserve courts and facilities. While the core booking functionality worked, the experience felt transactional and isolated. Users completed a single booking and rarely returned, as the platform lacked mechanisms for discovery, social interaction, and long-term engagement.",
      },
      {
        heading: "Problem Statement",
        content:
          "As WePlay began addressing multiple product challenges, it became clear that the existing system was not built to scale. The platform had evolved without a defined design or technical framework, leading to slow progress and fragmented decision-making across design, frontend, and backend. The product was originally architected solely for bookings, with little consideration for future needs such as messaging, notifications, chat, single sign-on, or community features. To enable sustainable growth, WePlay needed a clear architectural foundation—one that aligned design, engineering, and product strategy. This required defining a scalable process, documenting requirements, and establishing a system of tokens, components, patterns, and shared assets to support both current and future features. Ultimately, the core challenge was transforming WePlay from a single-purpose booking tool into a flexible, community-driven platform that supports discovery, engagement, and repeat play.",
      },
      {
        heading: "Design Goals",
        content:
          "The primary goal was to reposition WePlay from a utility-driven booking tool into a community-centric sports platform. This required simplifying the booking flow, surfacing relevant venues and sports, and introducing features that encouraged users to connect, organise games, and return regularly.",
      },
      {
        heading: "Design & Implementation",
        bullets: [
          "Streamlining the booking workflow to reduce friction and drop-offs",
          "Enhancing venue and sport discovery through structured browsing and filtering",
          "Introducing social mechanics such as open games and player invitations",
          "Designing engagement loops that encourage repeat bookings",
          "Establishing a scalable UI system for future features and sports",
        ],
        content:
          "The redesigned experience focused on clarity, speed, and social context. Map-based discovery improved venue visibility, while open game listings allowed players to join existing matches instead of booking alone. Invitations and shared game details made it easier for users to organise games with friends, transforming the platform into a shared experience rather than a solo task.",
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {
        heading: "Outcome & Impact",
        content:
          "The redesign repositioned WePlay as a scalable community sports ecosystem. Users could discover venues more easily, organise games faster, and engage with the platform beyond a single booking. The product foundation now supports future growth into leagues, events, and broader community-driven features.",
      },
    ],
  },
  {
    id: 3,
    slug: "vesper-design-system",
    title: "Vesper — Scaling a hospitality brand through design systems",
    tagline:
      "Establishing a unified digital system for a growing hospitality business.",
    overview:
      "Vesper is a hospitality company operating across dining, retail, and events. As the business expanded, maintaining consistency across digital touchpoints became increasingly difficult.",

    date: "Dec 10, 2025",
    readTime: "4 min read",
    category: "Product",

    url: "/projects/3",
    color: "#1E1E1E",

    thumbnail: VesperThumbnail,
    heroImage: VesperFineWines,
    gallery: [VesperFineWines, VesperFineWines, VesperFineWines],

    role: "Web Designer — UI Design, Design Systems, Frontend Collaboration",
    duration: "10 months",

    sections: [
      {
        heading: "Background",
        content:
          "Multiple teams managed Vesper’s marketing pages, e-commerce flows, and internal tools independently.",
      },
      {
        heading: "The Challenge",
        content:
          "The goal was to create a unified design system that supported marketing, e-commerce, and operational tools.",
      },
      {
        heading: "Design Approach",
        bullets: [
          "Defining a shared visual language",
          "Building reusable UI components",
          "Supporting responsive and scalable layouts",
        ],
      },
      {
        heading: "Outcome",
        content:
          "The system reduced inconsistencies and accelerated development across teams.",
      },
    ],
  },
];

import React from "react";
import { StaticImageData } from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import NiuralProjectPage from "@/app/(app)/niural/page";

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

import NiuralThumbnail from "@/public/niural-ai-thumbnail.png";
import DesignSystem from "@/public/design-system.png";
// import Integrations from "@/public/QuickbooksIntegration.png";
// import Benefits from "@/public/Benefits.png";
import Dashboard from "@/public/EmployeeDashboard.png";
import Payroll from "@/public/Payroll.png";
import PaymentMethod from "@/public/BankAccount.png";

/* ---------------- VESPER IMPORTS ---------------- */
// import VesperFineWines from "@/public/VesperFineWines.png";
// import VesperThumbnail from "@/public/vesper-thumbnail.png";

/* ---------------- PLAYGROUND IMPORTS ---------------- */
import PlayroomkitThumbnail from "@/public/playroomkit-thumbnail.png";
import PlayroomkitDesignSpec from "@/public/playroomkit-designspec.png";
import PlayroomkitAsset from "@/public/shooter-kit.jpg";

// import GalaxyModifierThumbnail from "@/public/galaxymodifier-thumbnail.png";
// import FashionCommerceThumbnail from "@/public/ecommerce-thumbnail.png";
import WarppThumbnail from "@/public/Warrp-thumbnail.png";

import VirginGoldThumbnail from "@/public/Virgin-gold-thumbnail.png";
import VirginGoldRender from "@/public/virgin-gold-animation-render.png";
import Emperor24CaratRender from "@/public/emperor-24-carat-animation-render.png";
import HighlanderRender from "@/public/highlander-animation-render.png";
import CrationFrame from "@/public/creation-frame.png";
import NiuralExperience from "@/public/niural-experience.png";

// import NiuralPage from "@/components/Niural";

// Work sections configuration (without icons - icons loaded dynamically in render)
// const workSectionsConfig = [
//   { label: "Payroll", iconName: "CreditCard", featured: true },
//   { label: "Global Payments", iconName: "CurrencyDollar", featured: true },
//   { label: "Projects", iconName: "ChartLineUp", featured: true },
//   { label: "AI", iconName: "Brain", featured: true },
//   { label: "Timesheets", iconName: "Clock" },
//   { label: "Time Tracking", iconName: "Clock" },
//   { label: "Expense Management", iconName: "Receipt" },
//   { label: "Accounts Payable", iconName: "Receipt" },
//   { label: "Accounts Receivable", iconName: "Receipt" },
//   { label: "Invoices & Bills", iconName: "Receipt" },
//   { label: "Contractor Management", iconName: "Users" },
//   { label: "EOR", iconName: "Buildings" },
//   { label: "US Benefits", iconName: "ShieldCheck" },
//   { label: "Global Benefits", iconName: "ShieldCheck" },
//   { label: "Approval Policies", iconName: "ShieldCheck" },
//   { label: "Reporting", iconName: "ChartLineUp" },
//   { label: "Organization", iconName: "Buildings" },
//   { label: "Integrations", iconName: "ArrowsClockwise" },
// ];

export type PhosphorIcon = ComponentType<IconProps>;
export type PhosphorIconModule = Record<string, PhosphorIcon>;

export type WorkSectionConfig = {
  label: string;
  iconName: string;
  featured?: boolean;
};

export type WorkSection = {
  label: string;
  icon: PhosphorIcon;
  featured?: boolean;
};

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
] as const;

export const experiencesData = [
  {
    title: "Senior Product Designer",
    location: "Niural Inc.",
    description:
      "Designed and launched user-centric web interfaces for Niural App and Landing Page, integrated Web3 and fiat payments, maintained a design system, optimized performance, integrated Zendesk, and conducted user testing to improve UX and engagement.",
    icon: React.createElement(FaReact),
    date: "Nov 2022 - present | +3 years",
    rightImage: NiuralExperience,
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
    title: "Web Designer",
    location: "The Vesper House Pvt. Ltd.",
    description:
      "Designed a WordPress e-commerce platform for Vesper Fine Wine, integrated payment APIs, optimized with analytics tools, improved database queries, and boosted sales by 70% and engagement by 25%.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2020 - Apr 2021 | 10 months",
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
    title: "Associate Web Designer",
    location: "OHO Digital Ventures Pvt. Ltd.",
    description:
      "Designed web assets, illustrations, UX flows, frontend code, led 2 web design projects, contributed to user research, and created branding/video assets for promotions.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2018 – Jan 2019 | 10 months",
  },
] as const;
export type CaseStudySection = {
  heading?: string;
  content?: string;
  bullets?: string[];
};
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

  /** ✅ SERVER-ONLY component reference */
  RenderComponent?: ComponentType;

  sections: CaseStudySection[];
};
export const caseStudies: CaseStudy[] = [
  {
    id: 0,
    slug: "niural-global-payroll",
    title: "Niural — Designing a Power Platform",
    tagline:
      "Raising bars for what an application can be. Skyrocketed Niural to 31+ Million Valuation within 3 years.",
    overview:
      "Niural is a global workforce management tool for enterprise payroll, compliance, and vendor payments.",

    date: "Dec 10, 2025",
    readTime: "5 min read",
    category: "Product",

    url: "/niural",
    color: "#088236",
    isPasswordProtected: true,

    thumbnail: NiuralThumbnail,
    heroImage: NiuralThumbnail,
    gallery: [DesignSystem, Dashboard, Payroll, PaymentMethod],

    role: "Product Designer",
    duration: "Ongoing",

    RenderComponent: NiuralProjectPage,

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

  // {
  //   id: 3,
  //   slug: "vesper-design-system",
  //   title: "Vesper — Scaling a hospitality brand through design systems",
  //   tagline:
  //     "Establishing a unified digital system for a growing hospitality business.",
  //   overview:
  //     "Vesper is a hospitality company operating across dining, retail, and events. As the business expanded, maintaining consistency across digital touchpoints became increasingly difficult.",

  //   date: "Dec 10, 2025",
  //   readTime: "4 min read",
  //   category: "Product",

  //   url: "/projects/3",
  //   color: "#1E1E1E",

  //   thumbnail: VesperThumbnail,
  //   heroImage: VesperFineWines,
  //   gallery: [VesperFineWines, VesperFineWines, VesperFineWines],

  //   role: "Web Designer — UI Design, Design Systems, Frontend Collaboration",
  //   duration: "10 months",

  //   sections: [
  //     {
  //       heading: "Background",
  //       content:
  //         "Multiple teams managed Vesper’s marketing pages, e-commerce flows, and internal tools independently.",
  //     },
  //     {
  //       heading: "The Challenge",
  //       content:
  //         "The goal was to create a unified design system that supported marketing, e-commerce, and operational tools.",
  //     },
  //     {
  //       heading: "Design Approach",
  //       bullets: [
  //         "Defining a shared visual language",
  //         "Building reusable UI components",
  //         "Supporting responsive and scalable layouts",
  //       ],
  //     },
  //     {
  //       heading: "Outcome",
  //       content:
  //         "The system reduced inconsistencies and accelerated development across teams.",
  //     },
  //   ],
  // },
];

export type PlaygroundProject = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  overview: string;

  date: string;
  category: "Game" | "Motion" | "3d Animation";

  url: string;
  color?: string;

  thumbnail: StaticImageData | string;
  heroImage: StaticImageData | string;
  gallery: (StaticImageData | string)[];

  videoUrl?: string;

  sections: {
    heading?: string;
    content?: string;
    bullets?: string[];
    videoUrl?: string;
  }[];

  websiteLink?: string;
  role?: string;
  duration?: string;
  readTime?: string;
  isPasswordProtected?: boolean;
};

export const playgroundProjects: PlaygroundProject[] = [
  {
    id: 0,
    slug: "ad-design",
    title: "Ad Campaign & TVC Animation — Warrp Australia",
    tagline: "A TVC and marketing campaign for Warrp Australia.",
    overview:
      "Warrp was an Australian peer-to-peer marketplace focused on making second-hand buying and selling safer through secure payments, verified users, and trusted meetups. The challenge was to build awareness quickly and drive app sign-ups in a competitive market.",

    date: "June 07, 2021",
    category: "Motion",

    url: "/playground/0",
    color: "#088236",

    thumbnail: WarppThumbnail,
    heroImage: WarppThumbnail,
    gallery: [],

    sections: [
      {
        heading: "Context",
        content:
          "I led the creative direction and execution of Warrp’s TVC ad campaign, shaping the video narrative, visual language, sound design, and distribution approach across TV and social platforms. The primary goal was clear: increase app sign-ups through a memorable, trust-driven message.",
      },
      {
        heading: "What I Did",
        bullets: [
          "Planned the video content strategy, messaging, and storytelling approach for the TVC",
          "Designed and animated the TVC visuals and motion language using After Effects",
          "Developed the jingle timing and sound integration to reinforce brand recall",
          "Created supporting brand and visual assets in Adobe Illustrator",
          "Adapted the TVC into short-form social ads optimized for digital reach and performance",
        ],
      },
      {
        heading: "Outcome & Impact",
        content:
          "The campaign delivered strong audience recall and engagement, resulting in a significant spike in Warrp app sign-ups shortly after launch. The TVC helped position Warrp as a safe, trustworthy alternative in the resale marketplace and played a key role in accelerating early user adoption. Press coverage highlighted the surge in sign-ups following the campaign.",
        videoUrl: "https://vimeo.com/1151126337?fl=ip&fe=ec",
      },
    ],
    videoUrl: "https://vimeo.com/1151116837?fl=ip&fe=ec",

    websiteLink: "https://www.channelnews.com.au/warrp-sign-ups-spike/,",
    role: "Animator",
    duration: "1 month",
    readTime: "2 min read",
  },
  {
    id: 1,
    slug: "ecommerce",
    title: "Product Design & Marketing",
    tagline: "Production Workflow & Experimentation",
    overview:
      "For this project, I collaborated closely with the production team to standardize a new workflow for product mockups and advertising. By leveraging Three.js and simulation-based physics, we explored how realistic product visuals and motion could be generated digitally—reducing reliance on expensive traditional shoots and fragmented agency processes. This experiment focused on redefining how in-house design teams can create scalable, reusable product visuals, enabling faster iterations, consistent branding, and more flexible marketing outputs without the overhead of conventional production pipelines.",

    date: "July 10, 2022",
    category: "3d Animation",

    url: "/playground/1",
    color: "#088236",

    thumbnail: VirginGoldThumbnail,
    heroImage: VirginGoldThumbnail,
    gallery: [
      CrationFrame,
      VirginGoldRender,
      Emperor24CaratRender,
      HighlanderRender,
    ],

    videoUrl: "https://vimeo.com/1151275803?fl=ip&fe=ec",

    sections: [
      {
        heading: "Workflow Innovation",
        content:
          "Worked with the production team to prototype a standardized mockup and advertising workflow using Three.js and physics simulations, exploring how in-house teams can replace costly agency-led production with faster, scalable, and reusable digital product visuals.",
      },
      {
        heading: "What Was Explored",
        bullets: [
          "UI-based customization that updates product data in real time",
          "Core e-commerce interactions built without libraries or frameworks",
          "Deeper understanding of JavaScript fundamentals, events, and state flow",
        ],
      },
      {},
      {},
      {},
    ],

    role: "Developer & Designer",
    duration: "1 month",
    readTime: "2 min read",
  },
  {
    id: 2,
    slug: "gunfight",
    title: "Gun Fight — Brawl-Style Multiplayer Game",
    tagline:
      "A real-time multiplayer shooter built with PlayroomKit and Three.js.",
    overview:
      "Gun Fight is an experimental brawl-style multiplayer game exploring real-time interactions on the web. I used PlayroomKit to handle multiplayer networking, while Three.js, Rapier Physics, and Zustand power the visuals, physics, and state management on the frontend. The project focuses on understanding multiplayer game architecture, physics-based interactions, and synchronized player states.",

    date: "Sep 01, 2025",
    category: "Game",

    url: "/playground/2",
    color: "#088236",

    thumbnail: PlayroomkitThumbnail,
    heroImage: PlayroomkitThumbnail,
    gallery: [PlayroomkitDesignSpec, PlayroomkitAsset],

    videoUrl: "",

    sections: [
      {
        heading: "What Was Built",
        content:
          "I built a multiplayer lobby where players can create or join rooms and instantly play together. Player movement, shooting, and health states are synchronized in real time using WebSockets. When a player’s health reaches zero, they respawn, keeping gameplay fast and continuous.",
      },
      {
        heading: "Frontend",
        bullets: [
          "Custom characters and environments modeled in Blender",
          "Physics-based player movement, bullets, and environment interactions using Rapier",
          "Health system, damage handling, and respawn logic",
          "Global game state managed with Zustand",
        ],
      },
    ],

    websiteLink:
      "https://gunfight-8uul3c9wl-ayushbhusal00s-projects.vercel.app",
    role: "Developer, Asset Designer",
    duration: "2 months",
    readTime: "3 min read",
  },

  // {
  //   id: 3,
  //   slug: "galaxy-modifier",
  //   title: "Galaxy Modifier — Procedural Galaxy Generator",
  //   tagline:
  //     "A real-time galaxy visualization tool built with vanilla Three.js.",
  //   overview:
  //     "Galaxy Modifier is a visual experimentation project focused on procedural generation and particle-based rendering in 3D. Built using vanilla Three.js, the tool allows users to tweak parameters from the UI and instantly generate unique galaxy formations, exploring how data-driven inputs affect spatial patterns and motion.",

  //   date: "July 10, 2025",
  //   category: "Game",

  //   url: "/playground/3",
  //   color: "#088236",

  //   thumbnail: GalaxyModifierThumbnail,
  //   heroImage: GalaxyModifierThumbnail,
  //   gallery: [],

  //   videoUrl: "",

  //   sections: [
  //     {
  //       heading: "Context",
  //       content:
  //         "This project was created to explore how complex visual systems—like galaxies—can be represented using simple mathematical models and real-time rendering on the web.",
  //     },
  //     {
  //       heading: "What Was Explored",
  //       bullets: [
  //         "Procedural galaxy generation using particle systems",
  //         "Real-time parameter controls (density, spread, rotation, color)",
  //         "UI-driven updates reflected instantly in the 3D viewport",
  //         "Hands-on learning of Three.js, shaders, and render loops",
  //       ],
  //     },
  //     {
  //       heading: "Outcome",
  //       content:
  //         "Galaxy Modifier strengthened my understanding of procedural visuals and interactive 3D systems, serving as a foundation for more advanced experiments in WebGL-based data visualization.",
  //     },
  //   ],

  //   websiteLink:
  //     "https://galaxy-modifyer-9agsqkfh3-ayush-bhusals-projects.vercel.app",
  //   role: "Developer — Three.js, Visualization",
  //   duration: "1 month",
  //   readTime: "2 min read",
  // },
  // {
  //   id: 4,
  //   slug: "ecommerce",
  //   title: "Clothing Commerce — Vanilla JavaScript",
  //   tagline:
  //     "An experimental e-commerce concept built to learn core JavaScript.",
  //   overview:
  //     "Clothing Commerce is a learning-focused project where I explored building a functional e-commerce experience using Vanilla JavaScript—without frameworks. The experiment centers around allowing UI-driven customization while strengthening my understanding of DOM manipulation, state handling, and interaction logic.",

  //   date: "July 10, 2025",
  //   category: "Game",

  //   url: "/playground/4",
  //   color: "#088236",

  //   thumbnail: FashionCommerceThumbnail,
  //   heroImage: FashionCommerceThumbnail,
  //   gallery: [],

  //   videoUrl: "",

  //   sections: [
  //     {
  //       heading: "Context",
  //       content:
  //         "This project was created as a hands-on exercise to understand how modern e-commerce experiences work at a foundational level—handling UI updates, product data changes, and visual feedback directly through JavaScript.",
  //     },
  //     {
  //       heading: "What Was Explored",
  //       bullets: [
  //         "UI-based customization that updates product data in real time",
  //         "Core e-commerce interactions built without libraries or frameworks",
  //         "Deeper understanding of JavaScript fundamentals, events, and state flow",
  //       ],
  //     },
  //     {
  //       heading: "Outcome",
  //       content:
  //         "The project helped solidify my grasp of Vanilla JavaScript while experimenting with visual storytelling and interaction patterns commonly used in modern fashion commerce.",
  //     },
  //   ],

  //   websiteLink: "luxury-tarsier-d95917.netlify.app,",
  //   role: "Developer",
  //   duration: "1 month",
  //   readTime: "2 min read",
  // },
];

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import NiuralWebsite from "@/public/NiuralWebsite.png";
import VesperFineWines from "@/public/VesperFineWines.png";
import WePlay from "@/public/WePlay.png";
import WeplayHeroSection from "@/public/hero-section.png";
import Section1 from "@/public/section1-weplay.png";
import Section2 from "@/public/section2-weplay.png";
import Section3 from "@/public/section3-weplay.png";
import Section4 from "@/public/section4-weplay.png";
import Section5 from "@/public/section6-weplay.png";
import Section6 from "@/public/section7-weplay.png";

import NiuralHeroSection from "@/public/Hero Section.png";
import DesignSystem from "@/public/Design System.png";
import TimeSheet from "@/public/Time Sheet.png";
import Payroll from "@/public/Payroll.png";
import PaymentMethod from "@/public/Payment Method.png";
import { StaticImageData } from "next/image";

import Home from "@/public/Shop.png";
import Club from "@/public/Club.png";
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
    name: "Projects",
    hash: "#projects",
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

export const projectsData = [
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

type CaseStudy = {
  companyName: string;
  heroSection: {
    image: StaticImageData;
    title: string;
    tagsOfWork: string[];
    description: string;
    collaborators: string[];
    duration: string;
    tools: string[];
    roles: string[];
  };
  sections: {
    title: string;
    description: string;
    image: StaticImageData;
  }[];
};

// Case study array with updated content
export const caseStudies: CaseStudy[] = [
  {
    companyName: "Niural Inc.",
    heroSection: {
      image: NiuralHeroSection,
      title: "Complete Product Design for a Payroll Application",
      tagsOfWork: ["UX Research", "UI Design", "Prototyping"],
      description:
        "I was involved in Niural for over 2 years, my contributions include creating the MVP designs to current full fledged industry level application.",
      collaborators: ["Ayush Bhusal"],
      duration: "2 years",
      tools: ["Figma", "After Effects", "Illustrator"],
      roles: ["UI/UX Designer", "Product Manager", "Prototyper"],
    },
    sections: [
      {
        title: "A robust and modern Design System",
        description:
          "Niural's design system has been through 3 iterations, currently redesigned to solve the issues for complex navigations, modern UI, customizable theming capabilities and new brand style to reach the global customers.",
        image: DesignSystem,
      },
      {
        title: "Payroll",
        description:
          "US Payroll is complicated for Employees as well as Employers as taxation is a critical aspect for any job holders & Companies. US has a complex taxation system that changes based on federal, state, county, and sometimes city codes as well. Our team researched the most to make this process seamless and have boiled down the process for payroll that takes 20-30days to 5 mins of operations. This is the most revenue generating and demanded product Niural offers.",
        image: Payroll,
      },
      {
        title: "Expense & Time Tools",
        description:
          "A supporting feature for any payroll is expense management. Niural offers an easy interface for employees to submit their timely expenses as reports and provides an easy way for employers to approve or reject items to current pay cycle. It also considers types like allowance so that they are taxed properly without employers having to manually enter or record any additional items.<br>Few states manadate certail time offs, Niural offers a complete suite of settings to configure time offs for their employees. Same as Expense management, time tools are also handled with an intuitive UI manage, approve of reject employees time off requests.",
        image: TimeSheet,
      },

      {
        title: "Wallet Support",
        description:
          "Niural supports both crypto, and fiat payment system. Supporting over 160+ countries and all local currencies for any employers to be able to execute global payrolls in Niural. I worked to simplify and connect the flow where crypto are very different from fiat payments and have worked to create a consistent user experience and a seamless one.",
        image: PaymentMethod,
      },
    ],
  },
  {
    companyName: "WePlay",
    heroSection: {
      image: WeplayHeroSection,
      title: "New Feature Research & App Redesign",
      tagsOfWork: ["UX Research", "UI Design", "Prototyping"],
      description:
        "A 3-month redesign project to enhance the user experience and drive engagement.",
      collaborators: ["Ayush Bhusal"],
      duration: "3 months",
      tools: ["Figma", "Animate CC", "Illustrator"],
      roles: ["UI/UX Designer", "Prototyper"],
    },
    sections: [
      {
        title: "Problem",
        description:
          "WePlay's user satisfaction stayed consistent, but growth stagnated. The app lacked necessary features, leading to lower user engagement.",
        image: Section1,
      },
      {
        title: "Solution",
        description:
          "Through research and user interviews, we redefined the app to solve real user problems by improving the booking flow and adding new features.",
        image: Section2,
      },
      {
        title: "Design Process",
        description:
          "We adopted a user-centered approach using 'Design Thinking,' which involved users throughout the design process to ensure usability and accessibility.",
        image: Section3,
      },
      {
        title: "Research",
        description:
          "Conducted user interviews and probe studies to understand attitudes toward booking spaces. Insights were gathered to define key pain points.",
        image: Section4,
      },
      {
        title: "Ideation",
        description:
          "Using journey mapping and competitor analysis, we brainstormed and created storyboards to visualize solutions that addressed user needs.",
        image: Section5,
      },
      {
        title: "Design",
        description:
          "Wireframes, rebranding, and high-fidelity mockups were created to implement the solution, focusing on user-centered design principles.",
        image: Section6,
      },
    ],
  },
  {
    companyName: "Vesper Fine Wines",
    heroSection: {
      image: VesperFineWines,
      title: "Ecommerce Application for Wine Shopping",
      tagsOfWork: ["UX Research", "UI Design", "Development"],
      description:
        "Designed and Developed an Ecommerce Application for Mobile and Web for Nepal",
      collaborators: ["Ayush Bhusal"],
      duration: "11 months",
      tools: ["Figma", "React", "Next JS"],
      roles: ["UI/UX Designer", "Developer"],
    },
    sections: [
      {
        title: "Problem",
        description:
          "Vesper a leading Wine supplier in Nepal always had a web portal to buy wines but due to the lack of features like updating products, organizing events and promotions and a good payment integration, never had been used and had 0 sales.",
        image: Club,
      },
      {
        title: "Solution",
        description:
          "I was hired to work with the sales and the existing development team to redesign and develop current existing application and integrate new features so its easy to be used.",
        image: Section2,
      },
      {
        title: "New Layout and Redesign of all components",
        description:
          "Users could now view promotions, easily preview products and add them to cart for shopping. The product page component was fully redesigned and redeveloped to include the complex features needed for filtering.",
        image: Section3,
      },
      {
        title: "Payments API Integrations",
        description:
          "Vesper has a client base of foreigners and locals who enjoy wines. We integrated a payment API to support card payments, local bank payments and Fonepay QR payments.",
        image: Section4,
      },
      {
        title: "Outcome",
        description:
          "The sales through the new ecommerce application went up by 1500+ orders and revenue of +1million.",
        image: Section5,
      },
    ],
  },
  // Additional case studies if necessary...
];

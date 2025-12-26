import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
/* ---------------- WEPLAY IMPORTS ---------------- */
import WePlay from "@/public/weplay-thubnail.png";
import WeplayHeroSection from "@/public/weplay-herosection.png";
import Section1 from "@/public/section1-weplay.png";
import Section2 from "@/public/section2-weplay.png";
import Design1 from "@/public/weplay-designs-01.png";
import Design2 from "@/public/weplay-design-02.png";
import Design3 from "@/public/weplay-designs-03.png";

/* ---------------- WEPLAY IMPORTS ---------------- */
import LifeCorpusThumbnail from "@/public/Lifecorpus-thumbnail.jpg";
import LifeCorpusHeroSection from "@/public/Lifecorpus-Hero.jpg";
import LifeCorpusCareer from "@/public/Lifecorpus-Career.png";
import LifeCorpusColors from "@/public/Lifecorpus-colors.png";
// import LifeCorpusDesign1 from "@/public/Lifecorpus-Hero.jpg";
import LifeCorpusOthers from "@/public/Lifecorpus-Others.png";
import LifeCorpusMarketing from "@/public/Lifecorpus-marketing.png";

/* ---------------- NIURAL IMPORTS ---------------- */
import NiuralWebsite from "@/public/NiuralWebsite.png";
import NiuralHeroSection from "@/public/Hero Section.png";
import DesignSystem from "@/public/Design System.png";
import TimeSheet from "@/public/Time Sheet.png";
import Payroll from "@/public/Payroll.png";
import PaymentMethod from "@/public/Payment Method.png";

/* ---------------- VESPER IMPORTS ---------------- */
import VesperFineWines from "@/public/VesperFineWines.png";
import Shop from "@/public/Shop.png";
import Club from "@/public/Club.png";

import { StaticImageData } from "next/image";
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
  { name: "Playground", hash: "#playground" },
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

export interface CaseStudy {
  id: number;
  url: string;
  title: string;
  color: string;
  videoUrl: string;
  thumbnail: StaticImageData;
  heroImage: StaticImageData;
  gallery: StaticImageData[];
  tagline: string;
  overview: string;
  role: string;
  duration: string;
  sections: {
    heading: string;
    content?: string;
    bullets?: string[];
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 0,
    url: "/projects/0",
    color: "#AF2E4F",
    title: "WePlay — Sports, Made Simple",
    videoUrl: "https://vimeo.com/1149309393?share=copy&fl=sv&fe=ci",
    thumbnail: WePlay,
    heroImage: WeplayHeroSection,
    gallery: [Section1, Section2, Design1, Design2, Design3],
    tagline:
      "A redesigned booking experience that turns one-time players into repeat customers.",
    overview:
      "A complete UX overhaul transforming WePlay from a transactional booking tool into a community-driven sports platform.",
    role: "Product Designer — Research, UX, UI, Prototype",
    duration: "3 months",
    sections: [
      {
        heading: "Challenge",
        content:
          "WePlay had users, but no return behavior. Booking was slow, discovery was limited, and there was no reason to come back.",
      },
      {
        heading: "Approach",
        content:
          "We focused on three core problems: speed, discovery, and motivation.",
      },
      {
        heading: "Outcome",
        content:
          "The redesign shifted WePlay into a scalable sports ecosystem.",
      },
    ],
  },
  {
    id: 1,
    url: "/projects/1",
    title: "LifeCorpus",
    color: "#088236",
    videoUrl: "https://vimeo.com/1149309422?share=copy&fl=sv&fe=ci",
    thumbnail: LifeCorpusThumbnail,
    heroImage: LifeCorpusHeroSection,
    gallery: [
      LifeCorpusCareer,
      LifeCorpusColors,
      LifeCorpusCareer,
      LifeCorpusOthers,
      LifeCorpusMarketing,
    ],
    tagline: "Website redesign for a leader in Customer Care",
    overview:
      "LifeCorpus SA is a South-Australia-based customer care service provider. I worked with them to create a unique web experience by facilating mindful service exploration based on design trend.",
    role: "Product Designer — Web Design, Motion Design, Design System",
    duration: "LifeCorpussa.au (Offline for some time)",
    sections: [
      {
        heading: "Capturing the Brand Emotion",
        content:
          "The homepage welcomes users with an infomative selections of services they mmay want to use, images properly highlighting the services and experience and subtle animations to introduce users to the page.",
      },
      {
        heading: "It’s All in the Details",
        content:
          "We introduced an immersive scrollable feed of various products. Users can seamlessly preview, backtrack, and explore, all without leaving their current point.",
      },
      {
        heading: "An Overhauled Careers Portal",
        content:
          "To meet the workforce need Life Corpus desperately needed a careers experience highlighting their team, benefits and showcasing their industry experience to bring in the best individuals.",
      },
      {
        heading: "Appealing new Customer by Sharing Experiences",
        content:
          "Introducing the blogs pages to share case studies, helpful feeds users in the aged and disability community require for why LifeCorpus services are needed.",
      },
      {
        heading: "Incorporating Marketing Tools",
        content:
          "Promotional blocks, banners, and forms are all essential elements for getting funnels online. We arranged each element systemically to allow for a consistent visual style as updates are made to the site.",
      },
    ],
  },

  {
    id: 2,
    url: "/projects/2",
    title: "Vesper Fine Wines",
    color: "#C77F1F",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail: VesperFineWines,
    heroImage: Shop,
    gallery: [Club],
    tagline: "A luxury wine shopping experience crafted for refined buyers.",
    overview:
      "A premium-commerce redesign blending rich visuals with effortless purchasing.",
    role: "Product Designer — UX, UI, Visual Design",
    duration: "4 months",
    sections: [
      {
        heading: "Challenge",
        content:
          "Fine wine customers expect trust, premium aesthetics, and a smooth buying experience.",
      },
      {
        heading: "Experience Strategy",
        bullets: [
          "🍷 Full-bleed product storytelling",
          "✨ Luxury UI System",
          "🛒 Guided Checkout",
        ],
      },
      {
        heading: "Outcome",
        content: "The redesign increased trust and elevated brand perception.",
      },
    ],
  },
  {
    id: 3,
    url: "/projects/3",
    title: "Niural — Payroll, Reimagined",
    color: "#088236",
    videoUrl: "",
    thumbnail: NiuralWebsite,
    heroImage: NiuralHeroSection,
    gallery: [DesignSystem, TimeSheet, Payroll, PaymentMethod],
    tagline:
      "Designing a seamless global payroll platform for modern companies.",
    overview:
      "Niural modernizes payroll by supporting fiat & crypto payouts across borders.",
    role: "Product Designer — UX, UI, Interaction",
    duration: "Ongoing",
    sections: [
      {
        heading: "Challenge",
        content:
          "Global payroll is fragmented, slow, and full of compliance friction.",
      },
      {
        heading: "Experience Strategy",
        bullets: [
          "💸 One-Click Payroll",
          "🌍 Multi-Currency",
          "🛡 Compliance Layer",
          "📊 Control Center",
        ],
      },
      {
        heading: "Outcome",
        content:
          "Reduced setup friction and positioned Niural as a modern payroll alternative.",
      },
    ],
  },
];

// // Case study array with updated content
// export const caseStudies: CaseStudy[] = [
//   {
//     companyName: "Niural Inc.",
//     heroSection: {
//       image: NiuralHeroSection,
//       title: "Complete Product Design for a Payroll Application",
//       tagsOfWork: ["UX Research", "UI Design", "Prototyping"],
//       description:
//         "I was involved in Niural for over 2 years, my contributions include creating the MVP designs to current full fledged industry level application.",
//       collaborators: ["Ayush Bhusal"],
//       duration: "2 years",
//       tools: ["Figma", "After Effects", "Illustrator"],
//       roles: ["UI/UX Designer", "Product Manager", "Prototyper"],
//     },
//     sections: [
//       {
//         content: [
//           {
//             title: "A robust and modern Design System",
//             description:
//               "Niural's design system has been through 3 iterations, currently redesigned to solve the issues for complex navigations, modern UI, customizable theming capabilities and new brand style to reach the global customers.",
//             image: [DesignSystem],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "Payroll",
//             description:
//               "US Payroll is complicated for Employees as well as Employers as taxation is a critical aspect for any job holders & Companies. US has a complex taxation system that changes based on federal, state, county, and sometimes city codes as well. Our team researched the most to make this process seamless and have boiled down the process for payroll that takes 20-30days to 5 mins of operations. This is the most revenue generating and demanded product Niural offers.",
//             image: [Payroll],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "Expense & Time Tools",
//             description:
//               "A supporting feature for any payroll is expense management. Niural offers an easy interface for employees to submit their timely expenses as reports and provides an easy way for employers to approve or reject items to current pay cycle. It also considers types like allowance so that they are taxed properly without employers having to manually enter or record any additional items. Few states mandate certain time offs, Niural offers a complete suite of settings to configure time offs for their employees. Same as Expense management, time tools are also handled with an intuitive UI manage, approve or reject employees time off requests.",
//             image: [TimeSheet],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "Wallet Support",
//             description:
//               "Niural supports both crypto and fiat payment systems. Supporting over 160+ countries and all local currencies for any employers to be able to execute global payrolls in Niural. I worked to simplify and connect the flow where crypto are very different from fiat payments and have worked to create a consistent and seamless user experience.",
//             image: [PaymentMethod],
//           },
//         ],
//       },
//     ],
//   },
//   //Project background
//   {
//     companyName: "WePlay",
//     heroSection: {
//       image: WeplayHeroSection,
//       title: "WePlay — Sports Booking App Redesign",
//       tagsOfWork: ["UX Research", "UI Design", "Prototyping"],
//       description: "Redesigning for Engagement & Simplicity",
//       collaborators: ["Ayush Bhusal"],
//       duration: "3 months",
//       tools: ["Figma", "Animate CC", "Illustrator"],
//       roles: ["UI/UX Designer", "Prototyper"],
//     },
//     sections: [
//       // Problem Statement
//       {
//         content: [
//           {
//             title: "Challenge",
//             description:
//               "WePlay had stable users but no growth. Booking was slow, discovery was hard, and there was no reason to come back.",
//           },
//           {
//             title: "What I Did",
//             listItems: [
//               "Ran user interviews & journey mapping",

//               "Identified 4 core friction points (slow booking, poor discovery, no incentives, team coordination issues)",

//               "Redesigned the entire booking flow",
//             ],
//           },
//           {
//             title: "Key UX Improvements",
//             listItems: [
//               "Faster Booking — Fewer steps, clearer choices",

//               "Map-Based Venue Discovery",

//               "Rewards System for repeat play",

//               "Team Invites & Open Spots",

//               "Filters + Help Center",
//             ],
//             image: [DesignProcess],
//           },
//         ],
//       },
//       // // Define Section
//       // {
//       //   content: [
//       //     {
//       //       title: "Define",
//       //       description:
//       //         "I used methods like creating User Personas and Empathy Maps. These are later implemented to conceptualize a problem statement. We later work with a “How might we?” which helps us take our problems and transition to an ideation process.",
//       //       image: [EmpathyMapping],
//       //     },
//       //     {
//       //       title: "User Persona",
//       //       image: [PersonaMapping],
//       //     },
//       //     {
//       //       title: "Initial Insights",
//       //       description:
//       //         "Players find it hard to view venue listings from a nearby locations, available timings, and prices. Players are motivated to play games when presented with discounts and vouchers which are currently only available on consecutive bookings. Players find organizing a team to be a hassle, requires planning before weeks, and players cancel at the last minute.Players are stuck to a game of their choice as they don't have knowledge on how to find other sports options and playing spaces.",
//       //     },
//       //   ],
//       // },
//       // // Research Section
//       // {
//       //   content: [
//       //     {
//       //       title: "Research",
//       //       description:
//       //         "My first task was to empathize with the users’ to understand their needs and motivation. For this, I conducted user interviews and probe studies to understand the user.",
//       //       image: [Section1],
//       //     },
//       //     {
//       //       title: "User Interviews",
//       //       description:
//       //         "The participants were selected based on their interest in playing sports, here some were very active while others were not. Employment was also a criteria as these varied user personas.The objective of the Interview- Understand general attitudes towards booking playing spaces.- Understand general attitudes towards a mobile or web application for court booking apps.- Discover which apps people are currently using to book their playing spaces.- Find our pain points of the users in booking a playing space, and organizing a match.- Find out what motivates the user to play at certain venues.<a>https://drive.google.com/drive/folders/1eYeS5brDRmoPPcrfVHdNKbyvaY_GuaSD?usp=sharing</a><a>https://drive.google.com/file/d/124YxPtAAZ-KEHmP338n5L7ejCBLRZe96/view?usp=sharing</a>",
//       //     },
//       //     {
//       //       title: "Initial Insights",
//       //       description:
//       //         "Players find it hard to view venue listings from a nearby locations, available timings, and prices. Players are motivated to play games when presented with discounts and vouchers which are currently only available on consecutive bookings. Players find organizing a team to be a hassle, requires planning before weeks, and players cancel at the last minute.Players are stuck to a game of their choice as they don't have knowledge on how to find other sports options and playing spaces.",
//       //     },
//       //   ],
//       // },
//       // // Ideation Section
//       // {
//       //   content: [
//       //     {
//       //       title: "Ideation",
//       //       description:
//       //         "Once I understood the domain and whom I was designing for, I gathered ideas using Journey Mapping and Competitors Analysis. This resulted in large chunks of ideas and a new vision for the current platform.",
//       //     },
//       //     {
//       //       title: "Journey Mapping",
//       //       description:
//       //         "The product was tested with each participant and all the questions the participants had during each stage has been categorized as their thoughts, pain points, and opportunities we can find,",
//       //       image: [JourneyMapping],
//       //     },
//       //     {
//       //       title: "Competitors Analysis",
//       //       description:
//       //         "Using competitive analysis helped me find the strengths and weaknesses of the competitor's app. I found 4 major competitors to WePlay: Anybuddy, Racketpal, Spin & Strongbee.<a>https://drive.google.com/drive/folders/1J6rvLhCO9_Tb6bm0fiFHi5jHXQJUP7P4</a>",
//       //     },
//       //     {
//       //       title: "Ideas Gathered during the Ideation Stage",
//       //       description:
//       //         "Redesign the booking process to require minimum steps. The booking process should be made fast. Let users find venues nearby their location. Having a visible Map showing venues nearby could be handy.Make a reward system to offer players incentives to complete more bookings.Allow filters to make selective selections. Let users invite players to their games and join games where players are empty. List Help and FAQ section accessible, so that help is always offered when needed.",
//       //     },
//       //   ],
//       // },
//       // // Design Section
//       // {
//       //   content: [
//       //     {
//       //       title: "Design",
//       //       description:
//       //         "The process started of with sketching the wireframe and determining the possible flows and screens.",
//       //     },
//       //     {
//       //       title: "Wireframe",
//       //       image: [Wireframe],
//       //     },
//       //     {
//       //       title: "Brand Design",
//       //       image: [BrandDesign],
//       //     },
//       //     {
//       //       title: "High Fidelity Mockups",
//       //       image: [Design1, Design2, Design3],
//       //     },
//       //   ],
//       // },
//       // //Learnings and What's Next
//       // {
//       //   content: [
//       //     {
//       //       title: "My Learnings",
//       //       description:
//       //         "Having done the User-Centered design approach brought out a lot of opportunities the company could work on. Previously WePlay was considered to solve booking. Now the scope has increased to many more and the responsibility and enthusiasm in the team has increased, as WePlay now is aimed to solve a much bigger problem.",
//       //     },
//       //     {
//       //       title: "What’s Next ?",
//       //       description:
//       //         "With all the UX strategy and research complete the project has moved on to development phase. The final solution is expected to solve all the POV Statement problems and users are being tested with small features and task to check and improve on UI usability and usefulness.",
//       //     },
//       //   ],
//       // },
//     ],
//   },
//   {
//     companyName: "Vesper Fine Wines",
//     heroSection: {
//       image: VesperFineWines,
//       title: "Ecommerce Application for Wine Shopping",
//       tagsOfWork: ["UX Research", "UI Design", "Development"],
//       description:
//         "Designed and Developed an Ecommerce Application for Mobile and Web for Nepal",
//       collaborators: ["Ayush Bhusal"],
//       duration: "11 months",
//       tools: ["Figma", "React", "Next JS"],
//       roles: ["UI/UX Designer", "Developer"],
//     },
//     sections: [
//       {
//         content: [
//           {
//             title: "Problem",
//             description:
//               "Vesper, a leading wine supplier in Nepal, had a web portal to buy wines but lacked features like product updates, event promotions, and good payment integrations — resulting in zero sales.",
//             image: [Club],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "Solution",
//             description:
//               "I was hired to work with the sales and existing development team to redesign and rebuild the current application, integrating new features to make it easier to use.",
//             image: [Shop],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "New Layout and Redesign of All Components",
//             description:
//               "Users could now view promotions, easily preview products, and add them to cart for shopping. The product page was fully redesigned and redeveloped to include advanced filtering and sorting options.",
//             image: [Section1],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "Payments API Integrations",
//             description:
//               "Vesper serves both foreign and local customers who enjoy wines. We integrated multiple payment APIs to support card payments, local bank transfers, and Fonepay QR payments.",
//             image: [Section2],
//           },
//         ],
//       },
//       {
//         content: [
//           {
//             title: "Outcome",
//             description:
//               "The redesigned e-commerce platform led to over 1,500 new orders and generated more than $1M in revenue.",
//             image: [Design3],
//           },
//         ],
//       },
//     ],
//   },
//   // Additional case studies if necessary...
// ];

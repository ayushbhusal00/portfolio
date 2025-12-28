"use client";
import HeroSection from "@/components/hero-section";
import WorkItem from "@/components/work-item";

import PlayroomkitThumbnail from "@/public/playroomkit-thumbnail.png";
import PlayroomKitDesignSpec from "@/public/playroomkit-thumbnail.png";

import GalaxyModifierThumbnail from "@/public/galaxymodifier-thumbnail.png";
import GalaxyModifierDesignSpec from "@/public/galaxymodifier-thumbnail.png";

import FashionCommerceThumbnail from "@/public/fashion-commerce.png";
import FashionCommerceDesignSpec from "@/public/fashion-commerce.png";
import { StaticImageData } from "next/image";

export default function Playground() {
  return (
    <main className='flex flex-col items-center relative mx-auto max-w-[72rem] border-x border-[#e6e8eb]'>
      <HeroSection />
      {/* Grid */}
      <div className='divide-y divide-[#e6e8eb]'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-y border-[#e6e8eb]'>
          {projects.map((project) => (
            <WorkItem
              key={project.id}
              index={project.id}
              title={project.title}
              description={project.tagline}
              category={project.category}
              imageUrl={
                typeof project.thumbnail === "string"
                  ? project.thumbnail
                  : project.thumbnail.src
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}

type Projects = {
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
  gallery: (StaticImageData | string)[];

  videoUrl?: string;

  sections: {
    heading?: string;
    content?: string;
    bullets?: string[];
  }[];

  websiteLink?: string;
};

const projects: Projects[] = [
  {
    id: 0,
    slug: "gunfight",
    title: "Gun Fight — A Brawl Style Multiplayer Game",
    tagline: "A game built using playroomkit and threejs",
    overview:
      "Playroomkit is a easy to use installation toolkit for multiplayer gaming. I tried using Threejs, Rapier Physics, and Zustand for frontend and state management, while playroomkit for the backend.",

    date: "Sep 01, 2025",
    category: "Game",

    url: "/playground/0",
    color: "#088236",

    thumbnail: PlayroomkitThumbnail,
    gallery: [PlayroomKitDesignSpec],

    videoUrl: "",

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

    websiteLink: "gunfight-8uul3c9wl-ayushbhusal00s-projects.vercel.app",
  },

  {
    id: 1,
    slug: "galaxy-modifier",
    title: "Galaxy Modifier — Generate Galaxy patterns",
    tagline: "A visualization tools built using vanilla threejs",
    overview:
      "A simple experimentation on creating 3d viewport with particle rendering and adding customization to the data from the UI",

    date: "July 10, 2025",
    category: "Game",

    url: "/playground/1",
    color: "#088236",

    thumbnail: GalaxyModifierThumbnail,
    gallery: [GalaxyModifierDesignSpec],

    videoUrl: "",

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

    websiteLink: "galaxy-modifyer-9agsqkfh3-ayush-bhusals-projects.vercel.app",
  },
  {
    id: 1,
    slug: "ecommerce",
    title: "Clothing Commerce — Vannila JS",
    tagline: "Learning how to create a functional javascript website",
    overview:
      "A simple experimentation on creating 3d viewport with particle rendering and adding customization to the data from the UI",

    date: "July 10, 2025",
    category: "Game",

    url: "/playground/1",
    color: "#088236",

    thumbnail: FashionCommerceThumbnail,
    gallery: [FashionCommerceDesignSpec],

    videoUrl: "",

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

    websiteLink: "luxury-tarsier-d95917.netlify.app,",
  },
];

import { getPayload } from "payload";
import configPromise from "@payload-config";

type SeedPlaygroundProject = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  date: string;
  category: "Game" | "Motion" | "3d Animation";
  url: string;
  color?: string;
  videoUrl?: string;
  websiteLink?: string;
  role?: string;
  duration?: string;
  readTime?: string;
  isPasswordProtected?: boolean;
  sections: {
    heading?: string;
    content?: string;
    bullets?: string[];
    videoUrl?: string;
  }[];
};

// NOTE: This seed data is a copy of the playgroundProjects from lib/data.ts,
// but WITHOUT any image imports so it can run in a plain Node environment.
const playgroundProjects: SeedPlaygroundProject[] = [
  {
    slug: "ad-design",
    title: "Ad Campaign & TVC Animation — Warrp Australia",
    tagline: "A TVC and marketing campaign for Warrp Australia.",
    overview:
      "Warrp was an Australian peer-to-peer marketplace focused on making second-hand buying and selling safer through secure payments, verified users, and trusted meetups. The challenge was to build awareness quickly and drive app sign-ups in a competitive market.",
    date: "June 07, 2021",
    category: "Motion",
    url: "/playground/0",
    color: "#088236",
    videoUrl: "https://vimeo.com/1151116837?fl=ip&fe=ec",
    websiteLink: "https://www.channelnews.com.au/warrp-sign-ups-spike/,",
    role: "Animator",
    duration: "1 month",
    readTime: "2 min read",
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
  },
  {
    slug: "ecommerce",
    title: "Product Design & Marketing",
    tagline: "Production Workflow & Experimentation",
    overview:
      "For this project, I collaborated closely with the production team to standardize a new workflow for product mockups and advertising. By leveraging Three.js and simulation-based physics, we explored how realistic product visuals and motion could be generated digitally—reducing reliance on expensive traditional shoots and fragmented agency processes. This experiment focused on redefining how in-house design teams can create scalable, reusable product visuals, enabling faster iterations, consistent branding, and more flexible marketing outputs without the overhead of conventional production pipelines.",
    date: "July 10, 2022",
    category: "3d Animation",
    url: "/playground/1",
    color: "#088236",
    videoUrl: "https://vimeo.com/1151275803?fl=ip&fe=ec",
    role: "Developer & Designer",
    duration: "1 month",
    readTime: "2 min read",
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
    ],
  },
  {
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
    websiteLink:
      "https://gunfight-8uul3c9wl-ayushbhusal00s-projects.vercel.app",
    role: "Developer, Asset Designer",
    duration: "2 months",
    readTime: "3 min read",
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
  },
];

async function seedPlayground() {
  const payload = await getPayload({ config: configPromise });

  console.log(
    `Seeding ${playgroundProjects.length} playground projects into Payload...`,
  );

  for (const project of playgroundProjects) {
    try {
      // Skip if a doc with this slug already exists
      const existing = await payload.find({
        collection: "playground",
        where: {
          slug: {
            equals: project.slug,
          },
        },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        console.log(`Skipping "${project.slug}" – already exists.`);
        continue;
      }

      const sections =
        Array.isArray(project.sections) && project.sections.length > 0
          ? project.sections.map((s) => ({
              heading: s.heading,
              content: s.content,
              videoUrl: s.videoUrl,
              bullets:
                s.bullets?.map((item) => ({
                  item,
                })) ?? undefined,
            }))
          : undefined;

      await payload.create({
        collection: "playground",
        draft: false,
        data: {
          title: project.title,
          slug: project.slug,
          tagline: project.tagline,
          overview: project.overview,
          date: project.date,
          category: project.category,
          url: project.url,
          color: project.color,
          videoUrl: project.videoUrl,
          websiteLink: project.websiteLink,
          role: project.role,
          duration: project.duration,
          readTime:
            project.readTime !== undefined
              ? Number(project.readTime)
              : undefined,
          isPasswordProtected: project.isPasswordProtected ?? false,
          sections,
          // Minimal required rich text / layout content so the doc is valid.
          content: [
            {
              type: "paragraph",
              children: [
                {
                  text: project.overview || project.tagline || project.title,
                },
              ],
            },
          ],
          layout: [] as any,
        },
      } as any);

      console.log(`Created "${project.slug}".`);
    } catch (error) {
      console.error(`Error seeding "${project.slug}":`, error);
    }
  }

  console.log("Playground seeding complete.");
}

seedPlayground().catch((error) => {
  console.error(error);
  process.exit(1);
});

import { redirect } from "next/navigation";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import NiuralClient from "@/components/NiuralClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  // Niural has its own route at /niural; redirect for canonical URL
  if (id === "0") {
    redirect("/niural");
  }

  const payload = await getPayload({ config: configPromise });

  let doc: any;

  try {
    doc = await payload.findByID({
      collection: "project",
      id,
      depth: 2,
    });
  } catch {
    doc = null;
  }

  if (!doc) {
    return (
      <div className='min-h-screen flex items-center justify-center text-text-subtle'>
        Not Found
      </div>
    );
  }

  // Gallery
  const gallery =
    Array.isArray(doc.gallery) && doc.gallery.length > 0
      ? doc.gallery
          .map((g: any) =>
            g?.image && typeof g.image === "object" ? g.image.url : null,
          )
          .filter((u: string | null): u is string => Boolean(u))
      : [];

  // Sections
  const sections =
    Array.isArray(doc.sections) && doc.sections.length > 0
      ? doc.sections.map((s: any) => ({
          heading: s.heading ?? undefined,
          content: s.content ?? undefined,
          bullets: Array.isArray(s.bullets)
            ? s.bullets
                .map((b: any) => (typeof b?.item === "string" ? b.item : null))
                .filter((v: string | null): v is string => Boolean(v))
            : undefined,
        }))
      : [];

  // Related projects
  const relatedResult = await payload.find({
    collection: "project",
    where: { id: { not_equals: doc.id } },
    limit: 3,
    depth: 1,
    sort: "-createdAt",
  });

  const relatedProjects = relatedResult.docs.map((item: any) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    tagline: item.tagline ?? null,
    overview: item.overview ?? "",
    url: item.url ?? `/projects/${item.id}`,
    thumbnail:
      typeof item.thumbnail === "object" && item.thumbnail !== null
        ? item.thumbnail
        : undefined,
  }));

  // Final project object
  const project = {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    tagline: doc.tagline ?? undefined,
    overview: doc.overview ?? "",
    date: doc.date ?? "",
    category: doc.category ?? undefined,
    role: doc.role ?? undefined,
    duration: doc.duration ?? undefined,
    readTime: doc.readTime ?? undefined,
    url: doc.url ?? `/projects/${doc.id}`,
    heroImage:
      typeof doc.heroImage === "object" && doc.heroImage !== null
        ? doc.heroImage.url
        : doc.thumbnail?.url,
    thumbnail:
      typeof doc.thumbnail === "object" && doc.thumbnail !== null
        ? doc.thumbnail
        : doc.heroImage,
    gallery,
    sections,
    videoUrl: doc.videoUrl ?? undefined,
    isPasswordProtected: Boolean(doc.isPasswordProtected),
  };

  return <NiuralClient project={project} relatedProjects={relatedProjects} />;
}

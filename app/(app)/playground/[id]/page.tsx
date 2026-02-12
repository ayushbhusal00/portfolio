import configPromise from "@payload-config";
import { getPayload } from "payload";
import PlaygroundClient from "@/components/playground-client";

type Params = {
  id: string;
};

export default async function PlaygroundPage({
  params,
}: {
  params: Params;
}) {
  const { id } = params;

  const payload = await getPayload({ config: configPromise });

  // First, try treating the route segment as a slug
  let result = await payload.find({
    collection: "playground",
    where: {
      slug: {
        equals: id,
      },
    },
    depth: 2,
    limit: 1,
  });

  let doc: any | undefined = result.docs[0];

  // If nothing found and the segment looks like a numeric ID,
  // fall back to matching by the legacy URL shape (/playground/{id})
  if (!doc && !Number.isNaN(Number(id))) {
    const fallbackResult = await payload.find({
      collection: "playground",
      where: {
        url: {
          equals: `/playground/${id}`,
        },
      },
      depth: 2,
      limit: 1,
    });

    doc = fallbackResult.docs[0];
  }

  if (!doc) {
    return (
      <div className='min-h-screen flex items-center justify-center text-text-subtle'>
        Not Found
      </div>
    );
  }

  const galleryImages =
    Array.isArray(doc.gallery) && doc.gallery.length > 0
      ? doc.gallery
          .map((g: any) =>
            g?.image && typeof g.image === "object" ? g.image.url : null,
          )
          .filter((url: string | null): url is string => Boolean(url))
      : [];

  const sections =
    Array.isArray(doc.sections) && doc.sections.length > 0
      ? doc.sections.map((s: any) => ({
          heading: s.heading ?? undefined,
          content: s.content ?? undefined,
          videoUrl: s.videoUrl ?? undefined,
          bullets: Array.isArray(s.bullets)
            ? s.bullets
                .map((b: any) => (typeof b?.item === "string" ? b.item : null))
                .filter((v: string | null): v is string => Boolean(v))
            : undefined,
        }))
      : [];

  const project = {
    slug: doc.slug,
    title: doc.title,
    tagline: doc.tagline ?? undefined,
    overview: doc.overview ?? "",
    heroImage:
      typeof doc.thumbnail === "object" && doc.thumbnail !== null
        ? doc.thumbnail.url
        : undefined,
    gallery: galleryImages,
    sections,
    duration: doc.duration ?? undefined,
    readTime:
      typeof doc.readTime === "number" ? Number(doc.readTime) : undefined,
    videoUrl: doc.videoUrl ?? undefined,
    websiteLink: doc.websiteLink ?? undefined,
    thumbnail:
      typeof doc.thumbnail === "object" && doc.thumbnail !== null
        ? doc.thumbnail.url
        : undefined,
    isPasswordProtected: Boolean(doc.isPasswordProtected),
    url: doc.url ?? `/playground/${doc.slug}`,
  };

  const relatedResult = await payload.find({
    collection: "playground",
    where: {
      slug: {
        not_equals: doc.slug,
      },
    },
    limit: 3,
    depth: 1,
  });

  const relatedProjects = relatedResult.docs.map((item: any) => ({
    slug: item.slug,
    title: item.title,
    tagline: item.tagline ?? null,
    overview: item.overview ?? "",
    url: item.url ?? `/playground/${item.slug}`,
    thumbnail:
      typeof item.thumbnail === "object" && item.thumbnail !== null
        ? item.thumbnail.url
        : undefined,
  }));

  return (
    <main className='bg-bg-base'>
      <PlaygroundClient project={project} relatedProjects={relatedProjects} />
    </main>
  );
}

import configPromise from "@payload-config";
import { getPayload } from "payload";
import PlaygroundListClient, {
  PlaygroundListItem,
} from "@/components/playground-list-client";

export default async function PlaygroundPage() {
  let payload, result, items;
  try {
    payload = await getPayload({ config: configPromise });
    result = await payload.find({
      collection: "playground",
      sort: "-createdAt",
      depth: 1,
    });
    items = result.docs.map((doc: any) => {
      const thumbnail =
        typeof doc.thumbnail === "object" && doc.thumbnail !== null
          ? (doc.thumbnail.url as string | undefined)
          : undefined;

      return {
        id: String(doc.id),
        slug: doc.slug,
        title: doc.title,
        tagline: doc.tagline ?? null,
        category: doc.category ?? null,
        thumbnailUrl: thumbnail ?? null,
        url: doc.url ?? null,
      };
    });
  } catch (error) {
    console.error("[PlaygroundPage] Error fetching playgrounds:", error);
    return (
      <div className='min-h-screen flex items-center justify-center text-text-subtle'>
        Error loading playgrounds.
        <br />
        {error instanceof Error ? error.message : String(error)}
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center text-text-subtle'>
        No playgrounds found.
      </div>
    );
  }

  return <PlaygroundListClient items={items} />;
}

import configPromise from "@payload-config";
import { getPayload } from "payload";
import PlaygroundListClient, {
  PlaygroundListItem,
} from "@/components/playground-list-client";

export default async function PlaygroundPage() {
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "playground",
    sort: "-createdAt",
    depth: 1,
  });

  const items: PlaygroundListItem[] = result.docs.map((doc: any) => {
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

  return <PlaygroundListClient items={items} />;
}

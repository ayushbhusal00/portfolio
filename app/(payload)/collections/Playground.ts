import { CollectionConfig } from "payload";

import { Content } from "../blocks/Content";
import QuoteBlock from "../blocks/QuoteBlock";

export const Playground: CollectionConfig = {
  slug: "playground",
  labels: {
    singular: "Playground",
    plural: "Playgrounds",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "createdAt", "updatedAt"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    // Alternative: remove the richText "layout" and use pure blocks field
    {
      name: "layout",
      type: "blocks",
      label: "Page Sections",
      minRows: 1,
      maxRows: 20,
      blocks: [
        QuoteBlock,
        Content,
        // other blocks
      ],
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,

      admin: {
        description: "Upload a thumbnail image for the playground item.",
        position: "sidebar",
      },
    },
  ],
};

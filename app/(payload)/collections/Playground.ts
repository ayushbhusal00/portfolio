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
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "URL-safe identifier, e.g. `gun-fight` (used in /playground/[slug]).",
      },
    },

    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Upload a thumbnail image for the playground item.",
        position: "sidebar",
      },
    },
    {
      name: "tagline",
      type: "text",
    },
    {
      name: "overview",
      type: "textarea",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Game", value: "Game" },
        { label: "Motion", value: "Motion" },
        { label: "3D Animation", value: "3d Animation" },
      ],
    },
    {
      name: "url",
      type: "text",
      admin: {
        description:
          "Optional custom URL. Defaults to `/playground/[slug]` if left empty.",
      },
    },
    {
      name: "color",
      type: "text",
    },

    {
      name: "role",
      type: "text",
    },
    {
      name: "duration",
      type: "text",
    },
    {
      name: "readTime",
      type: "number",
    },
    {
      name: "isPasswordProtected",
      type: "checkbox",
      defaultValue: false,
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
      name: "gallery",
      type: "array",
      label: "Gallery",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "videoUrl",
      type: "text",
    },
    {
      name: "websiteLink",
      type: "text",
    },
    {
      name: "sections",
      type: "array",
      label: "Page Sections",
      fields: [
        {
          name: "heading",
          type: "text",
        },
        {
          name: "content",
          type: "textarea",
        },
        {
          name: "videoUrl",
          type: "text",
        },
        {
          name: "bullets",
          type: "array",
          fields: [
            {
              name: "item",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

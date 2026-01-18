// app/(payload)/collections/Pages.ts
import type { CollectionConfig } from "payload";
import {
  lexicalEditor,
  LinkFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  HeadingFeature,
  OrderedListFeature,
  UnorderedListFeature,
  BlockquoteFeature,
} from "@payloadcms/richtext-lexical";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Content",
  },
  access: {
    read: () => true, // public read — adjust as needed
  },
  timestamps: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Page Title",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "Used in the URL (auto-generated from title if empty)",
      },
      hooks: {
        beforeChange: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            }
            return value;
          },
        ],
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,

          HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3"] }),
          OrderedListFeature(),
          UnorderedListFeature(),
          BlockquoteFeature(),
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          StrikethroughFeature(),
          LinkFeature({
            enabledCollections: ["pages"], // safe starting point – add 'posts' later after creating it + generate:types
          }),
        ],
      }),
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "seo",
      type: "group",
      label: "SEO",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          name: "metaTitle",
          type: "text",
          label: "Meta Title",
          maxLength: 100,
        },
        {
          name: "metaDescription",
          type: "textarea",
          label: "Meta Description",
          maxLength: 160,
        },
      ],
    },
  ],
};

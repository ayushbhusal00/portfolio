import { CollectionConfig } from "payload";

import { Content } from "../blocks/Content";
import QuoteBlock from "../blocks/QuoteBlock";

export const Project: CollectionConfig = {
  slug: "project",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "updatedAt"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  timestamps: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Project Title",
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
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)+/g, "");
            }
            return value;
          },
        ],
      },
    },
    {
      name: "tagline",
      type: "text",
      label: "Tagline",
    },
    {
      name: "overview",
      type: "textarea",
      label: "Project Overview",
    },
    {
      name: "date",
      type: "text",
      label: "Date",
    },
    {
      name: "readTime",
      type: "text",
      label: "Read Time",
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Case study", value: "Case study" },
        { label: "Product", value: "Product" },
        { label: "Ecosystem", value: "Ecosystem" },
        { label: "User story", value: "User story" },
      ],
      label: "Project Category",
    },
    {
      name: "url",
      type: "text",
      label: "URL",
    },
    {
      name: "color",
      type: "text",
      label: "Color",
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Upload a thumbnail image for the project.",
        position: "sidebar",
      },
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Upload a hero image for the project.",
        position: "sidebar",
      },
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
      name: "role",
      type: "text",
      label: "Role",
    },
    {
      name: "duration",
      type: "text",
      label: "Duration",
    },
    {
      name: "videoUrl",
      type: "text",
      label: "Video URL",
    },
    {
      name: "isPasswordProtected",
      type: "checkbox",
      label: "Password Protected",
    },
    {
      name: "sections",
      type: "array",
      label: "Sections",
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

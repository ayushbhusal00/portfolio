// app/(payload)/collections/Media.ts
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Media",
    plural: "Media",
  },
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "mimeType", "filesize", "updatedAt"],
    group: "Media",
  },
  access: {
    read: () => true, // usually public so images can be displayed on frontend
  },
  upload: {
    staticDir: "media", // folder in /public/media or wherever your static assets live
    mimeTypes: ["image/*", "application/pdf", "video/mp4", "video/webm"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 432,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined, // auto height
        position: "centre",
      },
      {
        name: "full",
        width: 1920,
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    focalPoint: true, // nice for cropping control in admin
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      required: true,
      admin: {
        description: "Describe the image for screen readers and SEO",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
      admin: {
        description: "Optional short description shown below the image",
      },
    },
    {
      name: "credit",
      type: "text",
      label: "Credit / Photographer",
      admin: {
        position: "sidebar",
      },
    },
  ],
};

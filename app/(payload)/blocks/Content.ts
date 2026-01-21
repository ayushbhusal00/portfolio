import type { Block } from "payload";

export const Content: Block = {
  slug: "content",
  fields: [
    {
      name: "alignment",
      type: "radio",
      options: [
        { label: "Text left / Image right", value: "left" },
        { label: "Text right / Image left", value: "right" },
      ],
      defaultValue: "left",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "richText",
      type: "richText",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

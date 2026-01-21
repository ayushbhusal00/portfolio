import { Block } from "payload";

const QuoteBlock: Block = {
  slug: "quote",
  imageURL: "https://example.com/thumbnails/quote-block-480x320.jpg",
  imageAltText: "Quote block with text and attribution",
  fields: [
    {
      name: "quoteText",
      type: "text",
      required: true,
    },
  ],
};

export default QuoteBlock;

import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import { Pages } from "./app/(payload)/collections/Pages";
import { Media } from "./app/(payload)/collections/Media";
import { Playground } from "./app/(payload)/collections/Playground";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { Project } from "./app/(payload)/collections/Project";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Pages, Media, Playground, Project],
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
});

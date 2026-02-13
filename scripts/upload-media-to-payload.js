import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';

// CONFIGURATION
const MEDIA_DIR = path.join(process.cwd(), 'media');
const PAYLOAD_API = process.env.PAYLOAD_API_URL || 'http://localhost:3000/api/media';
const PAYLOAD_API_KEY = process.env.PAYLOAD_API_KEY || '';

async function uploadFileToPayload(filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));
  // Add required fields for your Media collection here if needed

  const res = await fetch(PAYLOAD_API, {
    method: 'POST',
    headers: {
      ...form.getHeaders(),
      Authorization: `users API-Key ${PAYLOAD_API_KEY}`,
    },
    body: form,
  });
  if (!res.ok) {
    throw new Error(`Failed to upload ${filePath}: ${res.statusText}`);
  }
  return res.json();
}

async function main() {
  const files = fs.readdirSync(MEDIA_DIR);
  for (const file of files) {
    const filePath = path.join(MEDIA_DIR, file);
    if (fs.statSync(filePath).isFile()) {
      try {
        console.log(`Uploading ${file}...`);
        const result = await uploadFileToPayload(filePath);
        console.log(`Uploaded:`, result);
      } catch (err) {
        console.error(err);
      }
    }
  }
}

main();

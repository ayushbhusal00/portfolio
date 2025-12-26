import React from "react";

export default function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <footer className='px-4 text-center text-white py-4 bg-[#2a2a2a]'>
      <p className='mb-2 text-xs'>
        Made with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel for Hosting.
        &copy; {currentYear}, All rights reserved.
      </p>
    </footer>
  );
}

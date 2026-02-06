"use client";

import Header from "@/components/header";
import Contact from "@/components/contact";
import Image from "next/image";
import LostImage from "@/public/404.svg";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className='flex flex-col items-center relative  bg-[#fafafa] dark:bg-[#16171d]'>
      <Header />
      {/* CENTERED 404 SECTION */}
      <div className='w-full border-x border-[#e6e8eb] max-w-7xl py-48 flex-1 flex items-center justify-center text-center px-6'>
        <div className='max-w-md'>
          <div className='w-full flex  justify-center'>
            <Image
              alt='Image seems lost too, my bad'
              className='text-center w-[50%]'
              src={LostImage}
            />
          </div>
          <h1 className='text-3xl font-semibold'>Page not found — 404</h1>
          <p className='mt-4 text-neutral-600'>
            The page you&apos;re trying to access does not exist. We probably
            just forgot to add a redirect.
          </p>
        </div>
      </div>
      <Contact />
    </main>
  );
}

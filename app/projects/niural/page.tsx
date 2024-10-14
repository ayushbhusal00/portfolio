import Image from "next/image";
import React from "react";
import HeroSection from "@/public/hero-section.png";

export default function Niural() {
  return (
    <main className='flex flex-col gap-5'>
      <section className='w-full p-0 m-0 absolute top-0'>
        <Image
          className='w-full h-[50vh] object-cover'
          src={HeroSection}
          alt={"Hero Section For Weplay"}
        />
      </section>
      <section className='pt-[50vh] max-w-[50rem] mx-auto'>
        <h1>Problem</h1>
        <p>
          Notwithstanding that the customer satisfaction has remained relatively
          constant over one and a half years. WePlay has seen little to no
          growth. WePlay lacks features and functions customers need solving and
          doesn’t understand what efforts could encourage the users to use the
          app.
        </p>
      </section>
      <section className='max-w-[50rem] mx-auto'>
        <h1>Proposed Solution</h1>
        <p>
          After conducting several surveys and interviews with the users, we
          found that there exists a need for an online application for WePlay. I
          helped WePlay Nepal to redefine its user experience and confirm that
          the new application intends to solve actual user problems. The key UX
          challenge has been to understand and incorporate users’
          wants(features) while speeding and easing the cognition load to book
          and manage courts while incorporating all other additional features.
        </p>
      </section>
      <section className='max-w-[50rem] mx-auto'>
        <h1>Design Process</h1>
        <p>
          After conducting several surveys and interviews with the users, we
          found that there exists a need for an online application for WePlay. I
          helped WePlay Nepal to redefine its user experience and confirm that
          the new application intends to solve actual user problems. The key UX
          challenge has been to understand and incorporate users’
          wants(features) while speeding and easing the cognition load to book
          and manage courts while incorporating all other additional features.
        </p>
      </section>
    </main>
  );
}

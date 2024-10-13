import React from "react";

import Image from "next/image";
import Friends1 from "@/public/friends1.png";
import Friends2 from "@/public/friends2.png";
import PassionToCook from "@/public/passion-to-cook.png";
import NotWorking from "@/public/when-i-am-not-working.svg";

export default function OutsideWork() {
  return (
    <section className='max-w-[70rem] mx-auto text-center leading-8 scroll-mt-28'>
      <div className='relative py-[10rem] flex flex-col sm:flex-row items-center text-left gap-[6rem] sm:gap-[2rem] mb-20'>
        <Image
          className='absolute top-0 left-0'
          src={NotWorking}
          alt='Text Explaining When I am Not Working'
        />
        <div className='relative w-[40rem] min-h-[5rem] sm:w-[60%] h-auto flex flex-row gap-4 sm:gap-[4rem] items-center justify-center'>
          {/* First Image Card */}
          <div className='absolute -rotate-2 left-2 w-[10rem]'>
            <Image
              src={PassionToCook}
              alt='Enjoying Cooking by myself'
              className='rounded-lg shadow-lg'
            />
          </div>

          {/* Second Image Card */}
          <div className='absolute w-[10rem]'>
            <Image
              src={Friends2}
              alt='Image of my friends attending events'
              className='rounded-lg shadow-lg'
            />
          </div>
          {/* Third Image Card */}
          <div className='absolute rotate-2 right-2 w-[10rem]'>
            <Image
              src={Friends1}
              alt='Image of my friends attending events'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
        <div className='w-70 sm:w-[60%]'>
          <p>
            Apart from work I enjoy hanging out with friends and cook or play
            music on my own.
          </p>
        </div>
      </div>
    </section>
  );
}

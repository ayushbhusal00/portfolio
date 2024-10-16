import React from "react";
import Image from "next/image";
import Friends1 from "@/public/friends1.png";
import Gym from "@/public/gym.png";
import PassionToCook from "@/public/passion-to-cook.png";
import NotWorking from "@/public/when-i-am-not-working.svg";

export default function OutsideWork() {
  return (
    <section className='w-full sm:max-w-[50rem] mx-auto text-center leading-8 scroll-mt-28'>
      <div className='relative py-[6rem] flex flex-col sm:flex-row items-center text-left gap-[6rem] sm:gap-[2rem] mb-20'>
        <Image
          className='absolute top-0 left-0'
          src={NotWorking}
          alt='Text Explaining When I am Not Working'
        />
        <div className='relative w-full min-h-[5rem] sm:w-[60%] h-auto flex flex-row items-center justify-center'>
          {/* First Image Card */}
          <div className='absolute -rotate-2 left-0 sm:-left-[1rem] w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:-rotate-6 hover:translate-y-[-10px]'>
            <Image
              src={PassionToCook}
              alt='Enjoying Cooking by myself'
              className='rounded-lg shadow-lg'
            />
          </div>

          {/* Second Image Card */}
          <div className='absolute w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:translate-y-[-10px]'>
            <Image
              src={Gym}
              alt='Passion to gym'
              className='rounded-lg shadow-lg'
            />
          </div>

          {/* Third Image Card */}
          <div className='absolute rotate-2 right-0 sm:-right-[0.5rem] w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:translate-y-[-10px]'>
            <Image
              src={Friends1}
              alt='Image of my friends attending events'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
        <div className='sm:w-[50%]'>
          <p>
            As much as I enjoy my work, I also enjoy living life to the fullest.
            I am currently learning music, cooking, art and ways to stay
            healthy. I also enjoy spending my time with friends whenever I am
            not learning to code or design.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Friends1 from "@/public/friends1.png";
import Gym from "@/public/gym.png";
import PassionToCook from "@/public/passion-to-cook.png";

import NotWorking from "@/public/when-i-am-not-working.svg";

import Gaming from "@/public/gaming.png";
import Rendering from "@/public/rendering.png";
import Animation from "@/public/animation.png";
import Link from "next/link";

export default function OutsideWork() {
  return (
    <section className='flex justify-center items-center px-8 py-16 lg:px-40 xl:px-60 text-center leading-8 scroll-mt-28 border-t border-[#e6e8eb]'>
      <div className='relative py-[6rem] flex flex-col sm:flex-row items-center text-left gap-[6rem] sm:gap-[2rem] md:my-20'>
        <Image
          className='absolute top-0 left-0'
          src={NotWorking}
          alt='Text Explaining When I am Not Working'
        />
        {/* <div className='relative w-full min-h-[5rem] sm:w-[60%] h-auto flex flex-row items-center justify-center'>
          
          <div className='absolute -rotate-2 left-0 sm:-left-[1rem] w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:-rotate-6 hover:translate-y-[-10px]'>
            <Image
              src={PassionToCook}
              alt='Enjoying Cooking by myself'
              className='rounded-lg shadow-lg'
            />
          </div>

          
          <div className='absolute w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:translate-y-[-10px]'>
            <Image
              src={Gym}
              alt='Passion to gym'
              className='rounded-lg shadow-lg'
            />
          </div>

          
          <div className='absolute rotate-2 right-0 sm:-right-[0.5rem] w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:translate-y-[-10px]'>
            <Image
              src={Friends1}
              alt='Image of my friends attending events'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div> */}
        <div className='relative w-full min-h-[5rem] sm:w-[60%] h-auto flex flex-row items-center justify-center'>
          {/* First Image Card */}
          <div className='absolute -rotate-2 left-0 sm:-left-[1rem] w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:-rotate-6 hover:translate-y-[-10px]'>
            <Link href='/playground/2'>
              <Image
                src={Gaming}
                alt='Gaming Work'
                className='rounded-lg shadow-lg'
              />
            </Link>
          </div>

          {/* Second Image Card */}
          <div className='absolute w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:translate-y-[-10px]'>
            <Link href='/playground/1'>
              <Image
                src={Rendering}
                alt='3D Rendering Work'
                className='rounded-lg shadow-lg'
              />
            </Link>
          </div>

          {/* Third Image Card */}
          <div className='absolute rotate-2 right-0 sm:-right-[0.5rem] w-[10rem] transform transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:translate-y-[-10px]'>
            <Link href='/playground/0'>
              <Image
                src={Animation}
                alt='3d Animation Work'
                className='rounded-lg shadow-lg'
              />
            </Link>
          </div>
        </div>
        <div className='sm:w-[50%]'>
          {/* <p>
            As much as I enjoy my work, I also enjoy living life to the fullest.
            I am currently learning music, cooking, art and ways to stay
            healthy. I also enjoy spending my time with friends whenever I am
            not learning to code or design.
          </p> */}
          <p>
            As much as I enjoy my work, I also enjoy coding applications where I
            can focus beyond pixel. I keep experimenting with new technologies
            and frameworks to enhance my skills. Currently I am exploring AI
            Designs, 3D rendering, and Mobile Development.
          </p>
        </div>
      </div>
    </section>
  );
}

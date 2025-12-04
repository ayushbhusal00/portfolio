"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

type ProjectProps = {
  index: number;
  title: string;
  description: string;
  // tags: string[];
  imageUrl: StaticImageData;
};

export default function Project({
  index,
  title,
  description,
  // tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();

  return (
    <motion.section
      ref={ref}
      onClick={() => router.push(`/projects/${index}`)}
      className={clsx(
        `group w-[100%] md:w-[50rem] flex-col  sm:pr-8 mb-3 sm:mb-8 sm:pl-8 rounded-3xl bg-gray-50 dark:bg-gray-800 dark:bg-opacity-60 hover:bg-gradient-to-br cursor-pointer sticky top-[140px] sm:flex-row sm:h-[320px] shadow-md hover:shadow-xl transition-all duration-300`
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className='sm:block border border-black/8 overflow-hidden rounded-3xl w-full h-[320px] object-cover'
      />
      <div className='mx-8   pt-4 pb-7 px-5 sm:pl-0 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-between h-full last:mb-0'>
        <div>
          <h3 className='text-2xl font-semibold '>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-500 dark:text-white/60 hover:text-black/60'>
            {description}
          </p>
        </div>
        {/* Tags */}
        {/* <ul className='flex flex-wrap mt-4 gap-2'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul> */}
      </div>
    </motion.section>
  );
}

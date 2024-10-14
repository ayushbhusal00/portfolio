import { worksData } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type WorkProps = (typeof worksData)[number];

export default function Work({
  title,
  description,
  tags,
  imageUrl,
}: WorkProps) {
  const ref = useRef<HTMLElement>(null);

  return (
    <motion.section
      ref={ref}
      className={clsx(
        `group max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 sm:pl-8 transition rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-300 dark:hover:from-purple-600/20 dark:hover:to-purple-900/40 cursor-pointer `
      )}
    >
      <div className='pt-4 pb-7 px-5 sm:pl-0 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-between h-full last:mb-0 sm:group-even:ml-[18rem]'>
        <div>
          <h3 className='text-2xl font-semibold '>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-500 dark:text-white/60 hover:text-black/60'>
            {description}
          </p>
        </div>
        {/* Tags */}
        <ul className='flex flex-wrap mt-4 gap-2'>
          {tags.map((tag, index) => (
            <li
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={90}
        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 sm:group-even:-left-40 group-even:group-hover:rotate-2'
      />
    </motion.section>
  );
}

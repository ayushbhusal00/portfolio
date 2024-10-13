import { worksData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
// import clsx from "clsx";

type WorkProps = (typeof worksData)[number];

export default function Work({
  title,
  description,
  tags,
  imageUrl,
  colorFrom,
  colorTo,
}: WorkProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // console.log(colorFrom, colorTo);
  // Dynamically generate hover classes based on colorFrom and colorTo
  // const hoverBgClass = `hover:bg-gradient-to-br hover:from-${colorFrom} hover:to-${colorTo}`;

  return (
    <motion.section
      ref={ref}
      className={`group bg-gray-100 dark:bg-white/10 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 sm:pl-8 transition rounded-lg hover:bg-gradient-to-br hover:from-${colorFrom} hover:to-${colorTo}`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-between h-full last:mb-0 sm:group-even:ml-[18rem]'>
        <div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {description}
          </p>
        </div>
        {/* tags */}
        <ul className='flex flex-wrap mt-4 gap-2'>
          {tags.map((tag, index) => (
            <li
              className=' bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full'
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
        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] sm:group-even:-left-40 
        group-hover:-transtate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 
        
        group-even:group-hover:-transtate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        transition group-hover:scale-[1.04]'
      />
    </motion.section>
  );
}

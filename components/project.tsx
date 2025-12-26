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
  imageUrl: StaticImageData;
};

export default function Project({
  index,
  title,
  description,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();

  return (
    <motion.section
      ref={ref}
      onClick={() => router.push(`/projects/${index}`)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={clsx(
        "w-full group cursor-pointer",
        "sticky top-[140px]",
        "border-t border-black/10 dark:border-white/10",
        "bg-white dark:bg-gray-900",
        "overflow-hidden",
        "transition-all duration-300"
      )}
    >
      <div className='flex flex-col md:flex-row md:gap-10 p-4 md:p-6  '>
        {/* Image */}
        <div className='relative hidden md:block shrink-0 origin-right bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_6px)]'>
          <div className='absolute inset-0 z-10 hidden md:block rounded-xl shadow-2xl  ' />
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className='
                        w-[430px]
                        h-[260px]
                        md:h-[320px]
                        rounded-xl
                        object-cover
                        object-center
                        transition-transform duration-500
                            group-hover:scale-[1.04]
                      '
          />
        </div>

        {/* Content */}
        <div className='flex flex-col justify-center md:w-[45%] px-2 md:px-0  p-4 md:p-6 '>
          {/* Optional tag */}
          <span className='mb-3 inline-block w-fit rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-600 dark:text-white/70'>
            Case Study
          </span>

          <h3 className='text-2xl md:text-3xl font-semibold tracking-tight'>
            {title}
          </h3>

          <p className='mt-3 text-sm md:text-base leading-relaxed text-gray-600 dark:text-white/60'>
            {description}
          </p>

          {/* CTA */}
          <div className='mt-6 flex items-center gap-2 text-sm font-medium'>
            <span className='text-black dark:text-white'>View project</span>
            <span className='transition-transform duration-300 group-hover:translate-x-1'>
              →
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

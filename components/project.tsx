"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type ProjectProps = {
  index: number;
  title: string;
  description: string;
  imageUrl: StaticImageData | string;
  isPasswordProtected?: boolean;
  href?: string;
};

export default function Project({
  index,
  title,
  description,
  imageUrl,
  isPasswordProtected,
  href,
}: ProjectProps) {
  const router = useRouter();

  return (
    <motion.section
      onClick={() => router.push(href ?? `/projects/${index}`)}
      className='group cursor-pointer border-b border-border-base bg-bg-base hover:bg-bg-subtle transition-colors duration-500 overflow-hidden'
    >
      <div className='grid grid-cols-1 md:grid-cols-12 items-center'>
        {/* Number Label */}
        <div className='hidden md:flex md:col-span-1 border-r border-border-base self-stretch items-center justify-center'>
          <span className='text-[10px] font-mono text-text-subtle opacity-40 group-hover:opacity-100 transition-opacity'>
            0{index + 1}
          </span>
        </div>

        {/* Text Content */}
        <div className='md:col-span-6 p-8 md:p-12'>
          <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-text-base mb-4 italic font-serif'>
            {title}
          </h2>
          <p className='text-text-subtle text-base max-w-sm leading-relaxed mb-8'>
            {description}
          </p>

          <div className='flex items-center gap-3'>
            <span className='text-[10px] font-mono uppercase tracking-widest text-text-base'>
              View Case Study
            </span>
            <div className='h-[1px] w-12 bg-border-base group-hover:w-20 transition-all duration-500' />
          </div>
        </div>

        {/* Image - Full bleed in its column */}
        <div className='md:col-span-5 relative aspect-video overflow-hidden bg-bg-subtle'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={clsx(
              "object-cover transition-transform duration-700 ease-in-out group-hover:scale-105",
              isPasswordProtected && "blur-sm",
            )}
          />
          {isPasswordProtected && (
            <div className='absolute top-4 left-4'>
              <span className='px-2 py-1 rounded-full text-[9px] uppercase font-mono bg-white/80 border border-border-base'>
                Protected
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

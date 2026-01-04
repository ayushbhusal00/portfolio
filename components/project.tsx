"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, verifyToken } from "@/lib/jwt";

type ProjectProps = {
  index: number;
  title: string;
  description: string;
  imageUrl: StaticImageData | string;
  isPasswordProtected?: boolean;
};

export default function Project({
  index,
  title,
  description,
  imageUrl,
  isPasswordProtected,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      if (!isPasswordProtected) {
        setHasAccess(true);
        return;
      }

      const token = getToken();
      if (token) {
        const isValid = await verifyToken(token);
        setHasAccess(isValid);
      } else {
        setHasAccess(false);
      }
    };

    checkAccess();
  }, [isPasswordProtected]);

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
        "bg-[#fafafa] dark:bg-gray-900",
        "overflow-hidden",
        "transition-all duration-300"
      )}
    >
      <div className='flex flex-col md:flex-row '>
        {/* Image */}
        <div className='relative md:block shrink-0 p-4 md:p-6 origin-right'>
          <div className='absolute inset-0 z-10 hidden md:block ' />
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className={clsx(
              "w-[430px] h-[260px] md:h-[320px] rounded-xl shadow-2xl object-cover object-center transition-transform duration-500 group-hover:scale-[1.04] shadow-elevation-card-rest",
              isPasswordProtected && !hasAccess && "blur-sm"
            )}
          />
          {/* Password Protected Badge */}
          {isPasswordProtected && !hasAccess && (
            <div className='absolute bottom-6 right-6 z-20'>
              <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-zinc-700 border border-zinc-200 shadow-sm'>
                Password Protected
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='flex flex-col text-start justify-center md:w-[45%]  p-6 md:p-6 '>
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

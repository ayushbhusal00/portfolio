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
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(() => !isPasswordProtected);

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

  console.log("href", href);
  return (
    <motion.section
      ref={ref}
      onClick={() => router.push(href ?? `/projects/${index}`)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={clsx(
        "w-full group cursor-pointer",
        "m-2 hover:bg-bg-subtle rounded-xl",
        "bg-bg-base",
        "overflow-hidden",
        "transition-all duration-300 py-6rem",
      )}
    >
      <div className='flex flex-col md:flex-col pb-[5rem]'>
        {/* Image */}
        <div className='relative md:block shrink-0 p-4 md:p-6 origin-right'>
          <div className='absolute inset-0 z-10 hidden md:block ' />
          <div className='relative aspect-3/4 h-[500px] w-full overflow-hidden rounded-xl shadow-2xl shadow-elevation-card-rest'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              loading='lazy'
              quality={80}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              unoptimized={
                typeof imageUrl === "string" && imageUrl.includes("/api/media/")
              }
              className={clsx(
                "object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]",
                isPasswordProtected && !hasAccess && "blur-sm",
              )}
            />
            {/* Password Protected Badge */}
            {isPasswordProtected && !hasAccess && (
              <div className='absolute top-2 left-2 z-20'>
                <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-bg-base/90 backdrop-blur-sm text-text-subtle border border-border-base shadow-sm'>
                  Password Protected
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-col text-start justify-center p-6 md:p-6 '>
          {/* Optional tag */}
          <span className='mb-3 inline-block w-fit rounded-full bg-bg-base px-3 py-1 text-xs font-medium text-text-subtle border border-border-base  shadow-sm'>
            Case Study
          </span>

          <h3
            className='text-2xl md:text-3xl text-text-base font-semibold tracking-tight'
            style={{
              fontFamily: "Instryment Sans, serif",
              fontStyle: "italic",
            }}
          >
            {title}
          </h3>

          <p className='mt-3 text-sm md:text-base leading-relaxed text-text-subtle'>
            {description}
          </p>

          {/* CTA */}
          <div className='mt-6 flex items-center gap-2 text-sm font-medium'>
            <span className='text-text-base'>View project</span>
            <span className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group rounded-full border hover:text-white hover:bg-[radial-gradient(at_50%_75%,theme(colors.blue.300),theme(colors.blue.500),theme(colors.blue.400))] hover:shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.25),0px_4px_8px_1px_rgba(10,10,10,0.15)_inset,0px_-2px_2px_0px_rgba(10,10,10,0.15)_inset] hover:border-blue-700 active:scale-95 cursor-pointer relative size-8 transition-all duration-200 text-white bg-[radial-gradient(at_50%_75%,theme(colors.blue.300),theme(colors.blue.500),theme(colors.blue.400))] border-blue-700 shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.25),0px_4px_8px_1px_rgba(10,10,10,0.15)_inset,0px_-2px_2px_0px_rgba(10,10,10,0.15)_inset] md:text-stone-500 md:bg-[radial-gradient(at_50%_75%,theme(colors.stone.100),theme(colors.stone.200),theme(colors.stone.300))] md:border-stone-400 md:shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.25),0px_4px_8px_1px_rgba(10,10,10,0.15)_inset,0px_-2px_2px_0px_rgba(10,10,10,0.15)_inset] md:group-hover:text-white md:group-hover:bg-[radial-gradient(at_50%_75%,theme(colors.blue.300),theme(colors.blue.500),theme(colors.blue.400))] md:group-hover:border-blue-700 md:group-hover:shadow-[0px_2px_2px_-1px_rgba(0,0,0,0.25),0px_4px_8px_1px_rgba(10,10,10,0.15)_inset,0px_-2px_2px_0px_rgba(10,10,10,0.15)_inset]'>
              →
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

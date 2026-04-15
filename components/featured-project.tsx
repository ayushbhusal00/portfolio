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

export default function FeaturedProject({
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
        "hover:bg-bg-subtle rounded-xl",
        "bg-bg-base",
        "overflow-hidden",
        "transition-all duration-300 py-6rem px-6"
      )}
    >
      <div className=' flex py-5 gap-4'>
        {/* Image */}
        <div className='relative md:block shrink-0 origin-right'>
          <div className='relative w-[95px] h-[75px] overflow-hidden rounded-xl shadow-2xl shadow-elevation-card-rest'>
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
                isPasswordProtected && !hasAccess && "blur-sm"
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
        <div className='flex flex-col text-start justify-center '>
          <p
            className='text-lg md:text-xl text-text-base font-semibold tracking-tight'
            // style={{
            //   fontFamily: "Instryment Sans, serif",
            // }}
          >
            {title}
          </p>

          <p className='mt-3 text-sm md:text-base leading-relaxed text-text-subtle'>
            from our projects
          </p>
        </div>
      </div>
    </motion.section>
  );
}

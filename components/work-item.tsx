"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getToken, verifyToken } from "@/lib/jwt";

interface Props {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  isPasswordProtected?: boolean;
}

export default function WorkItem({
  index,
  title,
  imageUrl,
  category,
  isPasswordProtected,
}: Props) {
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
    <Link
      href={`/projects/${index}`}
      className='
        group relative flex flex-col gap-4
        px-6 py-8 lg:px-16 lg:py-16
        transition-colors hover:bg-[#f4f4f5]

        border-[#e6e8eb]
        md:border-r even:md:border-r-0 even:lg:border-r xl:[&:nth-child(3n)]:border-r-0 border-b
        
      '
    >
      {/* Image */}
      <div className='relative aspect-[16/10] overflow-hidden rounded-lg bg-zinc-100 shadow-elevation-card-rest mb-4'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={`
            object-cover
            transition-all duration-300
            group-hover:grayscale-0
            group-hover:scale-[1.02]
            ${isPasswordProtected && !hasAccess ? "blur-sm" : ""}
          `}
        />
        {/* Password Protected Badge */}
        {isPasswordProtected && !hasAccess && (
          <div className='absolute bottom-2 right-2 z-10'>
            <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-zinc-700 border border-zinc-200 shadow-sm'>
              Password Protected
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1'>
        <h3 className='text-[15px] font-medium leading-5 text-zinc-900'>
          {title}
        </h3>

        {category && (
          <span className='text-[13px] text-zinc-500'>{category}</span>
        )}

        <span className='pt-1 text-[13px] text-zinc-400 group-hover:text-zinc-600'>
          View project →
        </span>
      </div>
    </Link>
  );
}

"use client";

export default function FeaturedCardSkeleton() {
  return (
    <div className='w-full'>
      <section className='w-full rounded-xl bg-bg-base overflow-hidden py-6rem px-6'>
        <div className='flex py-5 gap-4 items-center'>
          {/* Thumbnail */}
          <div className='relative shrink-0'>
            <div className='w-[95px] h-[75px] rounded-xl bg-bg-subtle animate-pulse' />
          </div>

          {/* Text Content */}
          <div className='flex flex-col justify-center w-full'>
            <div className='h-5 w-3/4 rounded bg-bg-subtle animate-pulse' />
            <div className='h-4 w-1/3 rounded bg-bg-subtle animate-pulse mt-3' />
          </div>
        </div>
      </section>
    </div>
  );
}

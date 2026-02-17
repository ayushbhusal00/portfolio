"use client";

export default function ProjectCardSkeleton() {
  return (
    <div
      className='
        w-full
        m-2 rounded-xl
        bg-bg-base
        overflow-hidden py-6rem
      '
    >
      <div className='flex flex-col md:flex-col pb-[5rem]'>
        <div className='relative md:block shrink-0 p-4 md:p-6 origin-right'>
          <div className='relative aspect-3/4 md:h-[500px] w-full overflow-hidden rounded-xl bg-bg-subtle animate-pulse' />
        </div>
        <div className='flex flex-col text-start justify-center p-6 md:p-6'>
          <div className='h-6 w-20 rounded-full bg-bg-subtle animate-pulse mb-3' />
          <div className='h-8 w-4/5 rounded bg-bg-subtle animate-pulse' />
          <div className='h-4 w-full rounded bg-bg-subtle animate-pulse mt-3' />
          <div className='h-4 w-2/3 rounded bg-bg-subtle animate-pulse mt-2' />
        </div>
      </div>
    </div>
  );
}

"use client";

export default function WorkItemSkeleton() {
  return (
    <div
      className='
        flex flex-col gap-4
        px-6 py-8 lg:px-16 lg:py-16
        border-border-base
        md:border-r even:md:border-r-0 even:lg:border-r xl:[&:nth-child(3n)]:border-r-0 border-b
      '
    >
      <div className='relative aspect-[16/10] overflow-hidden rounded-lg bg-bg-subtle animate-pulse mb-4' />
      <div className='flex flex-col gap-2'>
        <div className='h-5 w-2/3 rounded bg-bg-subtle animate-pulse' />
        <div className='h-4 w-1/4 rounded bg-bg-subtle animate-pulse' />
        <div className='h-4 w-1/5 rounded bg-bg-subtle animate-pulse mt-1' />
      </div>
    </div>
  );
}

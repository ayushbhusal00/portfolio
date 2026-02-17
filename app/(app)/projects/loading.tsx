import WorkItemSkeleton from "@/components/work-item-skeleton";
import HeroSection from "@/components/hero-section";
import ProjectsInProd from "@/public/projects-in-prod.png";

export default function ProjectsLoading() {
  return (
    <main className='bg-bg-base'>
      <section className='md:mx-16 border-x border-border-base'>
        <HeroSection
          image={ProjectsInProd}
          tag='Projects'
          title='Featured and Selected works'
          subtitle='Selected work from my journey designing and building thoughtful, scalable, and user-driven digital experiences.'
          category='UX · UI Systems · Motion · Frontend · Brand Identity'
        />
        <header className='px-16 py-8 w-full flex justify-between'>
          <div className='h-8 w-28 rounded bg-bg-subtle animate-pulse' />
          <div className='flex gap-2'>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className='h-8 w-20 rounded-full bg-bg-subtle animate-pulse'
              />
            ))}
          </div>
        </header>
        <div className='w-full divide-y divide-border-base'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-y border-border-base'>
            {Array.from({ length: 6 }).map((_, i) => (
              <WorkItemSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

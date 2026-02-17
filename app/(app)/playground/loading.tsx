import WorkItemSkeleton from "@/components/work-item-skeleton";
import HeroSection from "@/components/hero-section";
import PlaygroundImage from "@/public/playground.png";

export default function PlaygroundLoading() {
  return (
    <main className='flex flex-col items-center relative bg-bg-base'>
      <section className='md:mx-16 border-x border-border-base'>
        <HeroSection
          image={PlaygroundImage}
          tag='Playground'
          title='Exploring ideas beyond production work'
          subtitle='I loose sleep to design sprints and my silly little sidequests. Design is my passion and I make time to code cool little tools or experiments.'
          category='Concepts · Motion · UI Systems · Frontend Experiments · Learning'
        />
        <header className='px-16 py-8 w-full flex justify-between'>
          <div className='h-8 w-32 rounded bg-bg-subtle animate-pulse' />
          <div className='flex gap-2'>
            {[1, 2, 3].map((i) => (
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

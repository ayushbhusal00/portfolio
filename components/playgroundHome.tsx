import { StampCard } from "./StampCard";

export default function PlaygroundHome() {
  return (
    <footer className='w-full bg-[#fafafa] border-t border-neutral-200'>
      <div className='mx-auto max-w-6xl px-6 py-32'>
        <div className='grid grid-cols-1 gap-16 md:grid-cols-2 items-start'>
          {/* Left Content */}
          <div className='space-y-8'>
            <h3 className='text-3xl md:text-4xl font-medium text-neutral-900 leading-tight'>
              Powered by pixels and <em className='italic'>way</em> too many
              desserts
            </h3>

            {/* Social Links */}
            <nav className='flex flex-row gap-4 text-lg'>
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/ayush-bhusal-331143119/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/bhusalayush/",
                },
                { label: "Github", href: "https://github.com/ayushbhusal00" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-neutral-700 hover:text-neutral-900 transition-colors'
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Content */}
          <div className='grid grid-cols-1 gap-10'>
            {/* Stamped Image Cards */}
            <div className='relative h-[260px]'>
              <StampCard
                src='https://framerusercontent.com/images/TM6TWSJ1aYNs85pzlLe1EES6YZA.jpg'
                className='rotate-[15deg] left-0'
              />
              <StampCard
                src='https://framerusercontent.com/images/2f5snXk84tVGKNNF6oI1v6B3LLo.png'
                className='-rotate-[10deg] right-0'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

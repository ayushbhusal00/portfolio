import Image from "next/image";

// Logo Imports
import Niural from "@/public/niural-ai.svg";
import IDA from "@/public/ida.svg";
import PrimeInternational from "@/public/prime-international.svg";
import VesperFineWines from "@/public/Logo-VesperFineWines.png";
import OhoDigital from "@/public/oho-digital.svg";

const logos = [
  { src: Niural, alt: "Niural: Global payroll & payments platform" },
  { src: IDA, alt: "Infinity Digital Agency" },
  { src: PrimeInternational, alt: "Prime International" },
  { src: VesperFineWines, alt: "Vesper Fine Wines" },
  { src: OhoDigital, alt: "Oho Digital" },
];

export default function Companies() {
  return (
    <section className='w-full border-b border-border-base bg-bg-base py-8 px-0 overflow-x-hidden'>
      {/* Scrolling container wrapper */}
      <div className='relative w-full max-w-6xl mx-auto overflow-x-hidden'>
        {/* Gradient fade edges */}
        <div className='pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-bg-base to-transparent z-10' />
        <div className='pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-bg-base to-transparent z-10' />

        {/* Scrolling logos */}
        <div className='flex animate-logo-scroll gap-8 md:gap-16 w-max overflow-x-visible'>
          {/* Duplicate logos for smooth infinite scroll */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className='flex items-center justify-center w-[120px] md:w-[160px] h-[48px] md:h-[60px] flex-shrink-0'
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className='object-contain w-full h-full grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

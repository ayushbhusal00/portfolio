import Image from "next/image";

//Logo Imports
import Niural from "@/public/niural-ai.svg";
import IDA from "@/public/ida.svg";
import PrimeInternational from "@/public/prime-international.svg";
import VesperFineWines from "@/public/Logo-VesperFineWines.png";
import OhoDigital from "@/public/oho-digital.svg";

export default function Companies() {
  return (
    <div className='flex flex-row gap-4 w-full px-16 py-16 text-start items-center border-b border-[#e6e8eb]'>
      {/* Add class for effect
      bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_6px)] */}
      <p className='text-sm w-[16rem] text-[#18181b] font-bold mb-2 tracking-wider'>
        5+ years of Experience designing products
      </p>
      <div className='relative w-[100%] h-14 rounded-xl overflow-hidden'>
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-8'>
          <Image
            src={Niural}
            alt={"Niural: Global payroll & payments platform"}
            className='w-[160px] h-[70px] grayscale object-contain opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100'
          />
          <Image
            src={IDA}
            alt={"Infinity Digital Agency: Web design & development agency"}
            className='w-[160px] h-[60px] bg-contain object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100'
          />
          <Image
            src={PrimeInternational}
            alt={"Prime International: Largest Distilleries & Distributors "}
            className='w-[160px] h-[60px] bg-contain object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100'
          />

          <Image
            src={VesperFineWines}
            alt={"The Vesper Fine Wines: Global Wine Ecommerce"}
            className='w-[160px] h-[60px] grayscale object-contain opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100'
          />
          <Image
            src={OhoDigital}
            alt={"WePlay: Online Sports Booking Platform"}
            className='w-[160px] h-[60px] grayscale object-contain opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100'
          />
        </div>
      </div>
    </div>
  );
}

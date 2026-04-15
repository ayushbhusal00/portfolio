"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    type: "image",
    src: "./designstalk.png",
    rotate: 4,
    x: 0,
    y: 55,
    z: 1,
  },
  {
    type: "image",
    src: "./passiontocook.png",
    rotate: -14,
    x: 0,
    y: 75,
    z: 1,
  },
  {
    type: "text",
    rotate: 4,
    x: -15,
    y: 50,
    z: 2,
  },
  {
    type: "image",
    src: "./discussions.png",
    rotate: -5,
    x: 0,
    y: 65,
    z: 3,
  },
  {
    type: "image",
    src: "./workaholic.png",
    rotate: -5,
    x: -5,
    y: 35,
    z: 2,
  },
  {
    type: "image",
    src: "./workshops.png",
    rotate: 10,
    x: 0,
    y: 55,
    z: 1,
  },
];

function Card({ item }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX / 10);
    y.set(offsetY / 10);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className='aspect-[4/6] min-w-[280px] max-w-[280px] bg-white p-[4%] shadow-md'
      style={{
        rotate: item.rotate,
        x: `${item.x}%`,
        y: `${item.y}%`,
        zIndex: item.z,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      {item.type === "image" ? (
        <img src={item.src} className='h-full w-full object-cover' alt='' />
      ) : (
        <div className='h-full rounded-xs bg-neutral-100 p-6 flex flex-col justify-between'>
          <div>
            <p className='font-bold'>Dantakali Marg</p>
            <p className='font-bold'>House 77, Kathmandu, Nepal</p>
            <p className='font-bold'>(+977) 9818-494029</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function OfficeSection() {
  return (
    <section className='px-8 overflow-hidden container mx-auto px-container pt-12'>
      {/* Header */}
      <div className='flex flex-col lg:flex-row justify-between gap-8'>
        <div className='lg:max-w-lg'>
          <h2 className='text-5xl text-gray-500'>In my Workbench.</h2>
          <p className='text-5xl'>Always on. Always open.</p>
        </div>

        <p className='text-xl text-gray-500 lg:max-w-xl whitespace-pre-line'>
          A space where dialogue turns into direction, and direction turns into
          design.
        </p>
      </div>

      {/* Desktop floating stack */}
      <div className='hidden lg:grid grid-cols-6 justify-center gap-6 mt-12 isolate'>
        {cards.map((c, i) => (
          <Card key={i} item={c} />
        ))}
      </div>

      {/* Mobile fallback */}
      <div className='flex lg:hidden justify-center mt-12'>
        <div className='w-[280px] aspect-[4/6] bg-white shadow-md p-4'>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <p className='font-bold'>Rua da Torrinha 154</p>
              <p className='font-bold'>4050–609 Porto, Portugal</p>
              <p className='font-bold'>(+351) 226 001 751</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import confetti from "canvas-confetti";

// --- TYPES ---
interface Item {
  id: number;
  label: string;
  offset: number;
  width: number;
  color: string;
}

const ROWS: { title: string; items: Item[] }[] = [
  {
    title: "Strategy",
    items: [
      { id: 1, label: "Discovery", offset: 0, width: 180, color: "#7c3aed" },
      { id: 2, label: "Definition", offset: 0, width: 180, color: "#7c3aed" },
      {
        id: 3,
        label: "UX Research",
        offset: 120,
        width: 140,
        color: "#7c3aed",
      },
    ],
  },
  {
    title: "Design",
    items: [
      { id: 4, label: "Wireframes", offset: 300, width: 160, color: "#f97316" },
      { id: 5, label: "User Testing", offset: 0, width: 140, color: "#6b7280" },
      { id: 6, label: "Look & Feel", offset: 0, width: 160, color: "#f97316" },
      { id: 7, label: "Final Design", offset: 0, width: 180, color: "#f97316" },
      {
        id: 8,
        label: "Design System",
        offset: 800,
        width: 180,
        color: "#f97316",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        id: 9,
        label: "Architecture",
        offset: 300,
        width: 200,
        color: "#3b82f6",
      },
      {
        id: 10,
        label: "Development",
        offset: 200,
        width: 400,
        color: "#3b82f6",
      },
      { id: 11, label: "Launch", offset: 0, width: 140, color: "#eab308" },
    ],
  },
];

export default function TimelineNew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [fired, setFired] = useState(false);

  // DRAG → MOVE TRACK
  const handleDrag = (_: any, info: any) => {
    x.set(x.get() + info.delta.x);

    // detect end → confetti
    if (containerRef.current) {
      const maxScroll = containerRef.current.scrollWidth - window.innerWidth;
      if (Math.abs(x.get()) > maxScroll - 100 && !fired) {
        setFired(true);
        confetti({ particleCount: 200, spread: 100 });
      }
    }
  };

  return (
    <section className='relative bg-black py-32 text-white overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6'>
        <h1 className='mb-10 max-w-5xl text-5xl font-semibold text-gray-400'>
          Custom digital products built to grow with your business.
        </h1>
        <h2 className='mb-24 text-5xl font-bold'>
          Strategy-led. Design-driven.
        </h2>
      </div>

      {/* NEEDLE */}
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
        className='absolute left-1/2 top-[300px] z-30 -translate-x-1/2 cursor-ew-resize'
      >
        <div className='flex flex-col items-center'>
          <div className='mb-2 h-[60px] w-[60px] rounded-full bg-white/80 shadow-lg' />
          <div className='h-[500px] w-[2px] bg-white/60' />
        </div>
      </motion.div>

      {/* TRACK */}
      <motion.div
        ref={containerRef}
        style={{ x }}
        className='flex flex-col gap-24 px-20 will-change-transform'
      >
        {ROWS.map((row, i) => (
          <Row key={i} row={row} />
        ))}
      </motion.div>
    </section>
  );
}

// --- ROW ---
function Row({ row }: { row: { title: string; items: Item[] } }) {
  return (
    <div className='flex items-center border-t border-white/10 pt-10'>
      <div className='w-32 text-sm text-white/60'>{row.title}</div>
      <div className='flex gap-4'>
        {row.items.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// --- ITEM ---
function TimelineItem({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = window.innerWidth / 2;

      const dist = center - rect.left;
      const p = Math.min(Math.max(dist / rect.width, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      ref={ref}
      className='relative shrink-0'
      style={{ marginLeft: item.offset, width: item.width }}
    >
      <div className='relative h-[56px]'>
        {/* BASE */}
        <div
          className='absolute inset-0 rounded-md'
          style={{ background: item.color }}
        />

        {/* REVEAL MASK */}
        <div
          className='absolute inset-0 rounded-md bg-gray-800'
          style={{
            clipPath: `polygon(0 0, ${progress * 100}% 0, ${progress * 100}% 100%, 0 100%)`,
          }}
        />

        {/* LABEL */}
        <div className='absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold'>
          {item.label}
        </div>
      </div>
    </div>
  );
}

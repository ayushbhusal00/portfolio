"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedPath, setDisplayedPath] = useState(pathname);

  useEffect(() => {
    if (!pathname) return;

    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setDisplayedPath(pathname);
      setIsTransitioning(false);
    }, 350);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          key={displayedPath}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className='min-h-screen'
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className='fixed inset-0 z-40 flex items-center justify-center bg-white/60 dark:bg-gray-950/60 backdrop-blur-sm pointer-events-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className='flex flex-col items-center gap-3 text-gray-700 dark:text-gray-200'>
              <span className='h-8 w-8 rounded-full border-2 border-gray-300 border-t-gray-700 dark:border-gray-700 dark:border-t-white animate-spin' />
              <p className='text-sm font-medium tracking-tight'>
                Navigating to the next page…
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

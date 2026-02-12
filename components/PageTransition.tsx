"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathname);

  const isTransitioning = pathname !== displayedPath;

  useEffect(() => {
    if (!pathname || pathname === displayedPath) return;

    const timeout = setTimeout(() => {
      setDisplayedPath(pathname);
    }, 350);

    return () => clearTimeout(timeout);
  }, [pathname, displayedPath]);

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
            className='fixed inset-0 z-40 flex items-center justify-center bg-bg-base/60 backdrop-blur-sm pointer-events-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className='flex flex-col items-center gap-3 text-text-subtle'>
              <span className='h-8 w-8 rounded-full border-1 border-border-base border-t-border-subtle animate-spin' />
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

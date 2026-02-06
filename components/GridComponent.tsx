"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@/context/theme-context";

const GridComponent = () => {
  const totalEntries = 100; // 10x10 grid
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  // Function to calculate if a box should be highlighted in a 3x3 block pattern
  const getHighlightClass = (index: number) => {
    if (hoverIndex === null) return "";

    const row = Math.floor(hoverIndex / 10); // Get row of hovered box
    const col = hoverIndex % 10; // Get column of hovered box
    const currentRow = Math.floor(index / 10); // Row of current box
    const currentCol = index % 10; // Column of current box

    // Calculate if the current box is in a 3x3 block around the hovered box
    const rowDiff = Math.abs(currentRow - row);
    const colDiff = Math.abs(currentCol - col);

    if (rowDiff <= 1 && colDiff <= 1) {
      if (index === hoverIndex) {
        return "bg-bg-base bg-opacity-[0.25] border-opacity-50"; // Center box highlight (25% opacity)
      } else if (rowDiff === 0 || colDiff === 0) {
        return "bg-bg-base bg-opacity-[0.12] border-opacity-30"; // Cross (+) highlight (12% opacity)
      } else {
        return "bg-bg-base bg-opacity-[0.05] border-opacity-15"; // Corner highlight (5% opacity)
      }
    }

    return "";
  };

  // Function to determine if a cell is on the edge and should have a specific border removed
  const getBorderClass = (index: number) => {
    const row = Math.floor(index / 10);
    const col = index % 10;

    let borderClass = "";

    if (col === 0) {
      borderClass += " border-l-0"; // No left border for leftmost cells
    }
    if (col === 9) {
      borderClass += " border-r-0"; // No right border for rightmost cells
    }
    if (row === 0) {
      borderClass += " border-t-0"; // No top border for topmost cells
    }
    if (row === 9) {
      borderClass += " border-b-0"; // No bottom border for bottommost cells
    }

    return borderClass;
  };

  return (
    <div className='absolute inset-0 flex justify-center mt-20'>
      <div className='relative grid grid-cols-10 grid-rows-10 gap-0 w-[40rem] h-[40rem] overflow-hidden'>
        {Array.from({ length: totalEntries }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              `relative w-full h-full border ${
                theme === "light" ? "border-border-base" : "border-border-base"
              } border-opacity-10 transition-colors duration-300`,
              getHighlightClass(index),
              getBorderClass(index), // Apply conditional borders
            )}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;

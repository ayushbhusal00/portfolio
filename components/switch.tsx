import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";
import clsx from "clsx";

const Switch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='flex items-center cursor-pointer' onClick={toggleTheme}>
      <div
        className={clsx(
          `relative flex items-center w-14 h-7 bg-gradient-to-tr ${
            theme === "light"
              ? "from-rose-500 to-orange-500 shadow-[inset_0_0_0_1.25px_rgba(0,0,0,0.1)]"
              : "from-indigo-500 to-purple-500 shadow-[inset_0_0_0_1.25px_rgba(255,255,255,0.1)]"
          } rounded-full p-1`
        )}
      >
        {/* Sliding background surface */}
        <motion.div
          className={clsx(
            `absolute left-0 top-0 w-1/2 h-full ${
              theme === "light" ? "bg-white" : "bg-gray-900 bg-opacity-50"
            } backdrop-blur-[0.5rem] rounded-full shadow-[inset_0_0_0_1.25px_rgba(0,0,0,0.02)]`
          )}
          initial={false}
          animate={{
            x: theme === "dark" ? "100%" : "0%",
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        />

        {/* Sun icon */}
        <FaSun
          className={`absolute left-1 w-5 h-5 text-yellow-400 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Moon icon */}
        <FaMoon
          className={`absolute right-1 w-5 h-5 text-white ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Switch;

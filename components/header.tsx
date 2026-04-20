"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import dynamic from "next/dynamic";
import AyushLogoDark from "@/public/Ayush-Logo-Dark.json";
import AyushLogoLight from "@/public/Ayush-Logo-Light.json";

import StaggeredMenu from "@/components/StaggeredMenu";
import Switch from "@/components/switch";
import { useTheme } from "@/context/theme-context";

const Header = () => {
  const Lottie = dynamic(() => import("@lottielab/lottie-player/react"), {
    ssr: false,
  });

  const { theme } = useTheme();

  // Prepare menu items from links
  const menuItems = links.map((link) => ({
    label: link.name,
    link: link.hash,
    ariaLabel: `Maps to ${link.name} page`,
  }));

  // Social links for mobile menu
  const socialItems = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ayush-bhusal-331143119/",
    },
    {
      label: "GitHub",
      link: "https://github.com/ayushbhusal00",
    },
  ];

  const logoUrl =
    theme === "dark" ? "/Ayush-Logo-Dark.json" : "/Ayush-Logo-Light.json";

  return (
    <header className='sticky top-0 z-[999] w-full bg-bg-base backdrop-blur-md border-b border-border-base'>
      {/* Container matching the Significa border-x grid */}
      <div className='md:mx-16 border-x border-border-base px-6 py-4 md:py-3 flex items-center justify-between'>
        {/* LOGO AREA */}
        <Link
          href={"/"}
          className='flex items-center hover:opacity-70 transition-opacity'
        >
          <div className=''>
            {theme === "dark" ? (
              <Lottie lottie={AyushLogoDark} />
            ) : (
              <Lottie lottie={AyushLogoLight} />
            )}
          </div>
        </Link>

        {/* DESKTOP NAVIGATION - Editorial style */}
        <nav className='hidden md:block'>
          <ul className='flex gap-10'>
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className='text-[10px] font-mono uppercase tracking-[0.2em] text-text-subtle hover:text-text-base transition-colors'
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* UTILITIES (Theme Switch & Mobile Menu) */}
        <div className='flex items-center gap-4'>
          <Switch />

          <div className='md:hidden relative z-50'>
            <StaggeredMenu
              position='right'
              colors={["#fafafa", "#e4e4e7"]}
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              logoUrl={logoUrl}
              menuButtonColor={theme === "dark" ? "#fff" : "#000"}
              openMenuButtonColor={theme === "dark" ? "#fff" : "#000"}
              accentColor={"#5227FF"}
              changeMenuColorOnOpen={true}
              isFixed={false}
              closeOnClickAway={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

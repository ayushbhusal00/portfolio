"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/modal-context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { caseStudies } from "@/lib/data";

type ModalProps = {
  id: number;
};

export default function Modal({ id }: ModalProps) {
  const { modalState, toggleModalState } = useModal();

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const caseStudy = caseStudies[id];

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map((ref) =>
        ref ? ref.getBoundingClientRect().top : 999999
      );
      const visibleIndex = offsets.findIndex((offset) => offset >= 0);
      if (visibleIndex !== -1) setActiveSectionIndex(visibleIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const modalVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 30 },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: { type: "tween", duration: 0.2 },
    },
  };

  if (!modalState) return null;

  return (
    <div className='fixed inset-0 z-[1000] h-[100vh] flex items-center justify-center'>
      <div className='fixed inset-0 bg-black/50' onClick={toggleModalState} />

      <motion.div
        className='relative bg-white rounded-lg shadow-xl w-full h-[100vh] overflow-hidden'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={modalVariants}
      >
        {/* Header */}
        <div className='flex justify-between items-center border-b p-5'>
          <button
            type='button'
            className='text-gray-500 hover:text-black'
            onClick={toggleModalState}
          >
            ✕
          </button>

          <div className='flex gap-3 items-center text-gray-600'>
            <FaArrowLeft className='hover:text-orange-600 cursor-pointer' />
            <FaArrowRight className='hover:text-orange-600 cursor-pointer' />
          </div>
        </div>

        <div className='flex w-full h-full'>
          {/* Sidebar */}
          <div className='sticky top-0 w-1/4 p-5 border-r bg-gray-50 h-full'>
            <ul className='space-y-4 text-gray-700'>
              <li className='font-bold'>{caseStudy.title}</li>

              {caseStudy.sections.map((section, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:text-orange-600 ${
                    activeSectionIndex === index
                      ? "text-orange-600 font-semibold"
                      : ""
                  }`}
                  onClick={() =>
                    sectionRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {section.heading}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className='w-3/4 p-6 overflow-y-auto h-full space-y-8'>
            {/* Hero Image */}
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className='w-full h-[360px] object-cover rounded-lg'
            />

            {/* Overview */}
            <h2 className='text-2xl font-semibold'>{caseStudy.title}</h2>
            <p className='text-gray-600'>{caseStudy.tagline}</p>
            <p className='text-gray-600'>{caseStudy.overview}</p>

            <div className='grid grid-cols-2 gap-4 mt-4'>
              <div>
                <p className='text-gray-500'>Role:</p>
                <p className='font-bold'>{caseStudy.role}</p>
              </div>
              <div>
                <p className='text-gray-500'>Duration:</p>
                <p className='font-bold'>{caseStudy.duration}</p>
              </div>
            </div>

            {/* Sections */}
            {caseStudy.sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className='space-y-3'
              >
                <h3 className='text-xl font-semibold'>{section.heading}</h3>

                {section.content && (
                  <p className='text-gray-600'>{section.content}</p>
                )}

                {section.bullets && (
                  <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Gallery */}
            <div className='grid grid-cols-1 gap-6 mt-6'>
              {caseStudy.gallery?.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Gallery ${i}`}
                  className='w-full rounded-lg object-cover'
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

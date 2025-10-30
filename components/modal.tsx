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

export default function Modal({ id = 1 }: ModalProps) {
  const { modalState, toggleModalState } = useModal();

  // Refs for each section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sectionRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top || 0
      );
      const visibleIndex = sectionOffsets.findIndex((offset) => offset >= 0);
      if (visibleIndex !== -1) setActiveSectionIndex(visibleIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const caseStudy = caseStudies[id - 1];

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
    <div
      className='fixed inset-0 z-[1000] h-[100vh] flex items-center justify-center'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      {/* Background Overlay */}
      <div
        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
        onClick={toggleModalState}
      ></div>

      {/* Modal content using Framer Motion */}
      <motion.div
        className='relative bg-white rounded-lg shadow-xl w-full  h-[100vh] overflow-hidden'
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={modalVariants}
      >
        <div className='relative w-full bg-white shadow-xl'>
          {/* Modal Header */}
          <div className='flex justify-between items-center border-b-[1px] border-b-gray-200 p-5'>
            <button
              type='button'
              className='text-gray-500 hover:text-black'
              onClick={toggleModalState}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className='flex gap-3 items-center text-gray-600'>
              <span className='flex gap-2 text-sm items-center hover:text-orange-600'>
                <FaArrowLeft />
              </span>
              <span className='flex gap-2 text-sm items-center hover:text-orange-600'>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className='relative flex w-full h-full'>
          {/* Sticky Sidebar for Navigation */}
          <div className='sticky top-0 w-1/4 p-5 border-r bg-gray-50 h-full'>
            <ul className='space-y-4 text-gray-700 overflow-y-auto'>
              <li className='font-bold'>{caseStudy.companyName}</li>
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
                  {section.content[index].title}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className='w-3/4 p-6 overflow-y-auto h-full'>
            <Image
              src={caseStudy.heroSection.image}
              alt={caseStudy.heroSection.title}
              className='w-full h-[360px] object-cover'
            />
            {/* Images and captions */}
            <div className='space-y-6 mt-4'>
              <h2 className='text-xl font-semibold mb-4'>
                {caseStudy.heroSection.title}
              </h2>
              <p className='text-gray-600 mb-4'>
                {caseStudy.heroSection.description}
              </p>
              <div className='grid grid-cols-2 sm:grid-cols-4'>
                <div>
                  <p className=' text-gray-500'>Collaborators:</p>
                  <p className='font-bold'>
                    {caseStudy.heroSection.collaborators.join(", ")}
                  </p>
                </div>
                <div>
                  <p className=' text-gray-500'>Duration:</p>
                  <p className='font-bold'>{caseStudy.heroSection.duration}</p>
                </div>
                <div>
                  <p className='text-gray-500'>Tools:</p>
                  <p className='font-bold'>
                    {caseStudy.heroSection.tools.join(", ")}
                  </p>
                </div>
                <div>
                  <p className='text-gray-500'>Roles:</p>
                  <p className='font-bold'>
                    {caseStudy.heroSection.roles.join(", ")}
                  </p>
                </div>
              </div>
              <div className='space-y-6 mt-4'>
                {caseStudy.sections.map((section, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      sectionRefs.current[index] = el;
                    }}
                  >
                    <h2 className='text-xl font-semibold mb-4'>
                      {section.content[index].title}
                    </h2>
                    <p className='text-gray-600 mb-4'>
                      {section.content[index].description}
                    </p>
                    {section.content[index].image &&
                      !Array.isArray(section.content[index].image) && (
                        <Image
                          src={section.content[index].image}
                          alt={section.content[index].title}
                          className='w-full h-auto object-cover'
                        />
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

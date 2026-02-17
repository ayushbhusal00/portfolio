"use client";

import React, { useRef, useTransition } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import PaperPlane from "@/public/plane.png";
import Image from "next/image";
import Shilouette from "@/public/shilouette.png";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const { error } = await sendEmail(formData);

      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Email sent successfully!");
      formRef.current?.reset();
    });
  };

  return (
    <motion.section
      className='w-full bg-bg-subtle'
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Full width background wrapper */}
      <div className='w-full px-4 md:px-10 py-4'>
        {/* Center container */}
        <div className='max-w-[1100px] mx-auto'>
          <div className='relative isolate group rounded-lg overflow-hidden w-full'>
            {/* Moving Silhouette Layer */}
            <div
              className='
            absolute inset-0 z-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            animate-moveBg
          '
              style={{
                backgroundImage: `url(${Shilouette.src})`,
                backgroundSize: "150% 150%",
                backgroundPosition: "45% 45%",
              }}
            />

            {/* Surface Layer */}
            <div
              className='
          absolute inset-[2px]
          rounded-lg
          bg-bg-base
          border border-border-base
          transition-colors duration-200
          group-hover:border-transparent
          z-[1]
        '
            />

            {/* Content */}
            <div
              className='
          relative z-[2]
          flex gap-5 lg:gap-20 items-center
          p-6 sm:px-8 sm:py-10
        '
            >
              <div className='w-1/2 hidden md:block'>
                <Image
                  src={PaperPlane}
                  alt='Mail Illustration'
                  loading='lazy'
                  placeholder='blur'
                />
              </div>

              <div className='text-left w-full text-text-base'>
                <SectionHeading>Say Hello</SectionHeading>

                <p className='text-sm -mt-6 text-text-subtle'>
                  Have a project in mind? Please contact me directly at{" "}
                  <a
                    className='underline'
                    href='mailto:ayushbhusal00@gmail.com'
                  >
                    ayushbhusal00@gmail.com
                  </a>
                </p>

                <form
                  ref={formRef}
                  className='mt-10 flex flex-col'
                  action={handleSubmit}
                >
                  <input
                    type='email'
                    name='senderEmail'
                    placeholder='Your email'
                    disabled={isPending}
                    className='h-10 rounded-md bg-bg-subtle px-3 text-sm border border-border-base'
                  />

                  <textarea
                    name='message'
                    placeholder='Your message'
                    disabled={isPending}
                    className='h-32 my-3 p-3 rounded-md bg-bg-subtle text-sm border border-border-base'
                  />

                  <SubmitBtn disabled={isPending} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=''>
        <p className='text-center text-text-subtle text-sm pb-4 px-6 md:px-16'>
          This is a custom-made website created using tools like NextJs, React,
          Tailwind, Typescript, and Resend by{" "}
          <span className='font-semibold text-text-base'>Ayush Bhusal</span>
        </p>
      </div>
    </motion.section>
  );
}

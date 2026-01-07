"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";

import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
export default function Contact() {
  return (
    <motion.section
      id='contact'
      className='text-center scroll-mt-28 rounded-lg w-full items-center align-middle bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_6px)] py-16 border-t border-gray-200'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className='w-[min(100%,38rem)] bg-white p-5 rounded-md mx-auto m-10 flex-row '>
        <div>
          <SectionHeading>Contact</SectionHeading>
          <p className='text-[#52525B] text-[0.885rem] text-start dark:text-white/80 -mt-6'>
            Please contact me directly at{" "}
            <a className='underline' href='mailto:ayushbhusal00@gmail.com'>
              ayushbhusal00@gmail.com
            </a>{" "}
            or through this form.
          </p>
        </div>
        <form
          className='mt-5 flex flex-col dark:text-black'
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className='h-10 w-full
    rounded-md
    bg-white dark:bg-transparent
    px-3
    text-sm text-gray-900 dark:text-white
    placeholder:text-gray-400 dark:placeholder:text-white/40
    border border-black/10 dark:border-white/15
    shadow-sm
    outline-none
    transition-all
    focus:border-black/30 dark:focus:border-white/30
    focus:shadow-[0_0_0_1px_rgba(0,0,0,0.1)]
    dark:focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]'
            type='email'
            name='senderEmail'
            required
            maxLength={100}
            placeholder='Your email'
          />
          <textarea
            className='h-52 my-3 p-3 w-full
    rounded-md
    bg-white dark:bg-transparent
    
    text-sm text-gray-900 dark:text-white
    placeholder:text-gray-400 dark:placeholder:text-white/40
    border border-black/10 dark:border-white/15
    shadow-sm
    outline-none
    transition-all
    focus:border-black/30 dark:focus:border-white/30
    focus:shadow-[0_0_0_1px_rgba(0,0,0,0.1)]
    dark:focus:shadow-[0_0_0_1px_rgba(255,255,255,0.15)]'
            name='message'
            required
            maxLength={1000}
            placeholder='Your message'
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}

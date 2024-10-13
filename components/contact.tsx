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
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className='text-gray-700 dark:text-white/80 -mt-6'>
        Please contact me directly at{" "}
        <a className='underline' href='mailto:ayushbhusal00@gmail.com'>
          ayushbhusal00@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className='mt-10 flex flex-col dark:text-black'
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
          className='h-14 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          type='email'
          name='senderEmail'
          required
          maxLength={100}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          required
          maxLength={1000}
          placeholder='Your message'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

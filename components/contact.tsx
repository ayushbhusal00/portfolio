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
      className='w-full bg-bg-base border-t border-border-base mt-20'
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className='md:mx-16 border-x border-border-base'>
        <div className='max-w-5xl mx-auto px-6 py-24 md:py-32'>
          {/* --- CONTACT HEADER --- */}
          <div className='mb-20'>
            <h2 className='text-5xl md:text-8xl font-bold tracking-tighter text-text-base mb-8'>
              Let&apos;s work <br /> together.
            </h2>
            <p className='text-xl text-text-subtle max-w-xl leading-relaxed'>
              Have a project in mind or just want to say hi? Reach out via the
              form below or email me directly at{" "}
              <a
                className='text-text-base font-medium underline underline-offset-4 hover:opacity-70 transition-opacity'
                href='mailto:ayushbhusal00@gmail.com'
              >
                ayushbhusal00@gmail.com
              </a>
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-12 gap-16 items-start'>
            {/* --- VISUAL ELEMENT --- */}
            <div className='hidden md:block md:col-span-5 sticky top-32'>
              <div className='relative group overflow-hidden rounded-3xl aspect-square bg-bg-subtle border border-border-base'>
                <Image
                  src={PaperPlane}
                  alt='Mail Illustration'
                  className='p-12 group-hover:scale-110 transition-transform duration-700 ease-out'
                />
                {/* Subtle Moving Silhouette Background */}
                <div
                  className='absolute inset-0 z-0 opacity-20 mix-blend-multiply animate-moveBg pointer-events-none'
                  style={{
                    backgroundImage: `url(${Shilouette.src})`,
                    backgroundSize: "200%",
                  }}
                />
              </div>
            </div>

            {/* --- FORM --- */}
            <div className='md:col-span-7'>
              <form
                ref={formRef}
                className='flex flex-col gap-8'
                action={handleSubmit}
              >
                <div className='space-y-2'>
                  <label className='text-[10px] font-mono uppercase tracking-widest text-text-subtle'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='senderEmail'
                    placeholder='your@email.com'
                    required
                    disabled={isPending}
                    className='w-full bg-transparent border-b border-border-base py-4 text-lg focus:border-text-base outline-none transition-colors'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-[10px] font-mono uppercase tracking-widest text-text-subtle'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    placeholder='Tell me about your project...'
                    required
                    disabled={isPending}
                    className='w-full bg-transparent border-b border-border-base py-4 text-lg h-32 focus:border-text-base outline-none transition-colors resize-none'
                  />
                </div>

                <div className='pt-4'>
                  <SubmitBtn disabled={isPending} />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* --- FINAL FOOTER STRIP --- */}
        <footer className='border-t border-border-base py-12 px-6'>
          <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='flex flex-col items-center md:items-start gap-2'>
              <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle'>
                Built By
              </p>
              <p className='text-sm font-medium text-text-base italic font-serif'>
                Ayush Bhusal — 2026
              </p>
            </div>

            <div className='flex flex-col items-center md:items-end gap-2'>
              <p className='text-[10px] font-mono uppercase tracking-widest text-text-subtle'>
                Stack
              </p>
              <p className='text-sm text-text-subtle text-center md:text-right'>
                Next.js / React / Tailwind / Resend
              </p>
            </div>
          </div>
        </footer>
      </div>
    </motion.section>
  );
}

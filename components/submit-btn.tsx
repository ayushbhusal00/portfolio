import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='group flex justify-center items-center gap-2 h-[3rem] w-[8rem] dark:bg-white dark:bg-opacity-10 text-white outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition disabled:scale-100 disabled:bg-opacity-65  rounded-[6px]
  bg-[#27272A] shadow-[0_0.75px_0_0_rgba(255,255,255,0.20)_inset,0_1px_2px_0_rgba(0,0,0,0.40),0_0_0_1px_#18181B]'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className='text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
}

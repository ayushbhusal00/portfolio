"use client";

import { useState, useEffect } from "react";
import { generateToken, saveToken, verifyToken, getToken } from "@/lib/jwt";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

interface PasswordProtectionProps {
  onAuthenticated: () => void;
  projectTitle: string;
}

export default function PasswordProtection({
  onAuthenticated,
  projectTitle,
}: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);

  // Check if user already has a valid token
  useEffect(() => {
    const checkExistingToken = async () => {
      const token = getToken();
      if (token) {
        const isValid = await verifyToken(token);
        if (isValid) {
          onAuthenticated();
          return;
        } else {
          // Remove invalid token
          localStorage.removeItem("niural_access_token");
        }
      }
      setCheckingToken(false);
    };

    checkExistingToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // In a real application, you would verify the password against a backend
    // For now, we'll use a simple password check
    // You should replace this with an API call to your backend
    const correctPassword =
      process.env.NEXT_PUBLIC_NIURAL_PASSWORD || "ayush2026";

    if (password === correctPassword) {
      try {
        const token = await generateToken();
        saveToken(token);
        onAuthenticated();
      } catch {
        setError("Failed to generate access token. Please try again.");
        setIsLoading(false);
      }
    } else {
      setError("Incorrect password. Please try again.");
      setIsLoading(false);
    }
  };

  if (checkingToken) {
    return (
      <div className='min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900'>
        <div className='text-center'>
          <p className='text-zinc-600 dark:text-zinc-400'>Checking access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='max-w-md w-full space-y-8 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg'
      >
        <div className='text-center'>
          <h1 className='text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2'>
            Protected Project
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400'>
            This case study is password protected
          </p>
          <p className='text-sm text-zinc-500 dark:text-zinc-500 mt-1'>
            {projectTitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
              placeholder='Enter password'
              required
              autoFocus
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg'
            >
              <p className='text-sm text-red-600 dark:text-red-400'>{error}</p>
            </motion.div>
          )}

          <button
            type='submit'
            disabled={isLoading}
            className='w-full py-2 px-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? "Verifying..." : "Access Project"}
          </button>
        </form>

        <div className='flex items-center gap-3 m-6'>
          <div className='flex-1 h-px bg-gray-200' />
          <span className='text-sm text-gray-500'>OR</span>
          <div className='flex-1 h-px bg-gray-200' />
        </div>

        <a
          className=' sm:flex dark:bg-white/10 p-4 items-center gap-2 cursor-pointer borderBlack outline-none focus:scale-[1.15] hover:bg-gray-100 dark:hover:bg-white/20 active:scale-105 transition dark:text-white/50 rounded-[6px] pointer-events-auto relative z-20
  bg-white
  shadow-[0_1px_2px_0_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.08)] justify-center font-medium'
          href='https://www.linkedin.com/in/ayush-bhusal-331143119/'
          target='blank'
        >
          <BsLinkedin />
          Message me on LinkedIn
        </a>

        <Link
          href='/'
          className='text-sm text-zinc-500 hover:text-zinc-900 transition py-2 inline-block'
        >
          ← Back to home
        </Link>
      </motion.div>
    </div>
  );
}

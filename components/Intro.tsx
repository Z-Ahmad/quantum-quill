'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { dancing_script } from '@/app/fonts';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className={`mb-28 max-w-[50rem] text-center sm:mb-0`}>
      <div className="flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
          <h1 className={`${dancing_script.className} text-6xl sm:text-8xl`}>Quantum Quill</h1>
          <h2 className="pt-10 text-2xl sm:text-4xl">Combine artistry and AI</h2>
          <Link
            href="/create"
            className="group flex items-center justify-center px-3 py-3 mt-10 text-2xl font-medium bg-blue-600 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            <div>
            Get Started
            </div>
            <BsArrowRight className="opacity-70  group-hover:translate-x-1 group-hover:opacity-100 transition"/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

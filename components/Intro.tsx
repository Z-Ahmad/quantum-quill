'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { dancing_script } from '@/app/fonts';

export default function Intro() {
  return (
    <section className={`mb-28 max-w-[50rem] text-center sm:mb-0`}>
      <div className="flex items-center justify-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className= {`${dancing_script.className} text-6xl sm:text-8xl`}
          >
            Quantum Quill
          </motion.h1>

          <motion.span>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="text-2xl sm:text-4xl"
            >
              Combine artistry and AI
            </motion.h2>
          </motion.span>
        </div>
      </div>
    </section>
  );
}

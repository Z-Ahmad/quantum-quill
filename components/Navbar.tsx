'use client';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/lib/data';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full 
      rounded-none  
      bg-blue-400 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      sm:top-6 sm:h-[3.25rem] sm:w-[26rem] sm:rounded-full sm:border sm:border-white"
        initial={{ scale: 0, x: "-50%", opacity: 0 }}
        animate={{ scale: 1, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-x-3 gap-y-1 
        text-[0.9rem] font-medium text-gray-100 sm:w[initial] sm:flex-nowrap sm:gap-5"
        >
          <motion.li
            className='h-3/4 flex items-center justify-center relative'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            >
            <Image src={"/logo.svg"} alt={"Quantum Quill"} width={20} height={20}></Image>
          </motion.li>
          {links.map((link) => (
            <motion.li 
              key={link.hash}
              className=" h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              >
              <Link href={link.hash} className="flex w-full items-center justify-center px-3 py-3 hover:text-white transition">
                {link.name}
                {pathname === link.hash &&
                <motion.span 
                  className="bg-blue-600 bg-opacity-30 rounded-full absolute inset-0 -z-10"
                  layoutId='activeSection'
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                }}
                ></motion.span>}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

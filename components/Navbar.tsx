import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"'>
      <a href='/' className='flex items-center'>
        <img src='/logo.svg' alt='Quantum Quill' className='h-8 sm:h-12' />
        <span className='hidden sm:block ml-2 text-xl font-bold'>Quantum Quill</span>
      </a>
      </nav>
  )
}

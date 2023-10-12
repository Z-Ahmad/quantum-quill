'use client'

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Navbar />
      <motion.div className="max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl text-center font-bold mb-4">About Quantum Quill</h2>
        <p className="text-gray-700">
          Quantum Quill is an innovative project that combines the art of haiku composition with the power of artificial intelligence. It's designed to empower
          users to effortlessly craft haikus with AI assistance. Here's what you can expect from Quantum Quill:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>
            First Line Assistance: Quantum Quill provides valuable support by suggesting the <span className="italic">first</span> line of your haiku, sparking
            your creativity and setting the tone for your composition.
          </li>
          <li>
            Syllable Counting: By utilizing a custom syllable counting API, the application helps users adhere to the traditional
            haiku structure (5-7-5).
          </li>
          <li>User-Friendly Interface: Enjoy a visually pleasing and intuitive user interface for haiku creation.</li>
        </ul>
        <p className="text-gray-700 mt-4">Quantum Quill is built on a solid technology stack, combining the following tools and frameworks:</p>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>Frontend: React with Next.js</li>
          <li>Backend: Flask (for syllable counting API)</li>
          <li>AI Integration: OpenAI GPT API</li>
          <li>Styling: TailwindCSS, Framer Motion, React Icons</li>
        </ul>
        <p className="text-gray-700 mt-4">Join us on a creative journey, where the art of haiku meets the innovation of AI.</p>
      </motion.div>
    </main>
  );
}

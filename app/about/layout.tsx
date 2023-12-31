import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quantum Quill | About",
  description: "Combine artistry and AI"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  );
}

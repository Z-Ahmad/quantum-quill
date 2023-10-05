import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quantum Quill | Create",
  description: "Combine artistry and AI"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <Toaster position="bottom-right"/>
    </section>
  );
}

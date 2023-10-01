import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Navbar />
      <Intro />
    </main>
  )
}

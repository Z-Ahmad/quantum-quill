import Create from "@/components/Create";
import Navbar from "@/components/Navbar";

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Navbar />
    <Create />
  </main>;
}

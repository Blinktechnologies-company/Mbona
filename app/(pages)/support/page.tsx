import Image from "next/image";
import Link from "next/link";
import { Home, ChevronDown, House } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white dark overflow-x-hidden">
      <div className="h-[33px] bg-[#009367] rounded-t-xl "></div>
      <header className="w-full  background-primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-wide"
            >
              Mbona
            </Link>

            <nav className="flex items-center gap-8 font-bold tracking-wide">
              <Link
                href="/"
                className="text-white hover:text-[#009367] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/adoption"
                className="text-white hover:text-[#009367] transition-colors"
              >
                Adoption
              </Link>
              <Link
                href="/find-family"
                className="text-white hover:text-[#009367] transition-colors"
              >
                Find Family
              </Link>
              <Link
                href="/support"
                className="text-white border-b-2 border-[#009367] pb-1"
              >
                Support
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#009367] transition-colors"
              >
                About
              </Link>
            </nav>

            <Link
              href="/find-family"
              className="px-4 py-2 border border-white rounded hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <span>Find lost family</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-80px)] background-primary">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-60 left-20 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-40 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-52 right-60 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-80 left-60 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-96 right-20 w-2 h-2 bg-green-400 rounded-full"></div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rotate-45 opacity-30 -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6"></div>

            <div className="relative"></div>
          </div>
        </div>
      </main>

      <section></section>
    </div>
  );
}

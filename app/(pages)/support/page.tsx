import Image from "next/image";
import Link from "next/link";
import { Home, ChevronDown, House } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white dark overflow-x-hidden">
 
      <div className="h-[33px] bg-[#009367] rounded-t-xl ">

      </div>
      <header className="w-full  background-primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
          
            <Link href="/" className="text-2xl font-bold text-white tracking-wide">
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

      <main>
      
      </main>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronDown, House } from "lucide-react";
import { Card } from "@/components/ui/card";
import Foundation from "@/app/_components/foundation";
import SurvivorCard from "@/app/_components/survivor-card";
import { Button } from "@/components/ui/button";
export default function SupportPage() {
  return (
    <>
      <div className="bg-[#009367] w-[1780px] mx-auto rounded-tr-xl rounded-tl-xl text-[#009367]">
        hello
      </div>
      <div className="min-h-screen bg-black text-white rounded-md dark overflow-x-hidden w-[1780px] mx-auto">
        {/* Header */}

        <header className="w-full  background-primary">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="text-2xl font-bold text-white tracking-wide"
              >
                Mbona
              </Link>

              {/* Navigation */}
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
                  href="/family"
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

              {/* CTA Button */}
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

        {/* Hero Section */}
        <main className="relative max-h-[750px] background-primary">
          {/* Background decorative elements - scattered dots */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute top-40 left-32 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-60 left-20 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute top-32 right-40 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-52 right-60 w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="absolute top-80 left-60 w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-96 right-20 w-2 h-2 bg-green-400 rounded-full"></div>

          {/* Large diagonal green stripe in top right */}
          {/* <div className="flex align-end justify-end">
<svg width="121" height="101" viewBox="0 0 121 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.94273 87.1276C-3.04995 77.3316 0.418603 64.5126 10.5332 59.0749L120.418 -4.3697e-05L120.418 47L32.563 98.0789C23.1648 103.543 11.1229 100.499 5.44979 91.2257L2.94273 87.1276Z" fill="#009367"/>
</svg></div> */}

          <div className="container mx-auto px-6 py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h1 className="text-7xl font-bold leading-tight tracking-widest text-white">
                  Support
                  <br />
                  Resources
                </h1>
                <p className="text-lg text-white/90 max-w-lg leading-relaxed tracking-widest font-medium">
                  Access professional counselling, legal aid, support groups,
                  and community resources. You don't have to go through this
                  journey alone.
                </p>

                {/* Decorative radiating lines */}
                <div className="flex items-start gap-2 pt-4">
                  <div className="group-37"></div>

                  {/* <div className="w-16 h-0.5 bg-green-400 mt-2"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-12 h-0.5 bg-green-400 mt-2"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-8 h-0.5 bg-green-400 mt-2"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div> */}
                </div>
              </div>

              {/* Right side - Image with decorative shapes */}
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/child.png"
                    alt="Children"
                    width={600}
                    height={600}
                    className="object-contain max-h-[600px]"
                  />
                </div>

                {/* Decorative organic shapes - translucent overlapping */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/40 rounded-full blur-2xl"></div>
                <div className="absolute top-32 right-10 w-40 h-40 bg-yellow-400/40 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-20 w-36 h-36 bg-orange-400/40 rounded-full blur-2xl"></div>
                <div className="absolute top-20 right-32 w-28 h-28 bg-green-400/30 rounded-full blur-xl"></div>

                {/* Diagonal lines overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-px h-32 bg-white/20 rotate-45"></div>
                  <div className="absolute top-1/3 right-1/4 w-px h-24 bg-white/20 rotate-12"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-px h-28 bg-white/20 -rotate-12"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-px h-36 bg-white/20 rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-px h-40 bg-white/15 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex">
            <svg
              className=" z-0"
              width="456"
              height="66"
              viewBox="0 0 456 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H456L358.5 66H0V0Z" fill="#009367" />
            </svg>

            <div className="absolute inset-0 flex items-center px-6 z-10">
              <h2 className="text-3xl font-normal leading-tight tracking-widest text-white">
                Available Resources
              </h2>
            </div>
          </div>
          <div className="bg-[#94D2BF] w-full]">
            <p>Legal Aid Center</p>
          </div>
        </main>

        {/* Available Resources Section */}
        <section>
          {/* Green banner */}

          {/* Resource cards */}
          <div className="bg-white py-8">
            <div className="container mx-auto px-6">
              <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
                <div className="shrink-0 bg-white border-l-4 border-green-500 p-6 rounded shadow-sm min-w-[280px]">
                  <div className="flex items-center gap-3">
                    <House className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Legal Aid Center
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 bg-white border-l-4 border-green-500 p-6 rounded shadow-sm min-w-[280px]">
                  <div className="flex items-center gap-3">
                    <House className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Legal Aid Center
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 bg-white border-l-4 border-green-500 p-6 rounded shadow-sm min-w-[280px]">
                  <div className="flex items-center gap-3">
                    <House className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Legal Aid Center
                    </h3>
                  </div>
                </div>
              </div>

              {/* Filter buttons */}
              <div className="flex flex-wrap gap-7">
                <button className=" w-[155px] h-[70px]px-4 py-2 bg-[#E4F3EF] border border-white rounded text-white flex items-center gap-2 transition-colors">
                  <span className="font-normal text-black tracking-wide">
                    All resources
                  </span>
                  <ChevronDown className="w-4 h-4 text-black" />
                </button>
                <button className="px-4 py-2 bg-white border border-white rounded text-gray-900 flex items-center gap-2 hover:bg-gray-50 w-[199px] h-[70px] transition-colors">
                  <span className="font-normal text-black tracking-wide text-[15px]">
                    Counselling
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className=" w-[199px] h-[70px] px-4 py-2 bg-white border border-white rounded text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span>Organisations</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="w-[155px] h-[70px] px-4 py-2 bg-white border border-white rounded text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span>Legal aid</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="w-[199px] h-[70px] px-4 py-2 bg-white border border-white rounded text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span>Support groups</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="w-[276px] h-[70px] px-4 py-2 bg-white border border-white rounded text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span>Crisis support & help</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="bg-white text-black mt-20">
        <div className="text-center mb-10">
          <h1 className="font-semibold text-[25px]">Available Resources</h1>
          <p className="font-medium text-[#000000CC]">6 resources found</p>
        </div>
        <div className="flex items-center justify-center">
          <Foundation />
          <Foundation />
          <Foundation />
        </div>
      </main>

      <section className="mt-20 bg-[#E4F3EF4D]">
        <div className="text-center">
          <h1 className="pt-20 font-semibold text-[25px]">Emergency support</h1><br></br>
          <p className="text-[#000000CC]">
            If you're in crisis or need immediate support, these resources are
            available 24/7
          </p>
        </div>
        <div className="flex items-center justify-center">
          <SurvivorCard />
          <SurvivorCard />
          <SurvivorCard />
        </div>
      </section>

      <main className="bg-[#F9FAFB] flex flex-col items-center justify-center pt-30">
        <div className="text-center">
          <h1 className="pt-20 font-semibold text-[25px]">Self-Care Resources</h1><br></br>
          <p className="text-[#000000CC]">
            If you're in crisis or need immediate support, these resources are
            available 24/7
          </p>
        </div>
        <div className="flex items-center justify-center">
          <SurvivorCard />
          <SurvivorCard />
          <SurvivorCard />
        </div><br></br><br></br><br></br><br></br>
        <div className="text-center">
          <h1 className="font-semibold text-[25px]">How to get help</h1><br></br>
          <p className="font-medium">
            Taking the first step to get support can be difficult. Here’s how we
            can help.
          </p>
        </div>
      </main>

      <section className="mt-20 bg-[#009367] flex flex-col items-center justify-center text-white">
        <h1 className="font-bold pt-10 text-4xl">
          <i>You are not alone anymore</i>
        </h1>
        <br></br>
        <span className="text-[#FFFFFFCC] text-center">
          Whether you need immediate support or ongoing care, we’re here
          <br></br> to help you through this journey.
        </span>
        <br></br>
        <div className="flex gap-10">
          <Button
            asChild
            className={`border-white/90 text-[#009367] bg-white hover:text-white rounded px-4 py-5 mt-5`}
          >
            <Link href={"/"}>Call crisis line</Link>
          </Button>
          <Button
            asChild
            className={`border-white/90 text-[#009367] bg-white hover:text-white rounded px-4 py-5 mt-5`}
          >
            <Link href={"/"}>Call crisis line</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

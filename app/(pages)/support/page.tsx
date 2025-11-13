import Image from "next/image";
import Link from "next/link";
import { Home, ChevronDown, House } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white dark overflow-x-hidden">
      {/* Header */}
      <div className="h-[33px] bg-[#009367] rounded-t-xl ">

      </div>
      <header className="w-full  background-primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white tracking-wide">
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
      <main className="relative min-h-[calc(100vh-80px)] background-primary">
        {/* Background decorative elements - scattered dots */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-60 left-20 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-40 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-52 right-60 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-80 left-60 w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-96 right-20 w-2 h-2 bg-green-400 rounded-full"></div>

        {/* Large diagonal green stripe in top right */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rotate-45 opacity-30 -translate-y-1/2 translate-x-1/2"></div>

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
                Access professional counselling, legal aid, support groups, and
                community resources. You don't have to go through this journey
                alone.
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
      </main>

      {/* Available Resources Section */}
      <section className="relative">
        {/* Green banner */}
        <div className="bg-green-500 py-6">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold">Available Resources</h2>
          </div>
        </div>

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

            {/* Placeholder for filter buttons */}
            <div>
              {/* Will be added next */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
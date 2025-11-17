import Link from "next/link";
import { Book, ChevronDown, Search } from "lucide-react";
import Card from "@/app/_components/card";
import SurvivorCard from "@/app/_components/survivor-card";
import SiteFooter from "@/app/_components/Footer";
const family = () => {
  return (
    <div className="mx-auto">
      <div className="bg-[#009367] w-[1780px] mx-auto rounded-tr-xl rounded-tl-xl text-[#009367]">
        hello
      </div>

      <div className="w-[1780px] mx-auto ">
        <div className="relative bg-[url('/mbona1.png')] h-[578px]">
          <div className="absolute inset-0 bg-black/80"></div>
          <header className="w-full relative z-10 ">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-wide text-white"
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
                    className="text-white border-b-2 border-[#009367] pb-1"
                  >
                    Find Family
                  </Link>
                  <Link
                    href="/support"
                    className="text-white hover:text-[#009367] transition-colors"
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
                  href="/support"
                  className="px-4 py-2 border border-white rounded hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span className="text-white font-bold">Find lost family</span>
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </Link>
              </div>
            </div>
          </header>
          <section className="relative z-10">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-center font-bold text-[60px] text-white mt-10">
                Find Lost Family
              </h2>
              <p className="font-medium text-white tracking-widest mx-auto w-[40%] text-center mt-5 font-poppins">
                A safe space for everyone to share memories, search for lost
                family members, and celebrate reunions. Whether you’re a
                genocide survivor or looking for any missing relative, every
                memory matters, every connection counts.
              </p>
            </div>

            <div className="bg-white w-[750px] relative z-10 h-[51px] flex items-center justify-center rounded-tr-full border-l-20 border-emerald-600 rounded-br-full p-5 mt-20 ml-15">
              <p className="text-center font-semibold text-[#009367]">
                Everything is optional and private. You control what you share
                and who can see it.
              </p>
            </div>
          </section>
        </div>
        <main className="flex flex-col items-center justify-center">
          <div className="mt-8 p-6 bg-white rounded-2xl">
            <div className="flex flex-col xl:flex-row gap-4 items-center">
              <div className="flex items-center w-[601px] h-[70px] gap-3 px-4 py-3 rounded-xl border border-gray-200">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search by name, location, or memories"
                  className="w-full text-gray-900 placeholder:text-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-8 justify-center text-center">
                {[
                  "All posts",
                  "Seeking family",
                  "Reunited stories",
                  "All missing",
                ].map((label) => (
                  <button
                    key={label}
                    className={`px-6 py-3 w-[205px] h-[70px] rounded-xl border text-sm font-medium flex items-center gap-2 ${
                      label === "All posts"
                        ? "bg-[#E4F3EF] text-black border-[#009367]/30"
                        : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    {label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Book className="text-white" />
            <Link
              href={"/"}
              className="bg-[#009367] text-white px-10 py-3 rounded-md font-semibold flex gap-2"
            >
              <Book className="text-white" />
              Share Memory
            </Link>
          </div>
        </main>
      </div>
      <section className="bg-[#F9FAFB] h-[1900px] flex flex-col mt-30">
        <div className="text-center mt-10">
          <h2 className="font-semibold text-[25px]">Memory Wall</h2>
          <span className="font-medium">6 Memories found</span>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <main className="bg-white min-h-screen mt-20">
        <div className="text-center mt-10 w-[33%] mx-auto">
          <h2 className="font-semibold text-[25px] mb-5">
            Everyone is welcome
          </h2>
          <span className="font-medium text-[#000000CC]">
            Our platform is open to everyone looking for lost family members,
            regardless of the circumstances. Whether you’re a genocide survivor,
            looking for a missing relative, or searching for someone you lost
            contact with, we’re here to help you reconnect.
          </span>
        </div>
        <div className="flex items-center justify-center">
          <SurvivorCard />
          <SurvivorCard />
          <SurvivorCard />
        </div>
        <hr className="border-[#00E9D4] mt-30" />
        <div className="text-center mt-20">
          <h2 className="font-semibold text-[25px] mb-3">
            Support and Resources
          </h2>
          <span className="font-medium text-[14px] text-[#000000CC]">
            We understand this journey can be emotional. We’re here to support
            you.
          </span>
          <div className="flex items-center justify-center">
            <SurvivorCard />
            <SurvivorCard />
            <SurvivorCard />
            <SurvivorCard />
          </div>
        </div>
      </main>
      <div className="mt-60">
        <SiteFooter />
      </div>
    </div>
  );
};

export default family;

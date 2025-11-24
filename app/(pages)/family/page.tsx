import Link from "next/link";
import { Book, ChevronDown, Search } from "lucide-react";
import Card from "@/app/_components/card";
import SurvivorCard from "@/app/_components/survivor-card";
import SiteFooter from "@/app/_components/Footer";
import SiteHeader from "@/components/site-header";
import Support from "@/app/_components/Support";
const family = () => {
  return (
    <div className="">
      <div className="h-5.5 bg-emerald-600" />
      <div className="mx-auto w-full overflow-x-hidden">
        <div className="relative bg-[url('/mbona1.png')] bg-cover bg-center min-h-[400px] sm:min-h-[500px] md:h-[510px] mx-auto w-full overflow-x-hidden">
          <div className="absolute inset-0 bg-black/80"></div>
          <SiteHeader />
          <section className="relative z-10 px-4 sm:px-6 md:px-8 s">
            <div className="flex flex-col items-center justify-center mt-8">
              <h2 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white mt-6 sm:mt-8 md:mt-10 px-4 tracking-widest">
                Find Lost <span className="bg-gradient-to-r from-[#009367] to-[#FFFFFF] bg-clip-text text-transparent">Family</span>
              </h2>
              <p className=" text-white tracking-widest mx-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] text-center mt-4 sm:mt-5 font-poppins text-[14px] sm:text-[14px] px-4">
                A safe space for everyone to share memories, search for lost
                family members, and celebrate reunions. Whether you&apos;re a
                genocide survivor or looking for any missing relative, every
                memory matters, every connection counts.
              </p>
            </div>

            <div className="bg-white w-full max-w-[90%] md:mb-2 sm:max-w-[600px] md:max-w-[700px] relative z-10 min-h-[49px] flex items-center justify-center rounded-tr-full border-l-4 sm:border-l-6 md:border-l-10 border-emerald-600 rounded-br-full p-4 sm:p-5 mt-12 sm:mt-16 md:mt-20 mx-auto sm:ml-8 md:ml-15">
              <p className="text-center font-semibold text-[#009367] text-xs sm:text-sm md:text-[14px] px-2">
                Everything is optional and private. You control what you share
                and who can see it.
              </p>
            </div>
          </section>
        </div>
        <main className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="mt-6 sm:mt-6 w-full max-full p-4 sm:p-6 bg-white rounded-2xl">
            <div className="flex flex-col xl:flex-row gap-4 items-center">
              <div className="flex items-center w-full max-w-full sm:max-w-[500px] md:max-w-[601px] min-h-[55px] sm:h-[55px] gap-3 px-4 py-3 rounded-xl border border-gray-200">
                <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search by name, location, or memories"
                  className="w-full text-gray-900 placeholder:text-gray-500 focus:outline-none text-[14px] sm:text-[14px]"
                />
              </div>
              <div className="flex gap-3 sm:gap-4 md:gap-8 justify-center text-center w-full xl:w-auto">
                {[
                  "All posts",
                  "Seeking family",
                  "Reunited stories",
                  "All missing",
                ].map((label) => (
                  <button
                    key={label}
                    className={`px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-[180px] md:w-[205px] min-h-[55px] sm:h-[55px] rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-center gap-2 ${
                      label === "All posts"
                        ? "bg-[#E4F3EF] text-black border-[#009367]/30"
                        : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    {label}
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 w-full">
            <Link
              href={"/"}
              className="bg-[#009367] text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-md font-semibold flex gap-2 items-center text-[14px] sm:text-[14px]"
            >
              <Book className="text-white sm:text-[14px] text-[15px] w-4 h-4 sm:w-5 sm:h-5" />
              Share Memory
            </Link>
          </div>
        </main>
      </div>
      <section className="bg-[#F9FAFB] min-h-auto flex flex-col mt-5 sm:mt-5 md:mt-20 lg:mt-5 pb-10 sm:pb-16 md:pb-20">
        <div className="text-center mt-6 sm:mt-8 md:mt-10 px-4">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-xl">
            Memory Wall
          </h2>
          <span className="font-medium text-sm sm:text-[14px]">
            6 Memories found
          </span>
        </div>
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8">
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <main className="bg-white min-h-screen mt-4 sm:mt-4 md:mt-4 px-4 sm:px-6 md:px-8">
        <div className="text-center mt-6 sm:mt-3 md:mt-3 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto">
          <h2 className="font-semibold text-xl sm:text-xl md:text-[20px] mb-4 sm:mb-5">
            Everyone is welcome
          </h2>
          <span className="font-medium text-[14px] sm:text-[14px] text-[#000000CC]">
            Our platform is open to everyone looking for lost family members,
            regardless of the circumstances. Whether you&apos;re a genocide
            survivor, looking for a missing relative, or searching for someone
            you lost contact with, we&apos;re here to help you reconnect.
          </span>

        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-2 mt-8 sm:mt-10 md:mt-12">
          <SurvivorCard />
          <SurvivorCard />
          <SurvivorCard />
        </div>
        <hr className="border-[#00E9D4] mt-15 sm:mt-15 md:mt-20 lg:mt-15" />
        <div className="text-center mt-4 sm:mt-2 md:mt-4">
          <h2 className="font-semibold text-xl sm:text-[23px] md:text-[23px] mb-3">
            Support and Resources
          </h2>
          <span className="font-medium text-xs sm:text-sm md:text-[14px] text-[#000000CC] px-4">
            We understand this journey can be emotional. We&apos;re here to
            support you.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <Support />
            <Support />
            <Support />
            <Support />
            {/* <SurvivorCard /> */}
          </div>
        </div>
      </main>
      <div className="mt-20 sm:mt-30 md:mt-40 lg:mt-20">
        <SiteFooter />
      </div>
    </div>
  );
};

export default family;

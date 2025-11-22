"use client"
import Image from "next/image"
import SiteHeader from "./site-header"
import { Button } from "@/components/ui/button"

export default function AdoptionHero() {
  return (
    <div className="">
      <div className="h-5.5  bg-emerald-600" />

      <section className="relative isolate bg-black text-white w-full min-h-[415px] sm:min-h-[500px] overflow-hidden">
        {/* Top green strip */}

        {/* Navbar over hero */}
        <div className="relative z-20">
          <SiteHeader variant="overlay" />
        </div>

        {/* Content with image */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-8 sm:pb-13 pt-8 sm:pt-12 lg:pt-16 flex flex-col lg:flex-row items-center justify-between lg:bottom-10">
          <div className="max-w-2xl mt-6 sm:mt-15 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight lg:mr-5 lg:ml-20">ADOPT ME</h1>
            <div className="w-12 sm:w-sm border-t-4 border-emerald-400 lg:ml-0" />

            <p className="mt-4 max-w-xl text-white/90 lg:ml-40 text-xs sm:text-[12px] mx-auto lg:mx-0">
              <span className="ml-4">Every child deserves a loving family.</span>
              <br />
              <span className="ml-6">Browse profiles of children waiting</span>
              <br />
              <span className="ml-8">for their forever home, and begin</span>
              <br />
              <span className="ml-18">your journey to becoming</span>
              <br />
              <span className="ml-44 ">a parent</span>
            </p>
            <div className="mt-6 sm:ml-68">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl h-6 hover:cursor-pointer text-xs sm:text-[12px]">
                Foster a child
              </Button>
            </div>
          </div>

          <div className="hidden lg:block absolute right-20 lg:right-45 top-1/2 lg:top-65 transform -translate-y-1/2 w-1/3">
            <Image
              src="/adoptme.png"
              alt="Children waiting for adoption"
              width={280}
              height={280}
              className="w-auto h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <div className="hidden lg:block absolute left-24 lg:left-210 top-8 lg:top-30 lg:pl-30">
            <Image
              src="/lines.png"
              alt=""
              width={400}
              height={400}
              className="w-auto h-auto object drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}

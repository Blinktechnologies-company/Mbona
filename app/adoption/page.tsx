"use client"

import AdoptionHero from "@/components/adoptionHero"
import SiteFooter from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AdoptionPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <div className="space-y-0">
      <main className="space-y-14">
        <AdoptionHero />

        {/* Search Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-3 sm:gap-3 grid-cols-1 sm:grid-cols-[1fr_auto_auto]">
            {/* Search input */}
            <input
              placeholder="Search by name or short description"
              className="h-12 rounded border border-zinc-300 px-3 text-xs sm:text-[13px] outline-none focus:border-emerald-600 w-full"
            />

            {/* AGE DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 border-zinc-300 text-zinc-700 w-full sm:w-45 text-xs sm:text-[13px] bg-transparent"
                >
                  All ages
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-45">
                <DropdownMenuItem>0 – 2 years</DropdownMenuItem>
                <DropdownMenuItem>3 – 5 years</DropdownMenuItem>
                <DropdownMenuItem>6 – 10 years</DropdownMenuItem>
                <DropdownMenuItem>11 – 17 years</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 border-zinc-300 text-zinc-700 w-full sm:w-45 text-xs sm:text-[13px] bg-transparent"
                >
                  All genders
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-45">
                <DropdownMenuItem>Male</DropdownMenuItem>
                <DropdownMenuItem>Female</DropdownMenuItem>
                <DropdownMenuItem>Prefer not to say</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* Cards */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-800">Children Waiting for Families</h2>
            <p className="mt-2 text-zinc-600 text-xs sm:text-sm">
              Meet children hoping to be matched with loving families
            </p>
          </div>

          <div className="mt-8 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-0 sm:px-4 lg:px-20">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xl">
                <div className="mb-4 h-42 w-full overflow-hidden rounded-lg bg-zinc-200 bg-[url('/adoptChildren.png')] bg-cover"></div>

                <div className="text-base sm:text-lg font-bold text-zinc-900 pb-4">Mukiza</div>
                <div className="text-xs sm:text-[14px] text-emerald-700 pb-1.5">6 years • Kigali</div>

                <p className="mt-2 text-xs sm:text-s[14px] text-zinc-700">
                  A safe space for genocide survivors to post memories, names, photos, or fragments of identity.
                  AI-assisted matching helps identify potential family links.
                </p>

                <hr className="border-t-2 border-zinc-400/10 mt-4" />

                <Button className="mt-4 mb-3 w-full lg:w-65 bg-emerald-700 text-white hover:bg-emerald-800 rounded hover:cursor-pointer h-7 text-xs sm:text-[11px]">
                  <Bookmark className="h-4 sm:h-5 w-4 sm:w-5" />
                  <span className="">Learn more and Apply</span>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Circles Section */}
        <section className="py-3">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 text-center">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-zinc-900">How the Adoption Process Works</h2>
            <p className="mt-2 text-zinc-700 text-xs sm:text-sm font-semibold">
              Our streamlined process ensures the best match between children and families
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
              {processItems.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 h-16 sm:h-18 w-16 sm:w-18 rounded-full border-2 border-zinc-400" />

                  <div className="text-xs sm:text-sm lg:text-[13px] font-extrabold text-zinc-900">{item.title}</div>
                  <p className="mt-4 text-xs sm:text-[12px] leading-4 text-zinc-700 max-w-xs sm:max-w-sm mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support cards */}
        <hr className="border-t-2 border-emerald-200" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 mb-10">
          <div className="text-center">
            <h2 className="text-base sm:text-lg font-semibold text-emerald-800">Support for Adoptive Families</h2>
            <p className="mt-2 text-zinc-600 text-xs sm:text-[13px]">
              we provide ongoing support to help your family thrive for a better future
            </p>
          </div>

          <div
            className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-0 sm:px-4"
            style={{ alignItems: "start" }}
          >
            {supportCards.map((c, i) => {
              const isLowered = i % 2 === 1
              const offsetClass = isLowered ? "lg:translate-y-12" : "lg:translate-y-0"

              return (
                <motion.div
                  key={c.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`rounded-md bg-emerald-700 p-4 sm:p-6 mt-2 mb-4 text-white shadow-md hover:cursor-pointer hover:shadow-xl flex flex-col items-center text-center ${offsetClass}`}
                >
                  <Bookmark className="w-5 sm:w-6 h-5 sm:h-6" />
                  <div className="mb-2 text-xs sm:text-sm font-semibold mt-2">{c.title}</div>
                  <p className="text-xs mt-2 sm:text-[12px] text-white/90">{c.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

const processItems = [
  {
    title: "Trauma-Informed Approach",
    desc: "Everything is optional, private and designed to avoid re-triggering trauma",
  },
  {
    title: "Family-Centered Support",
    desc: "Everything is optional, private and designed to avoid re-triggering trauma",
  },
  {
    title: "Child-Focused Services",
    desc: "Everything is optional, private and designed to avoid re-triggering trauma",
  },
  {
    title: "Community Integration",
    desc: "Everything is optional, private and designed to avoid re-triggering trauma",
  },
]

const supportCards = [
  {
    title: "Counseling & Guidance",
    desc: "Caring, trauma counseling and guidance throughout the journey",
  },
  {
    title: "Document Assistance",
    desc: "Step-by-step help to prepare, and submit required documents",
  },
  {
    title: "Community Support",
    desc: "Connect with mentors and families who have walked the path before",
  },
  {
    title: "Community Integration",
    desc: "Connect with mentors and families who have walked the path before",
  },
]

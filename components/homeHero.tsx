"use client";
import Image from "next/image";
import SiteHeader from "./site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
//import { Progress } from "@/components/ui/progress";

export default function HomeHero() {
  return (
    <div>
     <div className="h-5.5 bg-emerald-600" />
    
    <section className="relative isolate bg-black text-white max-h-[420px] sm:min-h-[500px]">
      {/* Green bar above */}
      

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home1.png"
          alt=""
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Site Header */}
      <div className="relative z-20">
        <SiteHeader variant="overlay" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-10 sm:pt-16 ">
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Text */}
          <div className="max-w-2xl sm:ml-20 md:ml-2">
            <p className="text-emerald-200/80 text-sm font-medium">
              A survivor finds a sibling
            </p>
            <h1 className="text-[34px] font-semibold leading-tight sm:text-3xl">
              We are Rebuilding
              <br />
              <span className="text-emerald-400/80">Families &</span> Restoring
              <br />
              Hope
            </h1>
            <div className="border-l-2 border-orange-300 mr-30">
               <p className="mt-4 max-w-xl text-white/90 text-[12px] font-extralight ml-3">
              A digital bridge connecting families, healing trauma, and
              restoring identity in Rwanda. Where a child finds a parent, a
              survivor finds a sibling, and anyone can find their lost family.
            </p>
            </div>
            
          </div>

          {/* White Card */}
          <div className="hidden lg:block lg:justify-self-end">
            <Card className="w-sm max-w-md -mt-2 shadow-2xl rounded-sm hover:cursor-pointer hover:border-zinc-400 mx-auto sm:mx-0">
              <CardContent className="px-6 pb-5 pt-1 text-zinc-900 max-h-[230px]">
                <Button className=" bg-emerald-600 text-white hover:bg-emerald-700 rounded h-8 w-full sm:w-30 ">
                  Our Future
                </Button>

                <h3 className="mt-2 text-md font-bold">
                  Let a child find a home and a survivor find a sibling thus a
                  promising life.
                </h3>
                <p className="mt-2 pb-6 text-[11px] text-zinc-600">
                  A digital bridge connecting families, healing trauma, and
                  restoring identity in Rwanda. Where a child finds a parent, a
                  survivor finds a sibling, and anyone can find their lost
                  family.
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-cyan-100 rounded-full h-3 overflow-hidden relative">
                      <div
                        className="bg-emerald-600 h-full rounded-full flex items-center justify-end pr-3"
                        style={{ width: "60%" }}
                      >
                        <span className="text-[9px] font-medium text-white pt-0.5">
                          70%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-0 flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded h-7 w-full sm:w-40"
                  >
                    <p className="text-[12px]">Adopt or foster a child</p>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded h-7 w-full sm:w-40"
                  >
                    <p className="text-[12px]">  Find your lost family</p>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Overlay Stats Section — hidden on very small windows */}
      <div className="hidden lg:block absolute inset-x-0 -bottom-13 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-5 h-[130px]">
            <StatCell value="20M" label="Refugee Institutions" />
            <StatCell value="20M" label="Refugee Institutions" />
            <StatCell value="20M" label="Refugee Institutions" />
            <StatCell value="20M" label="Refugee Institutions" />

            {/* Green Fifth Stat */}
            <div className="flex flex-col items-center justify-center gap-1 p-6 bg-emerald-600 rounded-none text-white shadow-md">
              <div className="text-sm font-bold mr-8 mt-6 "><p className="mb-1">Our Goal is to help</p></div>
              <div className="h-[2px] w-10 rounded-full bg-orange-700 mb-0" />
              <div className="text-[12px] font-medium pb-4 mr-17 mt-1">
                You can! I can!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-6 text-emerald-700 bg-white rounded-none shadow">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="h-0.5 w-10 rounded-full bg-amber-800" />
      <div className="text-[11px] font-medium text-zinc-700">{label}</div>
    </div>
  );
}

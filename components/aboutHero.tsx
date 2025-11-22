"use client";
import Image from "next/image";
import SiteHeader from "./site-header";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function AboutHero() {
  return (
    <div>
    
    <div className="h-5.5 bg-emerald-600" />
    <section className="relative isolate bg-black text-white min-h-[420px] sm:min-h-[500px] overflow-hidden">
      

      <div className="relative z-20">
        <SiteHeader variant="overlay" />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 space-y-4 ">
        <Button className="rounded-2xl bg-white text-black hover:bg-white hover:text-black cursor-pointer w-50 mb-15 mt-10 h-7.5">
          <Zap className=" h-4 w-4" fill="black"/>5 Categories
        </Button>

        <h1 className="font-semibold sm:text-[48px] text-center">
          ABOUT <span className="text-emerald-600">MBONA</span>
        </h1>
      </div>
    </section>
    </div>
  );
}

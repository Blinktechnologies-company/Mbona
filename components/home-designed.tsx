"use client";
import { Shield, Heart, Clock, Globe} from "lucide-react";

export default function HomeDesigned() {
  return (
    <section className=" pb-2 pt-12 border-t-emerald-200/80w border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-zinc-900 pt-2">
            Designed with care
          </h2>
          <p className="mt-2 text-zinc-700 text-[13px]">
            Every feature is designed with trauma sensitivity, privacy and
            accessibility in 
          </p>
          <span className="mt-2 text-zinc-700 text-[13px]" >mind</span>
        </div>

        {/**Circles */}

        <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center font-sm text-[10px]">
              <style>{`
              @keyframes pulse-scale {
              0%, 100% {transform: scale(1); }
              50% {transform: scale(1.05)}
              }
              .items-circle {
              animation: pulse-scale 2s ease-in-out infinite;
              }
              `}</style>
              <div className="items-circle mx-auto mb-4 h-16 w-16 rounded-full border-2 border-emerald-300 flex items-center justify-center ">
                <item.icon className="h-9 w-9 text-emerald-400" />
              </div>
              <div className="text-[17px] font-semibold text-zinc-900">
                {item.title}
              </div>
              <p className="mt-2 text-[12px] leading-6 text-zinc-700 max-w-[240px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Trauma-informed",
    desc: "Everything is optional, private and designed to avoid re-triggering trauma",
    icon: Shield,
  },
  {
    title: "Offline Mode",
    desc: "Draft posts and view saved profiles even without internet connection.",
    icon: Globe,
  },
  {
    title: "Voice Notes",
    desc: "Record voice messages for those who prefer speaking over typing.",
    icon: Clock,
  },
  {
    title: "Community Support",
    desc: "Access to counseling, legal aid, and community stories of hope.",
    icon: Heart,
  },
];

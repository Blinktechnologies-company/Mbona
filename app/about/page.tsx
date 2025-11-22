import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/footer";
import AboutHero from "@/components/aboutHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
        
      
      <main className="flex-grow space-y-14">
        <AboutHero />

        {/* Our Character Section */}
        <div className="mt-10 grid gap-6 sm:gap-6 md:gap-6 sm:grid-cols-2 mx-auto max-w-7xl px-4 sm:px-20 ">
          {cards.map((c) => (
            <Card key={c.title} className="shadow-xl rounded-sm ">
              <CardContent className="p-4 sm:p-6">
                <div className=" flex items-center gap-4 ">
                  <div className="h-9 w-12 rounded-sm bg-emerald-50 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold leading-tight text-zinc-900">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-[12px] sm:text-[12px] leading-7 text-zinc-600">
                  {c.desc}
                </p>
                <p className="mt-3 text-[12px] sm:text-[12px] leading-7 text-zinc-600">
                  {c.desc}
                </p>

              
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Impact Section */}
        <section className="py-12 sm:py-10 bg-[#E4F3EF4D] mt-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-xl font-bold text-zinc-900">
              Our Impact
            </h2>
            <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-[13px] text-zinc-600 max-w-2xl mx-auto">
              Since our launch, we have been dedicated to creating meaningful connections and supporting families on their healing journey.
            </p>

            {/* Impact Circles with Animation */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactItems.map((item) => (
                <div key={item.title} className="text-center">
                  <style>{`
                    @keyframes pulse-scale {
                      0%, 100% { transform: scale(1); }
                      50% { transform: scale(1.05); }
                    }
                    .impact-circle {
                      animation: pulse-scale 2s ease-in-out infinite;
                    }
                  `}</style>
                  <div className="impact-circle mx-auto sm:mb-6 h-18 sm:h-18 w-18 sm:w-18 rounded-full border-2 border-emerald-600 flex items-center justify-center bg-white shadow-sm">
                    <div className="text-lg sm:text-[16px] font-semibold text-emerald-600">{item.number}</div>
                  </div>
                  <div className="text-sm sm:text-sm font-bold text-zinc-900">
                    {item.title}
                  </div>
                  <p className="mt-2 text-[12px] sm:text-[12px] leading-6 text-zinc-600 max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 sm:pt-1 sm:pb-12 mt-0 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-xl font-bold text-zinc-900">
              Our Values
            </h2>
            <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-[14px] text-zinc-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {valueItems.map((item) => (
                <div key={item.title} className="bg-white border border-zinc-200 rounded-lg px-6 pb-6 pt-6 text-center hover:shadow-lg transition-shadow hover:cursor-pointer">
                  <div className="mx-auto mb-4 sm:mb-6 h-14 sm:h-14 w-14 sm:w-14 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center flex-shrink-0">
                    <div className="text-xl sm:text-2xl text-emerald-500">{item.icon}</div>
                  </div>
                  <h3 className="text-sm sm:text-[12px] font-medium text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-[12px] leading-6 text-zinc-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

const cards = [
  {
    title: "Our Character",
    desc: "To create digital sanctuay where families can be reunited, children can find loving homes, and survivors can share their stories in a state,trauma-informed environment. We believe that technology can be a force for healing and human connection.",
    cta: "Learn More",
    points: [
      "Child profiles with privacy-respecting details",
      "Application forms for families",
      "Legal guidance and emotional support",
      "Partner organization verification",
    ],
  },
  {
    title: "Our Mission",
    desc: "To create digital sanctuay where families can be reunited, children can find loving homes, and survivors can share their stories in a state,trauma-informed environment. We believe that technology can be a force for healing and human connection.",
    cta: "Learn More",
    points: [
      "Child profiles with privacy-respecting details",
      "Application forms for families",
      "Legal guidance and emotional support",
      "Partner organization verification",
    ],
  },
];

const impactItems = [
  { number: "1000+", title: "Families Connected", desc: "Successful family reunifications and connections made through our platform" },
  { number: "5000+", title: "Lives Touched", desc: "Individuals supported and guided through their healing journey" },
  { number: "50+", title: "Global Partners", desc: "Organizations collaborating with us to extend our reach worldwide" },
  { number: "24/7", title: "Support Available", desc: "Round-the-clock assistance and resources for our community" },
];

const valueItems = [
  { 
    title: "Trauma-Informed Care", 
    icon: "▪",
    desc: "Every feature is designed with sensitivity to trauma, ensuring users feel safe and in control." 
  },
  { 
    title: "Dignity & Respect", 
    icon: "♡",
    desc: "We treat every user with the dignity and respect they deserve, regardless of their circumstances." 
  },
  { 
    title: "Community-Centered", 
    icon: "⚬",
    desc: "Our platform is built by and for the community, ensuring it meets real needs and values." 
  },
  { 
    title: "Privacy First", 
    icon: "⊕",
    desc: "User privacy and data protection are fundamental to our platform's and operation." 
  },
  { 
    title: "Hope & Healing", 
    icon: "✦",
    desc: "We believe in the power of hope and the possibility of healing through human connection." 
  },
  { 
    title: "Excellence", 
    icon: "◆",
    desc: "We strive for excellence in everything we do, from technology to user experience to support." 
  },
];

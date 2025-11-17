import Link from "next/link";
const family = () => {
  return (
    <div>
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
                <span>Find lost family</span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </Link>
            </div>
          </div>
        </header>
        {/* <section className="flex flex-col items-center justify-center relative z-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-bold text-[60px] text-white mt-10">
              Find Lost Family
            </h2>
            <p className="font-medium text-white tracking-widest mx-auto w-[40%] text-center mt-5 font-poppins">
              A safe space for everyone to share memories, search for lost
              family members, and celebrate reunions. Whether you’re a genocide
              survivor or looking for any missing relative, every memory
              matters, every connection counts.
            </p>
          </div>
          <div className="bg-white w-[598px] relative z-10 h-[51px] flex items-center justify-center rounded-tr-md rounded-br-md ">
    <p className="text-center">Everything is optional and private. You control what you share and who can see it.</p>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default family;

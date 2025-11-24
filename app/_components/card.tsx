import { Phone } from "lucide-react";
import Link from "next/link";
const Card = () => {
  return (
    <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1261px]">
      <div className="bg-white shadow-lg w-fit min-h-[200px] sm:min-h-[450px] md:h-fit mx-auto rounded-lg sm:rounded-xl overflow-hidden">
        <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:ml-3">
          <h2 className="font-bold text-base sm:text-lg mt-4 sm:mt-6 md:mt-3 mb-3 sm:mb-4 md:mb-3">
            Amandine Kaneza
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 mb-6 sm:mb-8 md:mb-10">
            <span className="text-[#009367] text-xs sm:text-sm">
              8 years old in Kigali
            </span>
            <span className="text-[#009367] text-xs sm:text-sm">Kigali</span>
            <span className="bg-[#00936747]  px-4 sm:px-6 md:px-4 rounded-full text-[#009367] text-xs sm:text-sm">
              Genocide Survivor
            </span>
          </div>
          <p className="text-[#000000CC] mb-6 sm:mb-8 md:mb-5 text-[14px] sm:text-[14px]">
            Looking for my sister Maria who was 8 years old in 1994. We were
            separated in Nyamata. She had a small scar on the left hand
          </p>
          <ol className="">
            <h2 className="font-bold text-sm sm:text-base mb-2">Memories</h2>
            <li className="text-sm sm:text-[14px] mb-1">
              We lived near the church
            </li>

            <li className="text-[14px] sm:text-[14px] mb-1">She loved to sing</li>
            <li className="text-[14px] sm:text-[14px] mb-4 sm:mb-6 md:mb-8">
              Our father was a teacher
            </li>
          </ol>
          <hr className="" />
          <Link
            className="flex items-center justify-center mt-10 sm:mt-10 md:mt-10 bg-[#009367] w-full sm:w-[200px] md:w-[251px] min-h-[40px] sm:h-[40px] px-4 py-2 sm:py-3 rounded-lg gap-2 sm:gap-3 text-white text-[14px] sm:text-[14px] font-medium"
            href={"/"}
          >
            Contact Amandine
            <Phone className="text-white w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 md:w-[24px] md:h-[24px] flex-shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { Phone } from "lucide-react";
import Link from "next/link";
const Card = () => {
  return (
    <div className="mt-20">
      <div className="bg-white shadow-lg w-[1261px] h-[491px] mx-auto ">
        <div className="flex flex-col ml-10">
          <h2 className="font-bold text-lg mt-10 mb-5">Amandine Kaneza</h2>
          <div className="flex gap-5 mb-10">
            <span className="text-[#009367]">8 years old in Kigali</span>
            <span className="text-[#009367]">Kigali</span>
            <span className="bg-[#00936747] px-8 rounded-full text-[#009367]">Genocide Survivor</span>
          </div>
          <p className="text-[#000000CC] mb-10">
            Looking for my sister Maria who was 8 years old in 1994. We were
            separated in Nyamata. She had a small scar on the left hand
          </p>
          <ol>
            <h2 className="font-bold">Memories</h2>
            <li>We lived near the church</li>
            <li>She loved to sing</li>
            <li className="mb-8">Our father was a teacher</li>
          </ol>
          <hr />
          <Link className="flex items-center justify-center mt-10 bg-[#009367] w-[251px] h-[51px] px-4 py-3 rounded-lg gap-3 text-white" href={"/"}> Contact Amandine<Phone className="text-white w-[24px] h-[24px]" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

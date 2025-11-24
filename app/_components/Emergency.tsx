import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const Emergency = () => {
  return (
    <div
      className="flex flex-col ml-10 bg-white shadow-[0_0_10px_2px_rgba(0,147,103,0.55)]
 w-[407px] h-[230px] px-5 rounded-lg "
    >
      <h1 className="font-bold mt-6 flex gap-3">
        <Phone className="text-[#009367]" />
        Crisis Hotline
      </h1>
      <br></br>
      <p className="text-[#000000CC] text-[14px]">
        Immediate emotional and physchological support available 24/7.
      </p>
      <br></br>
      <span className="mb-2 flex text-[#009367] text-[14px]">+250 788 678 901</span>
      <span className="mb-0 flex text-[#000000CC] text-[14px]">Available 24/7</span>
    </div>
  );
};

export default Emergency;

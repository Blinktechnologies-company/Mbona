import { Bookmark } from "lucide-react";

const Support = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#009367] text-white p-5 rounded-lg">
      <Bookmark className="mt-3 mb-2 h-[40px] w-[40px]" strokeWidth={2} />
      <h2 className="mb-4 font-bold">Legal guidance</h2>
      <p className="tracking-wider text-[13px] px-5">Complete legal support throughout<br></br> the adoption process.</p>
    </div>
  );
};

export default Support;

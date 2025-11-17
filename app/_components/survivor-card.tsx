import { Bookmark } from "lucide-react";

const SurvivorCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg w-[450px] p- h-[250px] ml-10 mt-15 rounded-lg">
      <Bookmark className="text-white bg-[#00936754] rounded-full p-2 w-[50px] h-[50px]" />
      <h2 className="font-bold mb-4">Genocide Survivors</h2>
      <span className="text-center text-[#000000CC] font-medium w-[70%]">
        {" "}
        For those who lost family during the 1994 genocide against the Tutsi.
        Share memories and search for lost loved ones.
      </span>
    </div>
  );
};

export default SurvivorCard;

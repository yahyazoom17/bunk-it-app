import { AiOutlineStop } from "react-icons/ai";
import { MdClose, MdDone } from "react-icons/md";
import AbsentBtn from "../Button/AbsentBtn";
import NoClassBtn from "../Button/NoClassBtn";
import PresentBtn from "../Button/PresentBtn";
const ClassCard = () => {
  return (
    <div className="bg-white shadow-sm p-3 mx-5 my-3 rounded-xl">
      <div className="">
        <div className="px-3">
          <div className=" flex flex-row items-center gap-2 font-bold md:text-xl text-lg manrope">
            Class Name{" "}
            <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              bunkable
            </span>
          </div>
          <div className="font-bold md:text-md text-sm manrope text-green-500 my-2 ">
            Overall Attendance: 95%
          </div>
          <div className="font-bold md:text-md text-sm manrope text-yellow-500 my-2 ">
            Required Attendance: 85%
          </div>
          <div className="font-bold md:text-md text-sm manrope text-red-500 my-2 ">
            Low Attendance: 75%
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly gap-3 mt-5 mb-2 w-full md:grid md:grid-cols-3">
          <PresentBtn
            text="Present"
            icon={MdDone}
            iconSize={15}
            className="manrope"
          />
          <AbsentBtn
            text="Absent"
            icon={MdClose}
            iconSize={15}
            className="manrope"
          />
          <NoClassBtn
            text="No Class"
            icon={AiOutlineStop}
            iconSize={15}
            className="manrope"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

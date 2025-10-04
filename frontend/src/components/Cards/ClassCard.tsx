import { AiOutlineStop } from "react-icons/ai";
import { MdClose, MdDone } from "react-icons/md";
import AbsentBtn from "../Button/AbsentBtn";
import NoClassBtn from "../Button/NoClassBtn";
import PresentBtn from "../Button/PresentBtn";
import PercentageChart from "../Charts/PercentageChart";
const ClassCard = () => {
  return (
    <div className="bg-white shadow-sm p-3 mx-5 my-3 rounded-xl">
      <div>
        <div className="px-2">
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="col-span-2">
              <div className=" flex flex-row items-center gap-2 font-bold md:text-xl text-lg manrope">
                Class Name{" "}
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                  bunkable
                </span>
              </div>
              <div className="font-bold md:text-md text-sm manrope text-gray-500 mt-1 mb-2">
                Total Attended: 6 / 180
              </div>
              <div className="font-bold md:text-md text-sm manrope text-red-500 mt-3 mb-2">
                Attendance shortage!
              </div>
            </div>
            <div className="w-full mx-1 md:hidden">
              <PercentageChart />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-3 mt-5 mb-2 w-full md:grid md:grid-cols-3">
          <PresentBtn
            text="Present"
            icon={MdDone}
            iconSize={15}
            className="manrope w-full"
          />
          <AbsentBtn
            text="Absent"
            icon={MdClose}
            iconSize={15}
            className="manrope w-full"
          />
          <NoClassBtn
            text="No Class"
            icon={AiOutlineStop}
            iconSize={15}
            className="manrope w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

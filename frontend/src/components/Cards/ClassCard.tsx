import { useState } from "react";
import { AiOutlineStop } from "react-icons/ai";
import { MdClose, MdDone } from "react-icons/md";
import type { ClassData } from "../../types/classTypes";
import AbsentBtn from "../Button/AbsentBtn";
import NoClassBtn from "../Button/NoClassBtn";
import PresentBtn from "../Button/PresentBtn";
import SecondaryBtn from "../Button/SecondaryBtn";
import PercentageChart from "../Charts/PercentageChart";
import { MdClear } from "react-icons/md";

interface Props {
  data: ClassData;
}

const ClassCard = ({ data }: Props) => {
  const [isPresent, setIsPresent] = useState<boolean>(data.isPresent);
  const [isAbsent, setIsAbsent] = useState<boolean>(data.isAbsent);
  const [noClass, setNoClass] = useState<boolean>(data.noClass);

  const handlePresent = () => {
    setIsPresent(!isPresent);
  };

  const handleAbsent = () => {
    setIsAbsent(!isAbsent);
  };

  const handleNoClass = () => {
    setNoClass(!noClass);
  };

  return (
    <div className="bg-white shadow-sm p-3 mx-5 my-3 rounded-xl">
      <div>
        <div className="px-2">
          <div className="grid grid-cols-3 gap-2 items-center">
            <div className="col-span-2">
              <div className=" flex flex-row items-center gap-2 font-bold md:text-xl text-lg manrope">
                {data.subjectName}{" "}
                {data.isBunkable && (
                  <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                    bunkable
                  </span>
                )}
              </div>
              <div className="font-bold md:text-md text-xs manrope text-gray-500 mt-1 mb-2">
                Total Attended: {data.totalAttended} / {data.totalClasses}
              </div>
              {(data.totalAttended / data.totalClasses) * 100 < 85 && (
                <div className="font-bold md:text-md text-sm manrope text-red-500 mt-3 mb-2">
                  Attendance shortage!
                </div>
              )}
            </div>
            <div className="w-full mx-1 md:hidden">
              <PercentageChart
                attended={data.totalAttended}
                totalClasses={data.totalClasses}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-3 mt-5 mb-2 w-full md:grid md:grid-cols-3">
          <PresentBtn
            text={isPresent ? "Attended" : "Present"}
            icon={MdDone}
            iconSize={15}
            onClick={handlePresent}
            className={`manrope ${isAbsent || noClass ? "hidden" : ""} w-full ${
              isPresent && "bg-purple-600 text-white"
            }`}
          />
          <AbsentBtn
            text={isAbsent ? "Bunked" : "Absent"}
            icon={MdClose}
            iconSize={15}
            onClick={handleAbsent}
            className={`manrope ${
              isPresent || noClass ? "hidden" : ""
            } w-full ${isAbsent && "bg-purple-600 text-white"}`}
          />
          <NoClassBtn
            text="No Class"
            icon={AiOutlineStop}
            iconSize={15}
            onClick={handleNoClass}
            className={`manrope ${
              isPresent || isAbsent ? "hidden" : ""
            } w-full ${noClass && "bg-purple-600 text-white"}`}
          />
          {isPresent || isAbsent || noClass ? (
            <SecondaryBtn icon={MdClear} iconSize={15} className={`manrope`} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

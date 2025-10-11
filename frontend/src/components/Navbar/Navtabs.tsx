import { FaFaceSmileWink, FaRegFaceSmileWink } from "react-icons/fa6";
import { IoPieChart, IoPieChartOutline } from "react-icons/io5";
import {
  MdClass,
  MdOutlineClass,
  MdOutlineToday,
  MdToday,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import PrimaryBtn from "../Button/PrimaryBtn";
import { RiRobot2Line } from "react-icons/ri";
import SecondaryBtn from "../Button/SecondaryBtn";

const Navtabs = () => {
  const location = useLocation();
  return (
    <div className="max-w-4xl p-3 w-full">
      <div className="flex flex-row gap-2 overflow-x-auto scroll-smooth hide-scrollbar">
        <Link to={"/"}>
          {location.pathname === "/" ? (
            <PrimaryBtn
              icon={MdToday}
              iconSize={18}
              text="Today"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          ) : (
            <SecondaryBtn
              icon={MdOutlineToday}
              iconSize={18}
              text="Today"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          )}
        </Link>
        <Link to={"/"}>
          {location.pathname === "/bunkable" ? (
            <PrimaryBtn
              icon={FaFaceSmileWink}
              iconSize={18}
              text="Bunkable"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          ) : (
            <SecondaryBtn
              icon={FaRegFaceSmileWink}
              iconSize={18}
              text="Bunkable"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          )}
        </Link>
        <Link to={"/"}>
          {location.pathname === "/subjects" ? (
            <PrimaryBtn
              icon={MdClass}
              iconSize={18}
              text="Subjects"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          ) : (
            <SecondaryBtn
              icon={MdOutlineClass}
              iconSize={18}
              text="Subjects"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          )}
        </Link>
        <Link to={"/"}>
          {location.pathname === "/attendance" ? (
            <PrimaryBtn
              icon={IoPieChart}
              iconSize={18}
              text="Attendance"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          ) : (
            <SecondaryBtn
              icon={IoPieChartOutline}
              iconSize={18}
              text="Attendance"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          )}
        </Link>
        <Link to={"/"}>
          {location.pathname === "/aichat" ? (
            <PrimaryBtn
              icon={RiRobot2Line}
              iconSize={18}
              text="AI"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          ) : (
            <SecondaryBtn
              icon={RiRobot2Line}
              iconSize={18}
              text="AI"
              className="focus:outline-none text-sm md:text-lg manrope"
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navtabs;

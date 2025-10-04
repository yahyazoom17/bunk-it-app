import ClassCard from "../components/Cards/ClassCard";
import Navtabs from "../components/Navbar/Navtabs";
import type { ClassData } from "../types/classTypes";

const dummyData: ClassData = {
  subjectName: "ECE",
  isBunkable: true,
  totalAttended: 13,
  totalClasses: 20,
  isPresent: false,
  isAbsent: false,
  noClass: false,
  classDate: "Oct 3, Fri 2025",
};

const dummyData2: ClassData = {
  subjectName: "Maths",
  isBunkable: false,
  totalAttended: 13,
  totalClasses: 15,
  isPresent: false,
  isAbsent: false,
  noClass: false,
  classDate: "Oct 3, Fri 2025",
};

const Home = () => {
  return (
    <>
      <Navtabs />
      <div className="w-full max-w-4xl">
        <div className="p-3 mx-3 mb-1 text-xl manrope font-extrabold">
          {"October 3, Friday - 2025"}
        </div>
        <div className="h-120 overflow-y-auto">
          <ClassCard data={dummyData} />
          <ClassCard data={dummyData2} />
          <ClassCard data={dummyData2} />
          <ClassCard data={dummyData2} />
        </div>
      </div>
    </>
  );
};

export default Home;

import { useEffect } from "react";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ClassCard from "../components/Cards/ClassCard";
import Navtabs from "../components/Navbar/Navtabs";
import { fetchClassesAsync } from "../redux/class/classSlice";
import type { AppDispatch, RootState } from "../redux/store";
import { fetchTodayAsync } from "../redux/time/todaySlice";
import { fetchUserAsync } from "../redux/user/userSlice";
import type { ClassData } from "../types/classTypes";

const Home = () => {
  const today = useSelector((state: RootState) => state.today.today);
  const user = useSelector((state: RootState) => state.user.student);
  const day = useSelector((state: RootState) => state.today.day);
  const classes = useSelector((state: RootState) => state.class.data);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserAsync("68e20b6d0fbb27834e3c84be"));
    dispatch(fetchTodayAsync());
    dispatch(fetchClassesAsync(day));
  }, [dispatch, day]);

  return (
    <>
      <Navtabs />
      <div className="w-full max-w-4xl">
        <div className="p-3 mx-3 mb-1 text-xl manrope font-extrabold">
          {today}
        </div>
        <div className="h-100vh overflow-y-auto">
          {classes.length > 0 ? (
            classes.map((cls: ClassData, index) => (
              <ClassCard data={cls} key={index} />
            ))
          ) : (
            <div className="mt-30 mx-3 mb-1 text-md manrope font-semibold text-center flex flex-col items-center justify-center space-y-5">
              <FaRegSmileWink size={60} className="text-gray-500" />
              <div className="text-gray-500">
                No classes for today {user.name}, enjoy!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

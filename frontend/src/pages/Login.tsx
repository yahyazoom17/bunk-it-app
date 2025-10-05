import { useState } from "react";
import toast from "react-hot-toast";
import { BiMaleFemale } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { MdClass, MdDateRange, MdLogin } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import type { AppDispatch, RootState } from "../redux/store";
import { saveUserAsync } from "../redux/user/userSlice";
import type { StudentData } from "../types/userTypes";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.student);
  const loading = useSelector((state: RootState) => state.user.loading);
  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>();
  const [gender, setGender] = useState<string>("Select Gender");
  const [department, setDepartment] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const newStudent: StudentData = {
      name,
      dob,
      gender,
      department,
    };
    toast.promise(
      dispatch(saveUserAsync(newStudent)),
      {
        loading: "Signing in...",
        success: `Welcome ${user.name}`,
        error: "Login failed!",
      },
      {
        duration: 2000,
      }
    );
    console.log(user);
    navigate(`/`);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="p-3 mx-3 mb-1 mt-10 text-2xl manrope font-extrabold">
        Login to continue
      </div>
      <div className="p-3 mx-3 mb-1">
        <div className="flex items-center justify-between gap-2">
          <FaUser size={25} />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 text-sm md:text-md rounded-lg py-2 px-3 w-full my-3 manrope font-semibold placeholder-gray-500"
            placeholder="Your Name"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <MdDateRange size={25} />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border text-sm md:text-md border-gray-400 rounded-lg py-2 px-3 w-full my-3 manrope font-semibold placeholder-gray-500"
            placeholder="Your DOB (Optional)"
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <BiMaleFemale size={25} />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border text-sm md:text-md border-gray-400 rounded-lg py-2 px-3 w-full my-3 manrope font-semibold"
          >
            <option value="Select Gender">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex items-center justify-between gap-2">
          <MdClass size={25} />
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border text-sm md:text-md border-gray-400 rounded-lg py-2 px-3 w-full my-3 manrope font-semibold placeholder-gray-500"
            placeholder="Your Department (Optional)"
          />
        </div>
        <PrimaryBtn
          icon={MdLogin}
          type="submit"
          disabled={loading}
          iconSize={18}
          onClick={handleLogin}
          text="Login"
          className="w-full my-5 manrope"
          reverse
        />
      </div>
    </div>
  );
};

export default Login;

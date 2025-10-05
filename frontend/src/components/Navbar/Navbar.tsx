import { useState } from "react";
import toast from "react-hot-toast";
import {
  LuCircleUserRound,
  LuEye,
  LuLogIn,
  LuLogOut,
  LuSettings,
} from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { AppDispatch, RootState } from "../../redux/store";
import { removeUserAsync } from "../../redux/user/userSlice";
import GhostBtn from "../Button/GhostBtn";
import PrimaryBtn from "../Button/PrimaryBtn";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.user.student.name);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.promise(
      dispatch(removeUserAsync()),
      {
        loading: "Signing out...",
        success: `Logout Successful!`,
        error: "Login failed!",
      },
      {
        duration: 2000,
      }
    );
    navigate("/login");
  };
  return (
    <div className="max-w-4xl p-2 w-full mt-2">
      <nav className="flex flex-row items-center justify-between w-full p-2 rounded-full shadow-md">
        <h1 className="font-extrabold manrope text-4xl mx-3">
          bunk<span className="text-purple-600">it</span>
        </h1>
        <div className="flex flex-row items-center gap-2">
          {user === "student" ? (
            <div>
              {location.pathname !== "/login" && (
                <Link to={"/login"}>
                  <PrimaryBtn
                    text="Login"
                    icon={LuLogIn}
                    iconSize={18}
                    disabled={user !== "student"}
                    className="manrope"
                  />
                </Link>
              )}
            </div>
          ) : (
            <div className="relative">
              <GhostBtn
                icon={LuCircleUserRound}
                iconSize={30}
                onClick={() => setOpen(!open)}
                disabled={user === "student"}
                className="focus:outline-none manrope"
              />
              {open && (
                <div className="absolute right-0 mt-2 w-38 md:w-48 bg-white border rounded-lg shadow-lg">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <GhostBtn
                        icon={LuEye}
                        iconSize={18}
                        text="View Profile"
                        onClick={handleLogout}
                        className="flex items-center gap-1 w-full justify-normal rounded-none manrope"
                      />
                    </li>
                    <li>
                      <GhostBtn
                        icon={LuSettings}
                        iconSize={18}
                        text="Settings"
                        onClick={handleLogout}
                        className="flex items-center gap-1 w-full justify-normal rounded-none manrope"
                      />
                    </li>
                    <li>
                      <GhostBtn
                        icon={LuLogOut}
                        iconSize={18}
                        text="Logout"
                        onClick={handleLogout}
                        className="flex items-center gap-1 w-full justify-normal rounded-none manrope"
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

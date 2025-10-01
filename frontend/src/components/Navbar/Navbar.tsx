import toast from "react-hot-toast";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { removeUserAsync, saveUserAsync } from "../../redux/user/userSlice";
import PrimaryBtn from "../Button/PrimaryBtn";
import SecondaryBtn from "../Button/SecondaryBtn";
const Navbar = () => {
  const user = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    toast.promise(
      dispatch(saveUserAsync("Yahya")),
      {
        loading: "Signing in...",
        success: "Login Successful!",
        error: "Login failed!",
      },
      {
        duration: 2000,
      }
    );
  };

  const handleLogout = () => {
    toast.promise(
      dispatch(removeUserAsync("user")),
      {
        loading: "Signing out...",
        success: "Logout Successful!",
        error: "Logout failed!",
      },
      {
        duration: 2000,
      }
    );
  };
  return (
    <div className="p-2 max-w-4xl h-full">
      <div className="flex flex-row items-center justify-between w-full p-2 rounded-full shadow-md">
        <h1 className="font-bold text-4xl m-3">
          bunk<span className="text-purple-600">it</span>
        </h1>
        <div className="flex flex-row items-center gap-2 mx-3">
          {user === "user" ? (
            <PrimaryBtn
              text="Login"
              icon={LuLogIn}
              iconSize={18}
              onClick={handleLogin}
              disabled={user !== "user"}
            />
          ) : (
            <SecondaryBtn
              icon={LuLogOut}
              iconSize={18}
              reverse
              onClick={handleLogout}
              disabled={user === "user"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

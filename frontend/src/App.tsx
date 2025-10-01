import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { removeUserAsync, saveUserAsync } from "./redux/user/userSlice";

const App = () => {
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
    <div>
      <h1 className="text-3xl font-bold m-3">Welcome {user}</h1>
      <button className="p-3 border rounded-full m-3" onClick={handleLogin}>
        Login
      </button>
      <button className="p-3 border rounded-full m-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default App;

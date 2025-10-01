import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import {
  saveUser,
  saveUserAsync,
  userLogIn,
  userLogOut,
} from "./redux/user/userSlice";

const App = () => {
  const user = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    toast.promise(dispatch(saveUserAsync("Yahya")), {
      loading: "Signing in...",
      success: "Login Successful!",
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold m-3">Welcome {user}</h1>
      <button className="p-3 border rounded-full m-3" onClick={handleLogin}>
        Login
      </button>
      <button
        className="p-3 border rounded-full m-3"
        onClick={() => dispatch(userLogOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default App;

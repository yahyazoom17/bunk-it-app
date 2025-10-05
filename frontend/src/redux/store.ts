import { configureStore } from "@reduxjs/toolkit";
import classReducer from "./class/classSlice";
import todayReducer from "./time/todaySlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    today: todayReducer,
    class: classReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state) => {
      state.name = "Yahya";
    },
    userLogOut: (state) => {
      state.name = "user";
      toast.success("Logout successful!");
    },
    saveUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveUserAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.name = action.payload;
        }
      )
      .addCase(saveUserAsync.pending, () => {});
  },
});

export const saveUserAsync = createAsyncThunk(
  "user/saveUserAsync",
  async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return name;
  }
);

export const { userLogIn, userLogOut, saveUser } = userSlice.actions;

export default userSlice.reducer;

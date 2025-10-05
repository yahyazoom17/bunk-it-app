import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { ClassData } from "../../types/classTypes";

interface ClassState {
  data: ClassData[];
}

const initialState: ClassState = {
  data: [],
};

export const fetchClassesAsync = createAsyncThunk(
  "class/fetchClassesAsync",
  async (day: string) => {
    const res = await axios.get(
      `http://localhost:5000/class/student/68e1e677785696f079b00289/${day}`
    );
    console.log(res.data);
    return res.data;
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchClassesAsync.fulfilled,
      (state, action: PayloadAction<ClassData[]>) => {
        state.data = action.payload;
      }
    );
  },
});

export default classSlice.reducer;

import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ClassData } from "../../types/classTypes";

interface ClassState {
  data: ClassData[];
}

const initialState: ClassState = {
  data: [],
};

export const fetchClassesAsync = createAsyncThunk(
  "class/fetchClassesAsync",
  async () => {
    const data = [
      {
        subjectName: "Maths",
        isBunkable: false,
        totalAttended: 13,
        totalClasses: 15,
        isPresent: false,
        isAbsent: false,
        noClass: false,
        classDays: ["wednesday", "friday"],
      },
    ];
    return { data };
  }
);

const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchClassesAsync.fulfilled,
      (state, action: PayloadAction<ClassState>) => {
        state.data = action.payload.data;
      }
    );
  },
});

export default classSlice.reducer;

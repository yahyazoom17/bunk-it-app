import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import axios from "axios";

import type { StudentData } from "../../types/userTypes";

interface UserState {
  student: StudentData;
  loading: boolean;
}

const initialState: UserState = {
  student: { name: "student", gender: "" },
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state) => {
      state.student.name = "Yahya";
    },
    userLogOut: (state) => {
      state.student = initialState.student;
    },
    saveUser: (state, action: PayloadAction<string>) => {
      state.student.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        saveUserAsync.fulfilled,
        (state, action: PayloadAction<StudentData>) => {
          state.student = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        removeUserAsync.fulfilled,
        (state, action: PayloadAction<StudentData>) => {
          state.student = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUserAsync.fulfilled,
        (state, action: PayloadAction<StudentData>) => {
          state.student = action.payload;
          state.loading = false;
        }
      );
  },
});

export const saveUserAsync = createAsyncThunk(
  "user/saveUserAsync",
  async (studentData: StudentData) => {
    const res = await axios.post(
      `http://localhost:5000/student/add`,
      studentData
    );
    console.log(res.data);
    return res.data;
  }
);

export const fetchUserAsync = createAsyncThunk(
  "user/fetchUserAsync",
  async (studentId: string) => {
    const res = await axios.get(`http://localhost:5000/student/${studentId}`);
    console.log(res.data);
    const { name, dob, gender, department } = res.data;
    return { name, dob, gender, department };
  }
);

export const removeUserAsync = createAsyncThunk(
  "user/removeUserAsync",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return initialState.student;
  }
);

export const { userLogIn, userLogOut, saveUser } = userSlice.actions;

export default userSlice.reducer;

import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

interface TodayState {
  today: string;
  date: number;
  day: string;
  month: string;
  year: string;
}

const initialState: TodayState = {
  today: "Today",
  date: 17,
  month: "Feb",
  day: "Sat",
  year: "2007",
};

export const fetchTodayAsync = createAsyncThunk(
  "today/fetchTodayAsync",
  async () => {
    const dateObj = new Date();
    return {
      today:
        dateObj.toLocaleString("default", { month: "short" }) +
        " " +
        dateObj.getDate().toString() +
        ", " +
        dateObj.toLocaleString("default", { weekday: "long" }) +
        " - " +
        dateObj.getFullYear().toString(),
      date: dateObj.getDate(),
      month: dateObj.toLocaleString("default", { month: "long" }),
      year: dateObj.getFullYear().toString(),
      day: dateObj.toLocaleString("default", { weekday: "long" }),
    };
  }
);

const todaySlice = createSlice({
  name: "today",
  initialState,
  reducers: {
    getToday: (state) => {
      state.today = new Date().toDateString();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchTodayAsync.fulfilled,
      (state, action: PayloadAction<TodayState>) => {
        state.today = action.payload.today;
        state.date = action.payload.date;
        state.day = action.payload.day;
        state.month = action.payload.month;
        state.year = action.payload.year;
      }
    );
  },
});

export const { getToday } = todaySlice.actions;

export default todaySlice.reducer;

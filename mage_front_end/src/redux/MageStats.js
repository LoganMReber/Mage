import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Jimmy",
  age: 10,
  rank: 0,
  reputation: {
    good: 10,
    fame: 1,
    law: -5
  },
  titles: {
    equipped: ["The ", "Unknown ", ", Child", " of a Nameless Village"],
    owned: {
      prefix: ["The", "Unknown"],
      suffix: ["Child", "of a Nameless Village"],
    },
  },
  mana: 1,
  skills: {
    casting: 1,
    forming: 2,
    meditation: 3,
  },
};

const mageStatsSlice = createSlice({
  name: "MageStats",
  initialState,
  reducers: {
    nameModified(state, action) {
      state.name = action.payload;
    },
    manaModified(state, action) {
      state.mana = action.payload;
    },
  },
});

export const { nameModified, manaModified } = mageStatsSlice.actions;

export default mageStatsSlice.reducer;

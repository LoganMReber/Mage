import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import MageStatsReducer from "./MageStats";

const store = configureStore({
  reducer: {
    MageStats: MageStatsReducer,
  },
  middleware: () => [thunk],
});

export default store;

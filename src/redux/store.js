import { configureStore } from "@reduxjs/toolkit";
import { memesReducer } from "./memesReducer";

export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
});

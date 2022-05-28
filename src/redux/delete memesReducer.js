import { createSlice } from "@reduxjs/toolkit";

import { MEMES } from "../components/memes";

const initialStore = { memes: MEMES };

const memesReducer = createSlice({
  name: "memes",
  initialStore,
  reducers: {
    upvote(store, action) {
      const { title, upvote } = action.payload;
      const existingMeme = store.find((meme) => meme.title === title);
      if (existingMeme) {
        existingMeme.upvotes[upvote] + 1;
      }
    },
  },
});

export const selectAllMemes = (store) => store.memes;

export const { upvote } = memesReducer.actions;

export default memesReducer.reducer;

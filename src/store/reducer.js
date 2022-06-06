import { MEMES } from "../components/memes";

const initialStore = { memes: MEMES, newMemes: [] };

export const ACTIONS_TYPES = {
  UPVOTE: "UPVOTE",
  DOWNVOTE: "DOWNVOTE",
  TOGGLE_FAVOURITE: "TOGGLE_FAVOURITE",
  ADD_MEME: "ADD_MEME",
};

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPVOTE: {
      return {
        ...store,
        memes: store.memes.map((meme) => {
          if (meme.title === action.payload.title) {
            return {
              ...meme,
              upvotes: meme.upvotes + 1,
            };
          }
          return meme;
        }),
      };
    }
    case ACTIONS_TYPES.DOWNVOTE: {
      return {
        ...store,
        memes: store.memes.map((meme) => {
          if (meme.title === action.payload.title) {
            return {
              ...meme,
              downvotes: meme.downvotes + 1,
            };
          }
          return meme;
        }),
      };
    }
    case ACTIONS_TYPES.TOGGLE_FAVOURITE: {
      return {
        ...store,
        memes: store.memes.map((meme) => {
          if (meme.title === action.payload.title) {
            return {
              ...meme,
              favourite: !meme.favourite,
            };
          }
          return meme;
        }),
      };
    }
    case ACTIONS_TYPES.ADD_MEME: {
      return { ...store, memes: [...store.memes, action.payload.newMeme] };
    }
    default: {
      return store;
    }
  }
};

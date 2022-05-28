import { MEMES } from "../components/memes";

const initialStore = { memes: MEMES };

export const ACTIONS_TYPES = {
  UPVOTE: "UPVOTE",
  DOWNVOTE: "DOWNVOTE",
  ADD_MEM: "ADD_MEM",
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
    case ACTIONS_TYPES.ADD_MEM: {
      return { ...store };
    }
    default: {
      return store;
    }
  }
};

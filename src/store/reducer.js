//import { Mem } from "../components/Mem";
import { MEMES } from "../components/memes";

//const initialStore = { Mem };
const initialStore = { memes: MEMES };

export const ACTIONS_TYPES = {
  UPVOTE: "UPVOTE",
  DOWNVOTE: "DOWNVOTE",
  PUSH_MEM: "PUSH_MEM",
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
      return { ...store };
    }
    case ACTIONS_TYPES.PUSH_MEM: {
      return { ...store };
    }
    default: {
      return store;
    }
  }
};

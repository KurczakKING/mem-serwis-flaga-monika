//import { Mem } from "../components/Mem";
import { MEMES } from "../components/memes";

//const initialStore = { Mem };
const initialStore = { regular: MEMES, hot: [] };

const ACTIONS_TYPES = {
  UPVOTE: "UPVOTE",
  DOWNVOTE: "DOWNVOTE",
  PUSH_MEM: "PUSH_MEM",
};

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.UPVOTE: {
      return { ...store };
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

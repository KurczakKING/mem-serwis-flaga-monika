import { MEMES } from "../components/memes";

const initialStore = { MEMES };

export const reducer = (store = initialStore, action) => {
  switch (action.type) {
    default: {
      return store;
    }
  }
};

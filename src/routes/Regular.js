import { Mem } from "../components/Mem";
import { useSelector } from "react-redux";

export const Regular = () => {
  const memes = useSelector((store) =>
    store.memes.filter((meme) => meme.upvotes - meme.downvotes <= 5)
  );

  return <Mem memes={memes} />;
};

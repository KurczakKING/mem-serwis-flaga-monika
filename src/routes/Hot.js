import { useSelector } from "react-redux";
import { Mem } from "../components/Mem";

export const Hot = () => {
  const memes = useSelector((store) =>
    store.memes.filter((meme) => meme.upvotes - meme.downvotes >= 5)
  );

  return <Mem memes={memes} />;
};

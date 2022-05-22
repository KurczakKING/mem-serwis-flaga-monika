import { Mem } from "../components/Mem";
import { useSelector } from "react-redux";

export const Regular = () => {
  const memes = useSelector((store) =>
    store.memes.filter((meme) => meme.upvotes - meme.downvotes <= 5)
  );
  return (
    <div className="main">
      <Mem memes={memes} />
    </div>
  );
};

/*
class Regular extends Mem {
  render() {
    return <Mem />;
  }
}
*/

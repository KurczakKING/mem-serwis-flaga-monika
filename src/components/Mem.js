import { MEMES } from "./memes";

export const Mem = () => {
  return MEMES.map((meme) => {
    return (
      <div key={meme.title} className="mem">
        <h2>{meme.title}</h2>
        <img src={meme.img} width="85%" />
      </div>
    );
  });
};

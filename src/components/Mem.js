import { useState } from "react";
import { MEMES } from "./memes";
import { Button, unstable_createMuiStrictModeTheme } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const Mem = () => {
  const [memes, setMemes] = useState(MEMES);

  const upvote = (meme_title) => {
    setMemes((memes) =>
      memes.map((meme) =>
        meme_title === meme.title
          ? { ...meme, upvotes: meme.upvotes + 1 }
          : meme
      )
    );
  };

  const downvote = (meme_title) => {
    setMemes((memes) =>
      memes.map((meme) =>
        meme_title === meme.title
          ? { ...meme, downvotes: meme.downvotes - 1 }
          : meme
      )
    );
  };

  return memes.map((meme) => {
    return (
      <div key={meme.title} className="mem">
        <h2>{meme.title}</h2>
        <img src={meme.img} width="85%" />
        <div className="vote">
          <Button color="success" onClick={() => upvote(meme.title)}>
            <span>{meme.upvotes}</span> <ThumbUpIcon />
          </Button>
          <Button color="error" onClick={() => downvote(meme.title)}>
            <span>{meme.downvotes}</span> <ThumbDownIcon />
          </Button>
        </div>
      </div>
    );
  });
};

import { useState } from "react";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { MEMES } from "../components/memes";

export const Mem = () => {
  //const [memes, setMemes] = useState(MEMES);
  const INITIAL_ARRAY = useSelector((store) => store.regular);
  const [memes, setMemes] = useState(INITIAL_ARRAY);
  //const [memes, setMemes] = useState(({regular: INITIAL_ARRAY, hot: []}));
  //const navigate = useNavigate();
  //const dispatch = useDispatch();
  //const [votes, setVotes] = useState(meme.downvotes-meme.upvotes);

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
          ? { ...meme, downvotes: meme.downvotes + 1 }
          : meme
      )
    );
  };

  const meme = memes
    .filter(
      (votes) => votes.upvotes - votes.downvotes < 5
    //        ? navigate("hot")
    //       : navigate("regular")
    )
    .map((meme) => {
      return (
        <div key={meme.title} className="mem">
          <h2>{meme.title}</h2>
          <img src={meme.img} width="85%" />
          <div className="vote">
            <Button
              color="success"
              onClick={() => {
                upvote(meme.title);
              }}
            >
              <span>{meme.upvotes}</span> <ThumbUpIcon />
            </Button>
            <Button color="error" onClick={() => downvote(meme.title)}>
              <span>{meme.downvotes}</span> <ThumbDownIcon />
            </Button>
          </div>
        </div>
      );
    });

  return meme;
};

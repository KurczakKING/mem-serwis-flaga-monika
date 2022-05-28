import { useDispatch } from "react-redux";
import { ACTIONS_TYPES } from "../store/reducer";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const Mem = ({ memes }) => {
  const dispatch = useDispatch();

  const upvote = (title) => {
    dispatch({ type: ACTIONS_TYPES.UPVOTE, payload: { title: title } });
  };
  const downvote = (title) => {
    dispatch({ type: ACTIONS_TYPES.DOWNVOTE, payload: { title: title } });
  };

  return memes.map((meme) => {
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
};

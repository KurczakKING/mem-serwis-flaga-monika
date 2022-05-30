import { useDispatch } from "react-redux";
import { ACTIONS_TYPES } from "../store/reducer";
import TimeAgo from "./TimeAgo";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Box } from "@mui/material";
import { Checkbox } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

export const Mem = ({ memes }) => {
  const dispatch = useDispatch();

  const upvote = (title) => {
    dispatch({ type: ACTIONS_TYPES.UPVOTE, payload: { title: title } });
  };
  const downvote = (title) => {
    dispatch({ type: ACTIONS_TYPES.DOWNVOTE, payload: { title: title } });
  };
  // const [chkValue, setChkValue] = useState(false);
  const toggleFavourite = (event) => {
    const title = event.target.title;
    dispatch({
      type: ACTIONS_TYPES.TOGGLE_FAVOURITE,
      payload: { title: title },
    });
  };

  return memes
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((meme) => {
      return (
        <div key={meme.title} className="mem">
          <Box component="div" sx={{ display: "inline" }}>
            <h2 className="inline">{meme.title}</h2>
          </Box>
          <input
            type="checkbox"
            className="star"
            defaultChecked={meme.favourite}
            title={meme.title}
            onChange={toggleFavourite}
          />
          <TimeAgo timestamp={meme.date} />
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

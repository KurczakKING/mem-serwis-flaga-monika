import { useDispatch } from "react-redux";
import { ACTIONS_TYPES } from "../store/reducer";
import TimeAgo from "./TimeAgo";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
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
        <Box
          key={meme.title}
          mt={2}
          ml={{ xs: '38%', sm: '38%', md: '38%', lg: '36%', xl: '30%' }}
          p={{ sm: 2, md: 3 }}
          backgroundColor={"black"}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h2 className="inline">{meme.title} </h2>
            </Grid>
            <Grid item xs={2}>
              <input
                type="checkbox"
                className="star"
                defaultChecked={meme.favourite}
                title={meme.title}
                onChange={toggleFavourite}
              ></input>
            </Grid>
          </Grid>
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
        </Box>
      );
    });
};

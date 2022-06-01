import { useDispatch } from "react-redux";
import { ACTIONS_TYPES } from "../store/reducer";
import TimeAgo from "./TimeAgo";
import { Box, Button, Grid } from "@mui/material";
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
          ml={{ xs: "38%", md: "37%" }}
          mr={{ xs: "5%", md: "6%", lg: "7%", xl: "14%" }}
          pt={1}
          backgroundColor={"black"}
        >
          <Grid container color="yellow" justifyContent="center">
            <h2>{meme.title} </h2>
            <input
              type="checkbox"
              className="star"
              defaultChecked={meme.favourite}
              title={meme.title}
              onChange={toggleFavourite}
            ></input>
          </Grid>
          <TimeAgo timestamp={meme.date} />
          <img src={meme.img} width="80%" />
          <Box pt={2} pb={3}>
            <Button
              color="success"
              onClick={() => {
                upvote(meme.title);
              }}
            >
              <Box fontWeight="bold" mr={1}>
                {meme.upvotes}
              </Box>
              <ThumbUpIcon />
            </Button>
            <Button
              color="error"
              onClick={() => {
                downvote(meme.title);
              }}
            >
              <Box fontWeight="bold" mr={1}>
                {meme.downvotes}
              </Box>{" "}
              <ThumbDownIcon />
            </Button>
          </Box>
        </Box>
      );
    });
};

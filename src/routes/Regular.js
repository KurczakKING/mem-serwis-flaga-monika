import { Mem } from "../components/Mem";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

export const Regular = () => {
  const memes = useSelector((store) =>
    store.memes.filter((meme) => meme.upvotes - meme.downvotes <= 5)
  );
  return (
    <Box >
      <Mem memes={memes} />
    </Box>
  );
};

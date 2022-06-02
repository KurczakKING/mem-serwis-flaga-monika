import { useSelector } from "react-redux";
import { Mem } from "../components/Mem";
import { Box } from "@mui/system";

export const Hot = () => {
  const memes = useSelector((store) =>
    store.memes.filter((meme) => meme.upvotes - meme.downvotes >= 5)
  );

  return (
    <Box mt={2}>
      <Mem memes={memes} />
    </Box>
  );
};

import { parseISO, formatDistanceToNow } from "date-fns";
import { Box } from "@mui/system";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <Box pb={2} mt={-1} fontStyle="italic" color="aquamarine">
      {timeAgo}
    </Box>
  );
};
export default TimeAgo;

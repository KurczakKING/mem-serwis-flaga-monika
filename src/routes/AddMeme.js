import { useState } from "react";
import { ACTIONS_TYPES } from "../store/reducer";
import { useDispatch } from "react-redux";
import { sub } from "date-fns";
import { Box } from "@mui/system";
import { Button, FormGroup, Input, OutlinedInput } from "@mui/material";

export const AddMeme = () => {
  const dispatch = useDispatch();

  const submitMemData = (event) => {
    event.preventDefault();
    dispatch({
      type: ACTIONS_TYPES.ADD_MEME,
      payload: {
        newMeme: {
          title: event.target.id,
          upvotes: 4,
          downvotes: 0,
          img: event.target.id,
          date: sub(new Date(), { minutes: 0 }).toISOString(),
          favourite: false,
        },
      },
    });
  };

  const [memData, setMemData] = useState({
    title: "",
    img: "",
  });
  const handleMemeData = (event) => {
    const newMemData = { ...memData };
    newMemData[event.target.id] = event.target.value;
    setMemData(newMemData);
    console.log(newMemData);
  };

  return (
    <Box
      mt={2}
      pl={{ xs: "40%", md: "45%", xl: "50%" }}
      pr={{ xs: "10%", md: "13%", lg: "20%", xl: "26%" }}
    >
      <FormGroup onSubmit={(event) => submitMemData(event)}>
        <OutlinedInput
          id="title"
          placeholder="Type the title of your meme"
          type="text"
          onChange={(event) => handleMemeData(event)}
        />
        <Input
          id="img"
          style={{ display: "" }}
          placeholder="image"
          type="file"
          name="image"
          onChange={(event) => handleMemeData(event)}
        />
        <Button variant="contained">Add Meme</Button>
      </FormGroup>
    </Box>
  );
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";

export const AddMeme = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);

  /* function addMeme(event) {
    event.preventDefault();
    alert(`The name you entered was: ${title}${image}`);
  }*/

  const addImage = (event) => {
    const [file] = event.target.files;
    //set
  };

  const canAdd = Boolean(title) && Boolean(image);

  return (
    <Box mt={2}>
      <form /*onSubmit={addMeme}*/>
        <div>
          <label>Title</label>
          <div>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value[0])}
            />
          </div>
          <div>
            <input type="file" onChange={setImage} />
          </div>
        </div>
        <div>
          <button type="submit" disabled={!canAdd}>
            Add Mem
          </button>
        </div>
      </form>
      <div>
        {title}
        {[image]}
      </div>
    </Box>
  );
};

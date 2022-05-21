import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hot } from "./routes/Hot";
import { Regular } from "./routes/Regular";
import { AddMeme } from "./routes/AddMeme";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Regular />} />
        <Route path="hot" element={<Hot />} />
        <Route path="regular" element={<Regular />} />
        <Route path="add-meme" element={<AddMeme />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;

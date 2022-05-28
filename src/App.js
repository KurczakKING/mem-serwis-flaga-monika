import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hot } from "./routes/Hot";
import { Regular } from "./routes/Regular";
import { AddMeme } from "./routes/AddMeme";
import { NoMatch } from "./components/NoMatch";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/regular" />} />
      <Route path="/" element={<Layout />}>
        <Route path="hot" element={<Hot />} />
        <Route path="regular" element={<Regular />} />
        <Route path="add-meme" element={<AddMeme />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;

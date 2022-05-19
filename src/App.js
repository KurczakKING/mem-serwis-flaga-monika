import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hot } from "./routes/Hot";
import { Regular } from "./routes/Regular";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="hot" element={<Hot />} />
        <Route path="regular" element={<Regular />} />
      </Route>
    </Routes>
  );
}

export default App;

import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Hot } from "./routes/Hot";
import { Regular } from "./routes/Regular";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/hot" className="linkStyle">
          Hot
        </Link>
        <Link to="/regular" className="linkStyle">
          Regular
        </Link>
      </div>
      <div className="main">
        <p></p>
        <img />
      </div>
      <Routes>
        <Route path="/" element={<Regular />} />
        <Route path="/hot" element={<Hot />} />
        <Route path="/regular" element={<Regular />} />
      </Routes>
    </div>
  );
}

export default App;

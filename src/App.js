import "./styles/styles.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { Hot } from "./routes/Hot";
import { Regular } from "./routes/Regular";
import { Mem } from "./components/Mem";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h3>choose memes:</h3>
        <NavLink to="/hot" className="linkStyle">
          Hot
        </NavLink>
        <NavLink to="/regular" className="linkStyle">
          Regular
        </NavLink>
      </div>
      <div className="main">
        <p></p>
        <div>
          <Mem />
        </div>
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

import { NavLink } from "react-router-dom";
import { Regular } from "../routes/Regular";

export const Layout = () => {
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
        <Regular />
      </div>
    </div>
  );
};

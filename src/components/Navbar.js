import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <h3>choose memes:</h3>
        <NavLink to="/hot" className="linkStyle">
          Hot
        </NavLink>
        <NavLink to="/regular" className="linkStyle">
          Regular
        </NavLink>
        <NavLink to="/add-meme" className="linkStyle">
          Add Meme
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

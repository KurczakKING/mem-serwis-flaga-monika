import { NavLink, Outlet } from "react-router-dom";
import { Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Typography
          pt={3}
          m={3}
          fontSize={23}
          fontStyle="italic"
          color="aquamarine"
        >
          Choose memes:
        </Typography>
        <NavLink to="/hot" className="linkStyle">
          Hot
        </NavLink>
        <NavLink to="/regular" className="linkStyle">
          Regular
        </NavLink>
        <Typography
          pt={3}
          m={3}
          fontSize={23}
          fontStyle="italic"
          color="aquamarine"
        >
          Create your own meme!
        </Typography>
        <NavLink to="/add-meme" className="linkStyle">
          Add Meme
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

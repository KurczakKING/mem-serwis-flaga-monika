import { NavLink, Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Typography
          pt={3}
          m={3}
          variant="h3"
          sx={{
            fontSize: 25,
            fontStyle: "italic",
            color: "aquamarine",
          }}
        >
          choose memes:
        </Typography>
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

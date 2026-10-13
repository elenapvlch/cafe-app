import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import { COLORS } from "../data/colors";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, color: "pink", p: "8px" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: COLORS.LIGHT_PINK, borderRadius: "12px" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: COLORS.DARK_PINK,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Café Place
          </Typography>

          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{
              color: COLORS.DARK_PINK,
              "&:hover": {
                backgroundColor: COLORS.LIGHT,
              },
            }}
          >
            Catalog
          </Button>
          <Button
            component={Link}
            to="/order "
            color="inherit"
            sx={{
              color: COLORS.DARK_PINK,
              "&:hover": {
                backgroundColor: COLORS.LIGHT,
              },
            }}
          >
            Order
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              color: COLORS.DARK_PINK,
              "&:hover": {
                backgroundColor: COLORS.LIGHT,
              },
            }}
          >
            About us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

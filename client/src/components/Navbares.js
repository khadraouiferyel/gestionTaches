import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  logout, register } from "../Redux/actions/Authaction";
import { gettache } from "../Redux/actions/Tacheaction";
import { getUser } from "../Redux/actions/Usersaction";

function NavBar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const token = localStorage.getItem("token");

  // useEffect(() => {

  // dispatch( getCurrent())
  // }, [])

  const user = useSelector((state) => state.AuthReducer.user);
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{backgroundColor:"#647295"}}>
        {token && user && user.role === "user" ? (
          <Toolbar>
            <Link to="/Profile" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.1 }}
                style={{ marginRight: "20px",color:"#f2ebe5" , textDecoration: "none" }}
              >
                Home
              </Typography>
            </Link>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{
                  color: "#f2ebe5",
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  
                }}
              >
                Task
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/Profile/addtache" style={{color:"#2b262d", textDecoration:"none" }}>
                  {" "}
                  <MenuItem onClick={handleClose}>Add</MenuItem>
                </Link>

                <Link to="/Profile/taches" style={{color:"#2b262d", textDecoration:"none"  }}>
                  {" "}
                  <MenuItem onClick={() => dispatch(gettache())}>Show</MenuItem>
                </Link>
              </Menu>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 2 }}
            ></Typography>
            <Avatar alt={user.name} src={user.pic} style={{ marginRight: "10px" }} />
            <Button color="inherit"style={{color: "#f2ebe5"}} onClick={() => dispatch(logout(Navigate))}>
              Log Out
            </Button>
          </Toolbar>
        ) : token && user && user.role === "admin" ? (
          <Toolbar>
            <Link to="/Profile" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 0.1 }}
                style={{ marginRight: "20px", color:"#f2ebe5", textDecoration: "none" }}
              >
                Home {user.role}
              </Typography>
            </Link>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{
                  color: "#f2ebe5",
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                }}
              >
                Task
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link to="/Profile/addtache" style={{color:"#2b262d", textDecoration:"none"  }}>
                  {" "}
                  <MenuItem onClick={handleClose}>Add</MenuItem>
                </Link>

                <Link to="/Profile/taches" style={{color:"#2b262d", textDecoration:"none"  }}>
                  {" "}
                  <MenuItem onClick={() => dispatch(gettache())}>Show</MenuItem>
                </Link>
              </Menu>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Link to="/Profile/users">
                <Button
                  style={{
                    color: "#f2ebe5",
                    fontFamily: "sans-serif",
                    fontSize: "20px",
                  }}
                  onClick={() => dispatch(getUser())}
                >
                  User
                </Button>
              </Link>
              <Link to="/Profile/AddUser">
                {" "}
                <Button
                  style={{
                    color: "#f2ebe5",
                    fontFamily: "sans-serif",
                    fontSize: "20px",
                  }}
                  onClick={() => dispatch(register())}
                >
                  Add User
                </Button>
              </Link>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 2 }}
            ></Typography>
            <Avatar alt={user.name} src={user.pic} style={{ marginRight: "10px" }} />
            <Button color="inherit" onClick={() => dispatch(logout(Navigate))} style={{ color: "#f2ebe5" }}>
              Log Out
            </Button>
          </Toolbar>
        ) : (
          <Toolbar>
            <Link to="/" style={{ color: "#f2ebe5" }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 2 }}
            ></Typography>
            <Link to="/signIn" style={{ color: "#f2ebe5" }}>
              <Button color="inherit">Sign In</Button>
            </Link>
            <Link to="/signUp" style={{ color: "#f2ebe5" }}>
              {" "}
              <Button color="inherit">Sign Up</Button>
            </Link>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
}
export default NavBar;

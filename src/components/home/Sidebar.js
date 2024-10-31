import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sidebar.scss";
import { Avatar, IconButton, ListItemButton, Tooltip } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { UserContext } from "../../contexts/UserContext";

function Sidebar() {
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div className="sidebar">
      <Tooltip
        title={`Welcome ${user.first_name}`}
        enterDelay={0}
        placement="right"
      >
        <IconButton onClick={() => navigate("/profile")}>
          <Avatar src={user.employee_photo} alt="Employee Photo" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Dashboard" enterDelay={0} placement="right">
        <ListItemButton
          className="appbar-links"
          aria-label="list-item"
          onClick={() => navigate("/")}
        >
          <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
            <SpaceDashboardIcon />
          </IconButton>
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Modules" enterDelay={0} placement="right">
        <ListItemButton
          className="appbar-links"
          aria-label="list-item"
          onClick={() => navigate("/modules")}
        >
          <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
            <ViewModuleIcon />
          </IconButton>
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Feedback" enterDelay={0} placement="right">
        <ListItemButton
          sx={{ textAlign: "left" }}
          className="appbar-links"
          aria-label="list-item"
        >
          <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
            <FeedbackIcon />
          </IconButton>
        </ListItemButton>
      </Tooltip>

      <Tooltip title="Logout" enterDelay={0} placement="right">
        <ListItemButton
          sx={{ textAlign: "left" }}
          className="appbar-links"
          aria-label="list-item"
          onClick={handleLogout}
        >
          <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
            <LogoutRoundedIcon />
          </IconButton>
        </ListItemButton>
      </Tooltip>
    </div>
  );
}

export default React.memo(Sidebar);

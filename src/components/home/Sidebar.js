import React, { useContext, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/sidebar.scss";
import { Avatar, IconButton, ListItemButton, Tooltip } from "@mui/material";
import { UserContext } from "@contexts/UserContext";

// Lazy load the icons
const SpaceDashboardIcon = React.lazy(() =>
  import("@mui/icons-material/SpaceDashboard")
);
const ViewModuleIcon = React.lazy(() =>
  import("@mui/icons-material/ViewModule")
);
const AssignmentIndIcon = React.lazy(() =>
  import("@mui/icons-material/AssignmentInd")
);
const FeedbackIcon = React.lazy(() => import("@mui/icons-material/Feedback"));
const LiveHelpIcon = React.lazy(() => import("@mui/icons-material/LiveHelp"));
const LogoutRoundedIcon = React.lazy(() =>
  import("@mui/icons-material/LogoutRounded")
);

function Sidebar() {
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(UserContext);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navItems = [
    { title: "Dashboard", icon: <SpaceDashboardIcon />, path: "/" },
    { title: "Modules", icon: <ViewModuleIcon />, path: "/modules" },
    { title: "Assign Module", icon: <AssignmentIndIcon />, path: "/assign" },
    { title: "Feedback", icon: <FeedbackIcon />, path: null },
    { title: "Help", icon: <LiveHelpIcon />, path: "/help" },
  ];

  return (
    <div className="sidebar">
      <Tooltip
        title={`Welcome ${user.first_name}`}
        enterDelay={0}
        placement="right"
      >
        <IconButton onClick={() => handleNavigation("/profile")}>
          <Avatar src={user.employee_photo} alt="Employee Photo" />
        </IconButton>
      </Tooltip>

      {navItems.map((item, index) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          <Tooltip title={item.title} placement="right">
            <ListItemButton
              className="appbar-links"
              aria-label="list-item"
              onClick={() => handleNavigation(item.path)}
            >
              <IconButton sx={{ color: "#ffffff9f" }} aria-label="icon">
                {item.icon}
              </IconButton>
            </ListItemButton>
          </Tooltip>
        </Suspense>
      ))}

      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default React.memo(Sidebar);

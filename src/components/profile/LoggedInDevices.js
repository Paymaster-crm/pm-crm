import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Skeleton } from "@mui/material";

// Reusable component for displaying device information
function DeviceInfo({ deviceName, location, loginAt }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <List sx={{ width: "100%" }}>
        <ListItem alignItems="flex-start">
          <ListItemText primary="Device Name" />
          <ListItemText secondary={deviceName || <Skeleton width="50%" />} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText primary="Location" />
          <ListItemText secondary={location || <Skeleton />} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText primary="Logged in at" />
          <ListItemText secondary={loginAt || <Skeleton />} />
        </ListItem>
      </List>
    </div>
  );
}

function LoggedInDevices({ loading, geolocation }) {
  // Helper function to format date to dd-mm-yyyy hh:mm:ss
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  if (loading) {
    // Render loading skeletons
    return <DeviceInfo deviceName={null} location={null} loginAt={null} />;
  }

  return geolocation.map((location, id) => {
    const deviceName = location.userAgent || "Unknown Device";
    const locationError = location.locationError;

    // Combine and filter valid location values
    const locationDetails = locationError
      ? locationError
      : [
          location.village,
          location.suburb,
          location.stateDistrict,
          location.state,
          location.postcode,
          location.country,
        ]
          .filter(Boolean)
          .join(", ");

    return (
      <div key={id} className="profile-container">
        <DeviceInfo
          deviceName={deviceName}
          location={locationDetails}
          loginAt={formatDate(location.loginAt)}
        />
        <br />
        <Divider variant="fullWidth" sx={{ opacity: 1 }} />
        <br />
      </div>
    );
  });
}

export default LoggedInDevices;

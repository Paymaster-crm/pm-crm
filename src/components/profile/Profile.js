import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "@hooks/useTabs";
import { getSessionData } from "@utils/auth/getSessionData";
import { logOutFromAllSessions } from "@utils/auth/logOutFromAllSessions";
import { UserContext } from "@contexts/UserContext";
import { useNavigate } from "react-router-dom";

// Lazy load components
const LoggedInDevices = React.lazy(() => import("./LoggedInDevices"));
const BasicInfo = React.lazy(() => import("./BasicInfo"));
const ResetPassword = React.lazy(() => import("./ResetPassword"));
const BackupCodes = React.lazy(() => import("./BackupCodes"));
const TwoFactorAuthentication = React.lazy(() =>
  import("./TwoFactorAuthentication")
);
const PushNotifications = React.lazy(() => import("./PushNotifications"));

function Profile() {
  const [value, setValue] = React.useState(0);
  const [geolocation, setGeolocation] = React.useState({});
  const { setUser, user } = React.useContext(UserContext);
  const navigate = useNavigate();

  const { a11yProps, CustomTabPanel } = useTabs();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("profile_tab_value", newValue);
  };

  React.useEffect(() => {
    const initialValue = Number(localStorage.getItem("profile_tab_value")) || 0;
    setValue(initialValue);
  }, []);

  // Initial fetch of geolocation data when the component mounts
  React.useEffect(() => {
    getSessionData(setGeolocation);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
          <Tab label="Basic Info" {...a11yProps(0)} key={0} />
          <Tab label="Logged in Devices" {...a11yProps(1)} key={1} />
          <Tab label="2FA and Notifications" {...a11yProps(2)} key={2} />
          <Tab label="Reset Password" {...a11yProps(3)} key={3} />
          <Tab label="Backup Codes" {...a11yProps(4)} key={4} />
        </Tabs>
      </Box>

      <Box>
        {/* Use Suspense to lazy load the components */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <CustomTabPanel value={value} index={0}>
            <BasicInfo user={user} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <LoggedInDevices
              geolocation={geolocation}
              setGeolocation={setGeolocation}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <button
                className="btn"
                style={{
                  marginTop: "20px",
                }}
                onClick={() => logOutFromAllSessions(setUser, navigate)}
              >
                Log out from all devices
              </button>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div style={{ backgroundColor: "#fff", padding: "20px" }}>
              <TwoFactorAuthentication />
              <PushNotifications />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <ResetPassword />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <BackupCodes />
          </CustomTabPanel>
        </React.Suspense>
      </Box>
    </Box>
  );
}

export default React.memo(Profile);

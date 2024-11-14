import "./App.scss";
import { UserContext } from "./contexts/UserContext";
import React, { useState, useMemo, Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import useInactivityTimeout from "./hooks/useInactivityTimeout";
import useUserVerification from "./hooks/useUserVerification";
import useOnlineStatus from "./hooks/useOnlineStatus";
import useLogout from "./hooks/useLogout";
import SpotlightModal from "./modals/SpotlightModal";
import useSpotlightModal from "./hooks/useSpotlightModal";
import useNavigateWithKeyboard from "./hooks/useNavigateWithKeyboard";
import useFullScreen from "./hooks/useFullScreen.js";
import useModuleAssignedAlert from "./hooks/useModuleAssignedAlert.js";
import OfflineModal from "./modals/OfflineModal.js";
import BroadcastModal from "./modals/BroadcastModal.js";
import useToggleSidebar from "./hooks/useToggleSidebar.js";
import useBroadcastApi from "./hooks/useBroadcastApi.js";

// Lazy load pages
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const [user, setUser] = useState();
  const [offline, setOffline] = useState(false);
  const handleLogout = useLogout(setUser);
  const [showSidebar, setShowSidebar] = useState(true);
  const [broadcastModal, setBroadcastModal] = useState(false);
  const channel = useMemo(() => new BroadcastChannel("app-tabs"), []);
  const { open, handleOpen, handleClose } = useSpotlightModal(user);
  const loading = useUserVerification(setUser);
  useInactivityTimeout(handleLogout);
  useModuleAssignedAlert(user, setUser);
  useOnlineStatus(setOffline);
  useNavigateWithKeyboard();
  useFullScreen();
  useToggleSidebar(setShowSidebar);
  const handleUseInThisTab = useBroadcastApi(channel, setBroadcastModal);

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      <div className="App">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            {user ? (
              <HomePage
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            ) : (
              <LoginPage />
            )}
          </Suspense>
        )}
      </div>

      <SpotlightModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <OfflineModal
        open={offline}
        handleClose={(event, reason) => {
          if (reason !== "backdropClick") {
            setOffline(false);
          }
        }}
      />
      <BroadcastModal
        open={broadcastModal}
        handleUseInThisTab={handleUseInThisTab}
        handleClose={(event, reason) => {
          if (reason !== "backdropClick") {
            setBroadcastModal(false);
          }
        }}
      />
    </UserContext.Provider>
  );
}

export default React.memo(App);

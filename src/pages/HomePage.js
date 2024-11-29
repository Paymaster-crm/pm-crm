import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes } from "react-router-dom";
import { TabValueContext } from "../contexts/TabValueContext.js";
import AppbarComponent from "../components/home/AppbarComponent.js";
import DrawerComponent from "../components/home/DrawerComponent.js";
import ProtectedRoute from "../routes/ProtectedRoute.js";
import UnAuthorisedRoute from "../routes/UnAuthorisedRoute.js";
import routesConfig from "../routes/routesConfig.js";
import EventModal from "../modals/EventModal.js";
import axios from "axios";

const drawerWidth = 60;

function HomePage(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if modal has been closed before
    const modalClosed = localStorage.getItem("eventModalClosed") === "true";

    async function getEvents() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_STRING}/get-events`
        );
        setEvents(res.data);
        if (res.data.length > 0 && !modalClosed) {
          setIsModalOpen(true);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getEvents();
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("eventModalClosed", "true");
  };

  return (
    <TabValueContext.Provider value={{ tabValue, setTabValue }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppbarComponent
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          showSidebar={props.showSidebar}
          setShowSidebar={props.setShowSidebar}
        />

        {props.showSidebar && (
          <DrawerComponent
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        )}

        {/* Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: {
              lg: `calc(100% - ${drawerWidth}px)`,
            },
            backgroundColor: "#F9FAFB",
            height: "100vh",
            overflow: "scroll",
            padding: "20px",
            paddingTop: 0,
          }}
        >
          <Toolbar />
          <Routes>
            {routesConfig.map(({ path, element, allowedModules }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  allowedModules.length === 0 ? (
                    element
                  ) : (
                    <ProtectedRoute allowedModules={allowedModules}>
                      {element}
                    </ProtectedRoute>
                  )
                }
              />
            ))}
            <Route path="/not-authorized" element={<UnAuthorisedRoute />} />
            <Route path="*" element={<UnAuthorisedRoute />} />
          </Routes>
        </Box>
      </Box>

      {/* Modal */}
      <EventModal
        open={isModalOpen}
        onClose={handleCloseModal}
        events={events}
      />
    </TabValueContext.Provider>
  );
}

export default React.memo(HomePage);

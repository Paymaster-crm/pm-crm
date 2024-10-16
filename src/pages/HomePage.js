import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes } from "react-router-dom";
import { TabValueContext } from "../contexts/TabValueContext.js";
import AppbarComponent from "../components/home/AppbarComponent.js";
import DrawerComponent from "../components/home/DrawerComponent.js";
// Home
import Home from "../components/home/Home";
import Assign from "../components/home/Assign.js";
import ViewBugs from "../components/home/ViewBugs.js";
import ChangePassword from "../components/home/ChangePassword.js";
// Employee KYC
import EmployeeKYC from "../components/employeeKyc/EmployeeKYC.js";
import ViewIndividualKyc from "../components/employeeKyc/ViewIndividualKyc.js";
import EditEmployeeKyc from "../components/employeeKyc/EditEmployeeKyc.js";
// Employee Onboarding
import EmployeeOnboarding from "../components/employeeOnboarding/EmployeeOnboarding.js";
// Recruitment
import Recruitment from "../components/recruitment/Recruitment.js";

const drawerWidth = 60;

function HomePage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tabValue, setTabValue] = useState(
    JSON.parse(sessionStorage.getItem("tab_value") || 0)
  );

  return (
    <TabValueContext.Provider value={{ tabValue, setTabValue }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppbarComponent
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <DrawerComponent
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: {
              lg: `calc(100% - ${drawerWidth}px)`,
              backgroundColor: "#F9FAFB",
              height: "100vh",
              overflow: "scroll",
              padding: "20px",
              paddingTop: 0,
            },
          }}
        >
          <Toolbar />
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            <Route path="/assign" element={<Assign />} />
            <Route path="/view-bugs" element={<ViewBugs />} />
            <Route path="/change-password" element={<ChangePassword />} />

            {/* Employee KYC */}
            <Route path="/kyc" element={<EmployeeKYC />} />
            <Route path="/view-kyc/:username" element={<ViewIndividualKyc />} />
            <Route path="/edit-kyc/:username" element={<EditEmployeeKyc />} />

            {/* Employee Onboarding */}
            <Route
              path="/employee-onboarding"
              element={<EmployeeOnboarding />}
            />

            {/* Recruitment */}
            <Route path="/recruitment" element={<Recruitment />} />
          </Routes>
        </Box>
      </Box>
    </TabValueContext.Provider>
  );
}

export default HomePage;

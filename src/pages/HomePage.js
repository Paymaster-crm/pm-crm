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
import ResetPassword from "../components/home/ResetPassword.js";
import Profile from "../components/home/Profile.js";
// Employee KYC
import EmployeeKYC from "../components/employeeKyc/EmployeeKYC.js";
import ViewIndividualKyc from "../components/employeeKyc/ViewIndividualKyc.js";
import EditEmployeeKyc from "../components/employeeKyc/EditEmployeeKyc.js";
// Employee Onboarding
import EmployeeOnboarding from "../components/employeeOnboarding/EmployeeOnboarding.js";
// Employee Management
import PreRecruitment from "../components/employeeManagement/preRecruitmentProcess/PreRecruitment.js";
import RecruitmentProcess from "../components/employeeManagement/recruitmentProcess/Recruitment.js";
import ExitFeedback from "../components/employeeManagement/exitFeedback/ExitFeedback.js";
import Appraisal from "../components/employeeManagement/appraisal/Appraisal.js";
import TrainingAndDevelopment from "../components/employeeManagement/training/TrainingAndDevelopment.js";
import EmployeeRelation from "../components/employeeManagement/employeeRelation/EmployeeRelation.js";
import IsoCompliance from "../components/employeeManagement/iso/IsoCompliance.js";
// Attendance
import Attendance from "../components/attendance/Attendance.js";
import Dashboard from "../components/dashboard/Dashboard.js";
// Document Request Form
import DocumentRequest from "../components/documentRequest/DocumentRequest.js";
// DRA Profile
import DraProfile from "../components/dra/DraProfile.js";
// Resignation
import Resignation from "../components/resignation/Resignation.js";
// Salaries and Commissions
import SalariesAndCommissions from "../components/salariesAndCommissions/SalariesAndCommissions.js";
// Interview
import Interview from "../components/interview/Interview.js";

const drawerWidth = 60;

function HomePage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [tabValue, setTabValue] = useState(0);

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
            <Route path="/" element={<Dashboard />} />
            <Route path="/modules" element={<Home />} />
            <Route path="/assign" element={<Assign />} />
            <Route path="/change-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />

            {/* Employee KYC */}
            <Route path="/kyc" element={<EmployeeKYC />} />
            <Route path="/view-kyc/:username" element={<ViewIndividualKyc />} />
            <Route path="/edit-kyc/:username" element={<EditEmployeeKyc />} />

            {/* Employee Onboarding */}
            <Route
              path="/employee-onboarding"
              element={<EmployeeOnboarding />}
            />

            {/* Employee Management */}
            <Route
              path="/pre-recruitment-process"
              element={<PreRecruitment />}
            />
            <Route
              path="/recruitment-process"
              element={<RecruitmentProcess />}
            />
            <Route path="/exit-feedback" element={<ExitFeedback />} />
            <Route path="/performance-appraisal" element={<Appraisal />} />
            <Route
              path="/training-and-development"
              element={<TrainingAndDevelopment />}
            />
            <Route path="/employee-relation" element={<EmployeeRelation />} />
            <Route
              path="/iso-and-statutory-compliance"
              element={<IsoCompliance />}
            />
            {/* Attendance */}
            <Route path="/attendance" element={<Attendance />} />
            {/* Document Request */}
            <Route path="/document-request" element={<DocumentRequest />} />
            {/* DRA Profile */}
            <Route path="/dra-profile" element={<DraProfile />} />
            {/* Resignation */}
            <Route path="/resignation-process" element={<Resignation />} />
            {/* Salaries and Commissions */}
            <Route
              path="/salaries-and-commissions"
              element={<SalariesAndCommissions />}
            />
            {/* Interview */}
            <Route path="/interview" element={<Interview />} />
          </Routes>
        </Box>
      </Box>
    </TabValueContext.Provider>
  );
}

export default HomePage;

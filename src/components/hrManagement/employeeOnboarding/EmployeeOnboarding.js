import React, { Suspense, lazy, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "@hooks/useTabs";

// Lazily load the components
const OnboardEmployee = lazy(() => import("./OnboardEmployee"));
const CompleteOnboarding = lazy(() => import("./CompleteOnboarding"));
const ViewOnboardings = lazy(() => import("./ViewOnboardings"));

function EmployeeOnboarding() {
  const [value, setValue] = useState(
    Number(localStorage.getItem("onboarding_tab_value")) || 0
  );

  const { a11yProps, CustomTabPanel } = useTabs();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("onboarding_tab_value", newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Onboard Employee" {...a11yProps(0)} />
          <Tab label="View Employee Onboardings" {...a11yProps(1)} />
          <Tab label="Complete Onboarding" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <Box>
        <Suspense fallback={<div>Loading...</div>}>
          <CustomTabPanel value={value} index={0}>
            <OnboardEmployee />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <ViewOnboardings />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <CompleteOnboarding />
          </CustomTabPanel>
        </Suspense>
      </Box>
    </Box>
  );
}

export default React.memo(EmployeeOnboarding);

import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "../../../hooks/useTabs";
import OnboardEmployee from "./OnboardEmployee";
import CompleteOnboarding from "./CompleteOnboarding";
import ViewOnboardings from "./ViewOnboardings";

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
        <CustomTabPanel value={value} index={0}>
          <OnboardEmployee />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ViewOnboardings />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <CompleteOnboarding />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default React.memo(EmployeeOnboarding);

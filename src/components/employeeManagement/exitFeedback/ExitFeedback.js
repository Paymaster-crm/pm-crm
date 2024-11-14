import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "../../../hooks/useTabs";
import ExitFeedbackForm from "./ExitFeedbackForm";
import ViewExitFeedbacks from "./ViewExitFeedbacks";

function ExitFeedback() {
  const [value, setValue] = React.useState(
    Number(localStorage.getItem("exit_feedback_tab_value")) || 0
  );
  const { a11yProps, CustomTabPanel } = useTabs();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("exit_feedback_tab_value", newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Exit Feedback Form" {...a11yProps(0)} key={0} />
          <Tab label="View Exit Feedbacks" {...a11yProps(1)} key={1} />
        </Tabs>
      </Box>

      <Box>
        <CustomTabPanel value={value} index={0}>
          <ExitFeedbackForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ViewExitFeedbacks />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default React.memo(ExitFeedback);

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "@hooks/useTabs";

// Lazy load components
const ExitFeedbackForm = React.lazy(() => import("./ExitFeedbackForm"));
const ViewExitFeedbacks = React.lazy(() => import("./ViewExitFeedbacks"));

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
          <React.Suspense fallback={<div>Loading Exit Feedback Form...</div>}>
            <ExitFeedbackForm />
          </React.Suspense>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <React.Suspense fallback={<div>Loading View Exit Feedbacks...</div>}>
            <ViewExitFeedbacks />
          </React.Suspense>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default React.memo(ExitFeedback);

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useTabs from "../../../hooks/useTabs";
import AttendanceForm from "./AttendanceForm";
import LeaveApplication from "./LeaveApplication";
import ViewAttendances from "./ViewAttendances";
import ViewLeaveApplications from "./ViewLeaveApplications";

function Attendance() {
  const [value, setValue] = React.useState(
    Number(localStorage.getItem("attendance_tab_value")) || 0
  );
  const { a11yProps, CustomTabPanel } = useTabs();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("attendance_tab_value", newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Attendance" {...a11yProps(0)} key={0} />
          <Tab label="View All Attendances" {...a11yProps(1)} key={1} />
          <Tab label="Leave Application" {...a11yProps(2)} key={2} />
          <Tab label="View Leave Applications" {...a11yProps(3)} key={3} />
        </Tabs>
      </Box>

      <Box>
        <CustomTabPanel value={value} index={0}>
          <AttendanceForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ViewAttendances />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <LeaveApplication />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ViewLeaveApplications />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default React.memo(Attendance);

import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../schemas/attendance/attendanceSchema";
import { TextField, MenuItem } from "@mui/material";

function Attendance() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      attendanceDate: "",
      attendanceStatus: "",
      timeIn: "",
      timeOut: "",
      remarks: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Employee Attendance</h4>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="employeeName"
        name="employeeName"
        label="Employee Name"
        value={formik.values.employeeName}
        onChange={formik.handleChange}
        error={
          formik.touched.employeeName && Boolean(formik.errors.employeeName)
        }
        helperText={formik.touched.employeeName && formik.errors.employeeName}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="employeeEmail"
        name="employeeEmail"
        label="Employee Email"
        type="email"
        value={formik.values.employeeEmail}
        onChange={formik.handleChange}
        error={
          formik.touched.employeeEmail && Boolean(formik.errors.employeeEmail)
        }
        helperText={formik.touched.employeeEmail && formik.errors.employeeEmail}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="department"
        name="department"
        label="Department"
        select
        value={formik.values.department}
        onChange={formik.handleChange}
        error={formik.touched.department && Boolean(formik.errors.department)}
        helperText={formik.touched.department && formik.errors.department}
      >
        {[
          "Retail Banking",
          "Corporate Banking",
          "Investment Banking",
          "Risk Management",
          "Compliance and Regulatory Affairs",
          "Wealth Management",
          "Operations",
          "IT Support",
        ].map((dept) => (
          <MenuItem key={dept} value={dept}>
            {dept}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="attendanceDate"
        name="attendanceDate"
        label="Attendance Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.attendanceDate}
        onChange={formik.handleChange}
        error={
          formik.touched.attendanceDate && Boolean(formik.errors.attendanceDate)
        }
        helperText={
          formik.touched.attendanceDate && formik.errors.attendanceDate
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="attendanceStatus"
        name="attendanceStatus"
        label="Attendance Status"
        select
        value={formik.values.attendanceStatus}
        onChange={formik.handleChange}
        error={
          formik.touched.attendanceStatus &&
          Boolean(formik.errors.attendanceStatus)
        }
        helperText={
          formik.touched.attendanceStatus && formik.errors.attendanceStatus
        }
      >
        {["Present", "Absent", "On Leave", "Late"].map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="timeIn"
        name="timeIn"
        label="Time In"
        type="time"
        InputLabelProps={{ shrink: true }}
        value={formik.values.timeIn}
        onChange={formik.handleChange}
        error={formik.touched.timeIn && Boolean(formik.errors.timeIn)}
        helperText={formik.touched.timeIn && formik.errors.timeIn}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="timeOut"
        name="timeOut"
        label="Time Out"
        type="time"
        InputLabelProps={{ shrink: true }}
        value={formik.values.timeOut}
        onChange={formik.handleChange}
        error={formik.touched.timeOut && Boolean(formik.errors.timeOut)}
        helperText={formik.touched.timeOut && formik.errors.timeOut}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="remarks"
        name="remarks"
        label="Remarks"
        multiline
        rows={4}
        value={formik.values.remarks}
        onChange={formik.handleChange}
        error={formik.touched.remarks && Boolean(formik.errors.remarks)}
        helperText={formik.touched.remarks && formik.errors.remarks}
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Attendance;

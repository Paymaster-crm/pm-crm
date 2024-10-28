import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";

function Resignation() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeID: "",
      department: "",
      resignationDate: "",
      lastWorkingDay: "",
      reasonForLeaving: "",
      feedback: "",
      approvalStatus: "",
    },
    // Add a validation schema for resignation form if needed
    onSubmit: (values) => {
      console.log("Resignation form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Employee Resignation Form</h4>

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
        id="employeeID"
        name="employeeID"
        label="Employee ID"
        value={formik.values.employeeID}
        onChange={formik.handleChange}
        error={formik.touched.employeeID && Boolean(formik.errors.employeeID)}
        helperText={formik.touched.employeeID && formik.errors.employeeID}
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
          "Compliance",
          "Wealth Management",
          "Operations",
          "IT Support",
          "HR",
          "Finance",
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
        id="resignationDate"
        name="resignationDate"
        label="Resignation Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.resignationDate}
        onChange={formik.handleChange}
        error={
          formik.touched.resignationDate &&
          Boolean(formik.errors.resignationDate)
        }
        helperText={
          formik.touched.resignationDate && formik.errors.resignationDate
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="lastWorkingDay"
        name="lastWorkingDay"
        label="Last Working Day"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.lastWorkingDay}
        onChange={formik.handleChange}
        error={
          formik.touched.lastWorkingDay && Boolean(formik.errors.lastWorkingDay)
        }
        helperText={
          formik.touched.lastWorkingDay && formik.errors.lastWorkingDay
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="reasonForLeaving"
        name="reasonForLeaving"
        label="Reason for Leaving"
        select
        value={formik.values.reasonForLeaving}
        onChange={formik.handleChange}
        error={
          formik.touched.reasonForLeaving &&
          Boolean(formik.errors.reasonForLeaving)
        }
        helperText={
          formik.touched.reasonForLeaving && formik.errors.reasonForLeaving
        }
      >
        {[
          "Personal Reasons",
          "Career Advancement",
          "Higher Studies",
          "Relocation",
          "Health Reasons",
          "Dissatisfaction",
          "Other",
        ].map((reason) => (
          <MenuItem key={reason} value={reason}>
            {reason}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="feedback"
        name="feedback"
        label="Feedback"
        multiline
        rows={4}
        value={formik.values.feedback}
        onChange={formik.handleChange}
        error={formik.touched.feedback && Boolean(formik.errors.feedback)}
        helperText={formik.touched.feedback && formik.errors.feedback}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="approvalStatus"
        name="approvalStatus"
        label="Approval Status"
        select
        value={formik.values.approvalStatus}
        onChange={formik.handleChange}
        error={
          formik.touched.approvalStatus && Boolean(formik.errors.approvalStatus)
        }
        helperText={
          formik.touched.approvalStatus && formik.errors.approvalStatus
        }
      >
        {["Pending", "Approved by Manager", "Approved by HR", "Rejected"].map(
          (status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          )
        )}
      </TextField>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Resignation;

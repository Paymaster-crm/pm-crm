import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../../schemas/loginSchema";
import { TextField, MenuItem } from "@mui/material";

function EmployeeRelation() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      grievanceType: "",
      grievanceDetails: "",
      reportedDate: "",
      resolutionDate: "",
      actionsTaken: "",
      resolutionStatus: "",
      followUpActions: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Employee Relation</h4>
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
        id="grievanceType"
        name="grievanceType"
        label="Grievance Type"
        select
        value={formik.values.grievanceType}
        onChange={formik.handleChange}
        error={
          formik.touched.grievanceType && Boolean(formik.errors.grievanceType)
        }
        helperText={formik.touched.grievanceType && formik.errors.grievanceType}
      >
        {[
          "Workplace Harassment",
          "Discrimination",
          "Disciplinary Issues",
          "Salary Disputes",
          "Workplace Safety",
          "Interpersonal Conflict",
          "Policy Violation",
          "Other",
        ].map((grievance) => (
          <MenuItem key={grievance} value={grievance}>
            {grievance}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="grievanceDetails"
        name="grievanceDetails"
        label="Grievance Details"
        multiline
        rows={4}
        value={formik.values.grievanceDetails}
        onChange={formik.handleChange}
        error={
          formik.touched.grievanceDetails &&
          Boolean(formik.errors.grievanceDetails)
        }
        helperText={
          formik.touched.grievanceDetails && formik.errors.grievanceDetails
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="reportedDate"
        name="reportedDate"
        label="Reported Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.reportedDate}
        onChange={formik.handleChange}
        error={
          formik.touched.reportedDate && Boolean(formik.errors.reportedDate)
        }
        helperText={formik.touched.reportedDate && formik.errors.reportedDate}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="resolutionDate"
        name="resolutionDate"
        label="Resolution Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.resolutionDate}
        onChange={formik.handleChange}
        error={
          formik.touched.resolutionDate && Boolean(formik.errors.resolutionDate)
        }
        helperText={
          formik.touched.resolutionDate && formik.errors.resolutionDate
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="actionsTaken"
        name="actionsTaken"
        label="Actions Taken"
        multiline
        rows={4}
        value={formik.values.actionsTaken}
        onChange={formik.handleChange}
        error={
          formik.touched.actionsTaken && Boolean(formik.errors.actionsTaken)
        }
        helperText={formik.touched.actionsTaken && formik.errors.actionsTaken}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="resolutionStatus"
        name="resolutionStatus"
        label="Resolution Status"
        select
        value={formik.values.resolutionStatus}
        onChange={formik.handleChange}
        error={
          formik.touched.resolutionStatus &&
          Boolean(formik.errors.resolutionStatus)
        }
        helperText={
          formik.touched.resolutionStatus && formik.errors.resolutionStatus
        }
      >
        {["Pending", "Resolved", "Escalated", "Dismissed"].map((status) => (
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
        id="followUpActions"
        name="followUpActions"
        label="Follow-up Actions"
        multiline
        rows={4}
        value={formik.values.followUpActions}
        onChange={formik.handleChange}
        error={
          formik.touched.followUpActions &&
          Boolean(formik.errors.followUpActions)
        }
        helperText={
          formik.touched.followUpActions && formik.errors.followUpActions
        }
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default EmployeeRelation;

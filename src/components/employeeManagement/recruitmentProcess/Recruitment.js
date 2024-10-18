import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";
import { validationSchema } from "../../../schemas/employeeManagement/recruitmentSchema";

function RecruitmentProcess() {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      positionApplied: "",
      department: "",
      interviewDate: "",
      interviewMode: "",
      feedback: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Recruitment Process</h4>
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="candidateName"
        name="candidateName"
        label="Candidate Name"
        value={formik.values.candidateName}
        onChange={formik.handleChange}
        error={
          formik.touched.candidateName && Boolean(formik.errors.candidateName)
        }
        helperText={formik.touched.candidateName && formik.errors.candidateName}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="candidateEmail"
        name="candidateEmail"
        label="Candidate Email"
        type="email"
        value={formik.values.candidateEmail}
        onChange={formik.handleChange}
        error={
          formik.touched.candidateEmail && Boolean(formik.errors.candidateEmail)
        }
        helperText={
          formik.touched.candidateEmail && formik.errors.candidateEmail
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="candidatePhone"
        name="candidatePhone"
        label="Candidate Phone"
        value={formik.values.candidatePhone}
        onChange={formik.handleChange}
        error={
          formik.touched.candidatePhone && Boolean(formik.errors.candidatePhone)
        }
        helperText={
          formik.touched.candidatePhone && formik.errors.candidatePhone
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="positionApplied"
        name="positionApplied"
        label="Position Applied"
        value={formik.values.positionApplied}
        onChange={formik.handleChange}
        error={
          formik.touched.positionApplied &&
          Boolean(formik.errors.positionApplied)
        }
        helperText={
          formik.touched.positionApplied && formik.errors.positionApplied
        }
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
        id="interviewDate"
        name="interviewDate"
        label="Interview Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.interviewDate}
        onChange={formik.handleChange}
        error={
          formik.touched.interviewDate && Boolean(formik.errors.interviewDate)
        }
        helperText={formik.touched.interviewDate && formik.errors.interviewDate}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="interviewMode"
        name="interviewMode"
        label="Interview Mode"
        select
        value={formik.values.interviewMode}
        onChange={formik.handleChange}
        error={
          formik.touched.interviewMode && Boolean(formik.errors.interviewMode)
        }
        helperText={formik.touched.interviewMode && formik.errors.interviewMode}
      >
        {["In-Person", "Video Call", "Phone Call"].map((mode) => (
          <MenuItem key={mode} value={mode}>
            {mode}
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
        id="status"
        name="status"
        label="Status"
        select
        value={formik.values.status}
        onChange={formik.handleChange}
        error={formik.touched.status && Boolean(formik.errors.status)}
        helperText={formik.touched.status && formik.errors.status}
      >
        {["Pending", "Approved", "Rejected"].map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default RecruitmentProcess;

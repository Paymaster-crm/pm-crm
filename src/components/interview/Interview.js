import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";

function Interview() {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      jobPosition: "",
      department: "",
      interviewRound: "",
      panelMembers: "",
      interviewDate: "",
      interviewTime: "",
      feedback: "",
    },

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Interview Scheduling and Details</h4>

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
        id="jobPosition"
        name="jobPosition"
        label="Job Position"
        value={formik.values.jobPosition}
        onChange={formik.handleChange}
        error={formik.touched.jobPosition && Boolean(formik.errors.jobPosition)}
        helperText={formik.touched.jobPosition && formik.errors.jobPosition}
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
        id="interviewRound"
        name="interviewRound"
        label="Interview Round"
        select
        value={formik.values.interviewRound}
        onChange={formik.handleChange}
        error={
          formik.touched.interviewRound && Boolean(formik.errors.interviewRound)
        }
        helperText={
          formik.touched.interviewRound && formik.errors.interviewRound
        }
      >
        {["First Round", "Technical Round", "HR Round", "Final Round"].map(
          (round) => (
            <MenuItem key={round} value={round}>
              {round}
            </MenuItem>
          )
        )}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="panelMembers"
        name="panelMembers"
        label="Panel Members"
        value={formik.values.panelMembers}
        onChange={formik.handleChange}
        error={
          formik.touched.panelMembers && Boolean(formik.errors.panelMembers)
        }
        helperText={formik.touched.panelMembers && formik.errors.panelMembers}
      />

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
        id="interviewTime"
        name="interviewTime"
        label="Interview Time"
        type="time"
        InputLabelProps={{ shrink: true }}
        value={formik.values.interviewTime}
        onChange={formik.handleChange}
        error={
          formik.touched.interviewTime && Boolean(formik.errors.interviewTime)
        }
        helperText={formik.touched.interviewTime && formik.errors.interviewTime}
      />

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

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Interview;

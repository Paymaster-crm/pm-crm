import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../../schemas/employeeManagement/appraisalSchema";
import { TextField, MenuItem } from "@mui/material";
import Rating from "@mui/material/Rating";

function PerformanceAppraisal() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      appraisalDate: "",
      performanceScore: "",
      strengths: "",
      areasOfImprovement: "",
      goals: "",
      feedback: "",
      overallRating: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Performance Appraisal</h4>
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
        id="appraisalDate"
        name="appraisalDate"
        label="Appraisal Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.appraisalDate}
        onChange={formik.handleChange}
        error={
          formik.touched.appraisalDate && Boolean(formik.errors.appraisalDate)
        }
        helperText={formik.touched.appraisalDate && formik.errors.appraisalDate}
      />
      <br />
      <br />
      Performance Score
      <br />
      <Rating
        name="overall_job_satisfaction"
        value={formik.values.performanceScore}
        onChange={(event, newValue) => {
          formik.setFieldValue("performanceScore", newValue);
        }}
      />
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="strengths"
        name="strengths"
        label="Strengths"
        multiline
        rows={4}
        value={formik.values.strengths}
        onChange={formik.handleChange}
        error={formik.touched.strengths && Boolean(formik.errors.strengths)}
        helperText={formik.touched.strengths && formik.errors.strengths}
      />
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="areasOfImprovement"
        name="areasOfImprovement"
        label="Areas of Improvement"
        multiline
        rows={4}
        value={formik.values.areasOfImprovement}
        onChange={formik.handleChange}
        error={
          formik.touched.areasOfImprovement &&
          Boolean(formik.errors.areasOfImprovement)
        }
        helperText={
          formik.touched.areasOfImprovement && formik.errors.areasOfImprovement
        }
      />
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="goals"
        name="goals"
        label="Goals for Next Period"
        multiline
        rows={4}
        value={formik.values.goals}
        onChange={formik.handleChange}
        error={formik.touched.goals && Boolean(formik.errors.goals)}
        helperText={formik.touched.goals && formik.errors.goals}
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
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="overallRating"
        name="overallRating"
        label="Overall Rating"
        select
        value={formik.values.overallRating}
        onChange={formik.handleChange}
        error={
          formik.touched.overallRating && Boolean(formik.errors.overallRating)
        }
        helperText={formik.touched.overallRating && formik.errors.overallRating}
      >
        {[
          "Outstanding",
          "Exceeds Expectations",
          "Meets Expectations",
          "Needs Improvement",
          "Unsatisfactory",
        ].map((rating) => (
          <MenuItem key={rating} value={rating}>
            {rating}
          </MenuItem>
        ))}
      </TextField>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default PerformanceAppraisal;

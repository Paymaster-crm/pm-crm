import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";
import { validationSchema } from "../../../schemas/employeeManagement/traininSchema";

function TrainingAndDevelopment() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      trainingProgram: "",
      trainingDate: "",
      duration: "",
      trainingProvider: "",
      feedback: "",
      improvementAreas: "",
      futureGoals: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Training and Development</h4>
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
        id="trainingProgram"
        name="trainingProgram"
        label="Training Program"
        value={formik.values.trainingProgram}
        onChange={formik.handleChange}
        error={
          formik.touched.trainingProgram &&
          Boolean(formik.errors.trainingProgram)
        }
        helperText={
          formik.touched.trainingProgram && formik.errors.trainingProgram
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="trainingDate"
        name="trainingDate"
        label="Training Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.trainingDate}
        onChange={formik.handleChange}
        error={
          formik.touched.trainingDate && Boolean(formik.errors.trainingDate)
        }
        helperText={formik.touched.trainingDate && formik.errors.trainingDate}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="duration"
        name="duration"
        label="Duration (in hours)"
        type="number"
        value={formik.values.duration}
        onChange={formik.handleChange}
        error={formik.touched.duration && Boolean(formik.errors.duration)}
        helperText={formik.touched.duration && formik.errors.duration}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="trainingProvider"
        name="trainingProvider"
        label="Training Provider"
        value={formik.values.trainingProvider}
        onChange={formik.handleChange}
        error={
          formik.touched.trainingProvider &&
          Boolean(formik.errors.trainingProvider)
        }
        helperText={
          formik.touched.trainingProvider && formik.errors.trainingProvider
        }
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
        id="improvementAreas"
        name="improvementAreas"
        label="Areas for Improvement"
        multiline
        rows={4}
        value={formik.values.improvementAreas}
        onChange={formik.handleChange}
        error={
          formik.touched.improvementAreas &&
          Boolean(formik.errors.improvementAreas)
        }
        helperText={
          formik.touched.improvementAreas && formik.errors.improvementAreas
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="futureGoals"
        name="futureGoals"
        label="Future Goals"
        multiline
        rows={4}
        value={formik.values.futureGoals}
        onChange={formik.handleChange}
        error={formik.touched.futureGoals && Boolean(formik.errors.futureGoals)}
        helperText={formik.touched.futureGoals && formik.errors.futureGoals}
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default TrainingAndDevelopment;

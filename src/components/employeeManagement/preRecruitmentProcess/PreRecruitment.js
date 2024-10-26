import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";
import { validationSchema } from "../../../schemas/employeeManagement/preRecruitmentSchema";

function PreRecruitment() {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobPostingDate: new Date().toISOString().split("T")[0],
      applicationDeadline: "",
      department: "",
      jobDescription: "",
      requiredSkills: "",
      experience: "",
      employmentType: "",
      location: "",
      budget: "",
      hiringManager: "",
      recruitmentStatus: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>Pre-Recruitment Process</h4>
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="jobTitle"
        name="jobTitle"
        label="Job Title"
        value={formik.values.jobTitle}
        onChange={formik.handleChange}
        error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
        helperText={formik.touched.jobTitle && formik.errors.jobTitle}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="jobPostingDate"
        name="jobPostingDate"
        label="Job Posting Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.jobPostingDate}
        onChange={formik.handleChange}
        error={
          formik.touched.jobPostingDate && Boolean(formik.errors.jobPostingDate)
        }
        helperText={
          formik.touched.jobPostingDate && formik.errors.jobPostingDate
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="applicationDeadline"
        name="applicationDeadline"
        label="Application Deadline"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.applicationDeadline}
        onChange={formik.handleChange}
        error={
          formik.touched.applicationDeadline &&
          Boolean(formik.errors.applicationDeadline)
        }
        helperText={
          formik.touched.applicationDeadline &&
          formik.errors.applicationDeadline
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
        id="jobDescription"
        name="jobDescription"
        label="Job Description"
        multiline
        rows={4}
        value={formik.values.jobDescription}
        onChange={formik.handleChange}
        error={
          formik.touched.jobDescription && Boolean(formik.errors.jobDescription)
        }
        helperText={
          formik.touched.jobDescription && formik.errors.jobDescription
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="requiredSkills"
        name="requiredSkills"
        label="Required Skills (comma-separated)"
        value={formik.values.requiredSkills}
        onChange={formik.handleChange}
        error={
          formik.touched.requiredSkills && Boolean(formik.errors.requiredSkills)
        }
        helperText={
          formik.touched.requiredSkills && formik.errors.requiredSkills
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="experience"
        name="experience"
        label="Experience (in years)"
        type="number"
        value={formik.values.experience}
        onChange={formik.handleChange}
        error={formik.touched.experience && Boolean(formik.errors.experience)}
        helperText={formik.touched.experience && formik.errors.experience}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="employmentType"
        name="employmentType"
        label="Employment Type"
        select
        value={formik.values.employmentType}
        onChange={formik.handleChange}
        error={
          formik.touched.employmentType && Boolean(formik.errors.employmentType)
        }
        helperText={
          formik.touched.employmentType && formik.errors.employmentType
        }
      >
        {["Full-Time", "Part-Time", "Contract", "Temporary"].map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="location"
        name="location"
        label="Location"
        value={formik.values.location}
        onChange={formik.handleChange}
        error={formik.touched.location && Boolean(formik.errors.location)}
        helperText={formik.touched.location && formik.errors.location}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="budget"
        name="budget"
        label="Budget (LPA)"
        type="number"
        value={formik.values.budget}
        onChange={formik.handleChange}
        error={formik.touched.budget && Boolean(formik.errors.budget)}
        helperText={formik.touched.budget && formik.errors.budget}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="hiringManager"
        name="hiringManager"
        label="Hiring Manager"
        value={formik.values.hiringManager}
        onChange={formik.handleChange}
        error={
          formik.touched.hiringManager && Boolean(formik.errors.hiringManager)
        }
        helperText={formik.touched.hiringManager && formik.errors.hiringManager}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="recruitmentStatus"
        name="recruitmentStatus"
        label="Recruitment Status"
        select
        value={formik.values.recruitmentStatus}
        onChange={formik.handleChange}
        error={
          formik.touched.recruitmentStatus &&
          Boolean(formik.errors.recruitmentStatus)
        }
        helperText={
          formik.touched.recruitmentStatus && formik.errors.recruitmentStatus
        }
      >
        {["Open", "Closed", "On Hold"].map((status) => (
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

export default PreRecruitment;

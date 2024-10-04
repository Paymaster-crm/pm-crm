import React from "react";
import { useFormik } from "formik";
import { MenuItem, TextField } from "@mui/material";
import { validationSchema } from "../../schemas/recruitment/recruitmentSchema";

function Recruitment() {
  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      mobile: "",
      email: "",
      applying_for: "",
      qualification: "",
      experience: "",
    },
    validationSchema,
    onsubmit: () => {},
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Recruitment form</h3>
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="dob"
        name="dob"
        label="Date of Birth"
        type="date"
        value={formik.values.dob}
        onChange={formik.handleChange}
        error={formik.touched.dob && Boolean(formik.errors.dob)}
        helperText={formik.touched.dob && formik.errors.dob}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="mobile"
        name="mobile"
        label="Mobile"
        value={formik.values.mobile}
        onChange={formik.handleChange}
        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        select
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="applying_for"
        name="applying_for"
        label="Applying for"
        value={formik.values.applying_for}
        onChange={formik.handleChange}
        error={
          formik.touched.applying_for && Boolean(formik.errors.applying_for)
        }
        helperText={formik.touched.applying_for && formik.errors.applying_for}
      >
        <MenuItem value="Operation Manager">Operation Manager</MenuItem>
        <MenuItem value="Team Leader">Team Leader</MenuItem>
        <MenuItem value="Tele Caller">Tele Caller</MenuItem>
        <MenuItem value="QA">QA</MenuItem>
        <MenuItem value="MIS">MIS</MenuItem>
        <MenuItem value="HR">HR</MenuItem>
        <MenuItem value="Back Office">Back Office</MenuItem>
        <MenuItem value="Trainer">Trainer</MenuItem>
      </TextField>

      <TextField
        select
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="qualification"
        name="qualification"
        label="Qualification"
        value={formik.values.qualification}
        onChange={formik.handleChange}
        error={
          formik.touched.qualification && Boolean(formik.errors.qualification)
        }
        helperText={formik.touched.qualification && formik.errors.qualification}
      >
        <MenuItem value="10th">10th</MenuItem>
        <MenuItem value="12th">12th</MenuItem>
        <MenuItem value="Graduate">Graduate</MenuItem>
        <MenuItem value="Masters">Masters</MenuItem>
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="experience"
        name="experience"
        label="Experience"
        value={formik.values.experience}
        onChange={formik.handleChange}
        error={formik.touched.experience && Boolean(formik.errors.experience)}
        helperText={formik.touched.experience && formik.errors.experience}
      />

      <button className="btn">Send to HR</button>
    </form>
  );
}

export default Recruitment;

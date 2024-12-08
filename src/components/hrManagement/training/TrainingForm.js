import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import useUserList from "../../../hooks/useUserList";
import axios from "axios";

function TrainingForm() {
  const userList = useUserList();

  const formik = useFormik({
    initialValues: {
      username: "",
      trainingProgram: "",
      trainingDate: "",
      duration: "",
      trainingProvider: "",
      feedback: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/add-training`,
          values,
          {
            withCredentials: true,
          }
        );
        alert(res.data.message);
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Autocomplete
        value={formik.values.username}
        onChange={(event, newValue) => {
          formik.setFieldValue("username", newValue); // Update Formik state
        }}
        options={userList}
        getOptionLabel={(option) => option || ""}
        sx={{ marginBottom: "10px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="login-input"
            fullWidth
            variant="filled"
            size="small"
            label="Select User"
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        )}
      />

      <CustomTextField
        id="trainingProgram"
        name="trainingProgram"
        label="Training Program"
        formik={formik}
      />

      <CustomTextField
        id="trainingDate"
        name="trainingDate"
        label="Training Date"
        type="date"
        formik={formik}
      />

      <CustomTextField
        id="duration"
        name="duration"
        label="Duration (in hours)"
        type="number"
        formik={formik}
      />

      <CustomTextField
        id="trainingProvider"
        name="trainingProvider"
        label="Training Provider"
        formik={formik}
      />

      <CustomTextField
        id="feedback"
        name="feedback"
        label="Feedback"
        multiline
        rows={4}
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default React.memo(TrainingForm);

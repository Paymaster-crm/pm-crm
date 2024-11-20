import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { validationSchema } from "../../../schemas/hrManagement/jobOpening";
import CustomButton from "../../customComponents/CustomButton";
import CustomTextField from "../../customComponents/CustomTextField";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value} LPA`;
}

const marks = [
  {
    value: 2,
    label: "2 LPA",
  },
  {
    value: 10,
    label: "10 LPA",
  },
];

function NewJobOpenings() {
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      numberOfVacancies: "",
      jobPostingDate: new Date().toISOString().split("T")[0],
      applicationDeadline: "",
      jobDescription: "",
      requiredSkills: "",
      experience: "",
      location: "",
      budget: [2, 10],
      hiringManager: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/add-job-opening`,
          values,
          { withCredentials: true }
        );
        alert(res.data.message);
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleSliderChange = (event, newValue) => {
    formik.setFieldValue("budget", newValue);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <CustomTextField
        id="jobTitle"
        name="jobTitle"
        label="Job Title"
        formik={formik}
      />

      <CustomTextField
        id="numberOfVacancies"
        name="numberOfVacancies"
        label="Number of Vacancies"
        formik={formik}
      />

      <CustomTextField
        id="jobPostingDate"
        name="jobPostingDate"
        label="Job Posting Date"
        formik={formik}
        type="date"
      />

      <CustomTextField
        id="applicationDeadline"
        name="applicationDeadline"
        label="Application Deadline"
        formik={formik}
        type="date"
      />

      <CustomTextField
        id="jobDescription"
        name="jobDescription"
        label="Job Description"
        formik={formik}
      />

      <CustomTextField
        id="requiredSkills"
        name="requiredSkills"
        label="Required Skills"
        formik={formik}
      />

      <CustomTextField
        id="experience"
        name="experience"
        label="Experience (in years)"
        formik={formik}
      />

      <CustomTextField
        id="location"
        name="location"
        label="Location"
        formik={formik}
      />

      <br />
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Budget</span>
        <Slider
          getAriaLabel={() => "Salary range"}
          value={formik.values.budget}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
          min={2}
          max={10}
          step={0.1}
        />
      </div>
      <br />
      <CustomTextField
        id="hiringManager"
        name="hiringManager"
        label="Hiring Manager"
        formik={formik}
      />

      <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
    </form>
  );
}

export default React.memo(NewJobOpenings);

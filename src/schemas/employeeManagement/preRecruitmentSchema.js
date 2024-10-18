import * as Yup from "yup";

export const validationSchema = Yup.object({
  jobTitle: Yup.string().required("Job title is required"),
  department: Yup.string().required("Department is required"),
  jobDescription: Yup.string().required("Job description is required"),
  requiredSkills: Yup.string().required("Required skills are required"),
  experience: Yup.number()
    .required("Experience level is required")
    .min(0, "Must be a positive number"),
  employmentType: Yup.string().required("Employment type is required"),
  location: Yup.string().required("Location is required"),
  budget: Yup.number()
    .required("Minimum salary is required")
    .min(0, "Must be a positive number"),
  applicationDeadline: Yup.date().required("Application deadline is required"),
  hiringManager: Yup.string().required("Hiring manager is required"),
  recruitmentStatus: Yup.string().required("Recruitment status is required"),
});

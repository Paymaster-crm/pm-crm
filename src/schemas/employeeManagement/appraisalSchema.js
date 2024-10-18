import * as Yup from "yup";

export const validationSchema = Yup.object({
  employeeName: Yup.string().required("Employee name is required"),
  employeeEmail: Yup.string()
    .email("Invalid email format")
    .required("Employee email is required"),
  department: Yup.string().required("Department is required"),
  appraisalDate: Yup.date().required("Appraisal date is required"),
  performanceScore: Yup.number()
    .required("Performance score is required")
    .min(1, "Score must be at least 1")
    .max(5, "Score must be at most 5"),
  strengths: Yup.string().required("Strengths are required"),
  areasOfImprovement: Yup.string().required(
    "Areas of improvement are required"
  ),
  goals: Yup.string().required("Goals are required"),
  feedback: Yup.string().required("Feedback is required"),
  overallRating: Yup.string().required("Overall rating is required"),
});

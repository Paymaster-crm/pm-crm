import * as Yup from "yup";

export const validationSchema = Yup.object({
  employeeName: Yup.string().required("Employee name is required"),
  employeeEmail: Yup.string()
    .email("Invalid email format")
    .required("Employee email is required"),
  department: Yup.string().required("Department is required"),
  trainingProgram: Yup.string().required("Training program is required"),
  trainingDate: Yup.date().required("Training date is required"),
  duration: Yup.number()
    .required("Duration is required")
    .min(1, "Duration must be at least 1 hour"),
  trainingProvider: Yup.string().required("Training provider is required"),
  feedback: Yup.string().required("Feedback is required"),
  improvementAreas: Yup.string().required("Areas for improvement are required"),
  futureGoals: Yup.string().required("Future goals are required"),
});

import * as Yup from "yup";

export const validationSchema = Yup.object({
  employeeName: Yup.string().required("Employee name is required"),
  employeeEmail: Yup.string()
    .email("Invalid email format")
    .required("Employee email is required"),
  department: Yup.string().required("Department is required"),
  grievanceType: Yup.string().required("Grievance type is required"),
  grievanceDetails: Yup.string().required("Grievance details are required"),
  reportedDate: Yup.date().required("Reported date is required"),
  resolutionDate: Yup.date(),
  actionsTaken: Yup.string(),
  resolutionStatus: Yup.string().required("Resolution status is required"),
  followUpActions: Yup.string(),
});

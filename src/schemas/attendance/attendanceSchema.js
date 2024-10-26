import * as Yup from "yup";

export const validationSchema = Yup.object({
  employeeName: Yup.string().required("Employee name is required"),
  employeeEmail: Yup.string()
    .email("Invalid email format")
    .required("Employee email is required"),
  department: Yup.string().required("Department is required"),
  attendanceDate: Yup.date().required("Attendance date is required"),
  attendanceStatus: Yup.string().required("Attendance status is required"),
  timeIn: Yup.string().required("Time-in is required"),
  timeOut: Yup.string().required("Time-out is required"),
  remarks: Yup.string(),
});

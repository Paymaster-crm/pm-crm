import * as Yup from "yup";

export const validationSchema = Yup.object({
  candidateName: Yup.string().required("Candidate name is required"),
  candidateEmail: Yup.string()
    .email("Invalid email format")
    .required("Candidate email is required"),
  candidatePhone: Yup.string().required("Candidate phone number is required"),
  positionApplied: Yup.string().required("Position applied is required"),
  department: Yup.string().required("Department is required"),
  interviewDate: Yup.date().required("Interview date is required"),
  interviewMode: Yup.string().required("Interview mode is required"),
  feedback: Yup.string().required("Feedback is required"),
  status: Yup.string().required("Status is required"),
});

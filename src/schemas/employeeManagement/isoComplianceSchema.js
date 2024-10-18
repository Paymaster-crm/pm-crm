import * as Yup from "yup";

export const validationSchema = Yup.object({
  employeeName: Yup.string().required("Employee name is required"),
  employeeEmail: Yup.string()
    .email("Invalid email format")
    .required("Employee email is required"),
  department: Yup.string().required("Department is required"),
  isoStandard: Yup.string().required("ISO Standard is required"),
  auditDate: Yup.date().required("Audit date is required"),
  complianceStatusISO: Yup.string().required("Compliance status is required"),
  correctiveActionsISO: Yup.string(),
  followUpDateISO: Yup.date(),
  remarksISO: Yup.string(),

  // Statutory Compliance Validation
  complianceType: Yup.string().required("Compliance type is required"),
  submissionDate: Yup.date().required("Submission date is required"),
  dueDate: Yup.date().required("Due date is required"),
  complianceStatusStatutory: Yup.string().required(
    "Compliance status is required"
  ),
  penaltyImposed: Yup.string(),
  correctiveActionsStatutory: Yup.string(),
  followUpDateStatutory: Yup.date(),
  remarksStatutory: Yup.string(),
});

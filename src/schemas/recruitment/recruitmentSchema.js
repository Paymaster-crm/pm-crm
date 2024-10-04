import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  dob: Yup.string().required("This field is required"),
  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Mobile number is not valid") // Validates a 10-digit Indian number
    .required("This field is required"),
  email: Yup.string()
    .email("Invalid email format") // Checks for valid email format
    .required("This field is required"),
  applying_for: Yup.string().required("This field is required"),
  qualification: Yup.string().required("This field is required"),
  experience: Yup.string().required("This field is required"),
});

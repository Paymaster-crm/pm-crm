import * as Yup from "yup";

export const validationSchemaForgotPassword = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters"),
});

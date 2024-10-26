import * as Yup from "yup";

export const validationSchema = (setupComplete, useBackupCode) =>
  Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username should be at least 4 characters long"),
    password: Yup.string().required("Password is required"),
    twoFAToken:
      setupComplete && !useBackupCode
        ? Yup.string().required("2FA token is required")
        : Yup.string().notRequired(), // Not required when using backup code
    backupCode: useBackupCode
      ? Yup.string()
          .required("Backup code is required")
          ?.length(8, "Backup code must be exactly 8 characters long")
      : Yup.string().notRequired(),
  });

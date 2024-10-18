import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { validationSchemaForgotPassword } from "../schemas/forgotPasswordSchema";
import { validationSchemaOtp } from "../schemas/updatePasswordSchema";

function ForgotPasswordForm(props) {
  const [otpSent, setOtpSent] = useState(false); // New state for OTP sent
  const [username, setUsername] = useState("");

  const formikForgotPassword = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: validationSchemaForgotPassword, // Set validation schema
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/forgot-password`,
          values
        );
        if (res.data.message === "OTP sent to your email") {
          setUsername(values.username);
          setOtpSent(true); // Switch to OTP form
        }
        alert(res.data.message); // Show success message
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      }
    },
  });

  const formikOtp = useFormik({
    initialValues: {
      otp: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaOtp,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/update-password`,
          {
            username,
            otp: values.otp,
            password: values.password,
          }
        );
        alert(res.data.message);
        if (res.data.message === "Password has been successfully reset") {
          props.setForgotPassword(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert(error.response.data.message);
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      }
    },
  });

  return (
    <>
      {!otpSent ? (
        <form onSubmit={formikForgotPassword.handleSubmit}>
          <TextField
            size="small"
            fullWidth
            margin="dense"
            variant="filled"
            id="username"
            name="username"
            label="Username"
            value={formikForgotPassword.values.username}
            onChange={formikForgotPassword.handleChange}
            error={
              formikForgotPassword.touched.username &&
              Boolean(formikForgotPassword.errors.username)
            }
            helperText={
              formikForgotPassword.touched.username &&
              formikForgotPassword.errors.username
            }
          />
          <button type="submit" className="btn">
            Reset
          </button>
        </form>
      ) : (
        <form onSubmit={formikOtp.handleSubmit}>
          <TextField
            size="small"
            fullWidth
            margin="dense"
            variant="filled"
            id="otp"
            name="otp"
            label="OTP"
            value={formikOtp.values.otp}
            onChange={formikOtp.handleChange}
            error={formikOtp.touched.otp && Boolean(formikOtp.errors.otp)}
            helperText={formikOtp.touched.otp && formikOtp.errors.otp}
          />
          <TextField
            size="small"
            fullWidth
            margin="dense"
            variant="filled"
            type="password"
            id="password"
            name="password"
            label="New Password"
            value={formikOtp.values.password}
            onChange={formikOtp.handleChange}
            error={
              formikOtp.touched.password && Boolean(formikOtp.errors.password)
            }
            helperText={formikOtp.touched.password && formikOtp.errors.password}
          />
          <TextField
            size="small"
            fullWidth
            margin="dense"
            variant="filled"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            value={formikOtp.values.confirmPassword}
            onChange={formikOtp.handleChange}
            error={
              formikOtp.touched.confirmPassword &&
              Boolean(formikOtp.errors.confirmPassword)
            }
            helperText={
              formikOtp.touched.confirmPassword &&
              formikOtp.errors.confirmPassword
            }
          />
          <button type="submit" className="btn">
            Confirm
          </button>
        </form>
      )}
    </>
  );
}

export default ForgotPasswordForm;

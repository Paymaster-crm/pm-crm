import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { UserContext } from "../contexts/UserContext";
import { validationSchema } from "../schemas/loginSchema";
import { getGeolocation } from "../utils/getGeolocation";
import { InputText } from "primereact/inputtext";
import { InputOtp } from "primereact/inputotp";
import { Password } from "primereact/password";

function ConventionalLoginForm() {
  const { setUser } = useContext(UserContext);
  const [qr, setQr] = useState(null);
  const [geolocation, setGeolocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [setupComplete, setSetupComplete] = useState(false); // State to track if 2FA setup is complete
  const [useBackupCode, setUseBackupCode] = useState(false); // State for using backup codes

  useEffect(() => {
    getGeolocation(setGeolocation);
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      twoFAToken: "",
      backupCode: "",
    },
    validationSchema: validationSchema(setupComplete, useBackupCode),
    onSubmit: async (values) => {
      try {
        if (!setupComplete) {
          // Step 1: Check if 2FA is already enabled (setup)
          const res = await axios.post(
            `${process.env.REACT_APP_API_STRING}/2fa/setup`,
            {
              username: values.username,
              userAgent: navigator.userAgent,
              geolocation,
            },
            {
              withCredentials: true,
            }
          );

          if (res.data.message === "2FA setup required") {
            setQr(res.data.qrCode); // Set QR code
            setSetupComplete(true); // Mark setup as complete
          } else if (res.data.message === "2FA already enabled.") {
            setSetupComplete(true); // Mark setup as complete
            setQr(null);
          } else {
            alert(res.data.message);
          }
        } else {
          // Step 2: Submit the login form with 2FA token or backup code
          const loginRes = await axios.post(
            `${process.env.REACT_APP_API_STRING}/login`,
            {
              username: values.username,
              password: values.password,
              twoFAToken: useBackupCode ? "" : values.twoFAToken, // Use token or leave empty
              backupCode: useBackupCode ? values.backupCode : "", // Use backup code if selected
              userAgent: navigator.userAgent,
              geolocation,
            },
            {
              withCredentials: true,
            }
          );

          if (loginRes.data.message === "Login successful") {
            setUser(loginRes.data.user);
          } else {
            alert(loginRes.data.message);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Reset form and states
  const handleStartFresh = () => {
    formik.resetForm(); // Reset form values
    setQr(null); // Clear QR code
    setSetupComplete(false); // Reset setup
    setUseBackupCode(false); // Reset backup code usage
  };

  // Reset 2FA token and QR code on username or password change
  const handleInputChange = (e) => {
    formik.handleChange(e);
    if (e.target.name === "username" || e.target.name === "password") {
      setQr(null); // Reset QR code
      setSetupComplete(false); // Reset setup
      formik.setFieldValue("twoFAToken", ""); // Clear the 2FA token field
      formik.setFieldValue("backupCode", ""); // Clear the backup code field
      setUseBackupCode(false); // Reset backup code usage
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <InputText
          id="username"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={handleInputChange} // Use the custom input change handler
          className={
            formik.touched.username && formik.errors.username ? "p-invalid" : ""
          }
          disabled={setupComplete} // Disable if 2FA is set up
        />
        {formik.touched.username && formik.errors.username && (
          <small className="p-error">{formik.errors.username}</small>
        )}

        <Password
          toggleMask
          id="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={handleInputChange} // Use the custom input change handler
          feedback={false} // Disable the strength indicator feedback
          className={
            formik.touched.password && formik.errors.password ? "p-invalid" : ""
          }
          disabled={setupComplete} // Disable if 2FA is set up
        />
        {formik.touched.password && formik.errors.password && (
          <small className="p-error">{formik.errors.password}</small>
        )}

        {/* Show QR Code if 2FA setup is in progress */}
        {qr && (
          <div className="flex-div">
            <img src={qr} width={200} alt="QR code for Google Authenticator" />
            <span>Scan this QR code with your Google Authenticator app</span>
          </div>
        )}

        {/* Show the token input field after the setup is complete */}
        {setupComplete && (
          <div className="flex-div">
            {/* Conditionally render the Google Authenticator token input and its label */}
            {!useBackupCode && (
              <>
                <span>Enter Google Authenticator token</span>
                <InputOtp
                  placeholder="Enter 6-digit code"
                  value={formik.values.twoFAToken}
                  onChange={(e) => formik.setFieldValue("twoFAToken", e.value)} // Handle value directly
                  mask
                  integerOnly
                  length={6}
                />
              </>
            )}

            <span
              onClick={() => setUseBackupCode(!useBackupCode)}
              style={{
                cursor: "pointer",
                color: "#0060ae",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {useBackupCode ? "Use Google Authenticator" : "Use Backup Code"}
            </span>

            {/* Input for backup code */}
            {useBackupCode && (
              <InputOtp
                placeholder="Enter Backup Code"
                value={formik.values.backupCode}
                onChange={(e) => formik.setFieldValue("backupCode", e.value)}
                mask
                length={8}
              />
            )}
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          <button type="submit" className="btn">
            {setupComplete ? "Login" : "Two Factor Authentication"}
          </button>
          {setupComplete && (
            <button
              type="button"
              className="btn"
              onClick={handleStartFresh}
              style={{ marginLeft: 8 }}
            >
              Clear Form
            </button>
          )}
        </div>
      </form>
    </>
  );
}

export default ConventionalLoginForm;

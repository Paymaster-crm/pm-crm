import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { UserContext } from "../contexts/UserContext";
import { validationSchema } from "../schemas/webAuthnLoginSchema";
import { getGeolocation } from "../utils/getGeolocation";
import { InputText } from "primereact/inputtext";
import { initiateWebauthnRegistration } from "../utils/webAuthn/initiateWebauthnRegistration";
import { initiateWebauthnLogin } from "../utils/webAuthn/initiateWebauthnLogin";

function WebAuthnLoginForm() {
  const { setUser } = useContext(UserContext);
  const [geolocation, setGeolocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    getGeolocation(setGeolocation);
  }, []);

  const formik = useFormik({
    initialValues: { username: "" },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Step 1: Check if WebAuthn is enabled for the user
        const checkWebauthnRes = await axios.post(
          `${process.env.REACT_APP_API_STRING}/webauthn/check`,
          { username: values.username },
          { withCredentials: true }
        );

        if (!checkWebauthnRes.data.isRegistered) {
          // User not registered with WebAuthn, initiate WebAuthn registration
          initiateWebauthnRegistration(values.username, geolocation, setUser);
        } else {
          // User is registered with WebAuthn, initiate WebAuthn login
          initiateWebauthnLogin(values.username, geolocation, setUser);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <InputText
          id="username"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className={
            formik.touched.username && formik.errors.username ? "p-invalid" : ""
          }
        />
        {formik.touched.username && formik.errors.username && (
          <small className="p-error">{formik.errors.username}</small>
        )}

        <div style={{ marginTop: 16 }}>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default WebAuthnLoginForm;

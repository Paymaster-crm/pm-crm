import React, { useContext, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { UserContext } from "../contexts/UserContext";

function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [resetPassword, setResetPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/login`,
          values
        );

        if (res.status === 200) {
          sessionStorage.setItem("crm_user", JSON.stringify(res.data));
          setUser(res.data);
          resetForm();
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
      {!resetPassword && (
        <>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              size="small"
              fullWidth
              margin="dense"
              variant="filled"
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              type="password"
              size="small"
              fullWidth
              margin="dense"
              variant="filled"
              id="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <button type="submit" className="btn">
              Login
            </button>
          </form>

          <p onClick={() => setResetPassword(true)}>Reset Password</p>
        </>
      )}

      {resetPassword && (
        <>
          <form>
            <TextField
              size="small"
              fullWidth
              margin="dense"
              variant="filled"
              id="username"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <button type="submit" className="btn">
              Reset
            </button>
          </form>
          <p onClick={() => setResetPassword(false)}>Login</p>
        </>
      )}
    </>
  );
}

export default LoginPage;

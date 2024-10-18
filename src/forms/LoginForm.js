// import React, { useContext } from "react";
// import axios from "axios";
// import { useFormik } from "formik";
// import { TextField } from "@mui/material";
// import { UserContext } from "../contexts/UserContext";
// import { validationSchema } from "../schemas/loginSchema";

// function LoginForm() {
//   const { setUser } = useContext(UserContext);

//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },

//     validationSchema,

//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const res = await axios.post(
//           `${process.env.REACT_APP_API_STRING}/login`,
//           { ...values, userAgent: navigator.userAgent },
//           {
//             withCredentials: true,
//           }
//         );

//         if (res.data.message === "Login successful") {
//           setUser(res.data.user);
//           resetForm();
//         } else {
//           alert(res.data.message);
//         }
//       } catch (error) {
//         if (error.response && error.response.status === 400) {
//           alert(error.response.data.message);
//         } else {
//           alert("An unexpected error occurred. Please try again later.");
//         }
//       }
//     },
//   });

//   return (
//     <>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           size="small"
//           fullWidth
//           margin="dense"
//           variant="filled"
//           id="username"
//           name="username"
//           label="Username"
//           value={formik.values.username}
//           onChange={formik.handleChange}
//           error={formik.touched.username && Boolean(formik.errors.username)}
//           helperText={formik.touched.username && formik.errors.username}
//         />
//         <TextField
//           type="password"
//           size="small"
//           fullWidth
//           margin="dense"
//           variant="filled"
//           id="password"
//           name="password"
//           label="Password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <button type="submit" className="btn">
//           Login
//         </button>
//       </form>
//     </>
//   );
// }

// export default LoginForm;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { validationSchema } from "../schemas/loginSchema";

function LoginForm() {
  const { setUser } = useContext(UserContext);
  const [geolocation, setGeolocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setGeolocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };
    getGeolocation();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/login`,
          {
            ...values,
            userAgent: navigator.userAgent,
            geolocation, // Include geolocation data
          },
          {
            withCredentials: true,
          }
        );

        if (res.data.message === "Login successful") {
          setUser(res.data.user);
          resetForm();
        } else {
          alert(res.data.message);
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
    </>
  );
}

export default LoginForm;

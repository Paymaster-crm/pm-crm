import React from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import useUserList from "../../../hooks/useUserList";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

function AttendanceCorrection() {
  const userList = useUserList();

  const formik = useFormik({
    initialValues: {
      username: "",
      timeIn: "",
      timeOut: "",
    },

    onSubmit: async (values) => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_STRING}/attendance-correction`,
          values,
          { withCredentials: true }
        );
        alert(res.data.message);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={formik.handleSubmit}>
            <Autocomplete
              value={formik.values.username}
              onChange={(event, newValue) => {
                formik.setFieldValue("username", newValue);
              }}
              options={userList}
              getOptionLabel={(option) => option || ""}
              sx={{ marginBottom: "10px" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="login-input"
                  fullWidth
                  variant="filled"
                  size="small"
                  label="Select User"
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              )}
            />

            <CustomTextField
              id="timeIn"
              name="timeIn"
              label="Time In"
              type="time"
              formik={formik}
            />

            <CustomTextField
              id="timeOut"
              name="timeOut"
              label="Time Out"
              type="time"
              formik={formik}
            />

            <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(AttendanceCorrection);

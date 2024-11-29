import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import CustomTextField from "../../customComponents/CustomTextField";
import CustomButton from "../../customComponents/CustomButton";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CustomCalendar from "../../customComponents/Calendar";
import * as Yup from "yup";

function Attendance() {
  const [attendances, setAttendances] = useState([]);
  const [disableFields, setDisableFields] = useState({
    timeIn: false,
    timeOut: false,
  });
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const [validationSchema, setValidationSchema] = useState(
    Yup.object({
      timeIn: Yup.string().required("Time in is required"),
      timeOut: Yup.string(), // Default to optional
    })
  );

  async function getAttendances() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_STRING}/get-attendances/${
          month + 1
        }/${year}`,
        { withCredentials: true }
      );
      setAttendances(res.data);

      // Get the current date in ISO format (start of the day)
      const currentDate = new Date().setHours(0, 0, 0, 0);

      // Find attendance for today
      const todayAttendance = res.data.find((attendance) => {
        const attendanceDate = new Date(attendance.date).setHours(0, 0, 0, 0);
        return attendanceDate === currentDate;
      });

      if (todayAttendance) {
        // Function to convert UTC time to IST
        const convertToIST = (time) => {
          const date = new Date(time);
          const options = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          };
          return date.toLocaleTimeString("en-US", options); // Convert to HH:mm in IST
        };

        // Update disableFields based on today's attendance data
        setDisableFields({
          timeIn: !!todayAttendance.timeIn, // Disable timeIn if present
          timeOut: !!todayAttendance.timeOut, // Disable timeOut if present
        });

        // Update formik values for today's data
        formik.setValues({
          timeIn: todayAttendance.timeIn
            ? convertToIST(todayAttendance.timeIn)
            : "",
          timeOut: todayAttendance.timeOut
            ? convertToIST(todayAttendance.timeOut)
            : "",
          remarks: todayAttendance.remarks || "",
        });

        // Dynamically set validation schema
        if (!todayAttendance.timeIn) {
          setValidationSchema(
            Yup.object({
              timeIn: Yup.string().required("Time in is required"),
              timeOut: Yup.string(), // Optional
            })
          );
        } else if (!todayAttendance.timeOut) {
          setValidationSchema(
            Yup.object({
              timeIn: Yup.string(), // Optional
              timeOut: Yup.string().required("Time out is required"),
            })
          );
        }
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      timeIn: "",
      timeOut: "",
      remarks: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/add-attendance`,
          values,
          { withCredentials: true }
        );
        alert(res.data.message);
        getAttendances();
      } catch (error) {
        alert(error.response.data);
      }
    },
  });

  useEffect(() => {
    getAttendances();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={formik.handleSubmit}>
            <CustomTextField
              id="timeIn"
              name="timeIn"
              label="Time In"
              type="time"
              formik={formik}
              disabled={disableFields.timeIn}
            />

            <CustomTextField
              id="timeOut"
              name="timeOut"
              label="Time Out"
              type="time"
              formik={formik}
              disabled={disableFields.timeOut}
            />

            <CustomTextField
              id="remarks"
              name="remarks"
              label="Remarks"
              multiline
              rows={4}
              formik={formik}
            />

            <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
          </form>
        </Col>
        <Col>
          <CustomCalendar
            attendances={attendances}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            currentDate={currentDate}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(Attendance);

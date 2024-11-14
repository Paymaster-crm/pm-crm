import React, { Suspense, lazy } from "react";
import { useFormik } from "formik";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { validationSchema } from "../../../schemas/employeeOnboarding/onboardEmployee";

// Lazy load CustomButton and CustomTextField
const CustomButton = lazy(() => import("../../customComponents/CustomButton"));
const CustomTextField = lazy(() =>
  import("../../customComponents/CustomTextField")
);

function OnboardEmployee() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      employment_type: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_STRING}/onboard-employee`,
          values,
          {
            withCredentials: true,
          }
        );
        alert(res.data.message);
        resetForm();
      } catch (error) {
        console.error("Error occurred while onboarding employee:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col xs={4}>
          <Suspense fallback={<div>Loading First Name Field...</div>}>
            <CustomTextField
              id="first_name"
              name="first_name"
              label="First Name"
              formik={formik}
            />
          </Suspense>
        </Col>

        <Col xs={4}>
          <Suspense fallback={<div>Loading Middle Name Field...</div>}>
            <CustomTextField
              id="middle_name"
              name="middle_name"
              label="Middle Name"
              formik={formik}
            />
          </Suspense>
        </Col>

        <Col xs={4}>
          <Suspense fallback={<div>Loading Last Name Field...</div>}>
            <CustomTextField
              id="last_name"
              name="last_name"
              label="Last Name"
              formik={formik}
            />
          </Suspense>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Suspense fallback={<div>Loading Email Field...</div>}>
            <CustomTextField
              id="email"
              name="email"
              label="Email"
              formik={formik}
            />
          </Suspense>
        </Col>

        <Col xs={4}>
          <Suspense fallback={<div>Loading Employment Type Field...</div>}>
            <CustomTextField
              id="employment_type"
              name="employment_type"
              label="Employment Type"
              formik={formik}
              select
              options={[
                { value: "Internship", label: "Internship" },
                { value: "Probation", label: "Probation" },
                { value: "Permanent", label: "Permanent" },
              ]}
            />
          </Suspense>
        </Col>
      </Row>

      <Suspense fallback={<div>Loading Submit Button...</div>}>
        <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      </Suspense>
    </form>
  );
}

export default React.memo(OnboardEmployee);

import React, { Suspense, lazy } from "react";
import { useFormik } from "formik";

// Lazy load CustomButton and CustomTextField
const CustomButton = lazy(() => import("../../customComponents/CustomButton"));
const CustomTextField = lazy(() =>
  import("../../customComponents/CustomTextField")
);

function Resignation() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeID: "",
      department: "",
      resignationDate: "",
      lastWorkingDay: "",
      feedback: "",
    },
    onSubmit: (values) => {
      console.log("Resignation form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Employee Resignation Form</h4>

      <Suspense fallback={<div>Loading Employee Name...</div>}>
        <CustomTextField
          id="employeeName"
          name="employeeName"
          label="Employee Name"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Employee ID...</div>}>
        <CustomTextField
          id="employeeID"
          name="employeeID"
          label="Employee ID"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Department...</div>}>
        <CustomTextField
          id="department"
          name="department"
          label="Department"
          formik={formik}
          select
          options={[
            { value: "Retail Banking", label: "Retail Banking" },
            { value: "Corporate Banking", label: "Corporate Banking" },
            { value: "Investment Banking", label: "Investment Banking" },
            { value: "Asset Management", label: "Asset Management" },
            { value: "Compliance", label: "Compliance" },
            { value: "Wealth Management", label: "Wealth Management" },
            { value: "Operations", label: "Operations" },
            { value: "IT Support", label: "IT Support" },
            { value: "HR", label: "HR" },
          ]}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Resignation Date...</div>}>
        <CustomTextField
          id="resignationDate"
          name="resignationDate"
          label="Resignation Date"
          formik={formik}
          type="date"
        />
      </Suspense>

      <Suspense fallback={<div>Loading Last Working Day...</div>}>
        <CustomTextField
          id="lastWorkingDay"
          name="lastWorkingDay"
          label="Last Working Day"
          formik={formik}
          type="date"
        />
      </Suspense>

      <Suspense fallback={<div>Loading Feedback...</div>}>
        <CustomTextField
          id="feedback"
          name="feedback"
          label="Feedback"
          formik={formik}
          multiline
          rows={4}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Submit Button...</div>}>
        <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      </Suspense>
    </form>
  );
}

export default React.memo(Resignation);

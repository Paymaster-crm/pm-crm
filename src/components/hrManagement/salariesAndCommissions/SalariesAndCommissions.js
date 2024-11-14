import React, { Suspense, lazy } from "react";
import { useFormik } from "formik";

// Lazy load CustomButton and CustomTextField
const CustomButton = lazy(() => import("../../customComponents/CustomButton"));
const CustomTextField = lazy(() =>
  import("../../customComponents/CustomTextField")
);

function SalariesAndCommissions() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeID: "",
      department: "",
      basicSalary: "",
      commissionAmount: "",
      deductions: "",
      totalCompensation: "",
      comments: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Salary and Commission Details</h4>

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
            {
              value: "Compliance and Regulatory Affairs",
              label: "Compliance and Regulatory Affairs",
            },
            { value: "Wealth Management", label: "Wealth Management" },
            { value: "Operations", label: "Operations" },
            { value: "IT Support", label: "IT Support" },
          ]}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Basic Salary...</div>}>
        <CustomTextField
          id="basicSalary"
          name="basicSalary"
          label="Basic Salary"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Commission Amount...</div>}>
        <CustomTextField
          id="commissionAmount"
          name="commissionAmount"
          label="Commission Amount"
          type="number"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Deductions...</div>}>
        <CustomTextField
          id="deductions"
          name="deductions"
          label="Deductions"
          type="number"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Total Compensation...</div>}>
        <CustomTextField
          id="totalCompensation"
          name="totalCompensation"
          label="Total Compensation"
          type="number"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Comments...</div>}>
        <CustomTextField
          id="comments"
          name="comments"
          label="Additional Comments"
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

export default React.memo(SalariesAndCommissions);

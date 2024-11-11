import React, { Suspense } from "react";
import { useFormik } from "formik";

// Lazy load CustomTextField and CustomButton components
const CustomTextField = React.lazy(() =>
  import("../../customComponents/CustomTextField")
);
const CustomButton = React.lazy(() =>
  import("../../customComponents/CustomButton")
);

function TrainingAndDevelopment() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeEmail: "",
      department: "",
      trainingProgram: "",
      trainingDate: "",
      duration: "",
      trainingProvider: "",
      feedback: "",
      improvementAreas: "",
      futureGoals: "",
    },
    onSubmit: (values) => {},
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <h4>Training and Development</h4>

        <CustomTextField
          id="employeeName"
          name="employeeName"
          label="Employee Name"
          formik={formik}
        />

        <CustomTextField
          id="employeeEmail"
          name="employeeEmail"
          label="Employee Email"
          type="email"
          formik={formik}
        />

        <CustomTextField
          id="department"
          name="department"
          label="Department"
          select
          formik={formik}
          options={[
            { value: "Retail Banking", label: "Retail Banking" },
            { value: "Corporate Banking", label: "Corporate Banking" },
            { value: "Investment Banking", label: "Investment Banking" },
            { value: "Risk Management", label: "Risk Management" },
            {
              value: "Compliance and Regulatory Affairs",
              label: "Compliance and Regulatory Affairs",
            },
            { value: "Wealth Management", label: "Wealth Management" },
            { value: "Operations", label: "Operations" },
            { value: "IT Support", label: "IT Support" },
          ]}
        />

        <CustomTextField
          id="trainingProgram"
          name="trainingProgram"
          label="Training Program"
          formik={formik}
        />

        <CustomTextField
          id="trainingDate"
          name="trainingDate"
          label="Training Date"
          type="date"
          formik={formik}
        />

        <CustomTextField
          id="duration"
          name="duration"
          label="Duration (in hours)"
          type="number"
          formik={formik}
        />

        <CustomTextField
          id="trainingProvider"
          name="trainingProvider"
          label="Training Provider"
          formik={formik}
        />

        <CustomTextField
          id="feedback"
          name="feedback"
          label="Feedback"
          multiline
          rows={4}
          formik={formik}
        />

        <CustomTextField
          id="improvementAreas"
          name="improvementAreas"
          label="Areas for Improvement"
          multiline
          rows={4}
          formik={formik}
        />

        <CustomTextField
          id="futureGoals"
          name="futureGoals"
          label="Future Goals"
          multiline
          rows={4}
          formik={formik}
        />

        <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      </form>
    </Suspense>
  );
}

export default React.memo(TrainingAndDevelopment);

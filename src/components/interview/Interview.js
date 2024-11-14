import React, { Suspense, lazy } from "react";
import { useFormik } from "formik";

// Lazy load CustomTextField and CustomButton components
const CustomTextField = lazy(() =>
  import("@components/customComponents/CustomTextField")
);
const CustomButton = lazy(() =>
  import("@components/customComponents/CustomButton")
);

function Interview() {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      jobPosition: "",
      department: "",
      interviewRound: "",
      interviewDate: "",
    },

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Interview Scheduling and Details</h4>

      <Suspense fallback={<div>Loading Candidate Name...</div>}>
        <CustomTextField
          id="candidateName"
          name="candidateName"
          label="Candidate Name"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Candidate Email...</div>}>
        <CustomTextField
          id="candidateEmail"
          name="candidateEmail"
          label="Candidate Email"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Job Position...</div>}>
        <CustomTextField
          id="jobPosition"
          name="jobPosition"
          label="Job Position"
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
            { value: "Risk Management", label: "Risk Management" },
            {
              value: "Compliance and Regulatory Politics",
              label: "Compliance and Regulatory Affairs",
            },
          ]}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Interview Round...</div>}>
        <CustomTextField
          id="interviewRound"
          name="interviewRound"
          label="Interview Round"
          formik={formik}
          select
          options={[
            { value: "First Round", label: "First Round" },
            { value: "Technical Round", label: "Technical Round" },
            { value: "HR Round", label: "HR Round" },
            { value: "Final Round", label: "Final Round" },
          ]}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Interview Date...</div>}>
        <CustomTextField
          id="interviewDate"
          name="interviewDate"
          label="Interview Date"
          type="date"
          formik={formik}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Submit Button...</div>}>
        <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      </Suspense>
    </form>
  );
}

export default React.memo(Interview);

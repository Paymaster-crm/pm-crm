import React, { Suspense } from "react";
import { useFormik } from "formik";

// Lazy loading CustomButton and CustomTextField
const CustomButton = React.lazy(() =>
  import("../../customComponents/CustomButton")
);
const CustomTextField = React.lazy(() =>
  import("../../customComponents/CustomTextField")
);

function RecruitmentProcess() {
  const formik = useFormik({
    initialValues: {
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      positionApplied: "",
      department: "",
      interviewDate: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <form onSubmit={formik.handleSubmit}>
        <h3>Recruitment Process</h3>

        <CustomTextField
          id="candidateName"
          name="candidateName"
          label="Candidate Name"
          formik={formik}
        />

        <CustomTextField
          id="candidateEmail"
          name="candidateEmail"
          label="Candidate Email"
          formik={formik}
        />

        <CustomTextField
          id="candidatePhone"
          name="candidatePhone"
          label="Candidate Phone"
          formik={formik}
        />

        <CustomTextField
          id="positionApplied"
          name="positionApplied"
          label="Position Applied"
          formik={formik}
        />

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
              value: "Compliance and Regulatory Affairs",
              label: "Compliance and Regulatory Affairs",
            },
            { value: "Wealth Management", label: "Wealth Management" },
            { value: "Operations", label: "Operations" },
            { value: "IT Support", label: "IT Support" },
          ]}
        />

        <CustomTextField
          id="interviewDate"
          name="interviewDate"
          label="Interview Date"
          formik={formik}
          type="date"
        />

        <CustomButton name="Submit" isSubmitting={formik.isSubmitting} />
      </form>
    </Suspense>
  );
}

export default React.memo(RecruitmentProcess);

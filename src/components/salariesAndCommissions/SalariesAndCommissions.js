import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";

function SalariesAndCommissions() {
  const formik = useFormik({
    initialValues: {
      employeeName: "",
      employeeID: "",
      department: "",
      basicSalary: "",
      commissionType: "",
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

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="employeeName"
        name="employeeName"
        label="Employee Name"
        value={formik.values.employeeName}
        onChange={formik.handleChange}
        error={
          formik.touched.employeeName && Boolean(formik.errors.employeeName)
        }
        helperText={formik.touched.employeeName && formik.errors.employeeName}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="employeeID"
        name="employeeID"
        label="Employee ID"
        value={formik.values.employeeID}
        onChange={formik.handleChange}
        error={formik.touched.employeeID && Boolean(formik.errors.employeeID)}
        helperText={formik.touched.employeeID && formik.errors.employeeID}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="department"
        name="department"
        label="Department"
        select
        value={formik.values.department}
        onChange={formik.handleChange}
        error={formik.touched.department && Boolean(formik.errors.department)}
        helperText={formik.touched.department && formik.errors.department}
      >
        {[
          "Retail Banking",
          "Corporate Banking",
          "Investment Banking",
          "Risk Management",
          "Compliance and Regulatory Affairs",
          "Wealth Management",
          "Operations",
          "IT Support",
        ].map((dept) => (
          <MenuItem key={dept} value={dept}>
            {dept}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="basicSalary"
        name="basicSalary"
        label="Basic Salary"
        type="number"
        value={formik.values.basicSalary}
        onChange={formik.handleChange}
        error={formik.touched.basicSalary && Boolean(formik.errors.basicSalary)}
        helperText={formik.touched.basicSalary && formik.errors.basicSalary}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="commissionType"
        name="commissionType"
        label="Commission Type"
        select
        value={formik.values.commissionType}
        onChange={formik.handleChange}
        error={
          formik.touched.commissionType && Boolean(formik.errors.commissionType)
        }
        helperText={
          formik.touched.commissionType && formik.errors.commissionType
        }
      >
        {["Fixed", "Percentage"].map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="commissionAmount"
        name="commissionAmount"
        label="Commission Amount"
        type="number"
        value={formik.values.commissionAmount}
        onChange={formik.handleChange}
        error={
          formik.touched.commissionAmount &&
          Boolean(formik.errors.commissionAmount)
        }
        helperText={
          formik.touched.commissionAmount && formik.errors.commissionAmount
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="deductions"
        name="deductions"
        label="Deductions"
        type="number"
        value={formik.values.deductions}
        onChange={formik.handleChange}
        error={formik.touched.deductions && Boolean(formik.errors.deductions)}
        helperText={formik.touched.deductions && formik.errors.deductions}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="totalCompensation"
        name="totalCompensation"
        label="Total Compensation"
        type="number"
        value={formik.values.totalCompensation}
        onChange={formik.handleChange}
        error={
          formik.touched.totalCompensation &&
          Boolean(formik.errors.totalCompensation)
        }
        helperText={
          formik.touched.totalCompensation && formik.errors.totalCompensation
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="comments"
        name="comments"
        label="Additional Comments"
        multiline
        rows={4}
        value={formik.values.comments}
        onChange={formik.handleChange}
        error={formik.touched.comments && Boolean(formik.errors.comments)}
        helperText={formik.touched.comments && formik.errors.comments}
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SalariesAndCommissions;

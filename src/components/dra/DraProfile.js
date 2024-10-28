import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";

function DraProfile() {
  const formik = useFormik({
    initialValues: {
      agentName: "",
      agentID: "",
      debtorName: "",
      debtorID: "",
      loanType: "",
      recoveryStatus: "",
      outstandingAmount: "",
      lastContactDate: "",
      collectionNotes: "",
    },
    // Add a validation schema for DRA if needed
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>DRA Profile Form</h4>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="agentName"
        name="agentName"
        label="Agent Name"
        value={formik.values.agentName}
        onChange={formik.handleChange}
        error={formik.touched.agentName && Boolean(formik.errors.agentName)}
        helperText={formik.touched.agentName && formik.errors.agentName}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="agentID"
        name="agentID"
        label="Agent ID"
        value={formik.values.agentID}
        onChange={formik.handleChange}
        error={formik.touched.agentID && Boolean(formik.errors.agentID)}
        helperText={formik.touched.agentID && formik.errors.agentID}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="debtorName"
        name="debtorName"
        label="Debtor Name"
        value={formik.values.debtorName}
        onChange={formik.handleChange}
        error={formik.touched.debtorName && Boolean(formik.errors.debtorName)}
        helperText={formik.touched.debtorName && formik.errors.debtorName}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="debtorID"
        name="debtorID"
        label="Debtor ID"
        value={formik.values.debtorID}
        onChange={formik.handleChange}
        error={formik.touched.debtorID && Boolean(formik.errors.debtorID)}
        helperText={formik.touched.debtorID && formik.errors.debtorID}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="loanType"
        name="loanType"
        label="Loan Type"
        select
        value={formik.values.loanType}
        onChange={formik.handleChange}
        error={formik.touched.loanType && Boolean(formik.errors.loanType)}
        helperText={formik.touched.loanType && formik.errors.loanType}
      >
        {[
          "Personal Loan",
          "Home Loan",
          "Auto Loan",
          "Business Loan",
          "Education Loan",
          "Credit Card Debt",
          "Other",
        ].map((loan) => (
          <MenuItem key={loan} value={loan}>
            {loan}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="recoveryStatus"
        name="recoveryStatus"
        label="Recovery Status"
        select
        value={formik.values.recoveryStatus}
        onChange={formik.handleChange}
        error={
          formik.touched.recoveryStatus && Boolean(formik.errors.recoveryStatus)
        }
        helperText={
          formik.touched.recoveryStatus && formik.errors.recoveryStatus
        }
      >
        {[
          "Not Contacted",
          "In Progress",
          "Payment Plan Agreed",
          "Partial Payment",
          "Fully Recovered",
          "Unrecoverable",
        ].map((status) => (
          <MenuItem key={status} value={status}>
            {status}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="outstandingAmount"
        name="outstandingAmount"
        label="Outstanding Amount (INR)"
        type="number"
        value={formik.values.outstandingAmount}
        onChange={formik.handleChange}
        error={
          formik.touched.outstandingAmount &&
          Boolean(formik.errors.outstandingAmount)
        }
        helperText={
          formik.touched.outstandingAmount && formik.errors.outstandingAmount
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="lastContactDate"
        name="lastContactDate"
        label="Last Contact Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.lastContactDate}
        onChange={formik.handleChange}
        error={
          formik.touched.lastContactDate &&
          Boolean(formik.errors.lastContactDate)
        }
        helperText={
          formik.touched.lastContactDate && formik.errors.lastContactDate
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="collectionNotes"
        name="collectionNotes"
        label="Collection Notes"
        multiline
        rows={4}
        value={formik.values.collectionNotes}
        onChange={formik.handleChange}
        error={
          formik.touched.collectionNotes &&
          Boolean(formik.errors.collectionNotes)
        }
        helperText={
          formik.touched.collectionNotes && formik.errors.collectionNotes
        }
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default DraProfile;

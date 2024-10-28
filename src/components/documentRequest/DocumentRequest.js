import React from "react";
import { useFormik } from "formik";
import { TextField, MenuItem } from "@mui/material";

function DocumentRequest() {
  const formik = useFormik({
    initialValues: {
      requesterName: "",
      requesterEmail: "",
      department: "",
      documentType: "",
      purpose: "",
      requestDate: "",
      additionalNotes: "",
    },

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4>Document Request Form</h4>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="requesterName"
        name="requesterName"
        label="Requester Name"
        value={formik.values.requesterName}
        onChange={formik.handleChange}
        error={
          formik.touched.requesterName && Boolean(formik.errors.requesterName)
        }
        helperText={formik.touched.requesterName && formik.errors.requesterName}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="requesterEmail"
        name="requesterEmail"
        label="Requester Email"
        type="email"
        value={formik.values.requesterEmail}
        onChange={formik.handleChange}
        error={
          formik.touched.requesterEmail && Boolean(formik.errors.requesterEmail)
        }
        helperText={
          formik.touched.requesterEmail && formik.errors.requesterEmail
        }
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
          "Compliance",
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
        id="documentType"
        name="documentType"
        label="Document Type"
        select
        value={formik.values.documentType}
        onChange={formik.handleChange}
        error={
          formik.touched.documentType && Boolean(formik.errors.documentType)
        }
        helperText={formik.touched.documentType && formik.errors.documentType}
      >
        {[
          "Bank Statement",
          "Account Transaction History",
          "Loan Agreement",
          "Tax Documents",
          "Investment Portfolio",
          "Other",
        ].map((docType) => (
          <MenuItem key={docType} value={docType}>
            {docType}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="purpose"
        name="purpose"
        label="Purpose of Request"
        multiline
        rows={2}
        value={formik.values.purpose}
        onChange={formik.handleChange}
        error={formik.touched.purpose && Boolean(formik.errors.purpose)}
        helperText={formik.touched.purpose && formik.errors.purpose}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="requestDate"
        name="requestDate"
        label="Request Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.requestDate}
        onChange={formik.handleChange}
        error={formik.touched.requestDate && Boolean(formik.errors.requestDate)}
        helperText={formik.touched.requestDate && formik.errors.requestDate}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="additionalNotes"
        name="additionalNotes"
        label="Additional Notes"
        multiline
        rows={4}
        value={formik.values.additionalNotes}
        onChange={formik.handleChange}
        error={
          formik.touched.additionalNotes &&
          Boolean(formik.errors.additionalNotes)
        }
        helperText={
          formik.touched.additionalNotes && formik.errors.additionalNotes
        }
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default DocumentRequest;

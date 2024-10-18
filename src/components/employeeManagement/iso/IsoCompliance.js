import React from "react";
import { useFormik } from "formik";
import { validationSchema } from "../../../schemas/employeeManagement/isoComplianceSchema";
import { TextField, MenuItem } from "@mui/material";

function IsoCompliance() {
  const formik = useFormik({
    initialValues: {
      // ISO Compliance fields
      employeeName: "",
      employeeEmail: "",
      department: "",
      isoStandard: "",
      auditDate: "",
      complianceStatusISO: "",
      correctiveActionsISO: "",
      followUpDateISO: "",
      remarksISO: "",

      // Statutory Compliance fields
      complianceType: "",
      submissionDate: "",
      dueDate: "",
      complianceStatusStatutory: "",
      penaltyImposed: "",
      correctiveActionsStatutory: "",
      followUpDateStatutory: "",
      remarksStatutory: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h4>ISO Compliance</h4>
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
        id="employeeEmail"
        name="employeeEmail"
        label="Employee Email"
        type="email"
        value={formik.values.employeeEmail}
        onChange={formik.handleChange}
        error={
          formik.touched.employeeEmail && Boolean(formik.errors.employeeEmail)
        }
        helperText={formik.touched.employeeEmail && formik.errors.employeeEmail}
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
        id="isoStandard"
        name="isoStandard"
        label="ISO Standard"
        select
        value={formik.values.isoStandard}
        onChange={formik.handleChange}
        error={formik.touched.isoStandard && Boolean(formik.errors.isoStandard)}
        helperText={formik.touched.isoStandard && formik.errors.isoStandard}
      >
        {["ISO 9001", "ISO 14001", "ISO 27001", "ISO 45001"].map((iso) => (
          <MenuItem key={iso} value={iso}>
            {iso}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="auditDate"
        name="auditDate"
        label="Audit Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.auditDate}
        onChange={formik.handleChange}
        error={formik.touched.auditDate && Boolean(formik.errors.auditDate)}
        helperText={formik.touched.auditDate && formik.errors.auditDate}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="complianceStatusISO"
        name="complianceStatusISO"
        label="Compliance Status"
        select
        value={formik.values.complianceStatusISO}
        onChange={formik.handleChange}
        error={
          formik.touched.complianceStatusISO &&
          Boolean(formik.errors.complianceStatusISO)
        }
        helperText={
          formik.touched.complianceStatusISO &&
          formik.errors.complianceStatusISO
        }
      >
        {["Compliant", "Non-Compliant", "Pending"].map((status) => (
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
        id="correctiveActionsISO"
        name="correctiveActionsISO"
        label="Corrective Actions"
        multiline
        rows={4}
        value={formik.values.correctiveActionsISO}
        onChange={formik.handleChange}
        error={
          formik.touched.correctiveActionsISO &&
          Boolean(formik.errors.correctiveActionsISO)
        }
        helperText={
          formik.touched.correctiveActionsISO &&
          formik.errors.correctiveActionsISO
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="followUpDateISO"
        name="followUpDateISO"
        label="Follow-up Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.followUpDateISO}
        onChange={formik.handleChange}
        error={
          formik.touched.followUpDateISO &&
          Boolean(formik.errors.followUpDateISO)
        }
        helperText={
          formik.touched.followUpDateISO && formik.errors.followUpDateISO
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="remarksISO"
        name="remarksISO"
        label="Remarks"
        multiline
        rows={4}
        value={formik.values.remarksISO}
        onChange={formik.handleChange}
        error={formik.touched.remarksISO && Boolean(formik.errors.remarksISO)}
        helperText={formik.touched.remarksISO && formik.errors.remarksISO}
      />

      <br />
      <br />
      <h4>Statutory Compliance</h4>
      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="complianceType"
        name="complianceType"
        label="Compliance Type"
        select
        value={formik.values.complianceType}
        onChange={formik.handleChange}
        error={
          formik.touched.complianceType && Boolean(formik.errors.complianceType)
        }
        helperText={
          formik.touched.complianceType && formik.errors.complianceType
        }
      >
        {[
          "Tax Filing",
          "Labor Laws",
          "Health & Safety Regulations",
          "Environmental Compliance",
        ].map((type) => (
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
        id="submissionDate"
        name="submissionDate"
        label="Submission Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.submissionDate}
        onChange={formik.handleChange}
        error={
          formik.touched.submissionDate && Boolean(formik.errors.submissionDate)
        }
        helperText={
          formik.touched.submissionDate && formik.errors.submissionDate
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="dueDate"
        name="dueDate"
        label="Due Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.dueDate}
        onChange={formik.handleChange}
        error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
        helperText={formik.touched.dueDate && formik.errors.dueDate}
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="complianceStatusStatutory"
        name="complianceStatusStatutory"
        label="Compliance Status"
        select
        value={formik.values.complianceStatusStatutory}
        onChange={formik.handleChange}
        error={
          formik.touched.complianceStatusStatutory &&
          Boolean(formik.errors.complianceStatusStatutory)
        }
        helperText={
          formik.touched.complianceStatusStatutory &&
          formik.errors.complianceStatusStatutory
        }
      >
        {["Compliant", "Non-Compliant", "Pending"].map((status) => (
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
        id="penaltyImposed"
        name="penaltyImposed"
        label="Penalty Imposed (if any)"
        value={formik.values.penaltyImposed}
        onChange={formik.handleChange}
        error={
          formik.touched.penaltyImposed && Boolean(formik.errors.penaltyImposed)
        }
        helperText={
          formik.touched.penaltyImposed && formik.errors.penaltyImposed
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="correctiveActionsStatutory"
        name="correctiveActionsStatutory"
        label="Corrective Actions"
        multiline
        rows={4}
        value={formik.values.correctiveActionsStatutory}
        onChange={formik.handleChange}
        error={
          formik.touched.correctiveActionsStatutory &&
          Boolean(formik.errors.correctiveActionsStatutory)
        }
        helperText={
          formik.touched.correctiveActionsStatutory &&
          formik.errors.correctiveActionsStatutory
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="followUpDateStatutory"
        name="followUpDateStatutory"
        label="Follow-up Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formik.values.followUpDateStatutory}
        onChange={formik.handleChange}
        error={
          formik.touched.followUpDateStatutory &&
          Boolean(formik.errors.followUpDateStatutory)
        }
        helperText={
          formik.touched.followUpDateStatutory &&
          formik.errors.followUpDateStatutory
        }
      />

      <TextField
        size="small"
        fullWidth
        margin="dense"
        variant="filled"
        id="remarksStatutory"
        name="remarksStatutory"
        label="Remarks"
        multiline
        rows={4}
        value={formik.values.remarksStatutory}
        onChange={formik.handleChange}
        error={
          formik.touched.remarksStatutory &&
          Boolean(formik.errors.remarksStatutory)
        }
        helperText={
          formik.touched.remarksStatutory && formik.errors.remarksStatutory
        }
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default IsoCompliance;

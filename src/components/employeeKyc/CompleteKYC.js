import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { MenuItem, TextField } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { states } from "../../assets/data/statesData";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AWS from "aws-sdk";
import Snackbar from "@mui/material/Snackbar";
import { validationSchema } from "../../schemas/employeeKyc/completeKyc";
import { useParams } from "react-router-dom";

function CompleteKYC(props) {
  const [fileSnackbar, setFileSnackbar] = useState(false);
  const { username } = useParams();
  const formik = useFormik({
    initialValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      designation: "",
      department: "",
      joining_date: "",
      dob: "",
      permanent_address_line_1: "",
      permanent_address_line_2: "",
      permanent_address_city: "",
      permanent_address_state: "",
      permanent_address_pincode: "",
      communication_address_line_1: "",
      communication_address_line_2: "",
      communication_address_city: "",
      communication_address_state: "",
      communication_address_pincode: "",
      official_email: "",
      mobile: "",
      blood_group: "",
      highest_qualification: "",
      aadhar_no: "",
      aadhar_photo_front: "",
      aadhar_photo_back: "",
      pan_no: "",
      pan_photo: "",
      pf_no: "",
      esic_no: "",
      insurance_status: [],
      bank_account_no: "",
      bank_name: "",
      ifsc_code: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/complete-kyc`,
        { ...values, username: props.username },
        {
          withCredentials: true,
        }
      );

      alert(res.data.message);
      // resetForm();
    },
  });

  useEffect(() => {
    async function getData() {
      if (username) {
        const res = await axios.get(
          `${process.env.REACT_APP_API_STRING}/get-user-data/${username}`,
          {
            withCredentials: true,
          }
        );
        formik.setValues(res.data);
      }
    }

    getData();
    // eslint-disable-next-line
  }, [username]);

  const handleSameAsPermanentAddress = (event) => {
    if (event.target.checked) {
      formik.setValues({
        ...formik.values,
        communication_address_line_1: formik.values.permanent_address_line_1,
        communication_address_line_2: formik.values.permanent_address_line_2,
        communication_address_city: formik.values.permanent_address_city,
        communication_address_area: formik.values.permanent_address_area,
        communication_address_state: formik.values.permanent_address_state,
        communication_address_pincode: formik.values.permanent_address_pincode,
      });
    } else {
      // If unchecked, you can clear the communication address fields or handle as needed
      formik.setValues({
        ...formik.values,
        communication_address_line_1: "",
        communication_address_line_2: "",
        communication_address_city: "",
        communication_address_area: "",
        communication_address_state: "",
        communication_address_pincode: "",
      });
    }
  };

  const handlePincodeChange = (event, field) => {
    const { value } = event.target;
    // Remove non-digit characters and limit length to 6
    const newValue = value.replace(/\D/g, "").slice(0, 6);
    // Update the formik values with the sanitized input
    formik.setFieldValue(field, newValue);
  };

  const handleAadharNoChange = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/\D/g, "").slice(0, 12);
    formik.setFieldValue("aadhar_no", newValue);
  };

  const handleFileUpload = async (e, formikField) => {
    if (e.target.files?.length === 0) {
      alert("No file selected");
      return;
    }

    try {
      const file = e.target.files[0];
      const key = `kyc/${file.name}`;

      const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
        region: "ap-south-1",
      });

      const params = {
        Bucket: "paymaster-document",
        Key: key,
        Body: file,
      };

      const data = await s3.upload(params).promise();
      const photoUrl = data.Location;

      formik.setValues((values) => ({
        ...values,
        [formikField]: photoUrl,
      }));

      setFileSnackbar(true);

      setTimeout(() => {
        setFileSnackbar(false);
      }, 3000);
    } catch (err) {
      console.error("Error uploading file:", err);
    }
  };

  const handleInsuranceDetailsChange = (event) => {
    const member = event.target.name;
    const isChecked = event.target.checked;

    // Retrieve the current array of family members
    const currentMembers = formik.values.insurance_status;

    // Update the array based on the checkbox state
    let updatedMembers = [];
    if (isChecked) {
      updatedMembers = [...currentMembers, member];
    } else {
      updatedMembers = currentMembers.filter((m) => m !== member);
    }

    // Update formik values with the updated array of family members
    formik.setFieldValue("insurance_status", updatedMembers);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="designation"
            name="designation"
            label="Designation"
            value={formik.values.designation}
            onChange={formik.handleChange}
            error={
              formik.touched.designation && Boolean(formik.errors.designation)
            }
            helperText={formik.touched.designation && formik.errors.designation}
            className="login-input"
          />
        </Col>

        <Col xs={4}>
          <TextField
            select
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="department"
            name="department"
            label="Department"
            value={formik.values.department}
            onChange={formik.handleChange}
            error={
              formik.touched.department && Boolean(formik.errors.department)
            }
            helperText={formik.touched.department && formik.errors.department}
            className="login-input"
          >
            <MenuItem value="Import">Import</MenuItem>
            <MenuItem value="Export">Export</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Accounts">Accounts</MenuItem>
            <MenuItem value="Field">Field</MenuItem>
            <MenuItem value="DGFT">DGFT</MenuItem>
            <MenuItem value="Office Assistant">Office Assistant</MenuItem>
            <MenuItem value="Software Development">
              Software Development
            </MenuItem>
            <MenuItem value="Designing">Designing</MenuItem>
            <MenuItem value="Sales & Marketing">Sales & Marketing</MenuItem>
            <MenuItem value="HR Admin">HR Admin</MenuItem>
          </TextField>
        </Col>
        <Col xs={4}>
          <TextField
            type="date"
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="joining_date"
            name="joining_date"
            label="Joining Date"
            value={formik.values.joining_date}
            onChange={formik.handleChange}
            error={
              formik.touched.joining_date && Boolean(formik.errors.joining_date)
            }
            helperText={
              formik.touched.joining_date && formik.errors.joining_date
            }
            className="login-input"
            InputLabelProps={{ shrink: true }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TextField
            type="date"
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="dob"
            name="dob"
            label="Date of birth"
            value={formik.values.dob}
            onChange={formik.handleChange}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
            className="login-input"
            InputLabelProps={{ shrink: true }}
          />
        </Col>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="login-input"
            InputLabelProps={{ shrink: true }}
          />
        </Col>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="official_email"
            name="official_email"
            label="Official Email"
            value={formik.values.official_email}
            onChange={formik.handleChange}
            error={
              formik.touched.official_email &&
              Boolean(formik.errors.official_email)
            }
            helperText={
              formik.touched.official_email && formik.errors.official_email
            }
            className="login-input"
            InputLabelProps={{ shrink: true }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="mobile"
            name="mobile"
            label="Mobile"
            value={formik.values.mobile}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
            className="login-input"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              const re = /^[0-9\b]+$/;
              if (e.target.value === "" || re.test(e.target.value)) {
                formik.handleChange(e);
              }
            }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              maxLength: 10,
            }}
          />
        </Col>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="blood_group"
            name="blood_group"
            label="Blood Group"
            value={formik.values.blood_group}
            onChange={formik.handleChange}
            error={
              formik.touched.blood_group && Boolean(formik.errors.blood_group)
            }
            helperText={formik.touched.blood_group && formik.errors.blood_group}
            className="login-input"
          />
        </Col>
        <Col xs={4}>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="highest_qualification"
            name="highest_qualification"
            label="Highest Qualification"
            value={formik.values.highest_qualification}
            onChange={formik.handleChange}
            error={
              formik.touched.highest_qualification &&
              Boolean(formik.errors.highest_qualification)
            }
            helperText={
              formik.touched.highest_qualification &&
              formik.errors.highest_qualification
            }
            className="login-input"
          />
        </Col>
      </Row>
      <br />
      <h5>Permanent Address</h5>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="permanent_address_line_1"
        name="permanent_address_line_1"
        label="Address Line 1"
        value={formik.values.permanent_address_line_1}
        onChange={formik.handleChange}
        error={
          formik.touched.permanent_address_line_1 &&
          Boolean(formik.errors.permanent_address_line_1)
        }
        helperText={
          formik.touched.permanent_address_line_1 &&
          formik.errors.permanent_address_line_1
        }
        className="login-input"
      />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="permanent_address_line_2"
        name="permanent_address_line_2"
        label="Address Line 2"
        value={formik.values.permanent_address_line_2}
        onChange={formik.handleChange}
        error={
          formik.touched.permanent_address_line_2 &&
          Boolean(formik.errors.permanent_address_line_2)
        }
        helperText={
          formik.touched.permanent_address_line_2 &&
          formik.errors.permanent_address_line_2
        }
        className="login-input"
      />
      <Row>
        <Col>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="permanent_address_city"
            name="permanent_address_city"
            label="City"
            value={formik.values.permanent_address_city}
            onChange={formik.handleChange}
            error={
              formik.touched.permanent_address_city &&
              Boolean(formik.errors.permanent_address_city)
            }
            helperText={
              formik.touched.permanent_address_city &&
              formik.errors.permanent_address_city
            }
            className="login-input"
          />
        </Col>

        <Col>
          <TextField
            select
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="permanent_address_state"
            name="permanent_address_state"
            label="State"
            value={formik.values.permanent_address_state}
            onChange={formik.handleChange}
            error={
              formik.touched.permanent_address_state &&
              Boolean(formik.errors.permanent_address_state)
            }
            helperText={
              formik.touched.permanent_address_state &&
              formik.errors.permanent_address_state
            }
            className="login-input"
          >
            {states?.map((state) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Col>
        <Col>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="permanent_address_pincode"
            name="permanent_address_pincode"
            label="PIN Code"
            value={formik.values.permanent_address_pincode}
            onChange={(event) =>
              handlePincodeChange(event, "permanent_address_pincode")
            }
            error={
              formik.touched.permanent_address_pincode &&
              Boolean(formik.errors.permanent_address_pincode)
            }
            helperText={
              formik.touched.permanent_address_pincode &&
              formik.errors.permanent_address_pincode
            }
            className="login-input"
          />
        </Col>
      </Row>
      <br />
      <br />
      <h5>Communication Address</h5>
      <FormControlLabel
        control={
          <Checkbox
            name="sameAsPermanentAddress"
            onChange={handleSameAsPermanentAddress}
          />
        }
        label="Same as Permanent Address"
      />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="communication_address_line_1"
        name="communication_address_line_1"
        label="Address Line 1"
        value={formik.values.communication_address_line_1}
        onChange={formik.handleChange}
        error={
          formik.touched.communication_address_line_1 &&
          Boolean(formik.errors.communication_address_line_1)
        }
        helperText={
          formik.touched.communication_address_line_1 &&
          formik.errors.communication_address_line_1
        }
        className="login-input"
      />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="communication_address_line_2"
        name="communication_address_line_2"
        label="Address Line 2"
        value={formik.values.communication_address_line_2}
        onChange={formik.handleChange}
        error={
          formik.touched.communication_address_line_2 &&
          Boolean(formik.errors.communication_address_line_2)
        }
        helperText={
          formik.touched.communication_address_line_2 &&
          formik.errors.communication_address_line_2
        }
        className="login-input"
      />
      <Row>
        <Col>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="communication_address_city"
            name="communication_address_city"
            label="City"
            value={formik.values.communication_address_city}
            onChange={formik.handleChange}
            error={
              formik.touched.communication_address_city &&
              Boolean(formik.errors.communication_address_city)
            }
            helperText={
              formik.touched.communication_address_city &&
              formik.errors.communication_address_city
            }
            className="login-input"
          />
        </Col>

        <Col>
          <TextField
            select
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="communication_address_state"
            name="communication_address_state"
            label="State"
            value={formik.values.communication_address_state}
            onChange={formik.handleChange}
            error={
              formik.touched.communication_address_state &&
              Boolean(formik.errors.communication_address_state)
            }
            helperText={
              formik.touched.communication_address_state &&
              formik.errors.communication_address_state
            }
            className="login-input"
          >
            {states?.map((state) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Col>
        <Col>
          <TextField
            size="small"
            margin="dense"
            variant="filled"
            fullWidth
            id="communication_address_pincode"
            name="communication_address_pincode"
            label="PIN Code"
            value={formik.values.communication_address_pincode}
            onChange={(event) =>
              handlePincodeChange(event, "communication_address_pincode")
            }
            error={
              formik.touched.communication_address_pincode &&
              Boolean(formik.errors.communication_address_pincode)
            }
            helperText={
              formik.touched.communication_address_pincode &&
              formik.errors.communication_address_pincode
            }
            className="login-input"
          />
        </Col>
      </Row>
      <br />
      <h5>Documents</h5>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="aadhar_no"
        name="aadhar_no"
        label="Aadhar Number"
        value={formik.values.aadhar_no}
        onChange={handleAadharNoChange}
        inputProps={{
          inputMode: "numeric", // Set input mode to numeric for better mobile support
          pattern: "[0-9]*", // Pattern to allow only numeric input
          maxLength: 12, // Limit the input to 12 characters
        }}
        error={formik.touched.aadhar_no && Boolean(formik.errors.aadhar_no)}
        helperText={formik.touched.aadhar_no && formik.errors.aadhar_no}
        className="login-input"
      />
      <br />
      <br />
      <Row>
        <Col xs={6}>
          <label htmlFor="aadharPhotoFront">
            <b>Aadhar Photo Front:&nbsp;</b>
          </label>

          <input
            type="file"
            id="aadharPhotoFront"
            name="aadharPhotoFront"
            accept="image/*"
            capture="environment"
            onChange={(e) => handleFileUpload(e, "aadhar_photo_front")}
          />
          <br />
          <br />
          {formik.values.aadhar_photo_front !== "" ? (
            <>
              <a href={formik.values.aadhar_photo_front}>
                {formik.values.aadhar_photo_front}
              </a>
              <br />
            </>
          ) : (
            ""
          )}
          {formik.touched.aadhar_photo_front &&
          formik.errors.aadhar_photo_front ? (
            <div style={{ color: "red" }}>
              {formik.errors.aadhar_photo_front}
            </div>
          ) : null}
        </Col>
        <Col xs={6}>
          <label htmlFor="aadharPhotoBack">
            <b>Aadhar Photo Back:&nbsp;</b>
          </label>
          <input
            type="file"
            id="aadharPhotoBack"
            name="aadharPhotoBack"
            accept="image/*"
            capture="environment"
            onChange={(e) => handleFileUpload(e, "aadhar_photo_back")}
          />
          <br />
          <br />
          {formik.values.aadhar_photo_back !== "" ? (
            <>
              <a href={formik.values.aadhar_photo_back}>
                {formik.values.aadhar_photo_back}
              </a>
              <br />
            </>
          ) : (
            ""
          )}
          {formik.touched.aadhar_photo_back &&
          formik.errors.aadhar_photo_back ? (
            <div style={{ color: "red" }}>
              {formik.errors.aadhar_photo_back}
            </div>
          ) : null}
        </Col>
      </Row>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="pan_no"
        name="pan_no"
        label="PAN Number"
        value={formik.values.pan_no}
        onChange={(e) => {
          if (e.target.value?.length <= 10) {
            formik.handleChange(e);
          }
        }}
        inputProps={{
          maxLength: 10,
          pattern: "[A-Za-z0-9]*",
        }}
        error={formik.touched.pan_no && Boolean(formik.errors.pan_no)}
        helperText={formik.touched.pan_no && formik.errors.pan_no}
        className="login-input"
      />
      <br />
      <br />
      <label htmlFor="panPhoto">
        <b>PAN Photo:&nbsp;</b>
      </label>
      <input
        type="file"
        id="panPhoto"
        name="panPhoto"
        accept="image/*"
        capture="environment"
        onChange={(e) => handleFileUpload(e, "pan_photo")}
      />
      <br />
      <br />
      {formik.values.pan_photo !== "" ? (
        <>
          <a href={formik.values.pan_photo}>{formik.values.pan_photo}</a>
          <br />
        </>
      ) : (
        ""
      )}
      {formik.touched.pan_photo && formik.errors.pan_photo ? (
        <div style={{ color: "red" }}>{formik.errors.pan_photo}</div>
      ) : null}
      <br />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="pf_no"
        name="pf_no"
        label="PF Number"
        value={formik.values.pf_no}
        onChange={formik.handleChange}
        error={formik.touched.pf_no && Boolean(formik.errors.pf_no)}
        helperText={formik.touched.pf_no && formik.errors.pf_no}
        className="login-input"
      />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="esic_no"
        name="esic_no"
        label="ESIC Number"
        value={formik.values.esic_no}
        onChange={formik.handleChange}
        error={formik.touched.esic_no && Boolean(formik.errors.esic_no)}
        helperText={formik.touched.esic_no && formik.errors.esic_no}
        className="login-input"
      />
      <br />
      <br />
      <h5>Insurance Details</h5>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              name="Mediclaim"
              onChange={handleInsuranceDetailsChange}
            />
          }
          label="Mediclaim"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="Personal Accident"
              onChange={handleInsuranceDetailsChange}
            />
          }
          label="Personal Accident"
        />

        <FormControlLabel
          control={
            <Checkbox
              name="Not Available"
              onChange={handleInsuranceDetailsChange}
            />
          }
          label="Not Available"
        />
      </FormGroup>
      {formik.touched.insurance_status && formik.errors.insurance_status ? (
        <div style={{ color: "red" }}>{formik.errors.insurance_status}</div>
      ) : null}
      <br />
      <br />
      <h5>Bank Details</h5>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="bank_account_no"
        name="bank_account_no"
        label="Bank Account Number"
        value={formik.values.bank_account_no}
        onChange={formik.handleChange}
        error={
          formik.touched.bank_account_no &&
          Boolean(formik.errors.bank_account_no)
        }
        helperText={
          formik.touched.bank_account_no && formik.errors.bank_account_no
        }
        className="login-input"
      />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="bank_name"
        name="bank_name"
        label="Bank Name"
        value={formik.values.bank_name}
        onChange={formik.handleChange}
        error={formik.touched.bank_name && Boolean(formik.errors.bank_name)}
        helperText={formik.touched.bank_name && formik.errors.bank_name}
        className="login-input"
      />
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="ifsc_code"
        name="ifsc_code"
        label="IFSC"
        value={formik.values.ifsc_code}
        onChange={formik.handleChange}
        error={formik.touched.ifsc_code && Boolean(formik.errors.ifsc_code)}
        helperText={formik.touched.ifsc_code && formik.errors.ifsc_code}
        className="login-input"
      />
      <button className="btn" type="submit">
        Submit
      </button>
      <Snackbar
        open={fileSnackbar}
        message="File uploaded successfully!"
        sx={{ left: "auto !important", right: "24px !important" }}
      />
    </form>
  );
}

export default React.memo(CompleteKYC);

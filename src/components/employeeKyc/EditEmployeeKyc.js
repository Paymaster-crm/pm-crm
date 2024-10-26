import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { MenuItem, TextField } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { states } from "../../assets/data/statesData";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import AWS from "aws-sdk";
import Snackbar from "@mui/material/Snackbar";
import { validationSchema } from "../../schemas/employeeKyc/completeKyc";
import { useParams } from "react-router-dom";
import CompleteKYC from "./CompleteKYC";

function EditEmployeeKyc() {
  // const { username } = useParams();
  // const [data, setData] = useState();

  // useEffect(() => {
  //   async function getUser() {
  //     const res = await axios(
  //       `${process.env.REACT_APP_API_STRING}/get-user-data/${username}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     setData(res.data);
  //   }

  //   getUser();
  // }, [username]);

  // const [numChildren, setNumChildren] = useState("");
  // const { user } = useContext(UserContext);
  // const [fileSnackbar, setFileSnackbar] = useState(false);
  // const formik = useFormik({
  //   initialValues: {
  //     first_name: "",
  //     middle_name: "",
  //     last_name: "",
  //     email: "",
  //     designation: "",
  //     department: "",
  //     joining_date: "",
  //     dob: "",
  //     permanent_address_line_1: "",
  //     permanent_address_line_2: "",
  //     permanent_address_city: "",
  //     permanent_address_area: "",
  //     permanent_address_state: "",
  //     permanent_address_pincode: "",
  //     communication_address_line_1: "",
  //     communication_address_line_2: "",
  //     communication_address_city: "",
  //     communication_address_area: "",
  //     communication_address_state: "",
  //     communication_address_pincode: "",
  //     personal_email: "",
  //     official_email: "",
  //     mobile: "",
  //     emergency_contact: "",
  //     emergency_contact_name: "",
  //     family_members: [],
  //     close_friend_contact_no: "",
  //     close_friend_contact_name: "",
  //     blood_group: "",
  //     highest_qualification: "",
  //     aadhar_no: "",
  //     aadhar_photo_front: "",
  //     aadhar_photo_back: "",
  //     pan_no: "",
  //     pan_photo: "",
  //     pf_no: "",
  //     esic_no: "",
  //     insurance_status: [],
  //     license_front: "",
  //     license_back: "",
  //     bank_account_no: "",
  //     bank_name: "",
  //     ifsc_code: "",
  //     favorite_song: "",
  //     marital_status: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: async (values, { resetForm }) => {
  //     const res = await axios.post(
  //       `${process.env.REACT_APP_API_STRING}/complete-kyc`,
  //       { ...values, username: user.username },
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     alert(res.data.message);
  //     resetForm();
  //   },
  // });

  // useEffect(() => {
  //   formik.setValues(data);
  //   // eslint-disable-next-line
  // }, [data]);

  return <CompleteKYC />;
}

export default React.memo(EditEmployeeKyc);

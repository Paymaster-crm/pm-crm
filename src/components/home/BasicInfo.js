import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Container, Row, Col } from "react-bootstrap";

function BasicInfo() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h5>Profile Info</h5>
            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <Avatar
                src={user.employee_photo}
                style={{ width: 80, height: 80 }}
              />
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemText primary="Username" />
                  <ListItemText secondary={user.username} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="First Name" />
                  <ListItemText
                    secondary={[
                      user.first_name,
                      user.middle_name,
                      user.last_name,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Birth Date" />
                  <ListItemText secondary={user.dob} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Blood Group" />
                  <ListItemText secondary={user.blood_group} />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>

        <Col>
          <div>
            <h5>Contact Info</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Email" />
                  <ListItemText secondary={user.email} />
                </ListItem>

                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Official Email" />
                  <ListItemText secondary={user.official_email} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Mobile" />
                  <ListItemText secondary={user.mobile} />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>
      </Row>

      <Divider variant="fullWidth" sx={{ opacity: 1 }} />
      <br />
      <Row>
        <Col>
          <div>
            <h5>Address Info</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Communication Address" />
                  <ListItemText
                    secondary={[
                      user.communication_address_line_1,
                      user.communication_address_line_2,
                      user.communication_address_city,
                      user.communication_address_area,
                      user.communication_address_state,
                      user.communication_address_pincode,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Permanent Address" />
                  <ListItemText
                    secondary={[
                      user.permanent_address_line_1,
                      user.permanent_address_line_2,
                      user.permanent_address_city,
                      user.permanent_address_area,
                      user.permanent_address_state,
                      user.permanent_address_pincode,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>

        <Col>
          <div>
            <h5>Bank Info</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Bank Account Number" />
                  <ListItemText secondary={user.bank_account_no} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Bank Name" />
                  <ListItemText secondary={user.bank_name} />
                </ListItem>
                <ListItem alignItems="flex-start">
                  <ListItemText primary="IFSC" />
                  <ListItemText secondary={user.ifsc_code} />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>
      </Row>

      <Divider variant="fullWidth" sx={{ opacity: 1 }} />
      <br />

      <Row>
        <Col>
          <div>
            <h5>Employment Info</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Designation" />
                  <ListItemText secondary={user.designation} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Department" />
                  <ListItemText secondary={user.department} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Joining Date" />
                  <ListItemText secondary={user.joining_date} />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <h5>Documents</h5>
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText primary="AADHAR Number" />
                  <a href={user.aadhar_photo_front}>
                    <ListItemText
                      sx={{ color: "blue !important" }}
                      secondary={user.aadhar_no}
                    />
                  </a>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="PAN Number" />
                  <a href={user.pan_photo}>
                    <ListItemText secondary={user.pan_no} />
                  </a>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Driving License" />
                  <a href={user.license_front}>
                    <ListItemText secondary="View" />
                  </a>
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="PF Number" />
                  <ListItemText secondary={user.pf_no} />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="ESIC Number" />
                  <ListItemText secondary={user.esic_no} />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicInfo;

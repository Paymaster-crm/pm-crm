import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Row, Col } from "react-bootstrap";
import MailIcon from "@mui/icons-material/Mail";
import "../../styles/backup-codes.scss";
import axios from "axios";

function BackupCodes() {
  const { user, setUser } = useContext(UserContext);

  // Helper to split the backup codes into pairs
  const splitCodesIntoPairs = (codes) => {
    const pairs = [];
    for (let i = 0; i < codes?.length; i += 2) {
      pairs.push(codes.slice(i, i + 2));
    }
    return pairs;
  };

  const codePairs = splitCodesIntoPairs(user.backupCodes);

  const requestNewCodes = async () => {
    try {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/request-new-backup-codes`,
        { withCredentials: true }
      );

      setUser({ ...user, backupCodes: res.data.backupCodes });
    } catch (error) {
      console.error("Error occurred while requesting new backup codes:", error);
    }
  };

  const deleteCodes = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_STRING}/delete-backup-codes`,
        { withCredentials: true }
      );

      if (res.data.message === "Backup codes deleted") {
        setUser({ ...user, backupCodes: [] });
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("An error occurred while deleting backup codes.");
      console.error("Error deleting backup codes:", error);
    }
  };

  const sendEmail = async () => {
    try {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/send-backup-codes-email`,
        { withCredentials: true }
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div
      className="backup-codes"
      style={{ backgroundColor: "white", padding: "20px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <h5>Your Backup Codes</h5>
          <p>{user.backupCodes?.length} backup codes remaining</p>
        </div>
        <div>
          <Tooltip title="Request new backup codes">
            <IconButton onClick={requestNewCodes}>
              <ReplayRoundedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete backup codes">
            <IconButton onClick={deleteCodes}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email backup codes">
            <IconButton onClick={sendEmail}>
              <MailIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Divider variant="fullWidth" sx={{ opacity: 1, margin: "20px 0" }} />

      {codePairs.map((pair, index) => (
        <Row key={index} className="backup-codes-row">
          <Col xs={6}>
            <p>{pair[0]}</p>
          </Col>
          <Col xs={6}>{pair[1] && <p>{pair[1]}</p>}</Col>
        </Row>
      ))}
    </div>
  );
}

export default React.memo(BackupCodes);

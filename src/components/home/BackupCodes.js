import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Row, Col } from "react-bootstrap";
import DownloadIcon from "@mui/icons-material/Download";
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
    const res = await axios(
      `${process.env.REACT_APP_API_STRING}/request-new-backup-codes`,
      { withCredentials: true }
    );

    alert(res.data.message);
    setUser({ ...user, backupCodes: res.data.backupCodes });
  };

  const deleteCodes = async () => {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_STRING}/delete-backup-codes`,
      { withCredentials: true }
    );

    alert(res.data.message);
  };

  const downloadCSV = () => {
    // Create CSV formatted string
    const header = "Backup Codes\n";
    const csvContent = user.backupCodes.map((code) => `${code}`).join("\n");
    const csv = header + csvContent;

    // Create a Blob from the CSV string
    const blob = new Blob([csv], { type: "text/csv" });

    // Create a link to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Paymaster Backup Codes.csv";

    // Trigger the download
    link.click();
  };

  return (
    <div className="backup-codes">
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
          <Tooltip title="Download backup codes as CSV">
            <IconButton onClick={downloadCSV}>
              <DownloadIcon />
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

export default BackupCodes;

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Row, Col } from "react-bootstrap";
import Switch from "@mui/material/Switch";
import { initiateWebauthnRegistration } from "../../utils/webAuthn/initiateWebauthnRegistration";
import { disableWebAuthn } from "../../utils/webAuthn/disableWebAuthn";
import { enableTwoFactor } from "../../utils/enableTwoFactor";
import { disableTwoFactor } from "../../utils/disableTwoFactor";
import Divider from "@mui/material/Divider";

function TwoFactorAuthentication() {
  const { user, setUser } = useContext(UserContext);
  const [isWebAuthnEnabled, setIsWebAuthnEnabled] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [qr, setQr] = useState(null);

  useEffect(() => {
    if (user) {
      setIsWebAuthnEnabled(user.isWebAuthnEnabled || false);
      setIsTwoFactorEnabled(user.isTwoFactorEnabled || false);
      setQr(user.qrCodeImage || null);
    }
  }, [user]);

  const username = user.username;

  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      initiateWebauthnRegistration(user, setIsWebAuthnEnabled, setUser);
    } else {
      disableWebAuthn(username, setIsWebAuthnEnabled);
    }
  };

  const handleTwoFASwitchChange = (e) => {
    if (e.target.checked) {
      enableTwoFactor(user, setIsTwoFactorEnabled, setQr, setUser);
    } else {
      disableTwoFactor(username, setIsTwoFactorEnabled);
    }
  };

  return (
    <Row>
      <Col>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemText primary="WebAuthn Registration (for password-less login)" />
                <ListItemText
                  secondary={
                    <Switch
                      checked={isWebAuthnEnabled}
                      onChange={handleSwitchChange}
                    />
                  }
                />
              </ListItem>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText primary="Google Authenticator (2FA)" />
                <ListItemText
                  secondary={
                    <Switch
                      checked={isTwoFactorEnabled}
                      onChange={handleTwoFASwitchChange}
                    />
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemText primary="Scan the QR code below to enable 2FA using Google Authenticator App" />
                <ListItemText />
              </ListItem>
              <span></span>
              <br />
              {isTwoFactorEnabled && <img src={qr} alt="QR code" />}
            </List>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default TwoFactorAuthentication;

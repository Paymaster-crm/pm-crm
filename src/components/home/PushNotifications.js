import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { getToken } from "firebase/messaging";
import { messaging } from "../../firebase";
import { UserContext } from "../../contexts/UserContext";

function PushNotifications() {
  const { user } = useContext(UserContext);
  // Generate FCM token function
  const generateToken = async () => {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      try {
        const token = await getToken(messaging, {
          vapidKey: process.env.REACT_APP_VAPID_KEY,
        });

        await saveToken(token);
      } catch (error) {
        console.error("Error generating token:", error);
      }
    }
  };

  // Save FCM token function
  const saveToken = async (token) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/save-fcm-token`,
        { fcmToken: token, username: user.username },
        { withCredentials: true }
      );

      alert(res.data.message);
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const disablePushNotifications = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/disable-push-notifications`,
        { username: user.username },
        { withCredentials: true }
      );

      alert(res.data.message);
    } catch (error) {
      console.error("Error disabling push notifications:", error);
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
                <ListItemText primary="Push Notifications" />
                <ListItemText
                  secondary={
                    <>
                      <button
                        style={{ marginTop: 0 }}
                        className="btn"
                        onClick={generateToken}
                      >
                        Enable on this device
                      </button>
                      <button
                        style={{ marginTop: 0, marginLeft: "10px" }}
                        className="btn"
                        onClick={disablePushNotifications}
                      >
                        Disable
                      </button>
                    </>
                  }
                />
              </ListItem>
            </List>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default PushNotifications;

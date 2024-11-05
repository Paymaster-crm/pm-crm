import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { Container, Row, Col } from "react-bootstrap";

function Help() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Check the user's platform
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            <br />
            <h5>Keyboard Shortcuts</h5>
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Toggle Fullscreen" />
                  <ListItemText
                    secondary={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        {isMac ? (
                          <div className="key">Cmd</div>
                        ) : (
                          <div className="key">Ctrl</div>
                        )}
                        <div className="key">Shift</div>
                        <div className="key">F</div>
                      </div>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Route Query" />
                  <ListItemText
                    secondary={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <div className="key">Shift</div>
                        <div className="key">Space</div>
                      </div>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Navigate Between Pages" />
                  <ListItemText
                    secondary={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        {isMac ? (
                          <div className="key">Cmd</div>
                        ) : (
                          <div className="key">Ctrl</div>
                        )}
                        <div className="key">Shift</div>
                        <div className="key">&larr; &rarr;</div>
                      </div>
                    }
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Help;

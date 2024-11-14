import React, { Suspense, lazy } from "react";
import "@styles/dashboard.scss";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "@contexts/UserContext";

// Lazy load components
const Info = lazy(() => import("./Info"));
const Attendance = lazy(() => import("./Attendance"));
const Announcements = lazy(() => import("./Announcements"));
const AttendanceHeatmap = lazy(() => import("./AttendanceHeatmap"));
const Notifications = lazy(() => import("./Notifications"));
const CalendarComponent = lazy(() => import("./Calendar"));

function Dashboard() {
  const { user } = React.useContext(UserContext);

  return (
    <>
      <Container fluid className="dashboard">
        <Row>
          <Col xs={12} md={6} lg={8}>
            <Row>
              <Col xs={12} lg={5}>
                <Suspense fallback={<div>Loading Info...</div>}>
                  <Info user={user} />
                </Suspense>
              </Col>
              <Col xs={12} lg={7}>
                <Suspense fallback={<div>Loading Attendance...</div>}>
                  <Attendance />
                </Suspense>
              </Col>
            </Row>
            <Row>
              <Col>
                <Suspense fallback={<div>Loading Announcements...</div>}>
                  <Announcements />
                </Suspense>
              </Col>
            </Row>
            <Row>
              <Col>
                <Suspense fallback={<div>Loading Attendance Heatmap...</div>}>
                  <AttendanceHeatmap />
                </Suspense>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Row>
              <Suspense fallback={<div>Loading Notifications...</div>}>
                <Notifications />
              </Suspense>
            </Row>
            <Row>
              <Suspense fallback={<div>Loading Calendar...</div>}>
                <CalendarComponent />
              </Suspense>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default React.memo(Dashboard);

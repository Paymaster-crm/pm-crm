import * as React from "react";
import "../../styles/dashboard.scss";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import ReactApexChart from "react-apexcharts";
import { Calendar } from "primereact/calendar";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

export default function Dashboard() {
  const { user } = React.useContext(UserContext);

  const data = [
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
    {
      title: "Quarterly Financial Results",
      date: "01-01-2022",
      time: "10:00 AM",
      description: "Q2 2024 financial performance.",
    },
  ];

  const columns = [
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: false,
      size: 260,
    },
    {
      accessorKey: "date",
      header: "Date",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "time",
      header: "Time",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "description",
      header: "Description",
      enableSorting: false,
      size: 260,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "heatmap",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            { from: 0, to: 5, color: "#a1c3e9", name: "Low Attendance" }, // Light shade
            { from: 6, to: 10, color: "#4a8fc7", name: "Moderate Attendance" }, // Medium shade
            { from: 11, to: 20, color: "#0860AE", name: "High Attendance" }, // Darkest shade
          ],
        },
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
  };

  const series = [
    {
      name: "10 AM",
      data: [8, 7, 6, 9, 10, 4],
    },
    {
      name: "11 AM",
      data: [10, 9, 7, 11, 12, 5],
    },
    {
      name: "12 PM",
      data: [12, 11, 9, 13, 12, 6],
    },
    {
      name: "1 PM",
      data: [9, 8, 7, 9, 10, 4],
    },
    {
      name: "2 PM",
      data: [11, 10, 8, 10, 11, 5],
    },
    {
      name: "3 PM",
      data: [12, 11, 10, 12, 11, 6],
    },
    {
      name: "4 PM",
      data: [11, 9, 8, 11, 10, 4],
    },
    {
      name: "5 PM",
      data: [10, 8, 7, 10, 9, 3],
    },
    {
      name: "6 PM",
      data: [8, 7, 5, 8, 7, 2],
    },
    {
      name: "7 PM",
      data: [5, 4, 3, 5, 4, 1],
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableStickyHeader: true,
    muiTableContainerProps: {
      sx: { maxHeight: "300px", overflowY: "auto" },
    },
    muiTableHeadCellProps: {
      sx: {
        position: "sticky",
        top: 0,
        zIndex: 1,
      },
    },
  });

  const [date, setDate] = React.useState(null);

  return (
    <>
      <Container fluid className="dashboard">
        <Row>
          <Col xs={12} md={6} lg={8}>
            <Row>
              <Col xs={12} lg={5}>
                <div id="dashboard-personal" className="dashboard-container">
                  <p>Welcome back,</p>
                  <br />
                  <h1>
                    {[user.first_name, user.middle_name, user.last_name]
                      .filter(Boolean)
                      .join(" ")}
                  </h1>
                </div>
              </Col>
              <Col xs={12} lg={7}>
                <div className="dashboard-container">
                  <h5>
                    <strong>Attendance and Leaves</strong>
                  </h5>
                  <Row className="attendance-row attendance-row-1">
                    <Col>
                      <span className="total-leaves">10</span>
                      <p>Total Leaves</p>
                    </Col>
                    <Col>
                      <span className="leaves-taken">6.5</span>
                      <p>Leaves Taken</p>
                    </Col>
                    <Col>
                      <span className="leaves-absent">6</span>
                      <p>Leaves Absent</p>
                    </Col>
                  </Row>
                  <Row className="attendance-row attendance-row-2">
                    <Col>
                      <span className="pending-approval">1</span>
                      <p>Pending Approval</p>
                    </Col>
                    <Col>
                      <span className="working-days">315</span>
                      <p>Working Days</p>
                    </Col>
                    <Col>
                      <span className="loss-of-pay">3</span>
                      <p>Loss of Pay</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="dashboard-container">
                  <h5>
                    <strong>Announcements</strong>
                    <br />
                    <br />
                    <MaterialReactTable table={table} />
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="dashboard-container">
                  <h5>
                    <strong>Attendance Heatmap</strong>
                  </h5>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="heatmap"
                    height={300}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Row>
              <div className="dashboard-container">
                <h5>
                  <strong>Notifications</strong>
                </h5>
                <div className="notification-container">
                  <h6>Jane D. SMith</h6>
                  <span>July 13, 2024</span>
                  <p>
                    Our latest HRM update focuses on enhancing employee
                    engagement through new interactive platforms and
                    personalized feedback systems.
                  </p>
                </div>
                <div className="notification-container">
                  <h6>Jane D. SMith</h6>
                  <span>July 13, 2024</span>
                  <p>
                    Our latest HRM update focuses on enhancing employee
                    engagement through new interactive platforms and
                    personalized feedback systems.
                  </p>
                </div>
                <div className="notification-container">
                  <h6>Jane D. SMith</h6>
                  <span>July 13, 2024</span>
                  <p>
                    Our latest HRM update focuses on enhancing employee
                    engagement through new interactive platforms and
                    personalized feedback systems.
                  </p>
                </div>
              </div>
            </Row>
            <Row>
              <div className="dashboard-container">
                <h5>
                  <strong>Calendar</strong>
                </h5>
                <div className="card flex justify-content-center">
                  <Calendar
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    inline
                  />
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

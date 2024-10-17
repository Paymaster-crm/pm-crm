import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../styles/login.scss";
import logo from "../assets/images/logo.webp";

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <Container fluid className="login-container" style={{ height: "100vh" }}>
      <Row className="login-row">
        <Col className="login-left-col"></Col>
        <Col className="login-right-col">
          <div className="login-right-col-inner-container">
            <img src={logo} alt="logo" width="100%" />
            <LoginForm
              forgotPassword={forgotPassword}
              setForgotPassword={setForgotPassword}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../styles/login.scss";
import logo from "../assets/images/logo.webp";
import ForgotPasswordForm from "../forms/ForgotPasswordForm.js";

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <Container fluid className="login-container" style={{ height: "100vh" }}>
      <Row className="login-row">
        <Col className="login-left-col"></Col>
        <Col className="login-right-col">
          <div className="login-right-col-inner-container">
            <img src={logo} alt="logo" width="100%" />
            {!forgotPassword ? (
              <>
                <LoginForm />
                <button className="btn" onClick={() => setForgotPassword(true)}>
                  Forgot Password
                </button>
              </>
            ) : (
              <>
                <ForgotPasswordForm setForgotPassword={setForgotPassword} />
                <button
                  className="btn"
                  onClick={() => setForgotPassword(false)}
                >
                  Login instead
                </button>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;

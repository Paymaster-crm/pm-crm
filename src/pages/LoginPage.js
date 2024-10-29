import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../styles/login.scss";
import ForgotPasswordForm from "../forms/ForgotPasswordForm.js";

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <Container fluid className="login-container" style={{ height: "100vh" }}>
      <Row className="login-row">
        <Col className="login-left-col"></Col>
        <Col className="login-right-col">
          <div className="login-right-col-inner-container">
            <img
              src="https://paymaster-document.s3.ap-south-1.amazonaws.com/logo.webp"
              alt="logo"
              width="100%"
            />
            {!forgotPassword ? (
              <>
                <LoginForm />
              </>
            ) : (
              <>
                <ForgotPasswordForm setForgotPassword={setForgotPassword} />
              </>
            )}
          </div>

          {!forgotPassword ? (
            <span className="span-text" onClick={() => setForgotPassword(true)}>
              Forgot Password
            </span>
          ) : (
            <span
              className="span-text"
              onClick={() => setForgotPassword(false)}
            >
              Login Instead
            </span>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../forms/LoginForm";
import "../styles/login.scss";
import ForgotPasswordForm from "../forms/ForgotPasswordForm.js";

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [webAuthnSupported, setWebAuthnSupported] = useState(false);

  // Check for WebAuthn support only once when the component mounts
  useEffect(() => {
    async function checkWebAuthn() {
      try {
        const supported =
          window.PublicKeyCredential &&
          (await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());
        setWebAuthnSupported(supported);
      } catch (error) {
        console.error("Error checking WebAuthn support:", error);
      }
    }

    checkWebAuthn();
  }, []); // Empty dependency array means this runs once on mount

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
                <LoginForm webAuthnSupported={webAuthnSupported} />
              </>
            ) : (
              <>
                <ForgotPasswordForm setForgotPassword={setForgotPassword} />
              </>
            )}
          </div>

          {webAuthnSupported ? (
            <span
              className="span-text"
              onClick={() => setWebAuthnSupported(false)}
            >
              Log in with Password
            </span>
          ) : !forgotPassword ? (
            <>
              <span
                className="span-text"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password
              </span>

              <span
                className="span-text"
                style={{ marginTop: "10px" }}
                onClick={() => setWebAuthnSupported(true)}
              >
                Login with WebAuthn
              </span>
            </>
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

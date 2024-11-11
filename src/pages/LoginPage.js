import React, { useState, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/login.scss";

// Lazy load child components
const LoginForm = React.lazy(() => import("../forms/LoginForm"));
const ForgotPasswordForm = React.lazy(() =>
  import("../forms/ForgotPasswordForm.js")
);
const WebAuthnLoginForm = React.lazy(() =>
  import("../forms/WebAuthnLoginForm.js")
);

function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [useWebAuthn, setUseWebAuthn] = useState(true);

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
            {/* Suspense for lazy-loaded components */}
            <Suspense fallback={<div>Loading...</div>}>
              {!forgotPassword ? (
                <>
                  {useWebAuthn ? (
                    <WebAuthnLoginForm
                      setUseWebAuthn={setUseWebAuthn}
                      username={username}
                      setUsername={setUsername}
                      setIsTwoFactorEnabled={setIsTwoFactorEnabled}
                    />
                  ) : (
                    <LoginForm
                      username={username}
                      isTwoFactorEnabled={isTwoFactorEnabled}
                    />
                  )}
                </>
              ) : (
                <>
                  <ForgotPasswordForm setForgotPassword={setForgotPassword} />
                </>
              )}
            </Suspense>
          </div>

          {/* Conditionally render "Forgot Password" and "Login Instead" */}
          {!useWebAuthn &&
            (!forgotPassword ? (
              <span
                className="span-text"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password
              </span>
            ) : (
              <span
                className="span-text"
                onClick={() => setForgotPassword(false)}
              >
                Login Instead
              </span>
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(LoginPage);

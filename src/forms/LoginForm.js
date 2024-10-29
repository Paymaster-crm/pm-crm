import React from "react";
import ConventionalLoginForm from "./ConventionalLoginForm";
import WebAuthnLoginForm from "./WebAuthnLogin";

function LoginForm(props) {
  return props.webAuthnSupported ? (
    <WebAuthnLoginForm />
  ) : (
    <ConventionalLoginForm />
  );
}

export default LoginForm;

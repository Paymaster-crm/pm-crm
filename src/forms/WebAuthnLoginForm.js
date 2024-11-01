import React, { useContext, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { UserContext } from "../contexts/UserContext";
import { checkCredentials } from "../utils/webAuthn/checkCredentials";
import { getLoginOptions } from "../utils/webAuthn/getLoginOptions";
import { formatLoginOptions } from "../utils/webAuthn/formatLoginOptions";
import { getCredential } from "../utils/webAuthn/getCredential";
import { serializeCredential } from "../utils/webAuthn/serializeCredential";
import { verifyCredential } from "../utils/webAuthn/verifyCredential";
import { login } from "../utils/webAuthn/login";

function WebAuthnLoginForm(props) {
  const { setUser } = useContext(UserContext);
  const usernameRef = useRef(null);

  useEffect(() => {
    // Focus on the username input when the component mounts
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const username = props.username;

  async function handleSubmit(e) {
    e.preventDefault();
    let credentialRes;

    try {
      credentialRes = await checkCredentials(username);

      if (credentialRes.message === "User not found") {
        alert(credentialRes.message);
        return;
      }

      if (!credentialRes.hasCredentials) {
        props.setUseWebAuthn(false);
        props.setIsTwoFactorEnabled(credentialRes.isTwoFactorEnabled);
        return;
      }

      const loginOptions = await getLoginOptions(username);
      if (!loginOptions) {
        props.setUseWebAuthn(false);
        return;
      }

      const formattedOptions = formatLoginOptions(loginOptions);

      const credential = await getCredential(formattedOptions);
      const serializedCredential = serializeCredential(credential);

      const isVerified = await verifyCredential(username, serializedCredential);
      if (isVerified) {
        await login(username, serializedCredential, setUser);
      } else {
        props.setUseWebAuthn(false);
      }
    } catch (err) {
      if (err.name === "NotAllowedError") {
        console.log("User canceled the WebAuthn prompt.");
      } else {
        console.log(err);
      }

      if (credentialRes) {
        props.setIsTwoFactorEnabled(credentialRes.isTwoFactorEnabled);
      } else {
        console.warn("Could not determine 2FA status, setting to false.");
        props.setIsTwoFactorEnabled(false);
      }

      props.setUseWebAuthn(false);
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <InputText
          ref={usernameRef} // Attach the ref to InputText
          id="username"
          name="username"
          placeholder="Username"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default WebAuthnLoginForm;

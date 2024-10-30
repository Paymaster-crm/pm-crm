import React, { useContext } from "react";
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
  const username = props.username;

  // Main handleSubmit function to orchestrate the above steps
  async function handleSubmit(e) {
    e.preventDefault();
    let credentialRes;

    try {
      // Check if the user has WebAuthn credentials
      credentialRes = await checkCredentials(username);

      if (credentialRes.message === "User not found") {
        alert("User not found");
        return;
      }

      // Update the 2FA state if the user does not have credentials
      if (!credentialRes.hasCredentials) {
        props.setUseWebAuthn(false);
        props.setIsTwoFactorEnabled(credentialRes.isTwoFactorEnabled);
        return;
      }

      // Get and format login options
      const loginOptions = await getLoginOptions(username);
      if (!loginOptions) {
        props.setUseWebAuthn(false);
        return;
      }

      const formattedOptions = formatLoginOptions(loginOptions);

      // Get and serialize credential
      const credential = await getCredential(formattedOptions);
      const serializedCredential = serializeCredential(credential);

      // Verify credential and finalize login if successful
      const isVerified = await verifyCredential(username, serializedCredential);
      if (isVerified) {
        await login(username, props.geoLocation, serializedCredential, setUser);
      } else {
        props.setUseWebAuthn(false);
      }
    } catch (err) {
      // Handle specific NotAllowedError for cancellation of the prompt
      if (err.name === "NotAllowedError") {
        console.log("User canceled the WebAuthn prompt.");
      } else {
        console.log(err); // Log other errors
      }

      // Set isTwoFactorEnabled based on the credential response received earlier
      if (credentialRes) {
        props.setIsTwoFactorEnabled(credentialRes.isTwoFactorEnabled);
      } else {
        // Handle case where credentialRes might not be defined
        console.warn("Could not determine 2FA status, setting to false.");
        props.setIsTwoFactorEnabled(false);
      }

      props.setUseWebAuthn(false);
    }
  }

  // Render the form with submit functionality
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <InputText
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

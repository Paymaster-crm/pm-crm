import axios from "axios";

export async function disableWebAuthn(username, setIsWebAuthnEnabled) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/disable-webauthn`,
      { username },
      { withCredentials: true }
    );
    if (res.data.message === "WebAuthn disabled") {
      setIsWebAuthnEnabled(false);
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

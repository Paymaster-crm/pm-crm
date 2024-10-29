import axios from "axios";
import { initiateWebauthnLogin } from "./initiateWebauthnLogin";

// Verify WebAuthn Registration
export const verifyWebauthnRegistration = async (
  username,
  credential,
  geolocation,
  setUser
) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn/verify-registration`,
      { username, credential },
      { withCredentials: true }
    );
    if (res.data.verified) {
      initiateWebauthnLogin(username, geolocation, setUser);
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.log("Registration verification error:", error);
  }
};

import axios from "axios";
import { handleLogin } from "./handleLogin";

// Verify WebAuthn Login
export const verifyWebauthnLogin = async (
  username,
  credential,
  geolocation,
  setUser
) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn/verify-login`,
      { username, credential },
      { withCredentials: true }
    );

    if (res.data.success) {
      await handleLogin(username, geolocation, setUser);
    } else {
      alert("Login failed. Please try again.");
    }
  } catch (error) {
    console.log("Login verification error:", error);
  }
};

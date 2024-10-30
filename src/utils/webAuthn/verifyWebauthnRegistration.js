import axios from "axios";

// Verify WebAuthn Registration
export const verifyWebauthnRegistration = async (
  username,
  credential,
  setIsWebAuthnEnabled
) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn/verify-registration`,
      { username, credential },
      { withCredentials: true }
    );
    if (res.data.verified) {
      alert("Registration successful");
      setIsWebAuthnEnabled(true);
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.log("Registration verification error:", error);
  }
};

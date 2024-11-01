import axios from "axios";

export const verifyWebauthnRegistration = async (
  user,
  credential,
  setIsWebAuthnEnabled,
  setUser
) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn/verify-registration`,
      { username: user.username, credential },
      { withCredentials: true }
    );
    if (res.data.verified) {
      setIsWebAuthnEnabled(true);
      setUser({ ...user, isWebAuthnEnabled: true });
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.log("Registration verification error:", error);
  }
};

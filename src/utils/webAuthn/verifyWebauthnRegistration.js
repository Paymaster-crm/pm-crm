import axios from "axios";

export const verifyWebauthnRegistration = async (credential) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn-verify-registration`,
      { credential },
      { withCredentials: true }
    );
    if (res.data.verified) {
      alert("Registration successful!");
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.error("Registration verification error:", error);
  }
};

import axios from "axios";

export const verifyWebauthnRegistration = async (username, credential) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn/verify-registration`,
      { username, credential },
      { withCredentials: true }
    );
    if (res.data.verified) {
      alert("Registration successful!");
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    console.log("Registration verification error:", error);
  }
};

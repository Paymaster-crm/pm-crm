import axios from "axios";

export const handleLogin = async (username, geolocation, setUser) => {
  try {
    const loginRes = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn-login`,
      { username, userAgent: navigator.userAgent, geolocation },
      { withCredentials: true }
    );
    if (loginRes.data.message === "Login successful") {
      setUser(loginRes.data.user);
    } else {
      alert(loginRes.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};

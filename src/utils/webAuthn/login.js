import axios from "axios";
import { getGeolocation } from "../getGeolocation";

// Step 7: Finalize login and update user state
export async function login(username, serializedCredential, setUser) {
  const geolocation = await getGeolocation();
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_STRING}/webauthn-login`,
      {
        username,
        geolocation,
        userAgent: navigator.userAgent,
        credential: serializedCredential,
      },
      { withCredentials: true }
    );

    if (response.data.message === "Login successful") {
      setUser(response.data.user);
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Final login error:", error);
  }
}

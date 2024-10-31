import axios from "axios";

export async function disableTwoFactor(username, setIsTwoFactorEnabled) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/disable-two-factor`,
      { username },
      { withCredentials: true }
    );
    if (res.data.message === "Two factor authentication disabled") {
      setIsTwoFactorEnabled(false);
    } else {
      alert(res.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

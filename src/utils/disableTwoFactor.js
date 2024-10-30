import axios from "axios";

export async function disableTwoFactor(username, setIsTwoFactorEnabled) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/disable-two-factor`,
      { username },
      { withCredentials: true }
    );
    alert(res.data.message);
    setIsTwoFactorEnabled(false);
  } catch (error) {
    console.log(error);
  }
}

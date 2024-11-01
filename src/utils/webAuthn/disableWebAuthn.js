import axios from "axios";

export async function disableWebAuthn(username) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/disable-webauthn`,
      { username },
      { withCredentials: true }
    );
    alert(res.data.message);
  } catch (error) {
    console.log(error);
  }
}

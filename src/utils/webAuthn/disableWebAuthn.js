import axios from "axios";

export async function disableWebAuthn() {
  try {
    const res = await axios(
      `${process.env.REACT_APP_API_STRING}/disable-webauthn`,
      { withCredentials: true }
    );
    alert(res.data.message);
  } catch (error) {
    console.log(error);
  }
}

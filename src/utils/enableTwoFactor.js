import axios from "axios";

export async function enableTwoFactor(
  user,
  setIsTwoFactorEnabled,
  setQr,
  setUser
) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/enable-two-factor`,
      { username: user.username },
      { withCredentials: true }
    );
    setQr(res.data.qrCodeImage);
    alert(res.data.message);
    setIsTwoFactorEnabled(true);
    setUser({
      ...user,
      backupCodes: res.data.backupCodes,
    });
  } catch (error) {
    console.log(error);
  }
}

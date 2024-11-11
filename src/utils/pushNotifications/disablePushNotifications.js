import axios from "axios";

export const disablePushNotifications = async () => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_STRING}/disable-push-notifications`,
      { withCredentials: true }
    );

    alert(res.data.message);
  } catch (error) {
    console.error("Error disabling push notifications:", error);
  }
};

import axios from "axios";

// Save FCM token
export const saveToken = async (token) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_STRING}/save-fcm-token`,
      { fcmToken: token },
      { withCredentials: true }
    );

    alert(res.data.message);
  } catch (error) {
    console.error("Error saving token:", error);
  }
};

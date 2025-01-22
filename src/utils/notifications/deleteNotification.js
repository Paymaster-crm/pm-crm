import apiClient from "../../config/axiosConfig";

export const deleteNotification = async (
  _id,
  notifications,
  setNotifications
) => {
  try {
    await apiClient.delete(`/delete-notification/${_id}`);
    setNotifications(
      [...notifications].filter((notification) => notification._id !== _id)
    );
  } catch (err) {
    console.error(err);
  }
};

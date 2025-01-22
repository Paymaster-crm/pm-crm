import apiClient from "../../config/axiosConfig";

export const requestNewCodes = async (user, setUser) => {
  try {
    const res = await apiClient(`/request-new-backup-codes`);

    setUser({ ...user, backupCodes: res.data.backupCodes });
  } catch (error) {
    console.error("Error occurred while requesting new backup codes:", error);
  }
};

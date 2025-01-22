import apiClient from "../../config/axiosConfig";

export const getSessionData = async (setGeolocation, setLoading) => {
  setLoading(true);
  try {
    const res = await apiClient.get(`/get-session-data`);
    setGeolocation(res.data || []);
  } catch (error) {
    console.error("Error fetching geolocation", error);
    setGeolocation([]);
  } finally {
    setLoading(false);
  }
};

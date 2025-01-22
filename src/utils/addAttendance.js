import apiClient from "../config/axiosConfig";

export const addAttendance = async (field, setAlert, getAttendances) => {
  try {
    const position = await new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error),
          { timeout: 10000, maximumAge: 0 }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });

    const { latitude, longitude } = position.coords;

    await apiClient.post(`/add-attendance`, { field, latitude, longitude });

    getAttendances();
  } catch (error) {
    let errorMessage = "";

    if (error.response) {
      errorMessage = error.response.data.message;
    } else {
      switch (error.message) {
        case "Network Error":
          errorMessage =
            "Network Error, your details will be submitted when you are back online";
          break;
        case "User denied Geolocation":
          errorMessage = "Location permission denied. Please enable location.";
          break;
        default:
          errorMessage = error.message || "An unknown error occurred.";
      }
    }

    setAlert({
      open: true,
      message: errorMessage,
      severity: "error",
    });
  }
};

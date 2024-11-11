export const getGeolocation = async () => {
  try {
    // Fetch the public IP address
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const ipAddress = ipData.ip;

    // Fetch geolocation data using the public IP
    const geoResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
    const geoData = await geoResponse.json();
    return {
      latitude: geoData.latitude,
      longitude: geoData.longitude,
      ipAddress,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

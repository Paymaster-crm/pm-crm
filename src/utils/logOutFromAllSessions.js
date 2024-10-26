import axios from "axios";

export const logOutFromAllSessions = async (setUser, navigate) => {
  const res = await axios(
    `${process.env.REACT_APP_API_STRING}/logout-from-all-sessions`,
    { withCredentials: true }
  );

  if (res.data.message === "Success") {
    setUser(null);
    navigate("/");
  } else {
    alert(res.data.message);
  }
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function Notifications() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/get-notifications`,
        { withCredentials: true }
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteNotification = async (_id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_STRING}/delete-notification/${_id}`,
        { withCredentials: true }
      );
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-container">
      <h5>
        <strong>Notifications</strong>
      </h5>
      {data.length > 0 ? (
        data.map((item, id) => (
          <div key={id} className="notification-container" >
            <div style={{ flex: 1 }}>
              <span>{item.title}</span>
              <p>{item.message}</p>
            </div>
            <IconButton onClick={() => deleteNotification(item._id)}>
              <DeleteIcon sx={{ color: "#F15C6D" }} />
            </IconButton>
          </div>
        ))
      ) : (
        <div className="notification-container">
          <p>No notifications</p>
        </div>
      )}
    </div>
  );
}

export default React.memo(Notifications);

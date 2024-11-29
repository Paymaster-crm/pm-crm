import React, { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios(
          `${process.env.REACT_APP_API_STRING}/get-notifications`,
          { withCredentials: true }
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="dashboard-container">
      <h5>
        <strong>Notifications</strong>
      </h5>
      {data.length > 0 ? (
        data.map((item, id) => (
          <div className="notification-container">
            <p key={id}>{item.message}</p>
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

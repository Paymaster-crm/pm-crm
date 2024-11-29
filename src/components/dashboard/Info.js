import React from "react";
import { useNavigate } from "react-router-dom";

function Info(props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/profile")}
      style={{ cursor: "pointer" }}
      id="dashboard-personal"
      className="dashboard-container"
    >
      <p>Welcome back,</p>
      <br />
      <h1>
        {[props.user.first_name, props.user.middle_name, props.user.last_name]
          .filter(Boolean)
          .join(" ")}
      </h1>
    </div>
  );
}

export default React.memo(Info);

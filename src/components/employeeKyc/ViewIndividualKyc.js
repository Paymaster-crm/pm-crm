import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BasicInfo from "../home/BasicInfo";

function ViewIndividualKyc() {
  const { username } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/get-user-data/${username}`,
        {
          withCredentials: true,
        }
      );
      setData(res.data);
    }

    getUser();
  }, [username]);

  const handleKycApproval = async (status) => {
    const kyc_approval = status === true ? "Approved" : "Rejected";
    const res = await axios.post(
      `${process.env.REACT_APP_API_STRING}/kyc-approval`,
      { username, kyc_approval },
      {
        withCredentials: true,
      }
    );
    alert(res.data.message);
  };

  return (
    <>
      {data && (
        <div style={{ padding: 20, backgroundColor: "#fff" }}>
          <BasicInfo />
          <br />
          <button className="btn" onClick={() => handleKycApproval(true)}>
            Approve
          </button>
          <button
            className="btn"
            style={{ marginLeft: "10px" }}
            onClick={() => handleKycApproval(false)}
          >
            Reject
          </button>
          <button
            className="btn"
            style={{ marginLeft: "10px" }}
            onClick={() => navigate(`/edit-kyc/${data.username}`)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}

export default React.memo(ViewIndividualKyc);

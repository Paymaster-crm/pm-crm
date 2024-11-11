import React, { useEffect, useState, Suspense, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Lazy load the BasicInfo component
const BasicInfo = lazy(() => import("../../profile/BasicInfo"));

function ViewIndividualKyc() {
  const { username } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios(
          `${process.env.REACT_APP_API_STRING}/get-user-data/${username}`,
          {
            withCredentials: true,
          }
        );

        setData(res.data);
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    }

    getUser();
  }, [username]);

  const handleKycApproval = async (status) => {
    const kyc_approval = status === true ? "Approved" : "Rejected";

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_STRING}/kyc-approval`,
        { username, kyc_approval },
        {
          withCredentials: true,
        }
      );
      alert(res.data.message);
    } catch (error) {
      console.error("Error occurred during KYC approval:", error);
    }
  };

  return (
    <>
      {data && (
        <div style={{ padding: 20, backgroundColor: "#fff" }}>
          <Suspense fallback={<div>Loading Basic Info...</div>}>
            <BasicInfo user={data} />
          </Suspense>
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

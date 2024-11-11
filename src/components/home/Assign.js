import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { TextField, MenuItem } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

// Lazy load the AssignModule and AssignRole components
const AssignModule = React.lazy(() => import("./AssignModule"));
const AssignRole = React.lazy(() => import("./AssignRole"));

function Assign() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [masterType, setMasterType] = useState("Assign Module");

  const handleMasterChange = (e) => {
    setMasterType(e.target.value);
  };

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios(
          `${process.env.REACT_APP_API_STRING}/get-all-users`,
          {
            withCredentials: true,
          }
        );
        setUserList(res.data.map((user) => user.username));
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    }

    getUsers();
    // eslint-disable-next-line
  }, [selectedUser]);

  const masterComponent = () => {
    switch (masterType) {
      case "Assign Module":
        return <AssignModule selectedUser={selectedUser} />;
      case "Assign Role":
        return <AssignRole selectedUser={selectedUser} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex-div" style={{ marginTop: "20px" }}>
        <div>
          <Autocomplete
            value={selectedUser}
            onChange={(event, newValue) => {
              setSelectedUser(newValue);
            }}
            options={userList}
            getOptionLabel={(option) => option}
            sx={{ width: 200, marginBottom: "20px" }}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Select User" />
            )}
          />
        </div>
        <div>
          <TextField
            select
            size="small"
            label="Select"
            sx={{ marginBottom: "20px", marginLeft: "20px" }}
            value={masterType}
            onChange={handleMasterChange}
          >
            <MenuItem value="Assign Module">Assign Module</MenuItem>
            <MenuItem value="Assign Role">Assign Role</MenuItem>
          </TextField>
        </div>
      </div>

      {/* Suspense for handling loading state */}
      <Suspense fallback={<div>Loading...</div>}>{masterComponent()}</Suspense>
    </>
  );
}

export default React.memo(Assign);

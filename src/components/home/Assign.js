import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, MenuItem } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import AssignModule from "./AssignModule";
import AssignRole from "./AssignRole";
import useUserList from "../../hooks/useUserList";

function Assign() {
  const userList = useUserList();
  const [selectedUser, setSelectedUser] = useState("");
  const [masterType, setMasterType] = useState("Assign Module");

  const handleMasterChange = (e) => {
    setMasterType(e.target.value);
  };

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

      {masterComponent()}
    </>
  );
}

export default React.memo(Assign);

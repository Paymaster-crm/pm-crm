import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import useTableConfig from "../../customHooks/useTableConfig";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function RevisionList() {
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);
  console.log(data);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `${process.env.REACT_APP_API_STRING}/view-revision-list`
      );
      setData(res.data);
    }
    getData();
  }, []);

  const columns = [
    {
      accessorKey: "name_of_individual",
      header: "Name of Individual",
      enableSorting: false,
      size: 250,
    },
    {
      accessorKey: "category",
      header: "Category",
      enableSorting: false,
      size: 150,
    },
    {
      accessorKey: "status",
      header: "Status",
      enableSorting: false,
      size: 100,
    },
    { accessorKey: "iec_no", header: "IEC", enableSorting: false, size: 120 },
    {
      accessorKey: "approval",
      header: "Approval Status",
      enableSorting: false,
      size: 120,
    },
    {
      accessorKey: "approved_by",
      header: "Approved By",
      enableSorting: false,
      size: 140,
    },
    {
      accessorKey: "remarks",
      header: "Remarks",
      enableSorting: false,
      size: 200,
    },
    {
      accessorKey: "revise",
      header: "Revise",
      enableSorting: false,
      size: 120,
      Cell: ({ cell }) =>
        user.role === "Admin" ? (
          <Link to={`/revise-customer-kyc/${cell.row.original._id}`}>View</Link>
        ) : (
          ""
        ),
    },
  ];
  const table = useTableConfig(data, columns);
  return (
    <div>
      {" "}
      <MaterialReactTable table={table} />{" "}
    </div>
  );
}
export default React.memo(RevisionList);

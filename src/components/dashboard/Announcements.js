import React, { useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

function Announcements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios(
        `${process.env.REACT_APP_API_STRING}/get-hr-activities`
      );
      setData(res.data);
    }
    getData();
  }, []);

  const columns = [
    {
      accessorKey: "title",
      header: "Title",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "description",
      header: "Description",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "date",
      header: "Date",
      enableSorting: false,
      size: 160,
    },
    {
      accessorKey: "time",
      header: "Time",
      enableSorting: false,
      size: 160,
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: false,
    enableTopToolbar: false,
    enableStickyHeader: true,
    muiTableContainerProps: {
      sx: { maxHeight: "300px", overflowY: "auto" },
    },
    muiTableHeadCellProps: {
      sx: {
        position: "sticky",
        top: 0,
        zIndex: 1,
      },
    },
  });

  return (
    <div className="dashboard-container">
      <h5>
        <strong>Announcements</strong>
        <br />
        <br />
        <MaterialReactTable table={table} />
      </h5>
    </div>
  );
}

export default React.memo(Announcements);

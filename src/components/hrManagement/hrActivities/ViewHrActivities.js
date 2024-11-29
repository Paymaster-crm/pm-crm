import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

function ViewHrActivities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_STRING}/get-hr-activities`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching HR activities:", error);
      }
    };
    fetchData();
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
    enableColumnResizing: true,
    enableColumnOrdering: true,
    enablePagination: false,
    enableBottomToolbar: false,
    enableDensityToggle: false, // Disable density toggle
    initialState: { density: "compact" }, // Set initial table density to compact
    enableGrouping: true, // Enable row grouping
    enableColumnFilters: false, // Disable column filters
    enableColumnActions: false,
    enableStickyHeader: true, // Enable sticky header
    muiTableContainerProps: {
      sx: { maxHeight: "590px", overflowY: "auto" },
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
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}

export default ViewHrActivities;

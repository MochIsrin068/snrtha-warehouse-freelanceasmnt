/* eslint-disable react-hooks/rules-of-hooks */
import {
  Typography,
  Breadcrumbs,
  Button,
  Link,
  Box,
  Chip,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Layout from "../../layout";
import useWarehouse from "../../hooks/useWarehouse";

export default function index() {
  const { warehouse } = useWarehouse();

  const columns: GridColDef[] = [
    { field: "number", headerName: "No.", width: 70 },
    {
      field: "WarehouseID",
      headerName: "Warehouse ID",
      width: 120,
      renderCell: (params: GridValueGetterParams) => (
        <Link href={`/detail/${params.row.WarehouseID}`}>
          {params.row.WarehouseID}
        </Link>
      ),
    },
    {
      field: "Branch",
      headerName: "Branch",
      width: 100,
    },
    {
      field: "Description",
      headerName: "Description",
      width: 160,
    },
    {
      field: "LastSync",
      headerName: "Last Sync",
      width: 400,
      valueGetter: (params: GridValueGetterParams) =>
        `${new Date(params.row.LastSync)}`,
    },
    {
      field: "Active",
      headerName: "Status Active",
      width: 120,
      renderCell: (params: GridValueGetterParams) => (
        <Chip
          size="small"
          label={params.row.Active ? "Active" : "InActive"}
          color={params.row.Active ? "success" : "error"}
        />
      ),
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 100,
      renderCell: (params: GridValueGetterParams) => (
        <Link href={`/detail/${params.row.WarehouseID}`}>
          <Button variant="outlined" color="success" size="small">
            Detail
          </Button>
        </Link>
      ),
    },
  ];

  const rows = warehouse.items;

  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Warehouse</Typography>
      </Breadcrumbs>
      <Box sx={{ height: "70vh", width: "100%", marginTop: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          disableColumnMenu
          loading={warehouse?.isLoading}
        />
      </Box>
    </Layout>
  );
}

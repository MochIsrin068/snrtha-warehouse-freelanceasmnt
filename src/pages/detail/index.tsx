/* eslint-disable react-hooks/rules-of-hooks */
import {
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Skeleton,
  Divider,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import Layout from "../../layout";
import useDetailWarehouse from "../../hooks/useDetailWarehouse";

export default function index() {
  const { warehouse } = useDetailWarehouse();
  return (
    <Layout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Warehouse
        </Link>
        <Typography color="text.primary">{`Detail`}</Typography>
      </Breadcrumbs>

      <Divider className="!my-4" />
      {warehouse.isLoading ? (
        <Box sx={{ width: "100%" }}>
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </Box>
      ) : (
        <div>
          <Typography variant="h6" gutterBottom>
            Detail Warehouse - {warehouse?.data?.Branch}{" "}
            {warehouse.data.WarehouseID}
            <Chip
              className="ml-2"
              size="small"
              label={warehouse?.data?.Active ? "Active" : "InActive"}
              color={warehouse?.data?.Active ? "success" : "error"}
            />
          </Typography>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="bg-[#1776d2] !opacity-80 !text-white rounded p-2 mt-4">
                <Typography
                  sx={{ fontSize: 16 }}
                  gutterBottom
                  className="!text-gray-300"
                >
                  Last Modifed :
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                  {new Date(warehouse.data.LastModifiedDateTime).toString()}
                </Typography>
              </div>

              <div className="bg-[#1776d2] !opacity-80 !text-white rounded p-2 mt-4">
                <Typography
                  sx={{ fontSize: 16 }}
                  gutterBottom
                  className="!text-gray-300"
                >
                  Last sync :
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                  {new Date(warehouse.data.LastSync).toString()}
                </Typography>
              </div>

              <div className="bg-[#1776d2] !opacity-80 !text-white rounded p-2 mt-4">
                <Typography
                  sx={{ fontSize: 16 }}
                  gutterBottom
                  className="!text-gray-300"
                >
                  Description :
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                  {warehouse?.data?.Description}
                </Typography>
              </div>

              <div className="bg-[#1776d2] !opacity-80 !text-white rounded p-2 mt-4">
                <Typography
                  sx={{ fontSize: 16 }}
                  gutterBottom
                  className="!text-gray-300"
                >
                  Replenishment Class :
                </Typography>
                <Typography sx={{ fontSize: 18 }}>
                  {warehouse.data.ReplenishmentClass || "-"}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Layout>
  );
}

import { Box, Card, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ProductService } from "../../api/services";
import { DatagridTable } from "../../context/datagridContext";
import { GridColCustom } from "../../types/customTypeColumns";
import ZoomImage from "../../components/ZoomImage";

const Product = () => {
  const [data, setData] = useState<any>([]);
  const { isLoading, isError } = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: async () => await ProductService.getAllProduct(),
    onSuccess: (data: any[]) => {
      setData(data);
    },
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const coloums: GridColCustom[] = [
    {
      field: "id",
      headerName: "ID",
      type: "string",
    },
    {
      minWidth: 400,
      field: "productName",
      headerName: "Product Name",
      type: "string",
    },
    {
      // maxWidth: 400,
      field: "description",
      headerName: "DESC",
      type: "string",
      // renderCell: (params) => <Typography>{params.row.description}</Typography>,
    },
    {
      field: "isValid",
      headerName: "Status",
      type: "boolean",
    },
    {
      minWidth: 202,
      field: "imageDefaultNavigation",
      headerName: "Image",
      // type: "string/",
      // editable: true,
      renderCell: (params) =>
        params.row.imageDefaultNavigation && (
          // <img
          //   src={params.row.imageDefaultNavigation.firebaseImage}
          //   alt=""
          //   style={{ width: "100%", height: "100px" }}
          // />
          <ZoomImage images={params.row.imageDefaultNavigation.firebaseImage} />
        ),
    },
  ];

  return (
    <Card>
      <DatagridTable data={data} columns={coloums}></DatagridTable>
    </Card>
  );
};

export default Product;

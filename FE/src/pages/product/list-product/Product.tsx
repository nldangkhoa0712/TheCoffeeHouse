import { Box, Card, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";
import { ProductService } from "../../../api/services";
import { GridColCustom } from "../../../types/customTypeColumns";
import { DatagridTable } from "../../../context/datagridContext";

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
      type: "number",
    },
    {
      minWidth: 300,
      field: "productName",
      headerName: "Product Name",
      type: "string",
    },
    {
      minWidth: 200,
      field: "imageDefaultNavigation",
      headerName: "Image",
      type: "custom",
    },
    {
      minWidth: 500,
      field: "description",
      headerName: "DESC",
      type: "string",
    },
    {
      minWidth: 200,
      field: "isValid",
      headerName: "Status",
      type: "boolean",
    },
  ];

  return (
    <Card>
      <DatagridTable
        data={data}
        columns={coloums}
        rowHeight={200}
      ></DatagridTable>
    </Card>
  );
};

export default Product;

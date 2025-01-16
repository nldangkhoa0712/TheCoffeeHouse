import { createContext, ReactNode } from "react";
// import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import { DataGridProps } from "@mui/x-data-grid";
import { GridColCustom } from "../types/customTypeColumns";

type TableProps = {
  children?: ReactNode;
} & Omit<DataGridProps, "rows"> &
  TableContextProps;

type TableContextProps = {
  data?: GridValidRowModel[];
};

export const TableContext = createContext<TableContextProps>({});

export const DatagridTable = ({ data, children, ...props }: TableProps) => {
  return (
    <TableContext.Provider value={{ data }}>
      {children}
      <DataGrid
        getRowHeight={() => 200}
        sx={{
          "& .MuiDataGrid-root .MuiDataGrid-row": {
            height: "300px !important",
          },
        }}
        rows={data}
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        {...props}
      />
    </TableContext.Provider>
  );
};

import { createContext, ReactNode } from "react";
// import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { DataGrid, GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import { DataGridProps } from "@mui/x-data-grid";
import { GridColCustom } from "../types/customTypeColumns";
import FormatRenderCell from "../utils/format-renderCell";

type TableProps = {
  children?: ReactNode;
} & Omit<DataGridProps, "rows"> &
  TableContextProps;

type TableContextProps = {
  data?: GridValidRowModel[];
  columns?: GridColCustom[];
  rowHeight?: number;
};

export const TableContext = createContext<TableContextProps>({});

export const DatagridTable = ({
  data,
  children,
  columns,
  rowHeight,
  ...props
}: TableProps) => {
  const _columns: GridColCustom[] = columns.map(
    (item: GridColCustom, index: number) => {
      return {
        ...item,
        renderCell: (params) => FormatRenderCell(params, item.type, item.field),
      };
    }
  );

  return (
    <TableContext.Provider value={{ data }}>
      {children}
      <DataGrid
        columns={_columns}
        getRowHeight={() => rowHeight}
        sx={{
          "& .MuiDataGrid-root .MuiDataGrid-row": {
            height: "300px !important",
          },
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            // padding: "10px",
          },
          "& .MuiDataGrid-cell--textRight": {
            display: "flex",
            justifyContent: "center !important",
            textAlign: "center !important",
          },
        }}
        rows={data}
        showCellVerticalBorder
        disableColumnSelector
        disableRowSelectionOnClick
        {...props}
      />
    </TableContext.Provider>
  );
};

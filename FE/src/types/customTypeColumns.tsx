import { GridActionsColDef, GridColDef } from "@mui/x-data-grid";
import { GridBaseColDef } from "@mui/x-data-grid/internals";

export interface GridColCustom extends GridBaseColDef {
  // Thêm các thuộc tính tùy chỉnh của bạn ở đây
  total?: boolean;
}

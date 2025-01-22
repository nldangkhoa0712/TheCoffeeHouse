import { GridColType, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { FormatColumnsType } from "../constants/formatRencell.contants";
import { Typography } from "@mui/material";
import ZoomImage from "../components/ZoomImage";

export const FormatRenderCell = (
  params: GridRenderCellParams,
  type: GridColType | undefined,
  field: string
) => {
  switch (type) {
    case "string":
      return (
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "wrap",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {params.row[field] ?? ""}
        </Typography>
      );
    case "boolean":
      return (
        <>
          {params.row[field] ? (
            <span
              style={{
                padding: "8px 10px",
                color: "#1d39c4",
                background: "#f0f5ff",
                border: "1px solid #b7eb8f",
                borderRadius: "6px",
              }}
            >
              <Typography>Saleable</Typography>
            </span>
          ) : (
            <span
              style={{
                padding: "8px 10px",
                color: "#d4380d",
                background: "#ffbb96",
                border: "1px solid #adc6ff",
                borderRadius: "6px",
              }}
            >
              <Typography>Non-Saleable</Typography>
            </span>
          )}
        </>
      );
    case "custom":
      if (field.includes("image") && params.row[field])
        return (
          <ZoomImage images={params.row.imageDefaultNavigation.firebaseImage} />
        );
      break;
    case "number":
      return <Typography>{params.row[field]}</Typography>;
  }
};

export default FormatRenderCell;

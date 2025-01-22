import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

interface InputProductProps {
  value: string;
  label: string;
}

const InputProduct = ({ value, label }: InputProductProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControl sx={{ width: "80%" }}>
        <label htmlFor="name-product">{label}</label>
        <TextField value={value} id="name-product" placeholder="Coffee" />
      </FormControl>
    </Box>
  );
};

export default InputProduct;

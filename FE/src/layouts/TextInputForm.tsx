import { TextField } from "@mui/material";

interface InputProps {
  value: string | Date;
  onChange: (...event: unknown[]) => void;
  label: string;
}

const TextInputForm = ({ value, onChange, label }: InputProps) => {
  return (
    <TextField
      style={{ height: "42px", width: "80%" }}
      label={label}
      value={value}
      size="small"
      onChange={onChange}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "20px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9e6d4a", // Màu khi focus
          },
        },
        "& .MuiInputLabel-root": {
          fontSize: "14px",
          lineHeight: "1.6",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#9e6d4a",
        },
      }}
    />
  );
};

export default TextInputForm;

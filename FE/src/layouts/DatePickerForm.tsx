import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const DatePickerForm = ({ value, handleChange }: any) => {
  return (
    <div style={{ width: "100%" }}>
      <DatePicker
        sx={{
          width: "80%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "1.6",
            height: "42px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(0 0 0 / 23%) !important",
          },
        }}
        value={dayjs(value)}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePickerForm;

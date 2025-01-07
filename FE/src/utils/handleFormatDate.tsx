import moment from "moment";

export const handleFormatDate = (date: string) => {
  const dateFormat = moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
  return dateFormat;
};

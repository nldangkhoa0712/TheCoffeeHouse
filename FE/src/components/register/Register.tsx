import { Button, CircularProgress } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, useForm } from "react-hook-form";
import { useRegister } from "../../hooks/auth.api";
import DatePickerForm from "../../layouts/DatePickerForm";
import TextInputForm from "../../layouts/TextInputForm";
import { RegisterModel } from "../../models/auth.model";
import { handleFormatDate } from "../../utils/handleFormatDate";

const Register = () => {
  const { mutate: mutateRegister, isLoading } = useRegister();
  const { handleSubmit, control } = useForm<RegisterModel>({
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      phone: "",
      idRole: false,
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: RegisterModel) => {
    const payload = {
      ...data,
      dateOfBirth: handleFormatDate(data.dateOfBirth),
    };
    mutateRegister(payload, {
      onSuccess(resp) {},
    });
  };
  return (
    <form className="form form-register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <TextInputForm
            label="Full Name"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      ></Controller>
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <TextInputForm
            label="Phone"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      ></Controller>
      <Controller
        control={control}
        name="dateOfBirth"
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerForm value={field.value} handleChange={field.onChange} />
          </LocalizationProvider>
        )}
      ></Controller>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInputForm
            label="Email"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      ></Controller>
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInputForm
            label="Password"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      ></Controller>

      <Button className="btn-submit" type="submit">
        {isLoading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          "Register"
        )}
      </Button>
      <p style={{ textDecoration: "underline" }}>Create Account or Gmail</p>
    </form>
  );
};

export default Register;

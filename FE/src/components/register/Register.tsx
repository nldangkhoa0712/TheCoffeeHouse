import { Controller, useForm } from "react-hook-form";
import TextInputForm from "../../layouts/TextInputForm";
import { Button } from "@mui/material";
import { RegisterModel } from "../../models/auth.model";

const Register = () => {
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
  const onSubmit = (data: unknown) => {
    console.log(data);
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
          <TextInputForm
            label="Date of Birth"
            value={field.value}
            onChange={field.onChange}
          />
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
        Register
      </Button>
      <p style={{ textDecoration: "underline" }}>Create Account or Gmail</p>
    </form>
  );
};

export default Register;

import { Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../../hooks/auth.api";
import TextInputForm from "../../layouts/TextInputForm";
import { AuthModel } from "../../models/auth.model";
import "../../styles/page/auth/index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { mutate: mutateLogin } = useLogin();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<AuthModel>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: AuthModel) => {
    mutateLogin(data, {
      onSuccess(resp) {
        console.log(resp);
        navigate("/");
      },
    });
  };
  return (
    <form className="form form-login" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
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

      <p style={{ textDecoration: "underline" }}>Forgot Password?</p>
      <Button className="btn-submit" type="submit">
        Login
      </Button>
      <p style={{ textDecoration: "underline" }}>Create Account or Gmail</p>
    </form>
  );
};

export default Login;

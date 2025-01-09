import { Button, CircularProgress } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogin } from "../../hooks/auth.api";
import TextInputForm from "../../layouts/TextInputForm";
import { AuthModel } from "../../models/auth.model";
import "../../styles/page/auth/index.css";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginVerify {
  setForgot: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setForgot }: LoginVerify) => {
  // const router = useRouter()
  const { mutate: mutateLogin, isLoading } = useLogin();
  const navigate = useNavigate();
  const { search } = useLocation();
  const emailQuery = new URLSearchParams(search).get("email");
  const { handleSubmit, control } = useForm<AuthModel>({
    defaultValues: {
      email: emailQuery ? emailQuery : "",
      password: "",
    },
  });

  const onSubmit = (data: AuthModel) => {
    mutateLogin(data, {
      onSuccess(resp) {
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

      <p
        onClick={() => setForgot(true)}
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        Forgot Password?
      </p>
      <Button className="btn-submit" type="submit">
        {isLoading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          "Login"
        )}
      </Button>
      <p style={{ textDecoration: "underline" }}>Create Account or Gmail</p>
    </form>
  );
};

export default Login;

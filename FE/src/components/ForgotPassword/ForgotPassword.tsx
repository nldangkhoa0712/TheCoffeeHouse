import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useGetOTP } from "../../hooks/auth.api";
import TextInputForm from "../../layouts/TextInputForm";

type ForgotPasswordProps = {
  email: string;
};

const ForgotPassword = () => {
  const [count, setCount] = useState<number>(30);
  const timeRemainRef = useRef<number>(undefined);
  const getOTP = useGetOTP();

  const handleStartRemain = () => {
    timeRemainRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev == 0) return 30;
        if (prev == 1) {
          clearInterval(timeRemainRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    handleStartRemain();
    return () => clearInterval(timeRemainRef.current);
  }, []);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      otp: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form-forgot">
      <h1>Forgot Password</h1>
      <Controller
        control={control}
        name="otp"
        render={({ field }) => (
          <TextInputForm
            label="OTP"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <div className="countdown-resend">
        <p style={{ fontSize: "0.8rem" }}>
          Time Remaining: {""}
          <span className="countdown-text">{count}s</span>
        </p>
        <button
          onClick={() => {
            handleStartRemain();
            // getOTP.mutate(email);
          }}
        >
          Resend OTP
        </button>
      </div>

      <Button className="btn-submit" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ForgotPassword;

import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  useForgotPassword,
  useGetOTP,
  useSetPassword,
} from "../../hooks/auth.api";
import TextInputForm from "../../layouts/TextInputForm";
import toast from "react-hot-toast";

type ForgotPasswordPayload = {
  email: string;
  newPassword: string;
  otp: string;
  reNewPassword: string;
};

interface ForgotPasswordProps {
  setForgot: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword = ({ setForgot }: ForgotPasswordProps) => {
  const [count, setCount] = useState<number>(30);
  const timeRemainRef = useRef<number>(undefined);
  const [email, setEmail] = useState<string>("");
  const getOTP = useGetOTP();
  const MutateForgotPassword = useForgotPassword();
  const MutateSetNewPassword = useSetPassword();

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

  const { handleSubmit, control } = useForm<ForgotPasswordPayload>({
    defaultValues: {
      email: "",
      newPassword: "",
      reNewPassword: "",
      otp: "",
    },
  });

  const onSubmit = (data: ForgotPasswordPayload) => {
    const { reNewPassword, ...payload } = data;
    if (email == "") {
      MutateForgotPassword.mutate(data.email, {
        onSuccess: (resp) => {
          toast.success(resp);
          setEmail(data.email);
        },
      });
      return;
    }
    // console.log(data);
    setForgot(false);
    MutateSetNewPassword.mutate(payload, {
      onSuccess: (resp) => {
        toast.success(resp);
        setForgot(false);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form-forgot">
      <h1>Forgot Password</h1>

      {email == "" && (
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
        />
      )}

      {!!email && (
        <>
          <Controller
            control={control}
            name="newPassword"
            render={({ field }) => (
              <TextInputForm
                label="New Password"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="reNewPassword"
            render={({ field }) => (
              <TextInputForm
                label="Confirm New Password"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
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
        </>
      )}

      <Button className="btn-submit" type="submit">
        {email ? "Change Password" : "Send"}
      </Button>
    </form>
  );
};

export default ForgotPassword;

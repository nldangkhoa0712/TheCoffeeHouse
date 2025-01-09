import { Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerify } from "../../hooks/auth.api";
import AnimationCoffee from "../../layouts/AnimationCafe/AnimationCoffee";
// import { VerifyPayload } from "src/models/auth.model";

const VerifySuccess = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const location = useLocation();
  const otp = new URLSearchParams(location.search);
  const paramQuery = otp.get("query")!;

  const { mutateAsync, isLoading, isError, data } = useVerify();

  useEffect(() => {
    mutateAsync(
      { otp: paramQuery },
      {
        onSuccess(resp) {
          if (resp && typeof resp == "string") {
            setEmail(resp);
          }
        },
      }
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress size={200} style={{ color: "#5e2605" }} />
        </div>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "bisque",
          }}
        >
          <Box sx={{ lineHeight: "3" }}>
            <h1
              style={{
                fontSize: "80px",
                lineHeight: "1.2",
                background: "linear-gradient(to top, #c79081 0%, #dfa579 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {isError ? (
                <>
                  Account verify failed <br /> Please try again later.
                </>
              ) : (
                <>
                  Account Verified <br /> Successfully!
                </>
              )}
            </h1>
            {isError ? null : (
              <>
                <p
                  style={{
                    fontSize: "30px",
                    background:
                      "linear-gradient(to top, #c79081 0%, #dfa579 100%)",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Your account has been verified.
                </p>
                <Button
                  onClick={() => {
                    navigate(`/auth/?email=${email}`);
                  }}
                  sx={{
                    color: "#fff !important",
                    backgroundImage:
                      "linear-gradient( to top, #c79081 0%, #dfa579 100%)",
                    padding: "20px 100px",
                    borderRadius: "50px",
                    minWidth: "350px",
                    minHeight: "70px",
                    fontSize: "16px",
                  }}
                >
                  Back to Login
                </Button>
              </>
            )}
          </Box>
          <AnimationCoffee />
        </div>
      )}
    </>
  );
};

export default VerifySuccess;

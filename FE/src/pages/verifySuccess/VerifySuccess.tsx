import { Box, Button, CircularProgress } from "@mui/material";
import Lottie from "lottie-react";
import VerifyAnimation from "../../../public/lotties/verifyAnimation.json";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerify } from "../../hooks/auth.api";
// import { VerifyPayload } from "src/models/auth.model";

const VerifySuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const otp = new URLSearchParams(location.search);
  const paramQuery = otp.get("query");

  const { mutateAsync, isLoading } = useVerify();

  const handleGetStarted = () => {
    if (paramQuery) {
      mutateAsync(
        { otp: paramQuery },
        {
          onSuccess(resp) {
            navigate(`/login?email=${resp}`);
          },
        }
      );
    }

    // navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#E6F7FF",
      }}
    >
      <Box sx={{ lineHeight: "3" }}>
        <h1
          style={{
            fontSize: "80px",
            lineHeight: "1",
            background: "linear-gradient(to right,  #43CBFF 10%, #9708CC 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            // color: "transparent",
          }}
        >
          Account Verified <br /> Successfully!
        </h1>
        <p
          style={{
            fontSize: "30px",
            background: "linear-gradient(to right,  #43CBFF 10%, #9708CC 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Your account has been verified.
        </p>
        <Button
          onClick={() => {
            handleGetStarted();
          }}
          sx={{
            color: "#fff !important",
            backgroundImage:
              "linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)",
            padding: "20px 100px",
            borderRadius: "50px",
            minWidth: "350px",
            minHeight: "70px",
            fontSize: "16px",
          }}
        >
          {isLoading ? (
            <CircularProgress size={30} style={{ color: "#fff" }} />
          ) : (
            "Get Started"
          )}
        </Button>
      </Box>
      <Lottie style={{ width: 800 }} animationData={VerifyAnimation} />
    </div>
  );
};

export default VerifySuccess;

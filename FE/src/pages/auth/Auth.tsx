import { MouseEvent, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Login from "../../components/login";
import Register from "../../components/register";
import "./index.css";
import ForgotPassword from "../../components/ForgotPassword";

const Auth = () => {
  const [active, setActive] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const handleActive = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name == "Register") {
      setActive(!active);
      return;
    }
    setActive(false);
    setForgot(false);
  };

  return (
    <div
      className={`form-box ${active ? "active" : ""} ${forgot ? "forgot" : ""}`}
    >
      <div className="form-container">
        {/* {active ? <Register /> : <Login />} */}
        <CSSTransition in={!active && !forgot} timeout={600} unmountOnExit>
          <Login setForgot={setForgot} />
        </CSSTransition>

        <CSSTransition in={active} timeout={600} unmountOnExit>
          <Register />
        </CSSTransition>

        <CSSTransition in={forgot} timeout={600} unmountOnExit>
          <ForgotPassword />
        </CSSTransition>

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button
              name="Register"
              onClick={handleActive}
              className="btn register-btn"
            >
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              name="Login"
              onClick={handleActive}
              className="btn login-btn"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

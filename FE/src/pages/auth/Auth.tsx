import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Login from "../../components/login";
import Register from "../../components/register";
import "./index.css";

const Auth = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className={`form-box ${active ? "active" : ""}`}>
      <div className="form-container">
        {/* {active ? <Register /> : <Login />} */}
        <CSSTransition in={!active} timeout={600} unmountOnExit>
          <Login />
        </CSSTransition>

        <CSSTransition in={active} timeout={600} unmountOnExit>
          <Register />
        </CSSTransition>

        {/* <CSSTransition in={showOTP} timeout={600} unmountOnExit>
          <Verify email={email} />
        </CSSTransition> */}

        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button onClick={handleActive} className="btn register-btn">
              Register
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button onClick={handleActive} className="btn login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

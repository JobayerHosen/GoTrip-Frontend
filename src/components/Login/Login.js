import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const refferer = location?.state?.from || "/";

  if (user) {
    history.replace(refferer);
  }

  const { signInWithGoogle } = useAuth();
  return (
    <div className="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>Login</h1>
      <button onClick={signInWithGoogle} className="btn btn-danger d-flex flex-column align-items-center" type="submit">
        <i className="fs-1 bi bi-google"></i>
        Continue With Google
      </button>
    </div>
  );
};

export default Login;

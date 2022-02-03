import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import("./Login.css");

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.presse-citron.net/app/uploads/2020/10/gmail-logo-2020.jpg"
          alt="gmail logo"
        />
        <Button color="primary" variant="contained" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;

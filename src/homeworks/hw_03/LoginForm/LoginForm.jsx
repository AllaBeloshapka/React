import React from "react";
import Button from "../../../components/Button/button";
import "./loginForm.css";

export default function LoginForm() {
  return (
    <div className="root">
    <div>
      <Button name="Login" type="submit" className="login_button" />
    </div>
    </div>
  );
}


import Button from "../Button/button";
import "./loginForm.css";
import Input from "../Input/Input";

export default function LoginForm() {
  return (
    <div className="form">
      <div className="text">Login Form</div>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        class_name="input"
        class_name_form="input_form"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        class_name="input"
        class_name_form="input_form"
      />

      <Button name="Login" type="submit" className="login_button" />
    </div>
  );
}

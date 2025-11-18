
import Button from "../Button/button";
import "./loginForm.css";
import Input from "../Input/Input";

export default function LoginForm() {

    const login = (event) => {
      event.preventDefault();
    console.log("Login successfull");
  };

  return (
    <form onSubmit={login} className = "form">
    
      <p className="text">Login Form</p>
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
       
       {/* <button onClick={login} id="clickme_button" type="button">
        Click me
      </button> */}
      {/* <Button name="Login" type="button" onclick={login}/> */}
      <Button name="Login" type="submit" />
    </form>
  );
}

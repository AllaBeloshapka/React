import "./styles.css";

function Button({ name="Send", type="button", onclick}) {
  return (
    <button className= "button_component" type={type} onClick={onclick}>
      {name}
    </button>
  );
}

export default Button;

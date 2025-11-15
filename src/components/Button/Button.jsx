
import "./styles.css";

function Button ({name = "send"}) {
    return <button className="button_component">{name}</button>;
}

export default Button;
import Button from "../Button/Button";
import "./styles.css";
function Counter() {
  const onMinus = () => {};
  const onPlus = () => {};
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{0}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;
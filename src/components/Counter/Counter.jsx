// 1 ШАГ: Импортируем useState из библиотеки react
import { useState } from "react";
import Button from "./Button/Button";
import "./styles.css";
function Counter() {
  // При старом способе компонент Counter не перезагружается и не может показать на странице актуальное значения переменных
  // let count = 0;
  // console.log("В теле компонента Counter", count);
  // const onMinus = () => {
  //   count = count - 1;
  //   console.log("onMinus function", count);
  // };
  // const onPlus = () => {
  //   count = count + 1;
  //   console.log("onPlus function", count);
  // };

  const [count, setCount] = useState(0);  // аргумент по умолчанию
  

  const onPlus = () => {
    setCount((prevVelue)=>{
    return prevVelue + 1;
    })
  };
  const onMinus = () => {
        setCount((prevVelue)=>{
    return prevVelue - 1;
    })
  };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;

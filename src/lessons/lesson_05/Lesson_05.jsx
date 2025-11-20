import { useState } from "react";
import Button from "../../components/Button/button";
import "./style.css";
function Lesson_05() {
  let [orders, setOrders] = useState([]);
  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          <div className="button_control">
            <Button name="Burger" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Fries" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Cola" onClick={() => {}} />
          </div>
                    <div className="button_control">
            <Button name="Salad" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Ketchup" onClick={() => {}} />
          </div>
          <div className="button_control">
            <Button name="Ice-cream" onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list"></ol>
      </div>
    </div>
  );
}
export default Lesson_05;

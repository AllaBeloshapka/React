import { useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/Button/Button";
import "./style.css";

function Lesson_05() {
  let [orders, setOrders] = useState([]);

  const orderListItems = orders.map((value) => {
    return (
      <li key={v4()} className="order_item">
        {value}
      </li>
    );
  });

  // Создаю массив кнопок
  const menuListItems = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];
// Создаю метод, который переберёт и выведет на экран каждую кнопку
  const menuButtons = menuListItems.map((value) => {
    return (
      <div key={v4()} className="button_control">
       
{/* Использую компонент-кнопку */}
        <Button
// Даю каждой кнопке название из массива
          name={value}
          // Даю HTML-элементу метод для реакции на клик по кнопке
          onClick={() => {
            setOrders((prevValue) => {
              return [...prevValue, value];
            });
          }}
        />
      </div>
    );
  });

  return (
    <div className="lesson_05_wrapper">

      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
{/* Место  для кнопки в HTML. Каждую кнопку формирую через метод menuButtons*/}
          <div className="button_wrapper">{menuButtons}</div>
      
      </div>

      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>

        <ol className="order_list">{orderListItems}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;

import { useState } from "react";
import "./styles.css"

export default function Sandwich() {
  const [sandwich, setSandwich] = useState("Бутербродный конфигуратор🧑‍🍳: ");
  function handleAddBread(){
    setSandwich(`${sandwich} Хлеб 🍞`)
  }
  function handleAddCheese(){
    setSandwich(`${sandwich} Сыр 🧀`)
  }
  function handleAddBacon(){
    setSandwich(`${sandwich} Бикон 🥩`)
  }
  function handleAddSalad(){
    setSandwich(`${sandwich} Салат 🥬`)
  }
  function handleAddTomato(){
    setSandwich(`${sandwich}  Помидор 🍅`)
  }
  function handleClear(){
    setSandwich("Бугерброд: ")
  }

  return (
  <div>
    <h1>Sandwich</h1>
    <img src="https://www.povarenok.ru/data/cache/2014dec/06/50/960559_45865-710x550x.jpg" alt="" />
    <p>{sandwich}</p>
    <div className="container">
        <button className="btn" type="button" onClick={handleAddBread}>Хлеб</button>
        <button className="btn" type="button" onClick={handleAddCheese}>Сыр</button>
        <button className="btn" type="button" onClick={handleAddBacon}>Бикон</button>
        <button className="btn" type="button" onClick={handleAddSalad}>Салат</button>
        <button className="btn" type="button" onClick={handleAddTomato}>Помидор</button>
        <button className="btn" type="button" onClick={handleClear}>Съесть</button>
    </div>
  </div>
  )
}

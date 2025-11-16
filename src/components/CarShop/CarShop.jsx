import React from "react";
import Car from "../Car/Car";
import Bike from "../Bike/Bike";



export default function CarShop() {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Car</h2>
      <Car brand="Mersedes" color="black" />
      <Car brand="Tesla" color="green" />
      <Car brand="Kia" color="blue" />
      <Car brand="Lada" color="red" />
      <Car brand="Honda" color="yelow" />
      <Car brand="Opel" color="pink" />

      <h2>Bike</h2>
      <Bike brand="Cube Aim Pro" gears="21" price="699€" image="https://as2.ftcdn.net/v2/jpg/01/12/41/79/1000_F_112417959_Mnz4wPj4FjaeNWRSxNqGqLEaObTQgont.jpg"/>
      <Bike brand="Trek Marlin 7" gears="18" price="849€" image="https://www.vpace.de/media/image/aa/df/60/VPACE_FRED26_black_01_1600x1600.jpg"/>
      <Bike brand="Giant Talon 3" gears="16" price="749€" image="https://cdn.skatepro.com/product/520/radio-legion-29-o1.webp"/>
      <Bike brand="Specialized Rockhopper" gears="24" price="999€" image="https://trial-world.com/9354-large_default/comas-920-zero-evo-trialbike.jpg"/>
      <Bike brand="Scott Aspect 950" gears="18" price="899€" image="https://www.radon-bikes.de/fileadmin/_processed_/csm_radon_website_vorlage_deft_25_f8d95b3e27.png"/>
      <Bike brand="Cannondale Trail 5" gears="20" price="1099€" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1hjSUvjXqK0A7udsg26xGcngZxnryqAz1Q&s"/>
      <Bike brand="Merida Big Nine 100" gears="24" price="799€" image="https://de-eu.wahoofitness.com/media/wysiwyg/home/bike_pro_core_2_hero_m.jpg"/>

    </div>
  );
}

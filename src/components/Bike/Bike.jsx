import React from 'react'

export default function Bike({brand, gears, price, image}) {

  return (
    <div 
    style={{ color: 'black'}} > 
    Brand: {brand}, Gears: {gears}, Price: {price}, Img: {image}
    <img src={image} alt=''/>
    </div>
  )
}

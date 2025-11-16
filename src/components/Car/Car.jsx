import React from 'react'

export default function Car({brand, color, }) {   //props - это объект
    

  return (
    <div style={{backgroundColor:color, color: 'white'}}>
      Brand: {brand} Color: {color}
      
    </div>
  )
}

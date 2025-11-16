import React from 'react'

export default function Input({label, name, type, placeholder, class_name, class_name_form}) {
  return (
    <div className={class_name_form}>
        
        <label>{label}</label>

        <input 
        className={class_name} 
        placeholder={placeholder} 
        name={name}
        type={type}
        />
    
    </div>
  )
}

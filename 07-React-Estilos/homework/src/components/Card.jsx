import React from 'react';
import Style from "../styles/Card.module.css";



export default function Card(props) {
  // acá va tu código
  return <div className ={Style.card}> 
      
 <button onClick={props.onClose} className={Style.botonx}>X</button>
 <div className={Style.nombre}><h4>{props.name}</h4>
 <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found" />
 <p>Min</p>
 <p>{props.min}</p>
 <p>Max</p>
 <p>{props.max}</p>
 
    </div>
  </div>
  
};
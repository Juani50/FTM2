import React from 'react';
import Style from "../styles/SearchBar.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return <div className={Style.boton2}>
  <input type="text" placeholder='Ciudad...' className={Style.input}/>
  <button className={Style.boton} onClick={() =>props.onSearch("Buscando...")}>Agregar</button>
  
  </div>
};
import React from "react";
import './card.styles.css';


export const Card = props => (
  <div className='card-container'>
    <img alt="animal" src={`${props.nM.image_link}`} className="img"/>
    <h1>{props.nM.name}</h1>
    <p><b>Animal Type</b><br/>{`${props.nM.animal_type}`}</p>
  </div>
)


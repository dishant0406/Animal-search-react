import React from "react";
import './card.styles.css';


export const Card = (props) => (
  <div className='card-container'>
    <img alt="nekos" src={`${props.nM.url}`} height='340rem' width='240rem'/>
    <h1>{props.nM.artist_name}</h1>
    <p><b>Original Work:</b><br/>{`${props.nM.source_url}`.slice(12)}</p>
  </div>
)


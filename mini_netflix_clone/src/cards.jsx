import React from 'react';
import './index.css';

function Card (props){
    return (
<>
     <div class="cards">
  <div class="card">
    <img className='cardImg' src={props.imgsrc} alt="movieImg"/>
      <div class="cardInfo">
        <span class="cardCategory">{props.title}</span>
        <h3 className='cardTitle'> Card Title </h3>
        <a href={props.link} target="_blank">
          <button> Watch Now </button>
        </a>
      </div>
  </div>
      </div>
 </>)
  }

  export default Card;



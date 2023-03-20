
import React from 'react';

// import { Container } from './styles';

function  CardElement(props) {
  return (
   <div onClick={() => {props.handleFlip(props.card)}} className= {`card ${props.card.flip ? 'flip' : ''}`} id = {props.card.timeId}>

      <div className='front'>
         <img src={`./${props.card.nomeTime}.png`} alt={props.card.nomeTime} />
      </div>
      
      <div className='back'>
         <img src='./icontrofeu.png' alt='Icon Troféu ' />
      </div>
   </div>
  );
}

export default CardElement;
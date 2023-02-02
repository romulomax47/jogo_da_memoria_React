import React, { Fragment } from 'react';

// import { Container } from './styles';

function GameOver(props) {
   return (props.show ? <div id="gameOver">
            <span></span>

            <button class="btnGameOver" onClick={props.handleRestart} >Jogar novamente</button>


         </div>:Fragment)
         ;
}

export default GameOver;
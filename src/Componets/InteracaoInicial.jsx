import React, { Fragment } from 'react';

function interacaoInicial(props) {
   return (props.startShow ? <div id='interaçaoInicial'>
      <div id='box'>
         <h1>Jogo da Memória</h1>
         <button onClick={props.start} id='iniciarGame'>Iníciar Jogo</button>
      </div>
   </div> : Fragment

   );
}

export default interacaoInicial;
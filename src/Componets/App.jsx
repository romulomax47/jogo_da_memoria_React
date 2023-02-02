
import { useEffect, useState } from 'react';
import '../App.css'
import GameBoard from './GameBoard';
import GameOver from './GameOver';
import game from '../game/index';
import InteracaoInicial from './InteracaoInicial'

function MemorieCard() {

  const [showGame, setShowGame] = useState(false);
  const [cards, setCards] = useState([]);
  const [start, setStartGame] = useState(true)

  useEffect(() => {
    
    setCards(game.createCardfromSele());

  }, []);


  function restart() {
    setShowGame(false);
    game.clearCard();

    setCards(game.createCardfromSele());
  }

  function handleFlip(card) {
    
    game.flipCard(card.timeId, ()=> {

      setShowGame(true);
    }, () => {

      setCards([...game.cards])
    });


    setCards([...game.cards])
  }

  function startGame(){
    setStartGame(false)
  }

  return (
    <div>
      <InteracaoInicial start ={startGame} startShow = {start}></InteracaoInicial>
      <GameBoard handleFlip={handleFlip} cards={cards} />
      <GameOver show={showGame} handleRestart={restart} />

    </div>
  )
}

export default MemorieCard;

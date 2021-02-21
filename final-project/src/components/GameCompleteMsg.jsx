import React from 'react';
import { Image } from 'react-bootstrap';
import './GameCompleteMsg.css';

export default function GameCompleteMsg() {
  return (
    <div className="game-complete-msg">
      <Image src="images/game-complete-icon.png" className="game-complete-icon" />
        CONGRATS! You have successfully completed TypeCraft!
      <Image src="images/game-complete-icon.png" className="game-complete-icon" />
    </div>
  )
}
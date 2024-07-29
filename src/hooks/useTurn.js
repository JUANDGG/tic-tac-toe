import { useState } from "react";

const TURN = {
  X: "X",
  O: "O"
};

function useTurn() {
  
  const [turn, setTurn] = useState(TURN.X);

  const toggleTurn = () => {
    setTurn(prevTurn => (prevTurn === TURN.X ? TURN.O : TURN.X));
  };


  return { turn, toggleTurn };
}

export default useTurn;

import React, { useState } from "react";

export default function Square({
  id,
  setGameState,
  setCurrentPlayer,
  currentPlayer,

  win,
}) {
  const [icon, setIcon] = useState(null);

  function clicked() {
    if (win) {
        return 
    }
    if(!icon){
        if (currentPlayer == "circle") {
            setIcon("O");
         
          } else {
            setIcon("X");
          }
    }

    
    setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
    const myCurrentplayer=currentPlayer 
    setGameState((prev) => {
        const newState = [...prev];
        const rowIndex = Math.floor(id / 3);
        const colIndex = id % 3;
        newState[rowIndex][colIndex] = myCurrentplayer;
        return newState;
      });
      
  }

  return (
    <div
      onClick={clicked}
      className={`flex justify-center rounded-lg w-[100px] h-[100px] bg-slate-400 hover:${win ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <div className="text-8xl font-extrabold">{icon}</div>
    </div>
  );
}

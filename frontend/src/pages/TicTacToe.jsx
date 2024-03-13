import { useEffect, useState } from "react";
import axios from "axios";
import Square from "../components/Square";

export default function TicTacToe() {
  const rendoerForm = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  async function fetchData() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/tictactoe",
        {},
        {
          withCredentials: true,
        }
      );

      // Handle the response as needed
    } catch (error) {
      // Handle errors
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const [gameState,setGameState]=useState(rendoerForm)
  const [currentPlayer,setCurrentPlayer]=useState("circle")
  const [win,setWin]=useState(false)
  const [winnerTag,setWinnerTag]=useState("")

  function checkWin() {
    for (let row = 0; row < gameState.length; row++) {
      if (
        gameState[row][0] === gameState[row][1] &&
        gameState[row][0] === gameState[row][2]
      ) {
        setWinnerTag( gameState[row][0])
        setWin(true);
        return;
      }
    }
  
    for (let col = 0; col < gameState[0].length; col++) {
      if (
        gameState[0][col] === gameState[1][col] &&
        gameState[0][col] === gameState[2][col]
      ) {
        setWinnerTag( gameState[0][col])
        setWin(true);
        return;
      }
    }
    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[0][0] === gameState[2][2]
    ) {
      setWinnerTag( gameState[0][0])
      setWin(true);
      return;
    }
  
    if (
      gameState[0][2] === gameState[1][1] &&
      gameState[0][2] === gameState[2][0]
    ) {
      setWinnerTag( gameState[0][2])
      setWin(true);
      return;
    }
  }

  useEffect(()=>{
    checkWin()
    console.log(winnerTag)
  },[gameState,win])
  return (
    <div
      className="flex justify-center items-center w-full h-full bg-[#070F2B] text-white"
      style={{ minHeight: "100vh" }}
    >
 
      <div>
      <div>
        <div className="mb-[20px] flex justify-between w-[60wh]">
        <div className="w-[120px] box-shadow-inset h-89 bg-slate-400 rounded-lg "></div>

          <div className="w-[120px] h-[89px] bg-slate-400 rounded-lg "></div>
        </div>
      </div>
        <div className="ml-[2.7rem] flex justify-center text-4xl font-extrabold border-2 w-[14rem] bg-slate-400 border-white h-[4rem] pt-[.5rem] ">
          TicTacToe
        </div>

        <div className="my-[10px] grid grid-cols-3 gap-2">
          {rendoerForm.map((arr,rowIndex) =>
            arr.map((e,colIndex) => {
              return <Square
              id={rowIndex*3+colIndex} 
              key={rowIndex*3+colIndex} 
              setGameState={setGameState }
              currentPlayer={currentPlayer}
              setCurrentPlayer={setCurrentPlayer}
              win={win}
              />;
            })
          )}
        </div>
        <div>
         {win&& <h3>{winnerTag} is the winner</h3>}
        </div>
      </div>
    </div>
  );
}

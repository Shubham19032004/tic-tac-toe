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
  const [gameState, setGameState] = useState(rendoerForm);
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [win, setWin] = useState(false);
  const [winnerTag, setWinnerTag] = useState("");
  const [winningBox,setWinningBox]=useState()
  function checkWin() {
    for (let row = 0; row < gameState.length; row++) {
      if (
        gameState[row][0] === gameState[row][1] &&
        gameState[row][0] === gameState[row][2]
      ) {
        setWinnerTag(gameState[row][0]);
        setWinningBox([ gameState[row][0] , gameState[row][1] ,gameState[row][2]])
        setWin(true);
        return;
      }
    }

    for (let col = 0; col < gameState[0].length; col++) {
      if (
        gameState[0][col] === gameState[1][col] &&
        gameState[0][col] === gameState[2][col]
      ) {
        setWinnerTag(gameState[0][col]);
        setWinningBox([ 0 * 3 + col ,1 * 3 + col,2 * 3 + col])
        setWin(true);
        return;
      }
    }
    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[0][0] === gameState[2][2]
    ) {
      setWinnerTag(gameState[0][0]);
      setWinningBox([0*3+0 , 1*3+1 ,2*3+2])
      setWin(true);
      return;
    }

    if (
      gameState[0][2] === gameState[1][1] &&
      gameState[0][2] === gameState[2][0]
    ) {
      setWinnerTag(gameState[0][2]);
      setWinningBox([0*3+2 ,1*3+1 ,2*3+0])
      setWin(true);
      return;
    }
  }

  useEffect(() => {
    checkWin();
    console.log(winningBox)
  }, [gameState, win]);
  return (
    <div
      className="flex justify-center items-center w-full h-full bg-[#070F2B] text-white"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div>
          <div className="mb-[20px] flex justify-between w-[60wh]">
            <div className={`w-[120px] box-shadow-inset h-89 ${currentPlayer=="circle"?"bg-fuchsia-700":"bg-slate-400"}  rounded-lg `}>
              <div className=" ml-[2.3rem] mt-[0.6rem]  text-7xl font-extrabold">
                O
              </div>
            </div>

            <div className={`w-[120px] h-[89px] bg-slate-400  ${currentPlayer=="cross"?"bg-fuchsia-700":"bg-slate-400"} rounded-lg `}>
              <div className=" ml-[2.3rem] mt-[0.6rem] text-7xl font-extrabold">
                X
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[2.7rem] flex justify-center text-4xl font-extrabold border-2 w-[14rem] bg-slate-400 border-white h-[4rem] pt-[.5rem] ">
          TicTacToe
        </div>

        <div className="my-[10px] grid grid-cols-3 gap-2">
          {rendoerForm.map((arr, rowIndex) =>
            arr.map((e, colIndex) => {
              return (
                <Square
                  id={rowIndex * 3 + colIndex}
                  key={rowIndex * 3 + colIndex}
                  setGameState={setGameState}
                  currentPlayer={currentPlayer}
                  setCurrentPlayer={setCurrentPlayer}
                  win={win}
                  winningBox={winningBox}
                />
              );
            })
          )}
        </div>
        <div>{win && <h3>{winnerTag} is the winner</h3>}</div>
      </div>
    </div>
  );
}

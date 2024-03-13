import { useEffect, useState } from "react";
import axios from "axios";
import Square from "../components/Square";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

export default function TicTacToe() {
  const navigate = useNavigate();
  const renderForm = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [gameState, setGameState] = useState(renderForm);
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [win, setWin] = useState(false);
  const [winnerTag, setWinnerTag] = useState("");
  const [winningBox, setWinningBox] = useState();
  const [playOnline, setPlayOline] = useState(false);
  const [socket, setSocket] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/tictactoe",
        {},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized request. Redirecting to signup.");
        navigate("/signup");
      } else {
        console.error("Error fetching data:", error);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function checkWin() {
    for (let row = 0; row < gameState.length; row++) {
      if (
        gameState[row][0] === gameState[row][1] &&
        gameState[row][0] === gameState[row][2]
      ) {
        setWinnerTag(gameState[row][0]);
        setWinningBox([
          gameState[row][0],
          gameState[row][1],
          gameState[row][2],
        ]);
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
        setWinningBox([0 * 3 + col, 1 * 3 + col, 2 * 3 + col]);
        setWin(true);
        return;
      }
    }
    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[0][0] === gameState[2][2]
    ) {
      setWinnerTag(gameState[0][0]);
      setWinningBox([0 * 3 + 0, 1 * 3 + 1, 2 * 3 + 2]);
      setWin(true);
      return;
    }

    if (
      gameState[0][2] === gameState[1][1] &&
      gameState[0][2] === gameState[2][0]
    ) {
      setWinnerTag(gameState[0][2]);
      setWinningBox([0 * 3 + 2, 1 * 3 + 1, 2 * 3 + 0]);
      setWin(true);
      return;
    }
  }

  useEffect(() => {
    checkWin();
  }, [gameState, win]);

async function play() {
  try {
    const newSocket = io("http://localhost:8000", {
      autoConnect: true,
    });

    newSocket.on("connect", () => {
      console.log("Connected to the server");
    });

    setSocket(newSocket);
    console.log("Socket connected:", newSocket);
  } catch (error) {
    console.error("Error connecting to the server:", error);
  }
}
  if (!playOnline) {
    return (
      <div
        className="flex justify-center items-center w-full h-full m-auto bg-[#070F2B] text-white"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <button
            onClick={play}
            className="w-[12rem] h-[4rem] bg-slate-400 text-4xl font-bold rounded-lg"
          >
            Play
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex justify-center items-center w-full h-full bg-[#070F2B] text-white "
      style={{ minHeight: "100vh" }}
    >
      <div>
        <div>
          <div className="mb-[20px] flex justify-between w-[60wh]">
            <div
              className={`w-[120px] box-shadow-inset h-89 ${
                currentPlayer == "circle" ? "bg-fuchsia-700" : "bg-slate-400"
              }  rounded-lg `}
            >
              <div className=" ml-[2.3rem] mt-[0.6rem]  text-7xl font-extrabold">
                O
              </div>
            </div>

            <div
              className={`w-[120px] h-[89px] bg-slate-400  ${
                currentPlayer == "cross" ? "bg-fuchsia-700" : "bg-slate-400"
              } rounded-lg `}
            >
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
          {renderForm.map((arr, rowIndex) =>
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
        <div className="flex justify-center">
          {win && (
            <h3 className="text-4xl mt-[10px] font-bold">
              {winnerTag} is the winner
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

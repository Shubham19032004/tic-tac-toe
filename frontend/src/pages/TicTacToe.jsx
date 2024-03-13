import { useEffect } from "react";
import axios from "axios";

export default function TicTacToe() {
  async function fetchData() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/tictactoe",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);

      // Handle the response as needed
    } catch (error) {
      // Handle errors
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>TicTacToe</div>;
}

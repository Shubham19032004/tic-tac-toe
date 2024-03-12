import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function TicTacToe() {
  const navigate = useNavigate();

  async function fetchData(navigate) {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/tictactoe", {}, {
        withCredentials: true,
      })
      // Check for a successful response (status code 2xx)
      if (response.status === 200) {
        // Handle successful response
        console.log('TicTacToe data fetched successfully');
      } else {
        // Handle other status codes
        console.log(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      // Check for a 409 status code in the error response
      if (error.response && error.response.status === 401) {
        navigate('/signup');
      } else {
        // Handle other errors
        console.error('Error fetching data:', error);
      }
    }
  }
  useEffect(() => {
    fetchData(navigate);
  }, []);

  return (
    <div>TicTacToe</div>
  );
}

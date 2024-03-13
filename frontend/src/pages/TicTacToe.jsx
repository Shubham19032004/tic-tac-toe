import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function TicTacToe() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('accessToken') || '';
  
  async function fetchData() {
    try {
      const config = {
        method: 'GET',
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axios.post('http://localhost:8080/users/me', config);

      if (response.status === 200) {
        console.log('TicTacToe data fetched successfully');
      } else {
        // Handle other status codes
        console.log(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized request. Redirecting to signup.');
        navigate('/signup');
      } else {
        // Handle other errors
        console.error('Error fetching data:', error);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [token, navigate]);

  return <div>TicTacToe</div>;
}

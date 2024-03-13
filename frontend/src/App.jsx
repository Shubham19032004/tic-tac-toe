import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import TicTacToe from './pages/TicTacToe.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

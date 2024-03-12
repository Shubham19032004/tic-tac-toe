import './App.css';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Signin from './pages/Signin';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

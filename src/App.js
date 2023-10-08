import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Home.js';
import Login from './Login.js';

function App() {
  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

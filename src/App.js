import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Home.js';
import Login from './Login.js';
import Microfinances from './Microfinances';

function App() {
  
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (

    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <Routes>

        <Route path='/' element={isLoggedIn ? <Home /> : <Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/microfinances' element={<Microfinances/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './Home.css';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/');
        }
      }, [isLoggedIn, navigate]);
    return(
        <div className='page'>
          <div className='Microfinances'>
            <h3>Microfinances</h3>
            <p>Invest in agriculture with as little finance you wish</p>
          
          </div>
          <div className='Microfinances'>
          <h3>Marketplace</h3>
          </div>
          <div className='Microfinances'>
          <h3>Agrotourism</h3>
          </div>
        </div>
    )
}

export default Home;
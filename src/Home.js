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
        <>
        You are in home
        </>
    )
}

export default Home;
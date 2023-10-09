import './Login.css'
import React,{useState,useEffect} from 'react';
import {db} from './firebase';
import { get, ref } from 'firebase/database';
import Home from './Home';
import { useNavigate } from 'react-router-dom';


let name,value;


function Login(){
    
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
          navigate('/home');
        }
      }, [isLoggedIn, navigate]);

    const [userData,setUserData] = useState({
        userNumber: "",
        userPass: "",
    });
    
    function postUserData(event){
        name=event.target.name;
        value=event.target.value;
    
        setUserData({...userData,[name]:value});
    }
    
    async function submitData(event){
        event.preventDefault();
        const { userNumber, userPass } = userData;
        console.log('userNumber:', userNumber);
        console.log('userPass:', userPass);

        try{
            const userRef = ref(db, `Users/${userNumber}`);
            const snapshot = await get(userRef);
             if (snapshot.exists()) {
              const userData = snapshot.val();
              if (userData.password === userPass) {
                setUserData({
                    userNumber: '',
                    userPass: '',
                  });
                  localStorage.setItem('isLoggedIn','true');
                 navigate('/Home');
                
              //  alert('Login successful');
              } else {
                alert('Incorrect password');
              }
            } else {
              alert('User does not exist');
            }
        }catch(error){
            alert('error lmao');
        }
        
        setUserData({
            userNumber: '',
            userPass: '',
          });
    }

    return(
        <div className='Page'>
        <div className='loginBox'>
            <center>
            <h4>Login to Bigha</h4>
            </center>
            <form className='form' method='POST'>
                <p>&nbsp;&nbsp;Mobile  </p>
                <input type='mobile' name='userNumber' value={userData.userNumber} onChange={postUserData}/>
                <p>&nbsp;&nbsp;Password</p>
                <input type='password'name='userPass' value={userData.userPass} onChange={postUserData}/> 
                <input style={{margin:'10% 0% 20% 20%' , backgroundColor:'beige', width:'60%' }} type='submit' onClick={submitData}/>
            </form>
        </div>
        </div>
    )
}
export default Login;
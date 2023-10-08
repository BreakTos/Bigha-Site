import './Login.css'
import React,{useState} from 'react';


let name,value;


function Login(){
    const [userData,setUserData] = useState({
        userNumber: "",
        userPass: "",
    });
    
    function postUserData(event){
        name=event.target.name;
        value=event.target.value;
    
        setUserData({...userData,[name]:value});
    }
    
    function submitData(event){
        event.preventDefault();
        
        
    }

    return(
        <>
        <div className='loginBox'>
            <center>
            <h4>Login to Bigha</h4>
            </center>
            <form className='form' method='POST'>
                <p>&nbsp;&nbsp;Enter mobile number</p>
                <input type='mobile' name='userNumber' value={userData.userNumber} onChange={postUserData}/>
                <p>&nbsp;&nbsp;Enter Password</p>
                <input type='password'name='userPass' value={userData.userPass} onChange={postUserData}/> 
                <input style={{margin:'10% 30%' , backgroundColor:'beige' }} type='submit' onClick={submitData}/>
            </form>
        </div>
        </>
    )
}
export default Login;
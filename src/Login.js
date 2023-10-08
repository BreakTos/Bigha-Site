import './Login.css'

function Login(){
    return(
        <>
        <div className='loginBox'>
            <center>
            <h4>Login to Bigha</h4>
            </center>
            <form className='form'>
                <p>&nbsp;&nbsp;Enter mobile number</p>
                <input type='mobile'/>
                <p>&nbsp;&nbsp;Enter Password</p>
                <input type='password'/> 
                <input style={{margin:'10% 30%' , backgroundColor:'beige' }} type='submit'/>
            </form>
        </div>
        </>
    )
}
export default Login;
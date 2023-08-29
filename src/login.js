import React , {useState}from  "react";
import './login.css';
import { useNavigate } from "react-router-dom";



const Login = () =>{
    let navigate = useNavigate();  
const [enter, setEnter] =useState({
    username:"",
    password:"",
});
const {username,password} = enter;
const onChange = e =>{
    setEnter({...enter,[e.target.name]: [e.target.value]})
}

const SubmitHandler = e =>{
    e.preventDefault();
    console.log(enter);
   navigate('/homepage');
}


    {/*const Change = () =>{
     var UserName = document.getElementById('Name').value ;
     var Password = document.getElementById('password').value ; 
     if( UserName == "Vallamreddy Nagalakshmi" && Password == 123456){
        alert('sucessfully login');
     }
     else{
        alert('try again');
     }

    }*/}
    return(

        <div>

<div className="total">
<form onSubmit={SubmitHandler}>
    
<h2 style ={{color:"gray"}}>Sign in</h2><br/>
<h5 style = {{color:"gray"}}>Please login into system to access your tasks.</h5><br/><br/>

<input type="text" id = "Name" value ={username} name ="username" onChange={onChange} placeholder="User Name"/><br/><br/>


<input type = "password" id = "password"   value = {password} name ="password" onChange = {onChange} placeholder = " Password"/><br/><br/>
<p style={{ fontSize:"15px", color:"blue", textAlign:'center'}}>Forgot Password?</p><br/><br/>
<input type ="submit" value = "Login"/><br/><br/>



</form>

</div>
        </div>
        
    )

}
export default Login;
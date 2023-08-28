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
    
<h1>LOGIN</h1>
<label for = "UserName">UserName:</label><br/>
<input type="text" id = "Name" value ={username} name ="username" onChange={onChange} placeholder="User Name"/><br/>

<label for="Password"> Password</label><br/>
<input type = "password" id = "password"   value = {password} name ="password" onChange = {onChange} placeholder = " Password"/><br/>
<p style={{ fontSize:"10px", textDecoration:"underline", color:"black"}}>Forgot Password?</p><br/><br/>
<input type ="submit" value = "Login"/>

</form>

</div>
        </div>
        
    )

}
export default Login;
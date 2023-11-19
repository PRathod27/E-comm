import React, { useState } from 'react'
import email_img from '../../assets/email.png'
import password_img from '../../assets/password.png'
import person_img from '../../assets/person.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Auth.css'

const Auth = () => {

    const[action,setAction] = useState(false);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlesubmit = (e) => {
        e.preventDefault();
        if(setAction === "Sign Up"){
            if(!name && email && password){
                alert("Enter the values.");
            }
        }
        if(setAction === "Login"){
            if(!email&&!password){
                alert("Enter the values.");
            }
            dispatch(navigate)
        }

    }

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='unerderline'> </div>
        </div> 
            <div className="inputs">
                {action === "Login"?<div></div>: <div className='input'>
                        <img src= {person_img} alt='person_img'  />
                        <input type='text'  placeholder='Name' value={name} onChange={(e) => {
                  setName(e.target.value) ;
                }}/>
                    </div>}
                    <div className='input'>
                        <img src = {email_img} alt='email_img'/>
                        <input type='email'  placeholder='Email' value={email}  onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
                    </div>
                    <div className='input'>
                        <img src= {password_img} alt='pass_img'/>
                        <input type='password' placeholder='Password' value={password} onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
                    </div>
                </div>    
                <div className='submit-container'>
                    <div className={action === 'Login'? "submit gray":"submit"} onClick={() => {
                        setAction("Sign Up")
                    }}>
                        Sign up    
                    </div> 
                    <div className={action === "Sign Up"? "submit gray":"submit"} onClick={() => {
                        setAction("Login")
                    }}>
                        Log in   
                    </div>    
                </div>    
    </div>
  )
}

export default Auth
import React,{useState} from 'react';
import "./LoginForm.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const loginHandler=(e)=>{
    e.preventDefault()
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user= userCredential.user;
    // ...
    navigate("/home");
  })
  .catch((error) => {
    alert(error.message)
  });

  }
  return (
    <div className='LoginForm'>
        <div className='loginform-input'>
            <h1>Welcome to your professional community</h1>
            <form className='forms'>
                <input type="email" value={email}onChange={(e)=>setEmail(e.target.value)} placeholder='EMAIL'/>
                <input type="password"onChange={(e)=>setPassword(e.target.value)} placeholder='******'/> 
                <button onClick={loginHandler} type="submit">Sign In</button>
            </form>
            <h4>Dont have a account ? <Link to="register"><span> Create Account</span></Link></h4>
        </div>
        <div className='loginform-img'>
            <img src="https://edportal.harvard.edu/sites/hwpi.harvard.edu/files/styles/os_files_xxlarge/public/hep/files/linkedin_flex.png?m=1641489819&itok=EO6Uk51B" alt='img'/>
        </div>

    </div>
  )
}

export default LoginForm
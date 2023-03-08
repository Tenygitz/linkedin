import React, {useState } from 'react';
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {db} from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import {storage} from "../firebase";
import {  ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {auth} from "../firebase";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from"react-redux";
import {login} from "../redux/userSlice"
import LoginPage from './LoginPage';
import "./RegisterForm.css"
import Footer from './Footer';

function RegisterForm() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [displayName,setdisplayName]=useState("")
  const [nameError, setNameError] = useState('');
  const [email,setEmail]=useState("")
  const [emailError, setEmailError] = useState('');
  const [phone,setPhone]=useState("")
  const [phoneError, setPhoneError] = useState('');
  const [password,setPassword]=useState("")
  const [passwordError, setPasswordError] = useState('');
  const [upload,setUpload]=useState(null)
  console.log("files ",upload)
   const registerHandler=async(e)=>{
    e.preventDefault()
     
    try{
      const res=await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage,`${ displayName}`);
     
      await uploadBytesResumable(storageRef, upload).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid),dispatch(login( {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
              phone:phone,
              password:password
            })));
           
            navigate("/home");
          
          } catch (err) {
            alert(err.message);
        
          }
        });
      });
    } catch (err) {
      alert(err.message);
      
  
    }
  };

  return (<><LoginPage/>
    <div className='SignUpPage'>
    <div className='Signup-container'>
        <h1>Create Account</h1>
        <form className='forminput'>
            <h4>Your name</h4>
            <input type="text" onChange={(e)=>{setdisplayName(e.target.value);if (!e.target.validity.valid) {
    setNameError('Username should be 3-8 characters and should not include any special character');
  } else {
    setNameError('')}
  }} placeholder='Your name' required pattern="^[A-Za-z0-9]{3,8}$"  autoComplete="off"/>
            { nameError && <span>{nameError}</span> }
            
            <h4>Mobile number</h4>
            <input  type="tel"onChange={(e)=>{setPhone(e.target.value);if (!e.target.validity.valid) {
    setPhoneError('number should contain 10 numbers');
  } else {
    setPhoneError('')}
  }} placeholder='Your Phone Number'required pattern="[0-9]{10}" autoComplete="off"/>
            { phoneError && <span>{phoneError}</span> }
            <h4>Email</h4>
            <input   type="email"onChange={(e)=>{setEmail(e.target.value);if (!e.target.validity.valid) {
    setEmailError('It should be a valid email address');
  } else {
    setEmailError('')}
  }}  placeholder='Your email' required autoComplete="off"/>
             { emailError && <span>{emailError}</span> }

            <h4>Upload File</h4>
            <input type="file"  onChange={(e)=>setUpload(e.target.files[0])} required autoComplete="off"/>
            <span>Please upload the Profile picture</span>
            <h4>Password</h4>
            <input  type="password"onChange={(e)=>{setPassword(e.target.value);if (!e.target.validity.valid) {
    setPasswordError('Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!');
  } else {
    setPasswordError('')}
  }} placeholder='******'required pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$" autoComplete="off"/>
               { passwordError && <span>{passwordError}</span> }
            <button disabled={nameError || phoneError || emailError || passwordError} onClick={registerHandler} type="submit">Sign In</button>
        </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default RegisterForm
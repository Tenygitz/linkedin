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

function RegisterForm() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [displayName,setdisplayName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
  const[upload,setUpload]=useState(null)
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
    <img className='LoginPage-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt="linkdinlogo" />
    <div className='Signup-container'>
        <h1>Create Account</h1>
        <form>
            <h4>Your name</h4>
            <input type="text" onChange={(e)=>setdisplayName(e.target.value)} placeholder='Your name' required/>
            <h4>Mobile number</h4>
            <input  type="number"onChange={(e)=>setPhone(e.target.value)} placeholder='Your Phone Number'required/>
            <h4>Email</h4>
            <input   type="email"onChange={(e)=>setEmail(e.target.value)}  placeholder='Your email'required/>
            <h4>Upload File</h4>
            <input type="file"  onChange={(e)=>setUpload(e.target.files[0])} required/>
            <h4>Password</h4>
            <input  type="password"onChange={(e)=>setPassword(e.target.value)}  placeholder='******'required/>
            <button onClick={registerHandler} type="submit">Sign In</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default RegisterForm
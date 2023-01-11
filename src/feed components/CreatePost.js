import React,{useState} from 'react';
import "./CreatePost.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Avatar } from '@mui/material';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useSelector } from 'react-redux';
import { collection, addDoc , orderBy,serverTimestamp} from "firebase/firestore";
import { db } from '../firebase';
import {storage} from "../firebase";
import {  ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import {v4} from "uuid"

function CreatePost({setOpen,setPosts}) {
    const {user}=useSelector((state)=>state.user)
    const [input,setInput]= useState("")
    const [image, setImage] = useState(null);
    const [video,setVideo]=useState(null)
    
    
   
    console.log('ddd',typeof posts)
    console.log('picture',image)
    

    const sendPost=async(e)=>{
        e.preventDefault();
        
        if (image) {
          const storageRef = ref(storage,`images/${image.name + v4()}`);
          await uploadBytesResumable(storageRef, image);
          const imageDownloadURL = await getDownloadURL(storageRef);
          const docRef = await addDoc(collection(db, "posts"),{
            name:user.displayName,
            email:user.email,
            message:input,
            images:imageDownloadURL,
            photo:user.photoURL,
            timestamp:serverTimestamp(),
          },orderBy("timestamp","dec"))
          console.log(docRef);
          setPosts(" ")
          
        } else if (video) {
          const videoRef = ref(storage,`videos/${video.name + v4()}`);
          await uploadBytesResumable(videoRef, video);
          const videoDownloadURL = await getDownloadURL(videoRef);
        
          const docRef = await addDoc(collection(db, "posts"),{
            name:user.displayName,
            email:user.email,
            message:input,
            video:videoDownloadURL,
            photo:user.photoURL,
            timestamp:serverTimestamp(),
          },orderBy("timestamp","dec"))
          console.log(docRef);
          setPosts(" ")
        }
        
       
    
     
        
       }
    
  return (
    <div className='CreatePost'>
        <div className='createpost-container'>
       <div className='createpost-head'>
        <h1>Create a Post</h1>
        <HighlightOffIcon  onClick={()=>setOpen(false)} className='closebtn'/>
       </div>
       <hr/>
       <div className='createpost-content'>
        <Avatar src={user.photoURL}>{user?.email[0]}</Avatar>
        <div className='createpost-info'>
                <h3>{user.displayName}</h3>
                <h5>{user.email}</h5>
            </div>
       </div>
       <form  >
        <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder='what do you want to talk about?'></textarea>
        <input   type="file"  id="file" style={{display:"none"}} onChange={(e) => setImage(e.target.files[0])}/>
        <p> <label htmlFor='file'>Select the image</label></p>
        {
         image && <img className='uploadImg' src={URL.createObjectURL(image)} alt="image-upload"/>}
         
        
        <>
        <input type="file"  id="video"placeholder='upload video'  onChange={(e) => setVideo(e.target.files[0])}/>
        
        { video &&
           <video controls  width={"100%"} heigth={"200px"} src={URL.createObjectURL(video)} />}
        
       
       </>
       
       <div className='createpost-action'>
        <div className='createpost-icon'>
        <label htmlFor='file'>
       <PhotoSizeSelectActualIcon/> </label>
        <label htmlFor='video'>
       <YouTubeIcon/></label></div>
       <button type='submit'  onClick={sendPost } className='postBtn'>Post</button>
       </div></form>
    </div></div>
  )
}

export default CreatePost
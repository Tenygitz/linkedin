import React, { useState,useEffect } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import { Avatar } from '@mui/material';
import FeedOptions from '../feed components/FeedOptions';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedIcon from '@mui/icons-material/Feed';
import Post from '../feed components/Post';
import { db } from '../firebase';
import {useSelector} from"react-redux";
import { collection, getDocs} from "firebase/firestore"; 
import FlipMove from 'react-flip-move';
import CreatePost from '../feed components/CreatePost';


function Feed() {
  const [open,setOpen]=useState(false)
  const {user}=useSelector((state)=>state.user)
  const [posts,setPosts]=useState([])
  
  console.log('ddd',typeof posts)

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) =>
        setPosts(prevPosts => [...prevPosts, { id: doc.id, data: doc.data() }])
      );
    };
    fetchData();
  }, []);
  
  
 
  
  return (
    <div className='Feed'>
     <div className='Feed-container'>
      <div className='Feed-containers'>
      <Avatar src={user.photoURL}></Avatar>
    
      <div className='Feed-input'>
        <CreateIcon/>
        <form>
          <input type="text" onClick={()=>setOpen(!open)} placeholder='Post'/>
          <button  type="submit">Send</button>
        </form>
      </div>
      </div>{
        open &&<CreatePost setOpen={setOpen} setPosts={setPosts} />
      }
      
       <div className='Feed-upload'>
        <FeedOptions Icon={PhotoSizeSelectActualIcon} title="Photo" color="#378fe9"/>
        <FeedOptions Icon={YouTubeIcon} title="Video"color="#5f9b41"/>
        <FeedOptions Icon={EventNoteIcon} title="Event" color="#c37d16"/>
        <FeedOptions Icon={FeedIcon} title="Article" color="#e16745"/>
       </div>
     </div>
     <FlipMove>
     {posts.map(({id, data :{name,email,message,photo}})=>{
          return <Post key={id} name={name} describe={email} message={message} photo={photo}/>
})}
     </FlipMove>
    </div>
  )
}

export default Feed
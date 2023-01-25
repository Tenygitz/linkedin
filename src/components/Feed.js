import React, { useState,useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Avatar } from '@mui/material';
import { orderBy} from "firebase/firestore";
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
import "./Feed.css";


function Feed() {
  const [open,setOpen]=useState(false)
  const {user}=useSelector((state)=>state.user)
  const [posts,setPosts]=useState([])
  
  console.log('ddd',typeof posts)
  

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"),
      orderBy("timestamp","dec"));
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
      <Avatar src={user?.photoURL}></Avatar>
    
      <div className='Feed-input' style={{ backgroundColor: "rgba(240, 234, 234, 0.986)"}}>
        <CreateIcon/>
        <form>
          <input type="text"  style={{ backgroundColor: "rgba(240, 234, 234, 0.986)"}} onClick={()=>setOpen(!open)} placeholder='Post'/>
        
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
     { posts?.map(({id, data :{name,email,message,photo,images,video ,timestamp}})=>{
          return <Post id={id} name={name} describe={email} message={message} photo={photo} images={images} video={video}timestamp={timestamp} />
      })}   
     </FlipMove>
    </div>
  )
}

export default Feed
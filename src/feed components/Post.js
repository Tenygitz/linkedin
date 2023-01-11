import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react';
import {useSelector} from"react-redux";
import ReactPlayer from 'react-player';
import InputButton from './InputButton';
import "./Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import SendIcon from '@mui/icons-material/Send';

const Post= forwardRef(({name,describe,message,photo,images,video},ref) =>{
  const {user}=useSelector((state)=>state.user)
  console.log("video",video)
  return (
    <div ref={ref} className='Post'>
        <div className='post-header'>
            <Avatar src={photo}>{user.email[0]}</Avatar>
            <div className='post-info'>
                <h1>{name}</h1>
                <h5>{describe}</h5>
            </div>
        </div>
        <div className="post-body">
            <p>{message}</p>
            {  images?(  
             <img src={images} alt="images"/>):null
             }
             { video? (
             <video controls autoPlay={false} src={video} alt="video"  />):null
            }
            </div>
            <div className="post-button">
                <InputButton Icon={ThumbUpIcon} title="Likes"/>
                <InputButton Icon={MessageIcon} title="Comment"/>
                <InputButton Icon={ScreenShareIcon} title="Share"/>
                <InputButton Icon={SendIcon} title="Repost"/>
            </div>
    </div>
  )
})

export default Post
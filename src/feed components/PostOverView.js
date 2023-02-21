import React from 'react';
import Moment from 'react-moment';
import { Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import SendIcon from '@mui/icons-material/Send';
import {useSelector} from"react-redux";
import InputButton from './InputButton';
import "./PostOverView.css"

function PostOverView({name,describe,message,photo,images,timestamp,setOpen,likes,isLikes,likeHandler,onSubmitCommend,commendValue,setInputCommend,inputCommend}) {
    const {user}=useSelector((state)=>state.user)
      
  return (
    <div className='PostOverView'>
      <div className='PostOverView-container'>
        <div className='PostOverView-image'>
        <img src={images} />
        </div>
        <div className='PostOverView-body'>
        <div className='post-header'>
            <Avatar  src={photo}></Avatar>
            <div className='post-info'>
                <h1>{name}</h1>
                <h5>{describe}</h5>
                <Moment fromNow style={{color:"grey"}}>
                {timestamp.toDate()}
                </Moment>
            </div>
            <CloseIcon className='closebtns' onClick={()=>setOpen(false)}/>
        </div> 
        <p>{message}</p>
        <div className="post-buttonNumbers">
              <div className='post-buttonLikes'>
             <ThumbUpIcon className='LikesButton' />
             <span>{likes.length} People liked</span></div>
             <div  className='post-buttons'>
              <p>{commendValue.length} commets</p>
             </div>
            </div>
            <hr/>
            <div className="post-button">
              <div onClick={likeHandler} className={isLikes ? 'liked' : 'unliked'} >
                <InputButton className="post-likesbtn" Icon={ThumbUpIcon} title="Likes"/></div>
                <div className="Comments-button">
                <InputButton Icon={MessageIcon} title="Comment"/></div>
                <InputButton Icon={ScreenShareIcon} title="Share"/>
                <InputButton Icon={SendIcon} title="Repost"/>
            </div>
            <div className='Comment-containers'>
              <div className='Comment-input'>
            <Avatar src={user?.photoURL}>{user?.email[0]} </Avatar>
            <form className="Comment-inputField" onSubmit={onSubmitCommend}>
              <input className='inputfields-comment'  value={inputCommend}   onChange={(e)=>setInputCommend(e.target.value)} type="text" placeholder='Add a Commend...'/>
              </form>
              </div>
              { commendValue.length>0 && commendValue.map((item)=>(<div key={item.id} className='Comment-info'>
               <Avatar   src={item.data().photo}></Avatar>
               <div className='Comment-infoContainers'>
              <div className='Comment-infoItems'>
                <h3>{item.data().name}</h3>
               <h5>{item.data().describe}</h5>
               <p>{item.data().comments}</p></div>
               <div className='Moment'>
               <Moment fromNow>
                {item.data().timestamp?.toDate()}
              </Moment></div>
              </div>
              </div>))}
            </div>
        </div>

      </div>
    </div>
  )
}

export default PostOverView
import { Avatar } from '@mui/material';
import React,{forwardRef,useState,useEffect} from 'react';
import {useSelector} from"react-redux";
import InputButton from './InputButton';
import { collection,addDoc ,orderBy,serverTimestamp, query, onSnapshot,deleteDoc} from "firebase/firestore";
import { db } from '../firebase';
import Moment from 'react-moment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import SendIcon from '@mui/icons-material/Send';
import "./Post.css";

const Post= forwardRef(({id,name,describe,message,photo,images,video,timestamp},ref) =>{
  const {user}=useSelector((state)=>state.user)
  const [Tlikes,SetTLikes] =useState([])
  const [isLikes,SetIsLikes] =useState(false)
  const [commend,SetCommend] =useState(false)
  const [commendValue,setCommendValue]=useState([])
  const [inputCommend,setInputCommend]= useState("")

  console.log("com ",inputCommend)

  useEffect(() => 
   onSnapshot(
      query(
        collection(db,"posts",id,"comments")
      ),
      (snapshot)=>setCommendValue(snapshot.docs)
   ),
  [db,id])

  useEffect(() => 
  onSnapshot(
     query(
       collection(db,"posts",id,"likes")
     ),
     (snapshot)=>SetTLikes(snapshot.docs)
  ),
 [db,id])

 useEffect(() => {
  SetIsLikes(
    Tlikes.findIndex((like)=>like.id===user?.uid) !== -1)
    console.log("users uid",user.uid)
 },

[Tlikes])

  const likeHandler=async()=>{
    if(isLikes){
       await deleteDoc(collection(db, "posts",id,"likes"))
    }else{
    const docRef = await addDoc(collection(db, "posts",id,"likes"),{
      name,
    })
    SetIsLikes(!isLikes)
     
}
  }
  const commentHandler=()=>{
  SetCommend(true)
  }

  const onSubmitCommend=async(e)=>{
     e.preventDefault()
     
     setInputCommend("")
     const docRef = await addDoc(collection(db, "posts",id,"comments"),{
            comments:inputCommend,
            name:user.displayName,
            describe:user.email,
            photo:user.photoURL,
            timestamp:serverTimestamp(),
           
     })
     
     console.log("eeeee",docRef.id);
  }
  console.log("haslked",isLikes)
  console.log("likes",Tlikes)
  console.log("commeds",commendValue)
  return (
    <div ref={ref} key={id} className='Post'>
        <div className='post-header'>
            <Avatar src={photo}>{user?.email[0]}</Avatar>
            <div className='post-info'>
                <h1>{name}</h1>
                <h5>{describe}</h5>
                <Moment fromNow style={{color:"grey"}}>
                {timestamp.toDate()}
                </Moment>
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
            <div className="post-buttonNumbers">
              <div className='post-buttonLikes'>
             <ThumbUpIcon className='LikesButton' />
             <span>{Tlikes.length} People liked</span></div>
             <div  className='post-buttons'>
              <p>{commendValue.length} commets</p>
             </div>
            </div>
            <hr/>
            <div className="post-button">
              <div onClick={likeHandler} >
                <InputButton  style={{ backgroundColor: isLikes && 'blue' }} Icon={ThumbUpIcon} title="Likes"/></div>
                <div onClick={commentHandler} className="Comments-button">
                <InputButton Icon={MessageIcon} title="Comment"/></div>
                <InputButton Icon={ScreenShareIcon} title="Share"/>
                <InputButton Icon={SendIcon} title="Repost"/>
            </div>{ commend &&
            <div className='Comment-container'>
              <div className='Comment-input'>
            <Avatar src={user?.photoURL}>{user.email[0]} </Avatar>
            <form className="Comment-inputField" onSubmit={onSubmitCommend}>
              <input value={inputCommend}   onChange={(e)=>setInputCommend(e.target.value)} type="text" placeholder='Add a Commend...'/>
              </form>
              </div>
              { commendValue.length>0 && commendValue.map((item)=>(<div className='Comment-info'>
               <Avatar  key={item.id} src={item.data().photo}></Avatar>
               <div className='Comment-infoContainer'>
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
            </div>}
    </div>
  )
})

export default Post
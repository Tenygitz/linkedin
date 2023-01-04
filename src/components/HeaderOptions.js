import React from 'react';
import "./HeaderOptions.css";
import { Avatar } from '@mui/material';

function HeaderOptions({Icon,title,avatar}) {
  
 
  return (
    <div   className='HeaderOptions'>
     {Icon &&<Icon className="materialIcon" />}
     
     {avatar && <Avatar className="avatarImg"src={avatar}/>}
     <h1 className="title">{title} </h1>
    
    </div>
  )
}

export default HeaderOptions
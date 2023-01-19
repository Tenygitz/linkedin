import React from 'react';
import { Avatar } from '@mui/material';
import "./HeaderOptions.css";

function HeaderOptions({Icon,title,avatar}) {
  
 
  return (
    <div className='HeaderOptions'>
     {Icon &&<Icon className="materialIcon" />}
     {avatar && <Avatar className="avatarImg"src={avatar}/>}
     <h1 className="title">{title} </h1>
    </div>
  )
}

export default HeaderOptions
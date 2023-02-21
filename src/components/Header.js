import React, { useState } from 'react';
import {useSelector} from"react-redux";
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AppsIcon from '@mui/icons-material/Apps';
import SignOut from './SignOut';
import "./Header.css";

function Header() {
  const {user}=useSelector((state)=>state.user)
  const [open,setOpen]=useState(false)
  const navigate=useNavigate()
  return (
    <div className='header'>
      <div className='header-left'>
        <img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" onClick={()=>navigate("/home")} alt="logo"/>
          <div className='searchbar'>
            <SearchIcon />
            <input type="text" placeholder='Search'/>
        </div>
    </div>
    <div className='header-middle'>
      <div onClick={()=>navigate("/home")} >
        <HeaderOptions Icon={HomeIcon}  title="Home"/></div>
        <div>
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/></div>
        <div>
        <HeaderOptions Icon={BusinessCenterIcon} title="Job"/></div>
        <div>
        <HeaderOptions Icon={TextsmsIcon} title="Messages"/></div>
        <div>
        <HeaderOptions Icon={NotificationAddIcon} title="Notifications"/></div>
        <div  onClick={()=>setOpen(!open)}>
        <HeaderOptions avatar={user?.photoURL} title="Me"/>
        </div>
        {open &&
      <SignOut/>
        }
    </div>
    <div className="header-right">
        <div className='work'>
           <AppsIcon/>
           <h1>Work</h1>
        </div>
       <h2>Try Premium free </h2>
    </div>
    </div>
  )
}

export default Header
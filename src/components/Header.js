import React, { useState } from 'react';
import {useSelector} from"react-redux";
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
  return (
    <div className='header'>
      <div className='header-left'>
        <img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" alt="logo"/>
          <div className='searchbar'>
            <SearchIcon />
            <input type="text" placeholder='Search'/>
        </div>
    </div>
    <div className='header-middle'>
        <HeaderOptions Icon={HomeIcon} title="Home"/>
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOptions Icon={BusinessCenterIcon} title="Job"/>
        <HeaderOptions Icon={TextsmsIcon} title="Messages"/>
        <HeaderOptions Icon={NotificationAddIcon} title="Notifications"/>
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
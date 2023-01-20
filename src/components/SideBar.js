import { Avatar } from '@mui/material';
import React from 'react';
import {useSelector} from"react-redux";
import "./SideBar.css"

function SideBar() {
  const {user}=useSelector((state)=>state.user)
  console.log("ffffff",user?.photoURL);

  const recentItem=(topic)=>(
    <div className='sideBar-recentItem'>
      <span className='sideBar-hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  
  return (
    <div className='SideBar'>
      <div className="SideBar-top">
        <img className="banner"src='https://www.avidcareerist.com/wp-content/uploads/2015/09/Dont-Use-This-LinkedIn-Banner-1.png'/>
        <Avatar className="sideBar-avatar" src={user?.photoURL}></Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sideBar-stats">
        <div className='sideBar-stat'>
          <p>Who Viewed Your Profile</p>
          <p className='sideBar-stat-number'>44355</p>
        </div>
        <div className='sideBar-stat'>
        <p>Viewed Your Post</p>
          <p className='sideBar-stat-number'>46555</p>
        </div>
      </div>
      <div className='sideBar-bottom'>
        <p>Recent</p>
        {recentItem("Reactjs ")}
        {recentItem("Next js")}
        {recentItem("Redux Toolkit")}
        {recentItem("Webpack")}
        {recentItem("Scss")}
        {recentItem("Tailwind css")}
      </div>
    </div>
  )
}

export default SideBar
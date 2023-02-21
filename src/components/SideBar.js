import { Avatar } from '@mui/material';
import React  from 'react';
import {useSelector} from"react-redux";
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import "./SideBar.css"

function SideBar() {
  const {user}=useSelector((state)=>state.user)
  
  const navigate=useNavigate()
  console.log("ffffff",user?.photoURL);

  return (
    <div className='SideBar'>
      <div className="SideBar-top">
        <img className="banner"src='https://www.avidcareerist.com/wp-content/uploads/2015/09/Dont-Use-This-LinkedIn-Banner-1.png'/>
        <Avatar onClick={()=>navigate("/overview")} className="sideBar-avatar" src={user?.photoURL}></Avatar>
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
        <h4>Groups</h4>
        <div className="eventIcon">
        <h4>Events</h4>
        <AddIcon className="addIcon"/>
        </div>
        <h4>Followed Hashtags</h4>
        <hr/>
        <p>Discover more</p>
      </div>
    </div>
  )
}

export default SideBar
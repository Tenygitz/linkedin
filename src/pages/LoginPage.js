import React from 'react';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
  const navigate=useNavigate()
  return (
    <div className='LoginPage'>
        <img onClick={()=>navigate("/")}src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="logo"/>
        <div className='nav-icon-middle'>
        <div className='nav-icon'>
          <ExploreIcon className="nav-icons"/>
            <h1>Discover</h1>
        </div>
        <div className='nav-icon'>
          <PeopleAltIcon className="nav-icons"/>
            <h1>People</h1>
        </div>
        <div className='nav-icon'>
          <CastForEducationIcon className="nav-icons"/>
            <h1>Learning</h1>
        </div>
        <div className='nav-icon'>
          <BusinessCenterIcon className="nav-icons"/>
            <h1>Jobs</h1>
        </div>
        </div>
        <div className='nav-icon-right'>
            <h1>Join Now</h1>
            <button onClick={()=>navigate("/")}className="signINBtn">Sign In</button>
        </div>
    </div>
  )
}

export default LoginPage
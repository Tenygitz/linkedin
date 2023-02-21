import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import OverViewPost from './OverViewPost';
import "./ProfileOverView.css";

function ProfileOverView() {
  return (
    <div className='ProfileOverView'>
         <div className='ProfileOverView-top'>
            <img className="overview-img"src="https://media.licdn.com/dms/image/D563DAQGy_NE7GW_OlQ/image-scale_191_1128/0/1668261286707?e=1677067200&v=beta&t=YluJ-elGD8X6DrLh9ON6L0Cs32J0z2KvNh6AhzBkQ9Q" alt="banner-photo"/>
            <div className="ProfileOverView-info">
              <img className="overview-logo" src="https://media.licdn.com/dms/image/C4D0BAQHLBCHNE6MdhQ/company-logo_200_200/0/1622469165950?e=1682553600&v=beta&t=Vds13D4pD9DaNN--LC5GA-elm2MdsmCBIVsguzYV_yE" />
              <h1>TGH Tech</h1>
              <h3>Transformative power to Startups and Enterprises.</h3>
              <p>Software Development Kochi, Kerala 2,260 followers</p>
              <h3 className='Allemployee'>See all 33 employees on LinkedIn</h3>
              <div className='Overview-btn'>
                <div className='overview-btn-container'>
              <DoneIcon/>
              <button>Following</button>
              </div>
              <div className='overview-btn-container'>
              <ScreenShareIcon/> <button>Visit  Websites</button>
              </div>
              <div className='overview-btn-container'>
                <button>More</button>
                </div>
              </div>
            
              <hr/>
            </div>
            <div className='nav-link'>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Post</h3>
                <h3>Jobs</h3>
                <h3>People</h3>
                <h3>Videos</h3>
            </div>

         </div>
         <div className="ProfileOverView-about">
         <div className="ProfileOverView-aboutINfo">
          <h2>About</h2>
          <p>We enable small and medium enterprises to scale up by helping them leverage the advent of technology. We take an innovative, agile, and technology-agnostic approach to assist SMEs in gaining long-term market advantages through software solutions that resonate with their vision and priorities while also providing them with a competitive advantage.</p>
           </div> <hr/>
            <h3>See all Details</h3>
         </div>
         <div className='ProfileOverView-post'>
         <div className='ProfileOverView-postContainer'>
          <h2>Page Post</h2>
            <div className='arrowIcon'>
           <ArrowCircleLeftIcon/>
           <ArrowCircleRightIcon/>
           </div> </div>
           <div className='ProfileOverView-individualContainer'>
             <OverViewPost/>
             <OverViewPost/>
           </div>
        
           <hr/>
    <h3 className='seeallpost'>See All posts</h3>

         </div>
    
       </div>
  )
}

export default ProfileOverView
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MessageIcon from '@mui/icons-material/Message';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import SendIcon from '@mui/icons-material/Send';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./OverViewPost.css";


function OverViewPost() {
  return (
    <div className='ProfileOverView-individualContainers'>
    <div className='OverViewPost-container'>
         <div className='OverViewPostInner'>
    <div className='OverViewPost'>
         <img src="https://media.licdn.com/dms/image/C4D0BAQHLBCHNE6MdhQ/company-logo_200_200/0/1622469165950?e=1682553600&v=beta&t=Vds13D4pD9DaNN--LC5GA-elm2MdsmCBIVsguzYV_yE" alt="logo"/>
         <div className='OverViewPost-info'>
         <h3>TGH Tech</h3>
         <p>2,265 followers</p>
         <div className='globeIcon '>
         <p>1d.</p><PublicIcon style={{fontSize:"16px"}}/>
         </div>
         </div></div>
         <MoreHorizIcon style={{marginRight:"20px"}}/>
    </div>
    <p style={{padding:"10px"}}>With a little help from Rahul R S, our creative lead, we’ve curated a list of websites that woul</p>
    <img src="https://media.licdn.com/dms/image/D5612AQEgdD0c0pGOyA/article-cover_image-shrink_600_2000/0/1673952537323?e=1681948800&v=beta&t=PjQ_VcPmINqmOgIfFwCD_HAr96kSKMURQvFUUf-Ohug" />
    <div className='comment-likes'>
    <ThumbUpIcon className='LikesButton'/><p>17.1 comment</p>
    </div>
    <hr/>
    <div className='OverViewPost-buttons'>
    <div className='OverViewPost-buttonIndiviual'>
    <ThumbUpIcon/>
    <h3>Like</h3>
    </div>
    <div className='OverViewPost-buttonIndiviual'>
    <MessageIcon/>
    <h3>Comments</h3>
    </div>
    <div className='OverViewPost-buttonIndiviual'>
    <ScreenShareIcon/>
    <h3>Reposts</h3>
    </div>
     <div className='OverViewPost-buttonIndiviual'>
    <SendIcon/>
    <h3>Send</h3>
    </div>
         
    </div>
    
    </div>
    
    </div>
  )
}

export default OverViewPost
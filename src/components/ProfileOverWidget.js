import React from 'react';
import "./ProfileOverWidget.css";
import AddIcon from '@mui/icons-material/Add';

function ProfileOverWidget() {
  return (
    <div className='ProfileOverWidget'>
         <div className='ProfileOverWidget-head'>
         <div className='ProfileOverWidget-img'>
      <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />
      </div>
      <div className='ProfileOverWidget-aside'>
        <h1>Pages people also viewed</h1>
        <div className='ProfileOverWidget-info'>
          <img src="https://media.licdn.com/dms/image/C560BAQEXfQ4AnSDfbA/company-logo_200_200/0/1640275053047?e=1682553600&v=beta&t=s3AANkhlbfuFnlB5T07No3qqd3C1tPwQ2yYx4Douq3s" className='ProfileOverWidget-logo' alt="logo"/>
          <div className='ProfileOverWidget-infos'>
            <h3>YE Stack</h3>
            <p>Professional Training and Coaching</p>
            <p className='Folows'>1,511 followers</p>
            <div className='Follow-btn'>
            <AddIcon/>
            <buton>Follows</buton>
            </div>
          </div>
        
        </div>
        <hr/>
        <div className='ProfileOverWidget-info'>
          <img src="https://media.licdn.com/dms/image/C560BAQGuN7h_oBOS3g/company-logo_200_200/0/1641453493626?e=1682553600&v=beta&t=3aZu5uaSYgvQJiazEYVf_Yegv9foPc3fDX-J62qfnBI" className='ProfileOverWidget-logo' alt="logo"/>
          <div className='ProfileOverWidget-infos'>
            <h3>Boring Bots</h3>
            <p>Software Development</p>
            <p  className='Folows'>139 followers</p>
            <div className='Follow-btn'>
            <AddIcon/>
            <buton>Follows</buton>
            </div>
            
          </div></div>
          <hr/>
          <div className='ProfileOverWidget-info'>
          <img src="https://media.licdn.com/dms/image/C560BAQE6vM1y10e4zg/company-logo_200_200/0/1660647720492?e=1682553600&v=beta&t=gL0bydhCQlz16hHkGC1IFjw77ZIrKy5mKRwKQ6iG8zY" className='ProfileOverWidget-logo' alt="logo"/>
          <div className='ProfileOverWidget-infos'>
            <h3>CineTokens</h3>
            <p>Entertainment Providers</p>
            <p  className='Folows'>640 followers</p>
            <div className='Follow-btn'>
            <AddIcon/>
            <buton>Follows</buton>
            </div>
          </div></div>
          <hr/>
          <h2>See All Similar pages</h2>
      </div>
     </div>
     
    </div>
  )
}

export default ProfileOverWidget
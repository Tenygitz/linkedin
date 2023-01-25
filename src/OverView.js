import React from 'react';
import ProfileOverView from './components/ProfileOverView';
import ProfileOverWidget from './components/ProfileOverWidget';
import Header from './components/Header'
import "./OverView.css"

function OverView() {
  return (
    <div className='OverView'>
         <div>
      <Header/>
      <div className="OverView-body">
      <ProfileOverView/>
      <ProfileOverWidget/>
      </div>

    </div>
    </div>
  )
}

export default OverView
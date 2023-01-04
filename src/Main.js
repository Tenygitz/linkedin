import React from 'react'
import Feed from './components/Feed'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Widget from './components/Widget';
import "./Main.css"

function Main() {
  return (
    <div>
      <Header/>
      <div className="Main-body">
      <SideBar/>
      <Feed/>
      <Widget/>
    </div>
    </div>
  )
}

export default Main
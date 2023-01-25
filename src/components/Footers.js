import React from 'react';
import "./Footers.css"
function Footers() {
  return (
    <div className='Footers'>
    <span>About</span> <span>Accebility</span> <span>Help Center</span><br/>
    <span>Privacy & Terms</span> <span>Ad Choices</span><br/>
    <span>Advertising</span> <span>Business Services </span><br/>
    <span>Get the LinkedIn app</span> 
    <div className='Footers-end'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"/>
      <p>LinkedIn Corporation © 2023</p>
    </div>
   </div>
  )
}

export default Footers
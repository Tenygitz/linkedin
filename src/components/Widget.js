import React from 'react';
import "./Widget.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widget() {
  const newsArticle=(heading,subtitle)=>(
    <div className='widget-article'>
      <div className='widget-article-left'>
        <FiberManualRecordIcon className="article-icon"/>
      </div>
      <div className="widget-article-right">
        <h3>{heading}</h3>
        <p>{subtitle}</p>
      
      </div>
        
    </div>
  )

  
  return (
    <div className='Widget'>
      <div className='widget-Header'>
        <h1>Linkedin News</h1>
        <InfoIcon className='widget-icon'/>
      </div>
     {newsArticle("10 big ideas that will shape you in 2023","top news. 34,555 readers")}
     {newsArticle("10 big ideas that will shape you in 2023","top news. 34,555 readers")}
     {newsArticle("10 big ideas that will shape you in 2023","top news. 34,555 readers")}
     {newsArticle("10 big ideas that will shape you in 2023","top news. 34,555 readers")}
     {newsArticle("10 big ideas that will shape you in 2023","top news. 34,555 readers")}
     <div className='Widget-img'>
      <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />
     </div>
     <div className='Footer'>
      <span>About</span> <span>Accebility</span> <span>Help Center</span><br/>
      <span>Privacy & Terms</span> <span>Ad Choices</span><br/>
      <span>Advertising</span> <span>Business Services </span><br/>
      <span>Get the LinkedIn app</span> 
      <div className='Footer-end'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"/>
        <p>LinkedIn Corporation © 2023</p>
      </div>
     </div>
    </div>
  )
}

export default Widget
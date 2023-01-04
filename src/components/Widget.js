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

    </div>
  )
}

export default Widget
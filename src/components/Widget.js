import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./Widget.css";
import Footers from './Footers';


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
        <div className='widget-Head'>
      <div className='widget-Header'>
        <h1>Linkedin News</h1>
        <InfoIcon className='widget-icon'/>
      </div>
      <div className='widget-body'>
          {newsArticle("10 big ideas that will shape you in 2023","top news. 34,555 readers")}
          {newsArticle("Metaverse to redefine consumer experience ?","top news. 34,555 readers")}
          {newsArticle("Top IT firms clock robust profits","top news. 34,555 readers")}
          {newsArticle("How to compile a resume?","top news. 34,555 readers")}
          {newsArticle("Hybrid work spikes cyber threats","top news. 34,555 readers")}
      </div></div>
     <div className='Widget-img'>
      <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />
      <Footers/>
     </div>
    
    </div>
  )
}

export default Widget
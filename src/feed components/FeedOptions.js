import React from 'react';
import "./FeedOptions.css"

function FeedOptions({Icon,title,color}) {
  return (
    <div className='FeedOptions'>
     {
     Icon && <Icon className="FeedOptions-Icon" style={{color:color}}/>
     }
     <p>{title}</p>
    </div>
  )
}

export default FeedOptions
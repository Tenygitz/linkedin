import React,{useState,useEffect} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Moment from 'react-moment';
import Footers from './Footers';
import "./Widget.css";


function Widget() {
  const [article,setArticle]=useState([])
  const API_KEY="56fcbc68625341f3849f174dc21e4a7b"
  const truncate=(string,n)=>
  string?.length>n? string.substr(0,n-1)+" ... ":string;
 
useEffect(() => {
  async function getAllNews(){
    const API_URL=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
    let response= await fetch(API_URL)
    let data=await response.json()
     console.log("api out",data.articles)
     setArticle(data.articles)
}
  getAllNews()
}, [])
  
  return (
    
    <div className='Widget'>
        <div className='widget-Head'>
      <div className='widget-Header'>
        <h1>Linkedin News</h1>
        <InfoIcon className='widget-icon'/>
      </div>
      { article.slice(0,6).map((item)=>(
      <div  key={item.url} className='widget-body'>
      <div  className='widget-article-left'>
      <FiberManualRecordIcon className="article-icon"/>
      <p>{truncate((item.title),30)}</p>
      </div>
      <div className="widget-article-right">
      <Moment date={item.publishedAt} style={{color:"grey"}}>       
      </Moment>
      </div> 
      </div>
      ))
      } 
      </div>
     <div className='Widget-img'>
      <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />
      <Footers/>
     </div>
    
    </div>
  )
}

export default Widget
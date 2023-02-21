import React from 'react';
import "./Loader.css";

function Loader() {
  return (
    <div className="container">
      <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
      <rect y="25" width="10" height="50" rx="4" ry="4" fill="#fff">
        <animate attributeName="x" values="10;100" dur="1.2s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
      </rect>
      <rect y="25" width="10" height="50" rx="4" ry="4" fill="#fff">
        <animate attributeName="x" values="10;100" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
       <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
      </rect>
      <rect y="25" width="10" height="50" rx="4" ry="4" fill="#fff">
        <animate attributeName="x" values="10;100" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
        <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
      </rect>
    </svg>
    <h1>Linkedin</h1>
  </div>
  )
}

export default Loader
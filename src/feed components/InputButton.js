import React from 'react';
import "./InputButton.css"

function InputButton({Icon,title}) {
  return (
    <div className='InputButton'>
      <Icon style={{color:"grey"}} />
      <p>{title}</p>
    </div>
  )
}

export default InputButton
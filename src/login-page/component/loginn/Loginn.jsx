import React from 'react'
import './loginn.css'
import {BsEye} from 'react-icons/bs' 

const loginn = (props) => {
  return (
    <loginn>
      <div className="login">
        <div className='input email'>
          <input type="text" placeholder= {props.mess1} autoComplete ="off"/>
        </div>
        <div className='input password'>
          <input type="text" className='field' placeholder= {props.mess2} autoComplete ="off"/>
          <button className='btn'><BsEye color='white' /></button>
        </div>
      </div>
    </loginn>
  )
}

export default loginn
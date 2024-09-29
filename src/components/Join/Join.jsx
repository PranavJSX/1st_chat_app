import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.css';


export const Join = () => {

  const [name,setName] = useState('');
  const [room,setRoom] = useState('');

  return (
    <><div className='Outer_div'>
    <div className='signup_div'>
      <input className='input_boxes' placeholder='NAME' type='text' onChange={(e)=>{setName(e.target.value)}}></input>
      <input className='input_boxes' placeholder='ROOM' type='text' onChange={(e)=>{setRoom(e.target.value)}}></input>
      <div className='buttons_holder'>
        <Link onClick={(e)=>(!name || !room ? e.preventDefault():null)} to={`/chat?name=${name}&room=${room}`}><button id='login_button' type='submit'>LOGIN</button></Link>
        <button>SIGN UP</button>
      </div>
    </div>
    <div className='graphics_div'>
       
    <div className='glutalk'>Glutalk</div>
    </div>
    </div>
    </>
  )
  //   <div className='joinOuterContainer'>
  //  <div className='joinInnerContainer'>
  //     <h1 className='heading'>Join</h1>
  //     <div><input placeholder='Name' className='joinInput' type='text' onChange={(e)=>setName(e.target.value)}></input></div>
  //     <div><input placeholder='Room' className='joinInput' type='text' onChange={(e)=>setRoom(e.target.value)}></input></div>
  //     <Link onClick={(e)=>(!name || !room ? e.preventDefault():null)} to={`/chat?name=${name}&room=${room}`}><button className='button' type='submit'>Sign in</button></Link>
  //   </div>
  //   </div>
  
}

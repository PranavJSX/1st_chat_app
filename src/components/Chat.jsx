import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';
import { useLocation } from 'react-router';


let socket;

export const Chat = () => {

  const [room,setRoom] = useState('');
  const [name,setName] = useState('');
  const ENDPOINT = 'localhost:5000'

  const location = useLocation();
   useEffect(()=>{
    const {name,room} = queryString.parse(location.search);

    socket = io(ENDPOINT,{transports:['websocket','polling','flashsocket']})
    setName(name);
    setRoom(room);

    socket.emit('join',{name,room},()=>{
    });


    return ()=>{
      socket.disconnect();
      socket.off();
    }
   },[ENDPOINT,location.search])

  return (
    <div>Chat
      <h1>WELCOME </h1>
    </div>
  )
}

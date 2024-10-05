import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io, { Socket } from 'socket.io-client';
import { useLocation } from 'react-router';
import { InfoBar } from './InfoBar';
import './../Chat/Chat.css';
import { Input } from './Input';
import ScrollToBottom from 'react-scroll-to-bottom';
import {Message} from './Message';


let socket;

export const Chat = () => {

  const [room,setRoom] = useState('');
  const [name,setName] = useState('');
  const [message,setMessage] = useState([]);
  const [messages,setMessages] = useState([]);

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
   },[ENDPOINT,location.search]);

   useEffect(()=>{
    socket.on('message' , (message)=>{
      setMessages([...messages,message])
    })
   },[messages]);


   const message_sent = true;


   //function for sending message
   const sendMessage = (e) =>{
    e.preventDefault();
    if(message){
      socket.emit('sendMessage',message,()=>{setMessage('')});
    }
   }



   console.log(message,messages);



  return (
    <div className='outerContainer'>
      <div className='left_container_for_info'>
      <div className='first_container'>
        <h1>1st container</h1>
      </div>
      <div className='third_container'>
        <h1>3st container</h1>
      </div>
      </div>
      <div className='right_container_for_chat'>
      <div className='second_container'>
        <InfoBar room={room}/>
      </div>
      <div className='fourth_container'>
        <div className='messages_div'>
          {messages.map(Element=><>
          {console.log(Element)}
          <Message message_sent={message_sent} message={Element} name={name}/>
          </>)}
        </div>
        <div><Input message={message} setMessage = {setMessage} sendMessage={sendMessage}/></div>
      </div></div>
    </div>
  )
}

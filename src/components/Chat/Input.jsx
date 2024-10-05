import React from "react";
import './../Chat/Input.css';

export const Input = ({message,setMessage,sendMessage}) =>{
    return (<form className="form">
        <input className="input" type="text" placeholder="type a message..."
        value={message} onChange={(e)=>{setMessage(e.target.value)}}
        onKeyPressCapture={e=>e.key==="Enter" ? sendMessage(e):null}/>
        <button className="sendButton" onClick={e=>sendMessage(e)}>SEND</button>
    </form>
    )
}
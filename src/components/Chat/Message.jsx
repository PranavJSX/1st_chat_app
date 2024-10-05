import React from 'react'
import '../Chat/Message.css'

export const Message = ({message:{user,text},name,message_sent}) => {

    let isSentByCurrentUser = false ;
    const trimmedName = name.trim().toLowerCase();

    if(user===trimmedName){
        isSentByCurrentUser = true;
    }


    
    if(isSentByCurrentUser){
        return(
        <div className='messageContainer justifyStart'>
            <p className='sentText pr-10'>{trimmedName}</p>
            <div className='messageBox backgroundBlue'></div>
            <p className='messageText'>{text}</p>
        </div>)
    }
    else if(message_sent){ return( <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundLight'>
        <p className='messageText'>{text}</p>
        {/* <p className='sentText pl-10'>{trimmedName}</p> */}
        </div>
    </div>)
    }
// }
}

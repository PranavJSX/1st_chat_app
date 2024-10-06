import React, { useState } from 'react'
import '../Chat/Message.css'
import reactEmoji from 'react-emoji';

export const Message = ({message:{user,text},name}) => {
    // const [welcomeMessage,setwelcomeMessage] = useState(0)
    let isSentByCurrentUser = false ;
    const trimmedName = name.trim().toLowerCase();

    if(user===trimmedName){
        isSentByCurrentUser = true;
    }


    
    if(user==='admin'){
        return(
            
        <div className='messageContainer1'>
            {/* <p className='sentText pr-10'>{trimmedName}</p> */}
            <div className='messageBox backgroundBlue'></div>
            <p className='messageText'>{text}</p>
            {/* {setwelcomeMessage(1)}; */}
        </div>)
    }
    else{ return( <div className='messageContainer2'>{console.log('in the else block')}
        <div className='messageBox backgroundLight'>
        <p className='sentText pl-10'>{user}:</p>
        <p className='messageText'>{reactEmoji.emojify (text)}</p>
        </div>
    </div>)
    }
// }
}

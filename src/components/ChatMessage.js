import React from 'react';

import "./ChatMessage.css";

function ChatMessage(props) {
    console.log("chat+MessageProps", props);
    if (props.messageType === 'sent') {
        return( 
        <div>
            <p>{props.body}</p>
        </div>)
    } else if (props.messageType === 'received') {
        return(
        <div>
            <img src={props.user.avatar}/>
            <p>{props.user.username}</p>
            <p>{props.body}</p>
        </div>)
    }
}


export default ChatMessage;

//   function ChatMessage(props) {
//     console.log("chat+MessageProps", props);
//     return <div>
//         <img src={props.singleMessage.user.avatar}/>
//         <p>{props.singleMessage.user.username}</p>
//         <p>{props.singleMessage.body}</p>
//         </div>

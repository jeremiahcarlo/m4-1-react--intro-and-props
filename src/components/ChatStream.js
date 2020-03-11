import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage'; 

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  return (
    <section className="chat-stream">
    {props.messages.map(message => {
      //console.log("+++++++++++++++", message.user.username);
      //console.log("+++++++++++++++", props.currentUser.username);
      let messageType;
      if (props.currentUser && message.user.username === props.currentUser.username) {
        messageType = 'sent';
      } else {
        messageType = 'received';
      }
      
      return (
        <ChatMessage 
          user={message.user}
          body={message.body}
          messageType={messageType}
          />
      );
    })}
    </section>
  );
}

export default ChatStream;


// function ChatStream(props) {
//   console.log("CHAT STREAM PROPS", props);
//   return <section className="chat-stream">
//     {props.messages.map(message => {
//       return <ChatMessage singleMessage={message}/>
//     })}
//     </section>;
// }

import React from 'react';

import  styled from 'styled-components';

function ChatMessage({Message,Timestamp,user,userImg})
 {

  return (
   <ChatMessageContainer>
      <img src={userImg} alt="not found"/>

      <ChatMessageInfo>
        <h3>{user}
        <span>{new Date(Timestamp?.toDate()).toUTCString()}</span>
        </h3>

        <p>{Message}</p>
      </ChatMessageInfo>

    </ChatMessageContainer>
  )
}

export default ChatMessage;


const ChatMessageContainer=styled.div`
margin-top:15px;
margin-left:100px;
display:flex;
flex:0.8;
>img{
  height:60px;
  margin-right:20px;
  border-radius:5px;
}

`;
const ChatMessageInfo=styled.div`
>h3{
>span{
  margin-left:15px;
  font-size:13px;
  color:gray;
}
}
>p{
  margin-top:10px;
  font-size:15px;
  font-family:sans-serif;
}
`;


